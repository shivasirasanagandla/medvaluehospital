import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Healthcare Consulting" 
          className="w-full h-full object-cover object-center opacity-15"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero/85"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content Section */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-3">
                From Vision to Commission – Your End-to-End Hospital Consulting Partner
              </p>
              
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight mb-3 sm:mb-4">
                Redefining Healthcare 
                <span className="text-white font-semibold"> Excellence </span> 
                Through Innovation
              </h1>
              
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 sm:mb-6">
                At ValueMed Healthcare, we transform healthcare visions into reality with 25+ years of expertise in hospital planning, design, and operations. Our end-to-end solutions ensure world-class healthcare infrastructure that delivers exceptional patient care.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 items-start xs:items-center"
            >
              <Button 
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all hover:scale-105 shadow-md hover:shadow-teal-500/20"
                onClick={() => window.location.href = '#contact'}
              >
                <span role="img" aria-label="start" className="text-base sm:text-lg">👉</span>
                Start Your Healthcare Project
              </Button>
              
              <a 
                href="https://valuemedclinics.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm border border-gray-200 hover:shadow-md"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;