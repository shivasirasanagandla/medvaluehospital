import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { Building2, Settings, Award, Users, Stethoscope, ArrowLeft, ArrowRight } from "lucide-react";

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

  // Map slide title to an icon used in the hero highlights
  const getIconForTitle = (title?: string) => {
    switch (title) {
      case "Hospital Planning & Feasibility":
        return <Building2 className="h-6 w-6 text-primary" />;
      case "Architecture & Equipment Planning":
        return <Settings className="h-6 w-6 text-primary" />;
      case "Licensing & Accreditation":
        return <Award className="h-6 w-6 text-primary" />;
      case "Recruitment & Training":
        return <Users className="h-6 w-6 text-primary" />;
      case "Hospital Operations & Commissioning":
        return <Stethoscope className="h-6 w-6 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-4 sm:py-6 md:py-10">
      <div className="container mx-auto px-2 sm:px-4">
        <div 
          ref={containerRef}
          className="relative overflow-hidden rounded-lg md:rounded-2xl border bg-card shadow-medical cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseLeave={(e) => {
            handleMouseLeave();
            setIsHovered(false);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
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
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center px-4">ValueMed Healthcare Solutions</h3>
                          <p className="text-muted-foreground mt-2 text-sm sm:text-base">From Vision to Commission</p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Overlay service card */}
                      <motion.div 
                        className="absolute left-3 right-3 top-3 md:left-10 md:right-auto md:top-10 max-w-none md:max-w-md"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-3 md:p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-primary/10 p-3 rounded-lg">
                              {getIconForTitle(item.title)}
                            </div>
                            <h3 className="font-semibold text-base md:text-xl text-foreground">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-xs md:text-base text-muted-foreground">
                            {item.subtitle}
                          </p>
                          <div className="mt-4">
                            <Link
                              to={item.link || "/services"}
                              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                              Learn more
                              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </Link>
                          </div>
                        </div>
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-md hover:bg-accent transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-md hover:bg-accent transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10 px-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;
