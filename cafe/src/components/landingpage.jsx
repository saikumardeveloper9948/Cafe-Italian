import React, { useState, useRef, useEffect } from 'react';

// Import images
import special1 from '../assets/our_specials/008d591d9d94ea3b34b7e0b2a3f82f9c74016586.png';
import special2 from '../assets/our_specials/6dfefa80dbb588b32916508fc1938d0121bdeeea.png';
import special3 from '../assets/our_specials/cd921bc8482c7ea770980fc0f9fd50b80c7bc41d.png';
import adanaKebab from '../assets/highlights/adana_kebab.png';
import baklava from '../assets/highlights/baklava.png';
import kabab from '../assets/highlights/kabab.png';
import maze from '../assets/highlights/maze.png';
import italianDish from '../assets/ourmenu/italian dish.jpg';
import pastry from '../assets/ourmenu/pastry.jpg';
import coffee from '../assets/ourmenu/coffee.png';
import food from '../assets/we_offer/food.png';
import drinks from '../assets/we_offer/drinks.png';
import atmosphere from '../assets/we_offer/atmosphere.png';
import familyDinning from '../assets/groupdinning/familydinning.png';
import gallery1 from '../assets/we_offer/gallery/53a4192459bf8b2e0d21257c898aa2313c24eed1.png';
import gallery2 from '../assets/we_offer/gallery/5c339392cfd6ccf86937bc13e9948f1d245ace67.png';
import gallery3 from '../assets/we_offer/gallery/087fa7012d21a057970e39bf0f6f25b6622891cc.png';
import gallery4 from '../assets/we_offer/gallery/05cb63d2556880dffcafca8893f193eedcdd5ae4.png';
import gallery5 from '../assets/we_offer/gallery/98d58aaac758d409935b6cb24285c82f279bea35 (1).png';
import gallery6 from '../assets/we_offer/gallery/90b2b9fb394845439063a262d2bb0cb1426038a0.png';
import gallery7 from '../assets/we_offer/gallery/a1bd0c17d235b2912a4c9ba45122e4432b92e938.png';
import gallery8 from '../assets/we_offer/gallery/8c6c887823e2da74776c157f54b0a8d60114d4ac.png';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSpecialIndex, setCurrentSpecialIndex] = useState(0);
  const videoRef = useRef(null);
  const reviewsRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Specials items array
  const specialsItems = [
    { id: 1, name: "Classic Ribeye Steak", price: 30, image: special1 },
    { id: 2, name: "Italian Pasta", price: 25, image: special2 },
    { id: 3, name: "Pastry Delight", price: 28, image: special3 },
    { id: 4, name: "Adana Kebab", price: 26, image: adanaKebab },
    { id: 5, name: "Baklava", price: 22, image: baklava },
    { id: 6, name: "Kebab Platter", price: 32, image: kabab },
    { id: 7, name: "Meze Platter", price: 27, image: maze },
  ];

  const handlePrevSpecial = () => {
    setCurrentSpecialIndex((prev) => (prev === 0 ? specialsItems.length - 1 : prev - 1));
  };

  const handleNextSpecial = () => {
    setCurrentSpecialIndex((prev) => (prev === specialsItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  // Auto-scroll reviews
  useEffect(() => {
    const scrollContainer = reviewsRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const autoScroll = () => {
      if (scrollAmount < maxScroll) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;
      } else {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      {/* Top Bar - Contact Information - Fixed */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white py-2 px-4 text-[10px] sm:text-xs z-50 border-b border-gray-800">
        {/* Desktop Layout */}
        <div className="max-w-7xl mx-auto hidden sm:flex justify-between items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span>📍</span>
              <span>2 Bury Old Road, Manchester, M8 9JN</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span>⏰</span>
              <span>Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</span>
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span>📞</span>
              <span>0161 795 5502</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1">
              <span>✉️</span>
              <span className="whitespace-nowrap">reservations@istanbulrestaurantmanchester.co.uk</span>
            </span>
          </div>
        </div>
        
        {/* Mobile & Tablet - Horizontal Scroll Layout */}
        <div className="sm:hidden w-full">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1 px-4" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x', width: '100%' }}>
            {/* Address */}
            <span className="flex items-center gap-1 whitespace-nowrap flex-shrink-0 text-[10px] sm:text-xs text-white">
              <span>📍</span>
              <span>2 Bury Old Road, Manchester, M8 9JN</span>
            </span>
            
            <span className="text-gray-400 flex-shrink-0">•</span>
            
            {/* Hours */}
            <span className="flex items-center gap-1 whitespace-nowrap flex-shrink-0 text-[10px] sm:text-xs text-white">
              <span>⏰</span>
              <span>Mon-Sat 11am - 11:30pm, Sun 12pm - 11pm</span>
            </span>
            
            <span className="text-gray-400 flex-shrink-0">•</span>
            
            {/* Phone */}
            <span className="flex items-center gap-1 whitespace-nowrap flex-shrink-0 text-[10px] sm:text-xs text-white">
              <span>📞</span>
              <span>0161 795 5502</span>
            </span>
            
            <span className="text-gray-400 flex-shrink-0">•</span>
            
            {/* Email */}
            <span className="flex items-center gap-1 whitespace-nowrap flex-shrink-0 text-[10px] sm:text-xs text-white">
              <span>✉️</span>
              <span>reservations@istanbulrestaurantmanchester.co.uk</span>
            </span>
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Navigation Bar - Fixed Below Top Bar */}
      <nav className="fixed top-[40px] sm:top-[40px] md:top-[33px] left-0 right-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6">
          <div className="flex items-center justify-between py-2.5 sm:py-3 md:py-4 relative">
            {/* Logo - Left Side */}
            <div className="flex items-center gap-2 flex-shrink-0 z-10">
              <div className="text-xl sm:text-2xl">☕</div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold italic text-amber-500/90">
                Cafe Italia
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white transition-colors duration-300 hover:text-amber-500 px-2 z-10 flex-shrink-0"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-6 md:gap-8 absolute left-1/2 transform -translate-x-1/2">
              <a 
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="text-white uppercase font-semibold text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 cursor-pointer"
              >
                HOME
              </a>
              <a 
                href="#menu"
                onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
                className="text-white uppercase font-semibold text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 cursor-pointer"
              >
                MENU
              </a>
              <a 
                href="#specials"
                onClick={(e) => { e.preventDefault(); scrollToSection('specials'); }}
                className="text-white uppercase font-semibold text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 cursor-pointer"
              >
                SPECIALS
              </a>
              <a 
                href="#gallery"
                onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
                className="text-white uppercase font-semibold text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 cursor-pointer"
              >
                GALLERY
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="text-white uppercase font-semibold text-sm tracking-wide hover:text-amber-500 transition-colors duration-300 cursor-pointer"
              >
                CONTACT
              </a>
            </div>

            {/* Book Table Button - Right Side */}
            <div className="hidden lg:block z-10">
              <button className="bg-amber-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-amber-700 transition transform hover:scale-105 shadow-lg flex items-center gap-1">
                <span>BOOK TABLE</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-2 mb-3 pb-4 flex flex-col gap-3 bg-gray-900 rounded-lg p-4 border border-gray-800">
              <a 
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="text-white uppercase font-semibold hover:text-amber-500 transition"
              >
                HOME
              </a>
              <a 
                href="#menu"
                onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}
                className="text-white uppercase font-semibold hover:text-amber-500 transition"
              >
                MENU
              </a>
              <a 
                href="#specials"
                onClick={(e) => { e.preventDefault(); scrollToSection('specials'); }}
                className="text-white uppercase font-semibold hover:text-amber-500 transition"
              >
                SPECIALS
              </a>
              <a 
                href="#gallery"
                onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}
                className="text-white uppercase font-semibold hover:text-amber-500 transition"
              >
                GALLERY
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="text-white uppercase font-semibold hover:text-amber-500 transition"
              >
                CONTACT
              </a>
              <button 
                className="bg-amber-600 text-white px-6 py-3 rounded-md font-semibold w-full hover:bg-amber-700 transition flex items-center justify-center gap-1 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK TABLE
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-[70vh] md:h-screen w-full overflow-hidden pt-28 sm:pt-32 md:pt-32">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/landing_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl italic font-bold text-white mb-8 drop-shadow-2xl">
            Welcome To Cafe Italia
          </h1>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-amber-700 transition transform hover:scale-105 shadow-lg flex items-center gap-2">
            <span>VIEW MENU</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Our Menu Section */}
      <section id="menu" className="bg-black py-10 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Explore Menu Title */}
          <div className="text-center mb-4">
            <p className="text-amber-400 text-sm md:text-base uppercase tracking-wider font-semibold">
              EXPLORE MENU
            </p>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Our Menu
            </h2>
          </div>

          {/* Menu Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Italian Dishes Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img 
                  src={italianDish} 
                  alt="Italian dishes" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Italian dishes</h3>
                <button className="text-white border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  VIEW MENU
                </button>
              </div>
            </div>

            {/* Pastry Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img 
                  src={pastry} 
                  alt="Pastry" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Pastry</h3>
                <button className="text-white border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  VIEW MENU
                </button>
              </div>
            </div>

            {/* Coffee Card */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img 
                  src={coffee} 
                  alt="Coffee" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Coffee</h3>
                <button className="text-white border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  VIEW MENU
                </button>
              </div>
            </div>
          </div>

          {/* Main View Menu Button */}
          <div className="text-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-amber-700 transition transform hover:scale-105 shadow-lg">
              VIEW MENU →
            </button>
          </div>
        </div>
      </section>

      {/* WE OFFER Section */}
      <section className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* WE OFFER Header */}
          <div className="text-center mb-6">
            <p className="text-white text-sm md:text-base uppercase tracking-wider font-semibold mb-3">
              WE OFFER
            </p>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-italic text-white mb-3">
              Unforgettable
            </h2>
            <h2 className="text-5xl md:text-7xl font-italic text-amber-400">
              Dining Experience
            </h2>
          </div>

          {/* WE OFFER Cards - Full width image with text overlay */}
          <div className="space-y-8">
            {/* Food Card */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-white/20 group-hover:shadow-white/40 transition-all duration-500">
                <img 
                  src={food} 
                  alt="Food" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>
                {/* Text Overlay on Left */}
                <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
                  <div className="max-w-xl animate-fade-in-left">
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      Food
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed mb-6 opacity-90">
                      Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our expert chefs who combine traditional techniques with modern culinary innovation to deliver an unparalleled dining experience.
                    </p>
                    <button className="text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold w-fit">
                      EXPLORE FOOD
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Drinks Card */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-white/20 group-hover:shadow-white/40 transition-all duration-500">
                <img 
                  src={drinks} 
                  alt="Drinks" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>
                {/* Text Overlay on Left */}
                <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
                  <div className="max-w-xl animate-fade-in-left">
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      Drinks
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed mb-6 opacity-90">
                      Our bar features an extensive selection of premium wines, craft cocktails, and artisanal coffees. Whether you're celebrating a special occasion or simply unwinding after work, our expert mixologists are ready to craft the perfect drink tailored to your taste. Every beverage tells a story of flavor and craftsmanship.
                    </p>
                    <button className="text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold w-fit">
                      EXPLORE DRINKS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere Card */}
            <div className="group relative overflow-hidden">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-white/20 group-hover:shadow-white/40 transition-all duration-500">
                <img 
                  src={atmosphere} 
                  alt="Atmosphere" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>
                {/* Text Overlay on Left */}
                <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
                  <div className="max-w-xl animate-fade-in-left">
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      Atmosphere
                    </h3>
                    <p className="text-white text-base md:text-lg leading-relaxed mb-6 opacity-90">
                      Step into an ambiance that blends rustic Italian charm with modern elegance. Our carefully curated space features warm lighting, comfortable seating, and stunning decor that creates the perfect backdrop for memorable moments. Whether it's an intimate dinner or a festive celebration, our atmosphere enhances every dining experience.
                    </p>
                    <button className="text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 font-semibold w-fit">
                      EXPLORE ATMOSPHERE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Our Specials Section */}
      <section id="specials" className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-white text-sm md:text-base uppercase tracking-[0.2em] font-semibold">
              OUR MENU
            </p>
          </div>

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-italic">
              <span className="text-white">Our </span>
              <span className="text-amber-400">Specials</span>
            </h2>
          </div>

          {/* Specials Carousel */}
          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 md:p-4 transition-all duration-300 backdrop-blur-sm"
              onClick={handlePrevSpecial}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 md:p-4 transition-all duration-300 backdrop-blur-sm"
              onClick={handleNextSpecial}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-8 md:gap-12 overflow-hidden">
              {/* Left Preview Card (blurred/opacity) */}
              {(() => {
                const prevIndex = (currentSpecialIndex - 1 + specialsItems.length) % specialsItems.length;
                const prevItem = specialsItems[prevIndex];
                return (
                  <div className="hidden md:block opacity-40 scale-90 transition-all duration-300">
                    <div className="w-[280px] md:w-[320px]">
                      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative w-full aspect-square mb-6 mx-auto">
                          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-800">
                            <img 
                              src={prevItem.image} 
                              alt={prevItem.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="absolute top-8 right-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full px-4 py-2 shadow-lg">
                          <span className="text-black font-bold text-lg">€{prevItem.price}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center">{prevItem.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Center Active Card */}
              {(() => {
                const currentItem = specialsItems[currentSpecialIndex];
                return (
                  <div className="flex-shrink-0 scale-95 md:scale-100 transition-all duration-300">
                    <div className="w-[300px] md:w-[380px]">
                      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative w-full aspect-square mb-6 mx-auto">
                          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-800">
                            <img 
                              src={currentItem.image} 
                              alt={currentItem.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Golden Price Badge - Scalloped Design */}
                        <div className="absolute top-8 right-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full px-5 py-3 shadow-lg transform rotate-3">
                          <span className="text-black font-bold text-xl">€{currentItem.price}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">{currentItem.name}</h3>
                        
                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                          {specialsItems.map((_, index) => (
                            <button 
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSpecialIndex ? 'bg-amber-400' : 'bg-gray-600'
                              }`}
                              onClick={() => setCurrentSpecialIndex(index)}
                            ></button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Right Preview Card (blurred/opacity) */}
              {(() => {
                const nextIndex = (currentSpecialIndex + 1) % specialsItems.length;
                const nextItem = specialsItems[nextIndex];
                return (
                  <div className="hidden md:block opacity-40 scale-90 transition-all duration-300">
                    <div className="w-[280px] md:w-[320px]">
                      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative w-full aspect-square mb-6 mx-auto">
                          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-800">
                            <img 
                              src={nextItem.image} 
                              alt={nextItem.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="absolute top-8 right-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full px-4 py-2 shadow-lg">
                          <span className="text-black font-bold text-lg">€{nextItem.price}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center">{nextItem.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Highlights Section */}
      <section className="bg-black py-10 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-white text-xs md:text-sm uppercase tracking-wider font-semibold">
              OUR TOP PICKS THIS MONTH
            </p>
          </div>

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-italic">
              <span className="text-white">Monthly </span>
              <span className="text-amber-400">Highlights</span>
            </h2>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img 
                  src={adanaKebab} 
                  alt="Adana Kebab" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Adana Kebab</h3>
              <p className="text-white text-lg md:text-xl">€ 120</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img 
                  src={maze} 
                  alt="Meze Platter" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Meze Platter</h3>
              <p className="text-white text-lg md:text-xl">€ 120</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img 
                  src={baklava} 
                  alt="Baklava" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Baklava</h3>
              <p className="text-white text-lg md:text-xl">€ 120</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <img 
                  src={kabab} 
                  alt="Kebab Platter" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Kebab Platter</h3>
              <p className="text-white text-lg md:text-xl">€ 120</p>
            </div>
          </div>
        </div>
      </section>

      {/* Private & Group Dining Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[772px] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src={familyDinning} 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full min-h-[600px] md:min-h-[772px] flex items-center px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-white/90 text-sm md:text-base uppercase tracking-wider font-semibold mb-4">
              BOOKING
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Private &<br />Group Dining
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              At Bavette, we specialize in creating memorable dining experiences, whether you're seeking an intimate gathering or a grand celebration. Our private and group dining options are designed to meet your unique needs with personalized service, exceptional food, and a welcoming atmosphere.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded font-semibold text-lg transition transform hover:scale-105 shadow-lg flex items-center gap-2">
              BOOK NOW →
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-black py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-white text-sm md:text-base uppercase tracking-wider font-semibold mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              What Our <span className="text-amber-400">Guests Say</span>
            </h2>
          </div>

          {/* Reviews Carousel */}
          <div 
            ref={reviewsRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { name: "Sarah Johnson", rating: 5, review: "Absolutely amazing experience! The food was incredible and the atmosphere was perfect.", role: "Food Enthusiast" },
              { name: "Michael Chen", rating: 5, review: "Best Italian restaurant in Manchester! The pasta dishes were out of this world.", role: "Chef" },
              { name: "Emma Williams", rating: 5, review: "Exceptional service and amazing food. We had a wonderful family dinner here.", role: "Local Food Critic", isCenter: true },
              { name: "David Brown", rating: 5, review: "The ambiance is perfect for a romantic dinner. Highly recommend!", role: "Food Blogger" },
              { name: "Lisa Anderson", rating: 5, review: "Outstanding quality and presentation. Every dish was a masterpiece.", role: "Restaurant Reviewer" },
              { name: "James Wilson", rating: 5, review: "One of the best dining experiences I've ever had. Truly remarkable!", role: "Culinary Writer" },
            ].map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[320px] md:w-[380px] p-8 rounded-2xl transition-all duration-300 ${
                  review.isCenter 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 scale-105 shadow-2xl' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className={`text-base md:text-lg leading-relaxed mb-6 ${
                  review.isCenter ? 'text-white font-medium' : 'text-gray-300'
                }`}>
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    review.isCenter 
                      ? 'bg-white text-amber-600' 
                      : 'bg-amber-600 text-white'
                  }`}>
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      review.isCenter ? 'text-white' : 'text-white'
                    }`}>
                      {review.name}
                    </p>
                    <p className={`text-sm ${
                      review.isCenter ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate reviews for seamless scrolling */}
            {[
              { name: "Sarah Johnson", rating: 5, review: "Absolutely amazing experience! The food was incredible and the atmosphere was perfect.", role: "Food Enthusiast" },
              { name: "Michael Chen", rating: 5, review: "Best Italian restaurant in Manchester! The pasta dishes were out of this world.", role: "Chef" },
              { name: "Emma Williams", rating: 5, review: "Exceptional service and amazing food. We had a wonderful family dinner here.", role: "Local Food Critic" },
            ].map((review, index) => (
              <div
                key={`duplicate-${index}`}
                className={`flex-shrink-0 w-[320px] md:w-[380px] p-8 rounded-2xl bg-gray-900`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300">
                  "{review.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Follow Us Instagram Gallery Section */}
      <section id="gallery" className="bg-black py-10 relative">    
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
            {/* Left Side - Title */}
            <div>
              <p className="text-white text-xs uppercase tracking-wider font-semibold mb-2">
                GALLERY
              </p>
              <h2 className="text-5xl md:text-6xl font-bold italic text-white">
                follow us
              </h2>
            </div>

            {/* Right Side - Instagram Button */}
            <button className="flex items-center gap-3 border-2 border-amber-600 bg-black text-white px-6 py-4 rounded hover:bg-amber-600 transition-all duration-300 group w-fit">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold uppercase tracking-wide group-hover:scale-105 transition-transform">
                CHECK OUT OUR INSTAGRAM
              </span>
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery1} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 2 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery2} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 3 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery3} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 4 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery4} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 5 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery5} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 6 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery6} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 7 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery7} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 8 */}
            <div className="relative aspect-square overflow-hidden group border-2 border-blue-500 rounded">
              <img 
                src={gallery8} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative py-20 md:py-32 bg-gray-950 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-white/70 text-sm md:text-base uppercase tracking-wider font-semibold mb-4">
              CONNECT WITH US
            </p>
            <h2 className="text-5xl md:text-7xl font-bold italic text-white">
              Contact Us
            </h2>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Booking Request */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-amber-600 transition-all duration-300">
              <h3 className="text-white/70 text-sm uppercase tracking-wider font-semibold mb-4">
                BOOKING REQUEST
              </h3>
              <p className="text-amber-500 text-2xl md:text-3xl font-bold">
                0161 795 5502
              </p>
            </div>

            {/* Card 2 - Location */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-amber-600 transition-all duration-300">
              <h3 className="text-white/70 text-sm uppercase tracking-wider font-semibold mb-4">
                LOCATION
              </h3>
              <p className="text-white text-lg md:text-xl">
                2 Bury Old Road,<br />
                Manchester, M8 9JN
              </p>
            </div>

            {/* Card 3 - Opening Hours */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-amber-600 transition-all duration-300">
              <h3 className="text-white/70 text-sm uppercase tracking-wider font-semibold mb-4">
                OPENING HOURS
              </h3>
              <div className="space-y-2 text-white text-base md:text-lg">
                <p>Monday to Saturday</p>
                <p>11:00am - 11:30pm</p>
                <p className="mt-2">Sunday 12:00pm - 11:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Grey side margins */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-800"></div>
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gray-800"></div>
        
        {/* Main content area */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="h-12 w-full" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            ></div>
          </div>
          
          {/* Logo and Brand Name */}
          <div className="relative text-center mb-8">
            <div className="flex flex-col items-center gap-4">
              {/* Coffee Cup Icon */}
              <div className="text-5xl md:text-6xl">
                ☕
              </div>
              {/* Cafe Italia Text */}
              <h2 className="text-3xl md:text-4xl font-bold italic text-amber-500">
                Cafe Italia
              </h2>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <a 
              href="#home" 
              className="text-white uppercase font-semibold text-sm md:text-base tracking-wider hover:text-amber-500 transition-colors duration-300"
            >
              HOME
            </a>
            <a 
              href="#menu" 
              className="text-white uppercase font-semibold text-sm md:text-base tracking-wider hover:text-amber-500 transition-colors duration-300"
            >
              MENU
            </a>
            <a 
              href="#about" 
              className="text-white uppercase font-semibold text-sm md:text-base tracking-wider hover:text-amber-500 transition-colors duration-300"
            >
              ABOUT
            </a>
            <a 
              href="#contact" 
              className="text-white uppercase font-semibold text-sm md:text-base tracking-wider hover:text-amber-500 transition-colors duration-300"
            >
              CONTACT
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* TripAdvisor */}
            <a 
              href="https://www.tripadvisor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-600 transition-colors duration-300"
              aria-label="TripAdvisor"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5.313L23.182 0v5.313L12 10.626 0.818 5.313V0zm-2.375 7.323L0 12.652v5.313l12 5.313L24 17.965v-5.313l-9.625.024"/>
              </svg>
            </a>
            
            {/* Google */}
            <a 
              href="https://www.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-600 transition-colors duration-300"
              aria-label="Google"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-600 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright Text */}
          <div className="text-center mt-12 text-white/60 text-xs md:text-sm">
            <p>© 2024 Cafe Italia. A passionate Italian dining experience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
