
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/90 to-accent/90 text-white mt-12 py-8">
      <div className="campus-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">UniSync Portal</h3>
            <p className="text-sm text-gray-200">
              Your central hub for all university activities, events, and announcements.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/calendar" className="hover:text-secondary transition-colors">Calendar</a></li>
              <li><a href="/announcements" className="hover:text-secondary transition-colors">Announcements</a></li>
              <li><a href="/departments" className="hover:text-secondary transition-colors">Departments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Campus Map</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} UniSync Campus Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
