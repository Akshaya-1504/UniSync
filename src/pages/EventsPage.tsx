
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventsList from '@/components/events/EventsList';
import { mockEvents } from '@/data/mockData';

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="campus-container pt-8">
          <EventsList events={mockEvents} title="All Events" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;
