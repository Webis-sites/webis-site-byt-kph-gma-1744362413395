'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaUtensils, FaCalendarAlt, FaTshirt } from 'react-icons/fa';

// Define TypeScript interfaces
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

interface CategoryFilter {
  id: string;
  name: string;
  icon: JSX.Element;
}

const GalleryPortfolio: React.FC = () => {
  // Define gallery items
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "אספרסו מיוחד",
      category: "drinks",
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "אספרסו איכותי מפולי קפה אורגניים"
    },
    {
      id: 2,
      title: "לאטה אומנותי",
      category: "drinks",
      imageUrl: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "לאטה עם ציור אומנותי בקצף"
    },
    {
      id: 3,
      title: "קרואסון שוקולד",
      category: "food",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "קרואסון טרי במילוי שוקולד"
    },
    {
      id: 4,
      title: "סלט בריאות",
      category: "food",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "סלט טרי עם ירקות עונתיים"
    },
    {
      id: 5,
      title: "ערב שירה",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "ערב שירה בלייב עם אמנים מקומיים"
    },
    {
      id: 6,
      title: "סדנת קפה",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "סדנה מקצועית להכנת קפה איכותי"
    },
    {
      id: 7,
      title: "חולצת בית הקפה",
      category: "fashion",
      imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "חולצת כותנה איכותית עם לוגו בית הקפה"
    },
    {
      id: 8,
      title: "כובע מעוצב",
      category: "fashion",
      imageUrl: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "כובע אופנתי בעיצוב מיוחד"
    },
    {
      id: 9,
      title: "קפה קר",
      category: "drinks",
      imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "קפה קר מרענן עם קרח"
    },
    {
      id: 10,
      title: "עוגת שוקולד",
      category: "food",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "עוגת שוקולד ביתית עשירה"
    },
    {
      id: 11,
      title: "תיק בד",
      category: "fashion",
      imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "תיק בד אופנתי עם הדפס מיוחד"
    },
    {
      id: 12,
      title: "הופעה חיה",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "הופעה חיה של אמנים מקומיים"
    }
  ];

  // Define category filters
  const categoryFilters: CategoryFilter[] = [
    { id: "all", name: "הכל", icon: <></> },
    { id: "drinks", name: "משקאות", icon: <FaCoffee /> },
    { id: "food", name: "אוכל", icon: <FaUtensils /> },
    { id: "events", name: "אירועים", icon: <FaCalendarAlt /> },
    { id: "fashion", name: "אופנה", icon: <FaTshirt /> }
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Filter items when activeFilter changes
  useEffect(() => {
    setIsLoaded(false);
    
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredItems(galleryItems);
      } else {
        setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
      }
      setIsLoaded(true);
    }, 300);
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <div dir="rtl" className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">הגלריה שלנו</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          גלו את המגוון העשיר של המוצרים והחוויות שבית קפה גמא מציע - מקפה איכותי ומאפים טריים ועד אירועים מיוחדים ופריטי אופנה ייחודיים.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categoryFilters.map((filter) => (
          <motion.button
            key={filter.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterChange(filter.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
              ${activeFilter === filter.id 
                ? 'bg-[#FF6B6B] text-white shadow-lg' 
                : 'bg-white text-gray-700 shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff]'}
              hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff]
            `}
            aria-label={`סנן לפי ${filter.name}`}
          >
            <span>{filter.icon}</span>
            <span>{filter.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="relative min-h-[500px]">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 right-0 left-0 p-6 text-right z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-[#FF6B6B]/80 backdrop-blur-sm rounded-full">
                      {categoryFilters.find(filter => filter.id === item.category)?.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#FF6B6B] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Empty state */}
      {isLoaded && filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">לא נמצאו פריטים בקטגוריה זו</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPortfolio;