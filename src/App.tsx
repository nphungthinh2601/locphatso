'use client';

import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import DownloadApp from './components/DownloadApp';
import Testimonials from './components/Testimonials';
import DevelopmentTeam from './components/DevelopmentTeam';
import DataDeletion from './components/DataDeletion';
import PolicyTerms from './components/PolicyTerms';
import TermsOfUse from './components/TermsOfUse';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Check for user preference
    const isDark =
      localStorage.getItem('darkMode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
    // Prevent scrolling when terms modal is open
    if (!showTerms) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <Router>
      <div className='min-h-screen bg-orange-50 dark:bg-[#0a0a0a] transition-colors duration-300'>
        <div className='fixed top-4 right-4 z-50'>
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110'
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <Sun className='h-5 w-5 text-[#ff3333]' />
            ) : (
              <Moon className='h-5 w-5 text-gray-700' />
            )}
          </button>
        </div>

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Features />
                <Screenshots />
                <ScrollReveal>
                  <Testimonials />
                </ScrollReveal>
                <ScrollReveal>
                  <DownloadApp />
                </ScrollReveal>
                <ScrollReveal>
                  <DevelopmentTeam />
                </ScrollReveal>
                <ScrollReveal>
                  <DataDeletion />
                </ScrollReveal>
                <ScrollReveal>
                  <PolicyTerms />
                </ScrollReveal>
                <ScrollReveal>
                  <Footer />
                </ScrollReveal>
                {showTerms && <TermsOfUse onClose={toggleTerms} />}
              </>
            }
          />
          <Route path='/app' element={<Navigate to='/app.html' replace />} />
          <Route
            path='/policy'
            element={
              <>
                <PolicyTerms />
                <ScrollReveal>
                  <Footer />
                </ScrollReveal>
              </>
            }
          />
          <Route
            path='/data-deletion'
            element={
              <>
                <DataDeletion />
                <ScrollReveal>
                  <Footer />
                </ScrollReveal>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
