
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnnouncementsList from '@/components/announcements/AnnouncementsList';
import { mockAnnouncements } from '@/data/mockData';

const AnnouncementsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="campus-container pt-8">
          <AnnouncementsList 
            announcements={mockAnnouncements} 
            title="All Announcements" 
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AnnouncementsPage;
