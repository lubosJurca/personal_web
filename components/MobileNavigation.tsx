'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { LINKS } from '@/lib/links';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Animace pro celé menu
  const menuVariants = {
    hidden: {
      x: '100%', // Začíná mimo obrazovku
    },
    visible: {
      x: 0, // Zobrazí se přes celou obrazovku
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      x: '100%', // Zpět do pravé strany při zavření
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  // Animace pro jednotlivé linky
  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,

      transition: {
        delay: i * 0.15, // Každý odkaz má zpoždění
        duration: 0.3,
      },
    }),
  };

  return (
    <div>
      <Button
        className='bg-transparent'
        onClick={toggleMenu}
        aria-label='Toggle menu'
        type='button'
        variant='link'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`h-8 w-8 z-50 text-primaryLight transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          {isOpen ? (
            // X icon
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
              className='transition-transform duration-300'
            />
          ) : (
            // Hamburger menu icon
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16m-7 6h7'
              className='transition-transform duration-300'
            />
          )}
        </svg>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='fixed   inset-0 bg-gradient-to-l  from-[#203a3d] to-[#0d0e0e] z-40 flex flex-col justify-center items-center gap-8'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={menuVariants}
          >
            {LINKS.map((link) => (
              <motion.li
                key={link.id}
                custom={link.id}
                variants={linkVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                onClick={toggleMenu}
                className='text-4xl font-bold text-primaryLight hover:text-teal-800 transition-all'
              >
                <Link href={link.href}>{link.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MobileNavigation;
