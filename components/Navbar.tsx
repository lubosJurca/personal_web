'use client';

import MobileNavigation from './MobileNavigation';
import LanguageChanger from './LanguageChanger';
import DesktoNavigation from './DesktoNavigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: 'transparent' }}
      animate={{
        backgroundColor: scrolled ? '#194146' : 'transparent',
      }}
      transition={{ duration: 0.3 }}
      className='sticky top-0 z-50 rounded-lg  transition-all duration-300 '
    >
      <motion.nav className='flex p-4  transition-colors duration-300 sm:p-2 items-center justify-between '>
        <LanguageChanger />
        <MobileNavigation />
        <DesktoNavigation />
      </motion.nav>
    </motion.header>
  );
};
export default Navbar;
