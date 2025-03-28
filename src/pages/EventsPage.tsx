
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
          <h1 className="unisync-page-title mb-6">All Events</h1>
          <div className="glass-panel p-6">
            <EventsList events={mockEvents} title="Browse All Events" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;
