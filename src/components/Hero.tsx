import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 xl:pt-32 xl:pb-28 bg-gradient-hero overflow-hidden">
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

      <div className="relative container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
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
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 sm:mb-5 md:mb-6">
                Redefining Healthcare 
                <span className="text-white font-semibold"> Excellence </span> 
                Through Innovation
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8 md:mb-10">
                At ValueMed Healthcare, we transform healthcare visions into reality with 25+ years of expertise in hospital planning, design, and operations. Our end-to-end solutions ensure world-class healthcare infrastructure that delivers exceptional patient care.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;