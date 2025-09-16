import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Building2, Heart, GraduationCap, ArrowRight, Wrench, Shield, Lightbulb, Globe, Award, Info, Sparkles, Zap, 
  MessageCircle, Mail, Phone, X, Users, Stethoscope, Baby, AlertTriangle, Brain, Activity, BookOpen
} from "lucide-react";
import hospitalImage from "@/assets/hospital-building.jpg";
import trainingImage from "@/assets/medical-training.jpg";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { useState, useEffect } from 'react';

const CorePillars = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
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
    <>
      <section id="pillars" className="py-20 bg-background hospital-bg-grid relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-medical-green/10 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Core Foundation</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-medical-teal to-medical-green bg-clip-text text-transparent">
              Our Core Pillars
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three fundamental pillars that define our approach to healthcare excellence
            </p>
          </div>

          <div className="space-y-20">
            {/* Building Pillar */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary p-4 rounded-xl animate-pulse-glow interactive-hover">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-2">
                      Building
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-6 w-6 text-primary cursor-help interactive-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Comprehensive healthcare infrastructure development</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <p className="text-muted-foreground">Designing the Future of Healthcare – One Facility at a Time</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At Value Med, Building goes beyond construction—it means creating future-ready healthcare ecosystems. We collaborate with promoters, clinicians, and investors to design and construct facilities that are efficient, compliant, scalable, and patient-friendly.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Wrench className="h-5 w-5" />, text: "Hospital Master Planning & Concept Design", tooltip: "Strategic planning and conceptual design for optimal healthcare facility layouts" },
                    { icon: <Shield className="h-5 w-5" />, text: "Architectural Design & Engineering", tooltip: "Complete architectural and engineering solutions for healthcare facilities" },
                    { icon: <Lightbulb className="h-5 w-5" />, text: "MEP & Biomedical Engineering Integration", tooltip: "Mechanical, Electrical, Plumbing and biomedical equipment integration" },
                    { icon: <Globe className="h-5 w-5" />, text: "Digital Health Infrastructure", tooltip: "Modern digital infrastructure for healthcare technology integration" }
                  ].map((item, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg interactive-hover medical-card cursor-pointer group">
                            <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{item.text}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                <Button variant="outline" className="group interactive-hover animate-bounce-gentle">
                  <Zap className="mr-2 h-4 w-4" />
                  Learn More About Building
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="animate-scale-in">
                <img 
                  src={hospitalImage} 
                  alt="Hospital Building" 
                  className="rounded-2xl shadow-medical w-full"
                />
              </div>
            </div>

            {/* Caring Pillar */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first animate-scale-in h-full">
                <img 
                  src="/patient care.jpg" 
                  alt="Patient-Centric Healthcare" 
                  className="rounded-2xl shadow-medical w-full h-full object-cover"
                />
              </div>
              <div className="animate-slide-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-medical-teal p-4 rounded-xl animate-pulse-glow interactive-hover">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-2">
                      🤝 Caring
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-6 w-6 text-medical-teal cursor-help interactive-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Putting Patients, People, and Communities at the Heart of Healthcare</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <p className="text-muted-foreground">Healing-focused, compassionate healthcare environments</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe that healthcare infrastructure must be compassionate, inclusive, and healing-focused. Our Caring pillar ensures that both clinical systems and human interactions prioritize patient well-being and staff satisfaction. At Value Med, care is strategic—we help you build healthcare institutions that treat people, not just conditions.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Heart className="h-5 w-5" />, text: "Patient-Centric Design", tooltip: "Designing spaces centered on patient comfort and healing" },
                    { icon: <Shield className="h-5 w-5" />, text: "Global Safety Standards", tooltip: "Implementing international healthcare quality standards" },
                    { icon: <Users className="h-5 w-5" />, text: "Humanized Care Systems", tooltip: "Personalized care approaches for better outcomes" },
                    { icon: <Globe className="h-5 w-5" />, text: "Community Integration", tooltip: "Connecting healthcare with community wellbeing" }
                  ].map((item, index) => (
                    <TooltipProvider key={`caring-${index}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg interactive-hover medical-card cursor-pointer group">
                            <div className="text-medical-teal group-hover:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-medical-teal transition-colors">{item.text}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                <Button variant="outline" className="group interactive-hover animate-bounce-gentle">
                  <Zap className="mr-2 h-4 w-4" />
                  Explore Caring Approach
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Patient-Centric Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first animate-scale-in">
                <img 
                  src="/Patient-Centric Design.jpeg" 
                  alt="Patient-Centric Design" 
                  className="rounded-2xl shadow-medical w-full h-auto"
                />
              </div>
              
              <div className="animate-slide-in-right">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-xl animate-pulse-glow interactive-hover">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-2">
                      Patient-Centric Design
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-6 w-6 text-pink-500 cursor-help interactive-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Designing healthcare experiences around patient needs</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <p className="text-muted-foreground">Putting Patients at the Heart of Healthcare Design</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe in creating healthcare environments that prioritize patient comfort, dignity, and healing. Our patient-centric approach ensures that every aspect of the healthcare journey is designed with the patient's needs and experiences in mind.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Heart className="h-5 w-5" />, text: "Wayfinding & Signage", tooltip: "Intuitive navigation systems for stress-free movement" },
                    { icon: <Users className="h-5 w-5" />, text: "Family Zones", tooltip: "Comfortable spaces for family members" },
                    { icon: <Activity className="h-5 w-5" />, text: "Healing Environment", tooltip: "Design elements that promote recovery" },
                    { icon: <Lightbulb className="h-5 w-5" />, text: "Accessibility", tooltip: "Universal design for all patients" }
                  ].map((item, index) => (
                    <TooltipProvider key={`design-${index}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg interactive-hover medical-card cursor-pointer group">
                            <div className="text-pink-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <span className="text-sm text-muted-foreground group-hover:text-pink-500 transition-colors">{item.text}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                <Button variant="outline" className="group interactive-hover animate-bounce-gentle border-pink-500 text-pink-500 hover:bg-pink-50">
                  <Heart className="mr-2 h-4 w-4" />
                  Learn About Our Design Philosophy
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Education & Training */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl animate-pulse-glow interactive-hover">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold flex items-center gap-2">
                      Education & Training
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-6 w-6 text-purple-500 cursor-help interactive-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Comprehensive healthcare professional development</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <p className="text-muted-foreground">Empowering Healthcare Professionals Through Continuous Learning</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-medical p-6 mb-8">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We provide world-class education and upskilling pathways for healthcare professionals at all levels—equipping them with the competencies to thrive in modern, evidence-based clinical environments.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Postgraduate Medical Pathways (Beyond NEET-PG)</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { 
                        text: "MRCP (UK)", 
                        description: "Membership of the Royal College of Physicians",
                        details: "Comprehensive training in internal medicine and its subspecialties, recognized worldwide."
                      },
                      { 
                        text: "MRCS (UK)", 
                        description: "Membership of the Royal College of Surgeons",
                        details: "Surgical training program covering core knowledge and clinical skills in surgery."
                      },
                      { 
                        text: "MRCOG", 
                        description: "Obstetrics and Gynaecology",
                        details: "Specialized training in women's health, pregnancy, childbirth, and reproductive health."
                      },
                      { 
                        text: "MRCPCh", 
                        description: "Paediatrics",
                        details: "Focused on child healthcare from birth to adolescence, covering all aspects of medical care."
                      },
                      { 
                        text: "MRCEM", 
                        description: "Emergency Medicine",
                        details: "Training in acute care, trauma management, and emergency medical conditions."
                      },
                      { 
                        text: "MRCPsych", 
                        description: "Psychiatry",
                        details: "Specialized training in mental health, psychological disorders, and psychiatric care."
                      },
                      { 
                        text: "FRCR", 
                        description: "Clinical Radiology & Oncology",
                        details: "Advanced training in diagnostic imaging and radiation oncology."
                      },
                      { 
                        text: "FRCEM", 
                        description: "Fellowship of the Royal College of Emergency Medicine",
                        details: "Advanced training in emergency medicine and acute care."
                      }
                    ].map((item, index) => (
                      <TooltipProvider key={`training-${index}`}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group">
                              <div className="text-lg font-semibold text-purple-600 mb-1 group-hover:text-purple-700">{item.text}</div>
                              <div className="text-sm text-gray-600">{item.description}</div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-purple-700 mb-2">{item.text}</h4>
                            <p className="text-sm text-gray-700">{item.details}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>

                <Button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Explore Training Programs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="animate-scale-in">
                <img 
                  src="/medical-training.jpg" 
                  alt="Education & Training" 
                  className="rounded-2xl shadow-medical w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to the asset if the public image is not found
                    e.currentTarget.src = trainingImage;
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <FloatingContactButtons />
      </section>
      
      {/* Floating Contact Menu */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
          {isOpen && (
            <div className="flex flex-col gap-3 mb-3 items-end animate-fade-in-up">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${method.color} text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105`}
                  aria-label={method.name}
                >
                  <span className="hidden sm:inline-block">{method.text}</span>
                  {method.icon}
                </a>
              ))}
            </div>
          )}
          
          <button
            onClick={toggleMenu}
            className={`${isOpen ? 'bg-primary rotate-180' : 'bg-gradient-to-r from-primary to-medical-teal'} text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110`}
            aria-label={isOpen ? 'Close contact menu' : 'Contact us'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </button>
        </div>
      )}
    </>
  );
};

export default CorePillars;
