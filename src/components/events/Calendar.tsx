
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Event } from '@/types';
import { useNavigate } from 'react-router-dom';

interface CalendarProps {
  events: Event[];
}

const Calendar = ({ events }: CalendarProps) => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Function to check if a day has events
  const hasEvents = (day: Date) => {
    return events.some(event => {
      const eventDate = new Date(event.startDate);
      return isSameDay(eventDate, day);
    });
  };

  // Function to get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      return isSameDay(eventDate, day);
    });
  };

  // Function to handle day click
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Event Calendar</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="p-4 flex-grow">
          <div className="text-xl font-medium text-center mb-4">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array(monthStart.getDay())
              .fill(null)
              .map((_, i) => (
                <div key={`empty-start-${i}`} className="h-12" />
              ))}
            {days.map(day => {
              const dayHasEvents = hasEvents(day);
              return (
                <div
                  key={day.toString()}
                  className={cn(
                    "h-12 calendar-day flex items-center justify-center",
                    dayHasEvents && "has-events",
                    selectedDate && isSameDay(day, selectedDate) && "bg-primary text-primary-foreground",
                    !isSameMonth(day, currentMonth) && "text-muted-foreground opacity-50"
                  )}
                  onClick={() => handleDayClick(day)}
                >
                  <span>{format(day, 'd')}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-4 lg:w-96">
          {selectedDate ? (
            <div>
              <h3 className="text-lg font-medium mb-3">
                Events on {format(selectedDate, 'MMMM d, yyyy')}
              </h3>
              <div className="space-y-3">
                {getEventsForDay(selectedDate).length > 0 ? (
                  getEventsForDay(selectedDate).map(event => (
                    <div 
                      key={event.id}
                      className="p-3 border rounded-md hover:bg-accent/10 cursor-pointer"
                      onClick={() => navigate(`/event/${event.id}`)}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <div className="flex-1">{format(new Date(event.startDate), 'h:mm a')}</div>
                        <div>{event.location}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground text-center py-4">
                    No events scheduled for this day.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              Select a date to view events
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
