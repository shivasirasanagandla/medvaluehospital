import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, MotionValue } from "framer-motion";

type ShowcaseItem = {
  title?: string;
  subtitle?: string;
  image?: string;
  link?: string;
  isLogo?: boolean;
};

const items: ShowcaseItem[] = [
  {
    title: "Hospital Planning & Feasibility",
    subtitle: "Strategic planning for world-class healthcare facilities",
    image: "/hospital planning and feasibility.jpg",
    link: "/services",
  },
  {
    title: "Architecture & Equipment Planning",
    subtitle: "Comprehensive design and equipment integration",
    image: "/Architecture & Equipment Planning.jpg",
    link: "/services",
  },
  {
    title: "Licensing & Accreditation",
    subtitle: "NABH / NABL / JCI compliance and certification",
    image: "/Licensing & Accreditation.jpeg",
    link: "/services",
  },
  {
    title: "Recruitment & Training",
    subtitle: "Expert staffing and professional development",
    image: "/Recruitment & Training.jpeg",
    link: "/services",
  },
  {
    title: "Hospital Operations & Commissioning",
    subtitle: "Complete operations and commissioning support",
    image: "/Hospital Operations & Commissioning.jpg",
    link: "/services",
  },
  {
    isLogo: true,
  },
];

const AUTO_PLAY_MS = 3200;

const HomeShowcase = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [direction, setDirection] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // Parallax effect on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos * 20 - 10);
    y.set(yPos * 20 - 10);
  }, [x, y]);

  // Reset position when not hovering
  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;
    
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTO_PLAY_MS);
    
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isHovered]);

  // Animation variants for the slide content
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Handle slide change with direction

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setPrevIndex(index);
    setIndex((currentIndex) => (currentIndex + newDirection + items.length) % items.length);
  }, [index]);

  // Handle next/previous slide
  const goToNext = useCallback(() => paginate(1), [paginate]);
  const goToPrev = useCallback(() => paginate(-1), [paginate]);

  return (
    <section className="relative py-6 md:py-10">
      <div className="container mx-auto px-0 md:px-4">
        <div 
          ref={containerRef}
          className="relative overflow-hidden rounded-none md:rounded-2xl border bg-card shadow-medical cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseLeave={(e) => {
            handleMouseLeave();
            setIsHovered(false);
          }}
          onMouseEnter={() => setIsHovered(true)}
        >
          <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              {items.map((item, i) => {
                if (i !== index) return null;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 }
                    }}
                  >
                  {item.isLogo ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background via-muted to-background">
                      <motion.div 
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <div className="h-24 w-24 md:h-36 md:w-36 relative">
                          <motion.img 
                            src="/logo.jpg" 
                            alt="Company Logo" 
                            className="h-full w-full object-contain"
                            style={{
                              x: useTransform(x, [0, 1], [0, 10]),
                              y: useTransform(y, [0, 1], [0, 10]),
                            }}
                          />
                        </div>
                        <motion.div 
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-primary">ValueMed Healthcare Solutions</h3>
                          <p className="text-muted-foreground mt-2">From Vision to Commission</p>
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link to={item.link || "/"} className="block w-full h-full">
                      <motion.div 
                        className="absolute inset-0 w-full h-full"
                        style={{
                          scale: 1.1,
                          x: useTransform(x, [0, 1], [0, 10]),
                          y: useTransform(y, [0, 1], [0, 10]),
                        }}
                        animate={{
                          scale: [1, 1.05],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.title || 'Slide image'} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <motion.h3 
                          className="text-2xl md:text-4xl font-semibold tracking-tight"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-white/85 text-sm md:text-lg mt-2 max-w-3xl"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 0.85 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          {item.subtitle}
                        </motion.p>
                      </motion.div>
                    </Link>
                  )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {items.map((_, i) => {
                if (i === index) return null;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      i === index 
                        ? "bg-primary w-6" 
                        : "bg-gray-400/50 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;


