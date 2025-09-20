import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, Heart, GraduationCap, Award, ChevronDown, ChevronUp, X, ArrowRight,
  Wrench, Shield, Lightbulb, Globe, Users, CheckCircle, MessageCircle, Mail, Phone, Activity,
  Map, Cpu, Stethoscope, Book, Sun, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pillars } from '@/data/pillars';

// Utility function to get icon component based on icon name
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    wrench: <Wrench className="h-4 w-4" />,
    shield: <Shield className="h-4 w-4" />,
    lightbulb: <Lightbulb className="h-4 w-4" />,
    globe: <Globe className="h-4 w-4" />,
    users: <Users className="h-4 w-4" />,
    message: <MessageCircle className="h-4 w-4" />,
    mail: <Mail className="h-4 w-4" />,
    phone: <Phone className="h-4 w-4" />,
    activity: <Activity className="h-4 w-4" />,
    map: <Map className="h-4 w-4" />,
    cpu: <Cpu className="h-4 w-4" />,
    stethoscope: <Stethoscope className="h-4 w-4" />,
    book: <Book className="h-4 w-4" />,
    sun: <Sun className="h-4 w-4" />,
    check: <Check className="h-4 w-4" />
  };
  
  return iconMap[iconName.toLowerCase()] || <Check className="h-4 w-4" />;
};

const CorePillars: React.FC = () => {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const togglePillar = (pillarId: string) => {
    setExpandedPillar(expandedPillar === pillarId ? null : pillarId);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const getPillarColor = (pillarSlug: string) => {
    switch (pillarSlug) {
      case 'building':
        return 'bg-gradient-to-br from-blue-500 to-cyan-500';
      case 'caring':
        return 'bg-gradient-to-br from-pink-500 to-rose-500';
      case 'education':
        return 'bg-gradient-to-br from-purple-500 to-indigo-500';
      case 'excellence':
        return 'bg-gradient-to-br from-amber-500 to-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'map': <Map className="h-5 w-5" />,
      'wrench': <Wrench className="h-5 w-5" />,
      'cpu': <Cpu className="h-5 w-5" />,
      'shield': <Shield className="h-5 w-5" />,
      'stethoscope': <Stethoscope className="h-5 w-5" />,
      'book': <Book className="h-5 w-5" />,
      'sun': <Sun className="h-5 w-5" />,
      'users': <Users className="h-5 w-5" />,
      'check': <Check className="h-5 w-5" />,
      'activity': <Activity className="h-5 w-5" />,
      'heart': <Heart className="h-5 w-5" />,
      'graduation-cap': <GraduationCap className="h-5 w-5" />,
      'award': <Award className="h-5 w-5" />,
      'lightbulb': <Lightbulb className="h-5 w-5" />,
      'globe': <Globe className="h-5 w-5" />
    };
    return iconMap[iconName] || <CheckCircle className="h-5 w-5" />;
  };

  const contactMethods = [
    { 
      name: 'Email', 
      icon: <Mail className="h-5 w-5" />, 
      url: 'mailto:info@valuemedhealthcare.com',
      color: 'bg-blue-500 hover:bg-blue-600',
      text: 'Email Us'
    },
    { 
      name: 'Call', 
      icon: <Phone className="h-5 w-5" />, 
      url: 'tel:+919701876584',
      color: 'bg-green-500 hover:bg-green-600',
      text: 'Call Us'
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle className="h-5 w-5" />, 
      url: 'https://wa.me/919701876584',
      color: 'bg-green-600 hover:bg-green-700',
      text: 'WhatsApp'
    }
  ];

  // Reorder pillars: Caring, Education, Building
  const orderedPillars = [...pillars].sort((a, b) => {
    const order = { 'caring': 1, 'education': 2, 'building': 3 };
    return (order[a.slug as keyof typeof order] || 99) - (order[b.slug as keyof typeof order] || 99);
  });

  // Color and image mapping for each pillar
  const pillarConfig = {
    'caring': {
      bgColor: 'bg-pink-500',
      textColor: 'text-pink-500',
      image: '/patient care.jpg',
      alt: 'Patient Care Services'
    },
    'education': {
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-500',
      image: '/hospital training.jpg',
      alt: 'Medical Education & Training'
    },
    'building': {
      bgColor: 'bg-green-500',
      textColor: 'text-green-500',
      image: '/hospital planning and feasibility.jpg',
      alt: 'Hospital Planning & Building'
    },
    'excellence': {
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-500',
      image: '/Hospital Operations & Commissioning.jpg',
      alt: 'Healthcare Excellence'
    }
  };

  const handleGetStarted = (pillarSlug: string) => {
    switch(pillarSlug) {
      case 'caring':
        // Open Valuemed Clinics in a new tab
        window.open('https://valuemedclinics.com', '_blank', 'noopener,noreferrer');
        break;
        
      case 'education':
      case 'building':
        // Navigate to contact page with smooth scroll
        if (window.location.pathname !== '/contact') {
          navigate('/contact');
        } else {
          // If already on contact page, scroll to contact form
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        break;
        
      default:
        // Default navigation for any other cases
        navigate('/contact');
    }
  };

  return (
    <section id="pillars" className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-background to-gray-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2.5 rounded-full mb-6 shadow-sm border border-primary/10"
          >
            <span className="font-medium text-sm tracking-wide">OUR FOUNDATION</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
          >
            Our Core Pillars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Discover the fundamental principles that drive our healthcare consulting services
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {orderedPillars.map((pillar, index) => {
            const config = pillarConfig[pillar.slug as keyof typeof pillarConfig] || {
              bgColor: 'bg-primary',
              textColor: 'text-primary',
              image: '/placeholder.svg',
              alt: pillar.title
            };
            const { bgColor, textColor, image, alt } = config;
            
            return (
              <motion.div 
                key={pillar.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-transparent flex flex-col h-full mx-2 sm:mx-0"
              >
                {/* Card Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={image} 
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                {/* Solid Accent */}
                <div className={`h-1.5 ${bgColor}`}></div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${bgColor} text-white shadow-md group-hover:scale-110 transition-transform`}>
                        {pillar.slug === 'building' && <Building2 className="h-6 w-6" />}
                        {pillar.slug === 'caring' && <Heart className="h-6 w-6" />}
                        {pillar.slug === 'education' && <GraduationCap className="h-6 w-6" />}
                        {pillar.slug === 'excellence' && <Award className="h-6 w-6" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${bgColor}/10 ${textColor}`}>
                      {pillar.slug.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex-1 mb-6">
                    <p className="text-gray-600 mb-5 leading-relaxed">{pillar.shortDescription}</p>
                    
                    {pillar.highlights && pillar.highlights.length > 0 && (
                      <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${bgColor}`}></span>
                          Key Benefits
                        </h4>
                        <ul className="space-y-2.5">
                          {pillar.highlights.map((highlight, idx) => (
                            <motion.li 
                              key={idx}
                              className="flex items-start gap-2.5 group/item"
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {pillar.quickPeek && pillar.quickPeek.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${bgColor}`}></span>
                          What We Offer
                        </h4>
                        <div className="grid gap-2.5">
                          {pillar.quickPeek.map((item, idx) => (
                            <motion.div 
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all group/feature"
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className={`p-2 rounded-lg ${bgColor}/10 ${textColor} group-hover/feature:rotate-6 transition-transform`}>
                                {getIconComponent(item.icon)}
                              </div>
                              <div>
                                <p className="font-semibold text-sm text-gray-800">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Button at the bottom of the card */}
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetStarted(pillar.slug);
                      }}
                      className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
                        ${pillar.slug === 'caring' ? 'bg-pink-500 hover:bg-pink-600' : 
                          pillar.slug === 'education' ? 'bg-blue-500 hover:bg-blue-600' : 
                          pillar.slug === 'building' ? 'bg-green-500 hover:bg-green-600' : 
                          'bg-purple-500 hover:bg-purple-600'}
                        shadow-md hover:shadow-lg`}
                    >
                      Get Started with {pillar.title}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isContactOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3 mb-3 items-end"
          >
            <a
              href="mailto:info@valuemedhealthcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              aria-label="Email"
            >
              <span className="hidden sm:inline-block">Email Us</span>
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+919701876584"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              aria-label="Call Us"
            >
              <span className="hidden sm:inline-block">Call Us</span>
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/919701876584"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
              aria-label="WhatsApp"
            >
              <span className="hidden sm:inline-block">WhatsApp</span>
              <MessageCircle className="h-5 w-5" />
            </a>
          </motion.div>
        )}
        
        <button
          onClick={toggleContact}
          className="bg-primary text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label={isContactOpen ? 'Close contact menu' : 'Contact us'}
        >
          {isContactOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </section>
  );
};

export default CorePillars;
