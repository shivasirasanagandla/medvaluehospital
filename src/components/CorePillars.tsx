import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Building2, Heart, GraduationCap, ArrowRight, Wrench, Shield, Lightbulb, Globe, Award, Info, Sparkles, Zap, 
  MessageCircle, Mail, Phone, X, Users, Stethoscope, Baby, AlertTriangle, Brain, Activity, BookOpen,
  CheckCircle, CheckCircle2, Sun, TreePine, Volume2, Droplets
} from "lucide-react";
import hospitalImage from "@/assets/hospital-building.jpg";
import trainingImage from "@/assets/medical-training.jpg";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import buildingImage from '@/assets/consulting-work.jpg';
import patientImage from '@/assets/hero-consulting.jpg';

const CorePillars = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

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

                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="group interactive-hover animate-bounce-gentle"
                    onClick={() => openModal('building')}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Quick Peek
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button asChild variant="default" className="bg-primary text-primary-foreground">
                    <Link to="/pillars/building">Learn more</Link>
                  </Button>
                </div>
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

                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="group interactive-hover animate-bounce-gentle"
                    onClick={() => openModal('caring')}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Quick Peek
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button asChild className="bg-medical-teal text-white">
                    <Link to="/pillars/caring">Learn more</Link>
                  </Button>
                </div>
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

                <Button 
                  variant="outline" 
                  className="group interactive-hover animate-bounce-gentle border-pink-500 text-pink-500 hover:bg-pink-50"
                  onClick={() => openModal('design')}
                >
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

                <div className="flex items-center gap-3">
                  <Button 
                    className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => openModal('training')}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Quick Peek
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/pillars/education">Learn more</Link>
                  </Button>
                </div>
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

      {/* Modals */}
      <Dialog open={activeModal === 'building'} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Building Excellence in Healthcare</DialogTitle>
            <DialogDescription>
              Comprehensive healthcare infrastructure development and management
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <img 
                src={buildingImage} 
                alt="Healthcare Building" 
                className="rounded-lg w-full h-auto shadow-md"
              />
              <h3 className="text-xl font-semibold">Our Approach</h3>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with evidence-based design principles to create healthcare facilities that are both functional and healing-oriented. Our approach ensures that every aspect of the facility supports optimal patient care and operational efficiency.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive project management from concept to completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Integration of smart building technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Sustainable and eco-friendly design solutions</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Building2 className="h-5 w-5" />, text: "Modular Design" },
                    { icon: <Wrench className="h-5 w-5" />, text: "MEP Systems" },
                    { icon: <Shield className="h-5 w-5" />, text: "Safety Standards" },
                    { icon: <Lightbulb className="h-5 w-5" />, text: "Smart Technology" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg">
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Project Timeline</h4>
                <div className="space-y-3">
                  {[
                    { phase: "Planning", duration: "4-6 weeks" },
                    { phase: "Design", duration: "8-12 weeks" },
                    { phase: "Approval", duration: "4-8 weeks" },
                    { phase: "Construction", duration: "12-18 months" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-blue-100 last:border-0">
                      <span className="text-sm text-blue-700">{item.phase}</span>
                      <span className="text-sm font-medium text-blue-900 bg-blue-100 px-2 py-1 rounded">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'caring'} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-medical-teal">Our Caring Approach</DialogTitle>
            <DialogDescription>
              Compassionate care at the heart of everything we do
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <img 
                src={patientImage} 
                alt="Patient Care" 
                className="rounded-lg w-full h-auto shadow-md"
              />
              <h3 className="text-xl font-semibold">Patient-Centered Care</h3>
              <p className="text-muted-foreground">
                Our approach to healthcare is built on the foundation of empathy, respect, and personalized attention. We believe in treating the whole person, not just the condition, and our facilities are designed to support this philosophy.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                <h4 className="font-semibold text-teal-800 mb-3">Core Principles</h4>
                <div className="space-y-3">
                  {[
                    { icon: <Heart className="h-4 w-4" />, text: "Dignity and respect for all patients" },
                    { icon: <Users className="h-4 w-4" />, text: "Family involvement in care" },
                    { icon: <Activity className="h-4 w-4" />, text: "Holistic treatment approaches" },
                    { icon: <Shield className="h-4 w-4" />, text: "Safe and comfortable environments" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="text-teal-500 mt-0.5">{item.icon}</div>
                      <span className="text-sm text-teal-900">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-semibold mb-3">Our Commitment</h4>
                <p className="text-sm text-muted-foreground">
                  We are committed to creating healing environments that support both patients and their families. Our facilities incorporate natural light, soothing colors, and quiet spaces to promote recovery and well-being.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'design'} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-pink-500">Design Philosophy</DialogTitle>
            <DialogDescription>
              Creating spaces that heal and inspire
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <img 
                src="/Learn About Our Design Philosophy.png" 
                alt="Design Philosophy" 
                className="rounded-lg w-full h-auto shadow-md object-cover"
                onError={(e) => {
                  e.currentTarget.src = patientImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <h3 className="text-xl font-semibold">Healing by Design</h3>
              <p className="text-muted-foreground">
                Our design philosophy is rooted in evidence-based principles that create environments supporting healing, reducing stress, and improving outcomes for patients, families, and staff.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                <h4 className="font-semibold text-pink-800 mb-3">Design Elements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Sun className="h-4 w-4" />, text: "Natural Light" },
                    { icon: <TreePine className="h-4 w-4" />, text: "Biophilic Design" },
                    { icon: <Volume2 className="h-4 w-4" />, text: "Acoustic Comfort" },
                    { icon: <Droplets className="h-4 w-4" />, text: "Wayfinding" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="text-pink-500">{item.icon}</div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-semibold mb-2">Design Process</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Needs Assessment",
                    "Concept Development",
                    "Stakeholder Review",
                    "Design Refinement",
                    "Implementation"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="font-medium text-pink-500">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'training'} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-600">Training Programs</DialogTitle>
            <DialogDescription>
              Advancing healthcare through education and professional development
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <img 
                src="/hospital training.jpg" 
                alt="Training Programs" 
                className="rounded-lg w-full h-auto shadow-md object-cover"
                onError={(e) => {
                  e.currentTarget.src = trainingImage;
                  e.currentTarget.onerror = null;
                }}
              />
              <h3 className="text-xl font-semibold">Comprehensive Learning</h3>
              <p className="text-muted-foreground">
                Our training programs are designed to equip healthcare professionals with the latest knowledge and practical skills needed to excel in their fields and provide exceptional patient care.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-3">Program Highlights</h4>
                <ul className="space-y-3">
                  {[
                    "Internationally recognized certifications",
                    "Hands-on clinical training",
                    "Expert faculty with real-world experience",
                    "Flexible learning options",
                    "Career advancement opportunities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border shadow-sm">
                <h4 className="font-semibold mb-3">Upcoming Programs</h4>
                <div className="space-y-3">
                  {[
                    { name: "Advanced Cardiac Life Support", date: "October 15, 2023" },
                    { name: "Pediatric Emergency Care", date: "November 5, 2023" },
                    { name: "Clinical Leadership Program", date: "December 1, 2023" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-0">
                      <div>
                        <h5 className="font-medium text-sm">{item.name}</h5>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs">
                        Register
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
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
