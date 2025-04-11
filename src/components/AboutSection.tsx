'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCoffee, FaAward, FaUsers, FaRegSmile } from 'react-icons/fa';

interface AboutSectionProps {
  businessName?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  businessName = 'בית קפה גמא'
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      dir="rtl" 
      className="w-full py-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-4 text-right mx-auto"
              style={{ color: '#FF6B6B' }}
            >
              אודות {businessName}
            </h2>
            <div className="h-1 w-24 bg-[#FF6B6B] mx-auto rounded-full mb-6"></div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Side */}
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF6B6B] rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-sm bg-white/30 border border-white/50 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="בית קפה מעוצב עם אווירה נעימה"
                    className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 text-right order-1 md:order-2"
            >
              <div className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50">
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#FF6B6B' }}>
                  ניסיון של שנים רבות בתחום הבידור
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  אנחנו בית קפה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  בבית קפה גמא, אנו מאמינים שכל ביקור צריך להיות חוויה מיוחדת. הצוות המקצועי שלנו מחויב להעניק לכם את השירות הטוב ביותר ואת האווירה הנעימה ביותר.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full font-bold text-white bg-[#FF6B6B] shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8),inset_1px_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.8),inset_2px_2px_3px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  קרא עוד עלינו
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: <FaCoffee size={32} />, stat: '+5,000', text: 'כוסות קפה ביום' },
              { icon: <FaAward size={32} />, stat: '+15', text: 'שנות ניסיון' },
              { icon: <FaUsers size={32} />, stat: '+50', text: 'אנשי צוות מקצועיים' },
              { icon: <FaRegSmile size={32} />, stat: '+10,000', text: 'לקוחות מרוצים' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className="backdrop-blur-sm bg-white/50 p-6 rounded-2xl text-center shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-[#FF6B6B] shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-3xl font-bold mb-2" style={{ color: '#FF6B6B' }}>{item.stat}</h4>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FF6B6B] shadow-lg flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="לקוחה מרוצה"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-right">
                <p className="text-lg text-gray-700 italic mb-4">
                  "בית קפה גמא הוא המקום האהוב עליי לשבת ולעבוד. האווירה נעימה, הקפה מעולה והצוות תמיד מסביר פנים. ממליצה בחום!"
                </p>
                <p className="font-bold text-[#FF6B6B]">- מיכל לוי, לקוחה קבועה</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;