
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Calendar from '@/components/events/Calendar';
import { mockEvents } from '@/data/mockData';

const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="campus-container pt-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="unisync-page-title">Event Calendar</h1>
            <div className="bg-unisync-gold/10 text-unisync-amber px-4 py-2 rounded-full border border-unisync-amber/20">
              <span className="font-medium">UniSync</span>
            </div>
          </div>
          <div className="glass-panel p-6 border-unisync-purple/20">
            <Calendar events={mockEvents} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CalendarPage;
