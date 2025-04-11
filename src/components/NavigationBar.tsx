'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'ראשי', href: '/' },
    { id: 'menu', label: 'תפריט', href: '/menu' },
    { id: 'about', label: 'אודות', href: '/about' },
    { id: 'gallery', label: 'גלריה', href: '/gallery' },
    { id: 'contact', label: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
      aria-label="ניווט ראשי"
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]">
                <Image
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="לוגו בית קפה גמא"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mr-3">
                <h1 className="text-xl font-bold text-[#FF6B6B]">בית קפה גמא</h1>
                <p className="text-xs text-gray-600">אופנה • קפה • סטייל</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            <ul className="flex items-center space-x-2 space-x-reverse">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-[#FF6B6B] transition-colors duration-300 text-right rounded-lg mx-1 hover:bg-white/80 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4 px-6 py-2 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.5)] hover:shadow-[3px_3px_6px_rgba(0,0,0,0.2),-1px_-1px_3px_rgba(255,255,255,0.7)] transition-all duration-300"
              aria-label="קבע תור עכשיו"
            >
              <FaCalendarAlt className="ml-2" />
              <span>קבע תור עכשיו</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-full bg-white/80 shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]"
            aria-expanded={isOpen}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isOpen ? (
              <FiX className="h-6 w-6 text-[#FF6B6B]" />
            ) : (
              <FiMenu className="h-6 w-6 text-[#FF6B6B]" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 pb-4">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="block py-2 px-4 text-right text-gray-700 hover:text-[#FF6B6B] hover:bg-white/80 rounded-lg transition-colors duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.5)]"
                    aria-label="קבע תור עכשיו"
                  >
                    <FaCalendarAlt className="ml-2" />
                    <span>קבע תור עכשיו</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;