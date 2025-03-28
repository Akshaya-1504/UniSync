
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, Megaphone, Users, Clock, MapPin } from 'lucide-react';
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
        <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">UniSync Portal</h1>
              <p className="text-xl text-white/90">
                Your central hub for all university activities, events, and important announcements
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
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
        
        {/* PromptX Featured Event */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none"></div>
          <div className="campus-container relative z-10">
            <div className="glass-panel p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-secondary font-medium text-sm">
                    Featured Event
                  </div>
                  <h2 className="text-3xl font-bold gradient-text">PromptX</h2>
                  <p className="text-muted-foreground">
                    We are thrilled to announce PromptX, a team-based AI competition designed to challenge your creativity, problem-solving skills, and technical expertise. This is an exciting opportunity to push the boundaries of AI and innovation by working on thematic AI-driven projects that foster collaboration and ingenuity.
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    <h3 className="font-semibold text-lg">Why Participate?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✅</span>
                        <span>Hands-on AI Experience – Work with cutting-edge AI tools and techniques.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✅</span>
                        <span>Enhance Problem-Solving & Teamwork – Develop critical thinking and collaboration skills.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✅</span>
                        <span>Compete for Exciting Rewards & Industry Recognition – Showcase your talent on a competitive stage.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-primary" />
                      <span>28th March 2025</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-primary" />
                      <span>Online</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-primary" />
                      <span>4 PM onwards</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-primary" />
                      <span>Teams of 2-4</span>
                    </div>
                  </div>
                  
                  <Button className="mt-4">
                    Register for PromptX
                  </Button>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-xl h-full min-h-[280px] bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl font-bold gradient-text mb-4">PromptX</div>
                    <p className="text-lg">AI Innovation Challenge</p>
                    <div className="mt-6 text-sm font-medium">
                      <div className="flex justify-center items-center gap-2 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>28 March 2025</span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Priority Announcements */}
        {priorityAnnouncements.length > 0 && (
          <section className="bg-accent/5 border-y border-accent/10 py-6">
            <div className="campus-container">
              <AnnouncementsList 
                announcements={priorityAnnouncements} 
                title="Important Announcements"
              />
              <div className="mt-4 text-right">
                <Button variant="link" onClick={() => navigate('/announcements')} className="text-primary">
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
        <section className="py-12 bg-primary/5">
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
