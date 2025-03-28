
import React from 'react';
import { format } from 'date-fns';
import { CalendarDays, Clock, MapPin, User, Users, Share2, Bookmark, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryBadge from '@/components/ui/CategoryBadge';
import DepartmentBadge from '@/components/ui/DepartmentBadge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { Event } from '@/types';

interface EventDetailProps {
  event: Event;
}

const EventDetail = ({ event }: EventDetailProps) => {
  const handleRSVP = () => {
    // In a real app, this would call a backend API to handle RSVP
    toast({
      title: "RSVP Successful!",
      description: `You have successfully RSVP'd to ${event.title}`,
    });
  };
  
  const handleBookmark = () => {
    // In a real app, this would update the user's bookmarks
    toast({
      title: "Event Bookmarked",
      description: "This event has been added to your bookmarks",
    });
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog or copy a link
    toast({
      title: "Share Link Copied",
      description: "Event link has been copied to clipboard",
    });
  };
  
  const handleAddToCalendar = () => {
    // In a real app, this would generate an .ics file or link to Google Calendar
    toast({
      title: "Added to Calendar",
      description: "Event has been added to your calendar",
    });
  };

  return (
    <div className="bg-card animate-fade-in">
      <div className="relative">
        {event.image ? (
          <div className="h-64 md:h-96 w-full">
            <img 
              src={event.image} 
              alt={event.title} 
              className="h-full w-full object-cover"
            />
            {event.isFeatured && (
              <div className="absolute top-4 right-4 bg-campus-gold text-campus-blue text-sm font-bold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
        ) : (
          <div className="h-40 bg-primary/10 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-primary">{event.title}</h1>
          </div>
        )}
      </div>
      
      <div className="campus-container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <CategoryBadge category={event.category} />
                <DepartmentBadge department={event.department} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CalendarDays className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Date</div>
                    <div>{format(event.startDate, 'EEEE, MMMM d, yyyy')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Time</div>
                    <div>{format(event.startDate, 'h:mm a')} - {format(event.endDate, 'h:mm a')}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div>{event.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <User className="mr-3 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Organizer</div>
                    <div>{event.organizer}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-xl font-semibold mb-4">About this event</h2>
              <p className="whitespace-pre-line text-muted-foreground">
                {event.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Attendees ({event.attendees.length})</h3>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>{event.attendees.length} people are attending this event</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-72 space-y-6">
            <div className="bg-card border p-6 rounded-lg space-y-4 sticky top-20">
              <h3 className="font-semibold">Event Actions</h3>
              
              <Button className="w-full" onClick={handleRSVP}>
                RSVP to Event
              </Button>
              
              <Button variant="outline" className="w-full" onClick={handleBookmark}>
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmark
              </Button>
              
              <Button variant="outline" className="w-full" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share Event
              </Button>
              
              <Button variant="outline" className="w-full" onClick={handleAddToCalendar}>
                <Calendar className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
              
              <Separator />
              
              <div className="text-sm">
                <div className="text-muted-foreground mb-1">Event ID</div>
                <div className="font-mono text-xs">{event.id}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
