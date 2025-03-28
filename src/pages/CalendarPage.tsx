
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
          <Calendar events={mockEvents} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CalendarPage;
