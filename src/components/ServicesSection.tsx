'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaCocktail, FaUtensils, FaWifi, FaBook, FaTshirt } from 'react-icons/fa';
import { MdEvent, MdLocalCafe } from 'react-icons/md';
import { GiCoffeeBeans, GiCakeSlice } from 'react-icons/gi';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px -10px rgba(255, 107, 107, 0.3)"
      }}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#FF6B6B] opacity-10 blur-2xl"></div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4 flex justify-end">
          <div className="text-[#FF6B6B] text-3xl bg-white bg-opacity-20 p-3 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.1)]">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-right text-[#FF6B6B]">{title}</h3>
        
        <p className="text-right text-gray-100 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto overflow-hidden rounded-xl h-40 w-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "קפה איכותי",
      description: "מבחר קפה משובח מרחבי העולם, נטחן טרי במקום ומוגש בסגנון אופנתי",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <GiCoffeeBeans />,
      title: "טעימות קפה",
      description: "סדנאות טעימות קפה בהנחיית בריסטות מקצועיים, המשלבות טרנדים עדכניים מעולם האופנה",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      icon: <FaUtensils />,
      title: "מנות שף אופנתיות",
      description: "תפריט מתחלף של מנות שף מעוצבות בהשראת עולם האופנה העכשווי",
      imageUrl: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      icon: <GiCakeSlice />,
      title: "קינוחים מעוצבים",
      description: "קינוחים ייחודיים בעיצוב אופנתי המשתנים בהתאם לעונות השנה ולטרנדים",
      imageUrl: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      icon: <FaTshirt />,
      title: "פינת אופנה",
      description: "פינה ייחודית המציגה פריטי אופנה מעצבים מקומיים לצד ספרי אופנה וכתבי עת",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <MdEvent />,
      title: "אירועי אופנה",
      description: "אירועים ומפגשים בנושאי אופנה וקפה, כולל תצוגות אופנה מקומיות ובינלאומיות",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <FaWifi />,
      title: "סביבת עבודה",
      description: "חלל עבודה מעוצב עם WiFi מהיר, שקעים ותאורה מותאמת לעבודה ממושכת",
      imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80"
    },
    {
      icon: <MdLocalCafe />,
      title: "קפה לקחת",
      description: "אריזות קפה מעוצבות לקחת הביתה, בעיצובים מתחלפים בהשראת עולם האופנה",
      imageUrl: "https://images.unsplash.com/photo-1589401806207-2381455bce36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-0 w-64 h-64 rounded-full bg-[#FF6B6B] opacity-10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#FF6B6B] opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF6B6B]">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            בית קפה גמא מציע חוויה ייחודית המשלבת את עולם הקפה האיכותי עם אופנה עכשווית. 
            גלו את מגוון השירותים המיוחדים שלנו.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button 
            className="bg-[#FF6B6B] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.05)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;