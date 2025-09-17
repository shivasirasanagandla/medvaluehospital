import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Heart, GraduationCap, Award, ArrowRight, Zap, Info, Sparkles,
  Wrench, Shield, Lightbulb, Globe, Users, Stethoscope, X, MessageCircle, Mail, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Import images
import hospitalImage from '@/assets/hospital-building.jpg';
import trainingImage from '@/assets/medical-training.jpg';
import buildingImage from '@/assets/consulting-work.jpg';
import patientImage from '@/assets/hero-consulting.jpg';

const CorePillars = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const pillars = [
    {
      id: 'building',
      title: 'Building',
      icon: <Building2 className="h-6 w-6" />,
      description: 'Creating future-ready healthcare ecosystems through innovative design and construction.',
      color: 'from-blue-500 to-cyan-400',
      features: [
        { icon: <Wrench className="h-5 w-5" />, text: 'Hospital Master Planning', tooltip: 'Strategic planning for healthcare facilities' },
        { icon: <Shield className="h-5 w-5" />, text: 'Architectural Design', tooltip: 'Complete architectural solutions' },
        { icon: <Lightbulb className="h-5 w-5" />, text: 'Engineering Integration', tooltip: 'MEP & biomedical engineering' },
        { icon: <Globe className="h-5 w-5" />, text: 'Digital Infrastructure', tooltip: 'Modern healthcare technology' }
      ]
    },
    {
      id: 'caring',
      title: 'Caring',
      icon: <Heart className="h-6 w-6" />,
      description: 'Putting patients, people, and communities at the heart of healthcare.',
      color: 'from-pink-500 to-rose-400',
      features: [
        { icon: <Heart className="h-5 w-5" />, text: 'Patient-Centric Design', tooltip: 'Healing-focused environments' },
        { icon: <Shield className="h-5 w-5" />, text: 'Safety Standards', tooltip: 'Global healthcare quality' },
        { icon: <Users className="h-5 w-5" />, text: 'Care Systems', tooltip: 'Personalized care approaches' },
        { icon: <Globe className="h-5 w-5" />, text: 'Community Health', tooltip: 'Integrated wellbeing solutions' }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap className="h-6 w-6" />,
      description: 'Empowering healthcare professionals through continuous learning and development.',
      color: 'from-purple-500 to-indigo-400',
      features: [
        { icon: <GraduationCap className="h-5 w-5" />, text: 'Medical Training', tooltip: 'Clinical skills development' },
        { icon: <Users className="h-5 w-5" />, text: 'Team Development', tooltip: 'Leadership and teamwork' },
        { icon: <Lightbulb className="h-5 w-5" />, text: 'Innovation', tooltip: 'Latest medical advancements' },
        { icon: <Globe className="h-5 w-5" />, text: 'Global Standards', tooltip: 'International best practices' }
      ]
    },
    {
      id: 'excellence',
      title: 'Excellence',
      icon: <Award className="h-6 w-6" />,
      description: 'Delivering exceptional quality and performance in healthcare infrastructure.',
      color: 'from-amber-500 to-yellow-400',
      features: [
        { icon: <Award className="h-5 w-5" />, text: 'Quality Assurance', tooltip: 'Highest standards' },
        { icon: <Shield className="h-5 w-5" />, text: 'Compliance', tooltip: 'Regulatory adherence' },
        { icon: <Lightbulb className="h-5 w-5" />, text: 'Innovation', tooltip: 'Cutting-edge solutions' },
        { icon: <Globe className="h-5 w-5" />, text: 'Sustainability', tooltip: 'Eco-friendly practices' }
      ]
    }
  ];

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-5 w-5" />,
      url: 'https://wa.me/919701876584',
      color: 'bg-green-500 hover:bg-green-600',
      text: 'Chat on WhatsApp'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:info@valuemedhealthcare.com',
      color: 'bg-red-500 hover:bg-red-600',
      text: 'Send Email'
    },
    {
      name: 'Call',
      icon: <Phone className="h-5 w-5" />,
      url: 'tel:+919701876584',
      color: 'bg-blue-500 hover:bg-blue-600',
      text: 'Call Us'
    }
  ];

  return (
    <section id="pillars" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-500 text-white px-6 py-2.5 rounded-full mb-6 shadow-lg">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium text-sm sm:text-base">Our Core Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Pillars of Healthcare Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Built on decades of healthcare expertise, our four pillars form the foundation of every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white/5 to-white/[0.03] rounded-2xl p-6 sm:p-7 lg:p-8 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${pillar.color}/10 ${pillar.color}/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(pillar.icon, { 
                  className: `h-6 w-6 ${pillar.color.replace('from-', 'text-').replace(' to-', '/60')}`
                })}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-teal-500 transition-all duration-500">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 flex-grow">
                {pillar.description}
              </p>

              <div className="space-y-3 mb-6">
                {pillar.features.map((feature, i) => (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-default">
                          <div className={`text-${pillar.color.split(' ')[0].replace('from-', '')} group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature.text}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{feature.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <Button 
                  variant="outline" 
                  className="w-full group interactive-hover"
                  onClick={() => openModal(pillar.id)}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Floating Buttons */}
      <div className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col gap-3 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${method.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={method.text}
          >
            <span className="sr-only">{method.text}</span>
            {method.icon}
          </motion.a>
        ))}
      </div>

      {/* Modals */}
      {pillars.map((pillar) => (
        <Dialog key={pillar.id} open={activeModal === pillar.id} onOpenChange={closeModal}>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${pillar.color} text-white`}>
                  {pillar.icon}
                </div>
                {pillar.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {pillar.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    {pillar.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 h-5 w-5 text-${pillar.color.split(' ')[0].replace('from-', '')}`}>
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{feature.text}</p>
                          <p className="text-sm text-muted-foreground">{feature.tooltip}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3">Get in Touch</h4>
                  <p className="text-muted-foreground mb-4">
                    Learn more about how our {pillar.title.toLowerCase()} services can benefit your healthcare facility.
                  </p>
                  <div className="space-y-3">
                    {contactMethods.map((method, i) => (
                      <a
                        key={i}
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${method.color} text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm font-medium transition-colors`}
                      >
                        {method.icon}
                        {method.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full sm:w-auto">
                  <Link to={`/services#${pillar.id}`}>
                    View Full Service Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default CorePillars;
