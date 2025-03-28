
import React from 'react';
import { format } from 'date-fns';
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CategoryBadge from '@/components/ui/CategoryBadge';
import DepartmentBadge from '@/components/ui/DepartmentBadge';
import { toast } from '@/components/ui/use-toast';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
  onViewDetails: (eventId: string) => void;
}

const EventCard = ({ event, onViewDetails }: EventCardProps) => {
  const {
    id,
    title,
    startDate,
    endDate,
    location,
    category,
    department,
    organizer,
    attendees,
    image,
  } = event;
  
  const handleRSVP = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would call a backend API to handle RSVP
    toast({
      title: "RSVP Successful!",
      description: `You have successfully RSVP'd to ${title}`,
    });
  };
  
  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would update the user's bookmarks
    toast({
      title: "Event Bookmarked",
      description: "This event has been added to your bookmarks",
    });
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-shadow animate-fade-in overflow-hidden h-full flex flex-col"
      onClick={() => onViewDetails(id)}
    >
      {image && (
        <div className="relative h-48 w-full">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover"
          />
          {event.isFeatured && (
            <div className="absolute top-2 right-2 bg-campus-gold text-campus-blue text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          <CategoryBadge category={category} />
          <DepartmentBadge department={department} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{format(startDate, 'EEEE, MMMM d, yyyy')}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{format(startDate, 'h:mm a')} - {format(endDate, 'h:mm a')}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          <span>{attendees.length} attending</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="flex w-full gap-2">
          <Button onClick={handleRSVP} size="sm" className="flex-1">
            RSVP
          </Button>
          <Button onClick={handleBookmark} size="sm" variant="outline" className="flex-1">
            Bookmark
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
