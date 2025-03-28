
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
          <h1 className="unisync-page-title mb-6">All Announcements</h1>
          <div className="glass-panel p-6">
            <AnnouncementsList 
              announcements={mockAnnouncements} 
              title="Browse All Announcements" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AnnouncementsPage;
