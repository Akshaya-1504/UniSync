
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Calendar from '@/components/events/Calendar';
import { mockEvents } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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
          
          <div className="mb-6 p-4 bg-unisync-purple/10 rounded-lg border border-unisync-purple/20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-unisync-purple dark:text-unisync-lightPurple">PromptX Registration Now Open!</h2>
                <p className="text-sm text-muted-foreground">Join our AI Innovation Challenge - March 28, 2025</p>
              </div>
              <Button 
                className="bg-unisync-gold hover:bg-unisync-amber text-foreground"
                onClick={() => window.open('https://forms.gle/Pw1JkGWHrAWV32xk6', '_blank')}
              >
                Register Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
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
