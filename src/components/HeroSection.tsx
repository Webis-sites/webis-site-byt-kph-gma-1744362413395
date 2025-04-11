'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const CoffeeShopHero: React.FC<HeroProps> = ({
  title = 'בית קפה מוביל בישראל',
  description = 'חווית לקוח מושלמת בכל ביקור',
  ctaText = 'קבע תור עכשיו',
  onCtaClick = () => console.log('CTA clicked'),
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="בית קפה גמא - מידע ראשי"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="אווירת בית קפה גמא"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-end justify-center px-6 sm:px-12 lg:px-24">
        <div className="w-full max-w-2xl text-right">
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <FaCoffee className="ml-2 text-[#FF6B6B]" />
            <span className="text-lg font-medium text-white">בית קפה גמא</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-xl text-gray-200 md:text-2xl"
          >
            {description}
          </motion.p>

          {/* CTA Button - Neumorphic + Glassmorphism Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={onCtaClick}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FF6B6B]/90 to-[#FF6B6B]/80 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,107,107,0.3)] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 active:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]"
              aria-label={ctaText}
            >
              <span className="relative z-10 flex items-center justify-center">
                {ctaText}
                <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"></span>
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-gradient-to-tr from-[#FF6B6B]/20 to-[#FF6B6B]/10 backdrop-blur-md"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-20 top-20 h-16 w-16 rounded-full bg-gradient-to-bl from-white/20 to-white/5 backdrop-blur-md"
        ></motion.div>
        
        {/* Floating Coffee Cup Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-20 right-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="h-20 w-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-4 backdrop-blur-lg"
          >
            <FaCoffee className="h-full w-full text-[#FF6B6B]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm text-white/70">גלול למטה</span>
          <div className="h-6 w-1 rounded-full bg-white/30"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoffeeShopHero;