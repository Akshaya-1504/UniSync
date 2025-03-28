
import React, { useState } from 'react';
import EventCard from './EventCard';
import { Event, EventCategory, Department } from '@/types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Calendar, Grid3X3, ListFilter, Search } from 'lucide-react';

interface EventsListProps {
  events: Event[];
  title?: string;
}

const EventsList = ({ events, title = "Events" }: EventsListProps) => {
  const navigate = useNavigate();
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | 'all'>('all');
  const [selectedDate, setSelectedDate] = useState<'all' | 'today' | 'this-week' | 'upcoming'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleViewDetails = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  // Function to filter events based on search query and filters
  const filterEvents = () => {
    let result = [...events];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query) || 
        event.location.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(event => event.category === selectedCategory);
    }
    
    // Filter by department
    if (selectedDepartment !== 'all') {
      result = result.filter(event => event.department === selectedDepartment);
    }
    
    // Filter by date
    if (selectedDate !== 'all') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(today.getDate() + 7);
      
      if (selectedDate === 'today') {
        result = result.filter(event => {
          const eventDate = new Date(event.startDate);
          eventDate.setHours(0, 0, 0, 0);
          return eventDate.getTime() === today.getTime();
        });
      } else if (selectedDate === 'this-week') {
        result = result.filter(event => {
          const eventDate = new Date(event.startDate);
          return eventDate >= today && eventDate < oneWeekFromNow;
        });
      } else if (selectedDate === 'upcoming') {
        result = result.filter(event => new Date(event.startDate) >= today);
      }
    }
    
    return result;
  };

  // Apply filters when any filter changes
  React.useEffect(() => {
    setFilteredEvents(filterEvents());
  }, [searchQuery, selectedCategory, selectedDepartment, selectedDate, events]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'} 
            size="icon" 
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'outline'} 
            size="icon" 
            onClick={() => setViewMode('list')}
          >
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="bg-card border p-4 rounded-lg space-y-4">
        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value as EventCategory | 'all')}
            >
              <SelectTrigger className="w-[150px]">
                <ListFilter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="career">Career</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={selectedDepartment}
              onValueChange={(value) => setSelectedDepartment(value as Department | 'all')}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={selectedDate}
              onValueChange={(value) => setSelectedDate(value as 'all' | 'today' | 'this-week' | 'upcoming')}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events match your search criteria.</p>
          <Button variant="link" onClick={() => {
            setSearchQuery('');
            setSelectedCategory('all');
            setSelectedDepartment('all');
            setSelectedDate('all');
          }}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
