
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventDetail from '@/components/events/EventDetail';
import { mockEvents } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const event = mockEvents.find(event => event.id === id);
  
  if (!event) {
    return (
      <>
        <Navbar />
        <main>
          <div className="campus-container py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/events')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main>
        <div className="mb-12">
          <div className="bg-background p-4 border-b">
            <div className="campus-container">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate(-1)}
                className="mb-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </div>
          </div>
          <EventDetail event={event} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetailPage;
