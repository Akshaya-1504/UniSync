
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, Megaphone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventsList from '@/components/events/EventsList';
import AnnouncementsList from '@/components/announcements/AnnouncementsList';
import { mockEvents, mockAnnouncements } from '@/data/mockData';

const Index = () => {
  const navigate = useNavigate();
  
  // Filter for featured events
  const featuredEvents = mockEvents.filter(event => event.isFeatured);
  
  // Filter for upcoming events
  const upcomingEvents = mockEvents
    .filter(event => new Date(event.startDate) > new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 6);
  
  // Filter for priority announcements
  const priorityAnnouncements = mockAnnouncements
    .filter(announcement => announcement.isPriority)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-campus-blue to-campus-lightBlue text-white py-16">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Campus Events & Announcements Portal</h1>
              <p className="text-xl text-white/80">
                Your central hub for all university activities, events, and important announcements
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-campus-gold text-campus-blue hover:bg-campus-gold/90"
                  onClick={() => navigate('/calendar')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Calendar
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  onClick={() => navigate('/announcements')}
                >
                  <Megaphone className="mr-2 h-5 w-5" />
                  See Announcements
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Priority Announcements */}
        {priorityAnnouncements.length > 0 && (
          <section className="bg-campus-gold/10 border-y border-campus-gold/20 py-6">
            <div className="campus-container">
              <AnnouncementsList 
                announcements={priorityAnnouncements} 
                title="Important Announcements"
              />
              <div className="mt-4 text-right">
                <Button variant="link" onClick={() => navigate('/announcements')} className="text-campus-blue">
                  View All Announcements <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}
        
        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-12 bg-background">
            <div className="campus-container">
              <EventsList events={featuredEvents} title="Featured Events" />
              <div className="mt-6 text-right">
                <Button variant="link" onClick={() => navigate('/events')} className="text-primary">
                  View All Events <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        )}
        
        {/* Upcoming Events */}
        <section className="py-12 bg-muted/50">
          <div className="campus-container">
            <EventsList events={upcomingEvents} title="Upcoming Events" />
            <div className="mt-6 text-center">
              <Button onClick={() => navigate('/calendar')} className="mt-4">
                View Full Calendar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
