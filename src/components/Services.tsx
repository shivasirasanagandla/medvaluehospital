import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Search, 
  Building, 
  Shield, 
  Settings, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  Hammer,
  Award,
  Stethoscope,
  Heart,
  Info,
  Play,
  Zap,
  Target,
  Clock,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Feasibility & Planning",
      color: "primary",
      items: [
        "Market Research & Demand Analysis",
        "Financial Feasibility & ROI Modeling", 
        "Strategic Investment Planning"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Hospital Architecture & Design",
      color: "medical-teal",
      items: [
        "Infrastructure Planning & Clinical Layouts",
        "Equipment Planning & Procurement Assistance",
        "Workflow & Space Optimization"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Licensing & Accreditation", 
      color: "medical-green",
      items: [
        "Statutory Approvals & Regulatory Compliance",
        "NABH / NABL / JCI Accreditation Support",
        "Quality, Safety & SOP Implementation"
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Operations & Commissioning",
      color: "trust-blue",
      items: [
        "SOP & Process Development",
        "IT Infrastructure, HIS, EMR Integration", 
        "End-to-End Commissioning & Staff Orientation"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Recruitment & Training",
      color: "primary",
      items: [
        "Senior Clinical & Management Hiring",
        "Paramedical & Support Staff Recruitment",
        "In-Service Training & Skill Development"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth & Strategy",
      color: "medical-green",
      items: [
        "Branding, Positioning & Marketing Support",
        "Business Process Optimization",
        "Patient Experience & Retention Strategy"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Conceptualization",
      description: "Feasibility study, market demand, investment strategy, and business model design.",
      icon: <FileText className="h-6 w-6" />,
      color: "primary",
      duration: "2-4 weeks",
      details: "Market analysis, financial modeling, strategic planning, and business case development",
      tools: ["Market Research", "Financial Modeling", "Strategic Planning", "Risk Assessment"]
    },
    {
      step: "2", 
      title: "Design & Infrastructure",
      description: "Clinical and architectural planning, equipment mapping, and digital readiness.",
      icon: <Building className="h-6 w-6" />,
      color: "medical-teal",
      duration: "4-8 weeks",
      details: "Architectural design, clinical workflows, equipment planning, and technology integration",
      tools: ["CAD Design", "Workflow Analysis", "Equipment Selection", "IT Planning"]
    },
    {
      step: "3",
      title: "Execution & Implementation", 
      description: "On-site project execution, vendor coordination, infrastructure setup.",
      icon: <Hammer className="h-6 w-6" />,
      color: "medical-green",
      duration: "12-24 weeks",
      details: "Construction oversight, vendor management, installation, and quality control",
      tools: ["Project Management", "Vendor Coordination", "Quality Control", "Progress Tracking"]
    },
    {
      step: "4",
      title: "Compliance & Accreditation",
      description: "Statutory licensing, NABH/NABL/JCI readiness, and SOPs.",
      icon: <Award className="h-6 w-6" />,
      color: "medical-orange",
      duration: "8-12 weeks",
      details: "Regulatory compliance, accreditation preparation, SOP development, and staff training",
      tools: ["Regulatory Compliance", "Accreditation Prep", "SOP Development", "Staff Training"]
    },
    {
      step: "5",
      title: "Hospital Commissioning",
      description: "Recruitment, training, systems setup, trial runs, and official launch.",
      icon: <Settings className="h-6 w-6" />,
      color: "medical-blue",
      duration: "6-10 weeks",
      details: "Staff recruitment, system testing, trial operations, and official launch",
      tools: ["Recruitment", "System Testing", "Trial Operations", "Launch Planning"]
    },
    {
      step: "6",
      title: "Growth & Expansion", 
      description: "Operational excellence, brand visibility, patient loyalty, and scale-up strategy.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "medical-green",
      duration: "Ongoing",
      details: "Performance optimization, marketing support, patient satisfaction, and expansion planning",
      tools: ["Performance Analytics", "Marketing Support", "Patient Feedback", "Expansion Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30 hospital-bg-subtle relative overflow-hidden">
      {/* Floating medical icons */}
      <div className="absolute top-32 left-8 opacity-8">
        <div className="animate-float">
          <Stethoscope className="h-20 w-20 text-medical-blue" />
        </div>
      </div>
      <div className="absolute bottom-32 right-8 opacity-8">
        <div className="animate-bounce-gentle">
          <Heart className="h-16 w-16 text-medical-green" />
        </div>
      </div>
      <div className="absolute top-1/2 left-4 opacity-6">
        <div className="animate-float">
          <Award className="h-14 w-14 text-medical-teal" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        
        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare consulting solutions from concept to commissioning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-medical transition-all duration-300 group animate-fade-in border-l-4"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderLeftColor: `hsl(var(--${service.color}))`
              }}
            >
              <div className={`bg-${service.color}/10 p-4 rounded-xl mb-6 inline-block`}>
                <div className={`text-${service.color}`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-medical-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Our Process */}
        <div id="process" className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Play className="h-5 w-5" />
              <span className="font-semibold">Our Process</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">A Systematic Approach to Healthcare Project Success</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we guide you through every step with precision and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
              <Card 
                      className="p-6 text-center hover:shadow-hover transition-all duration-300 group interactive-hover cursor-pointer animate-slide-up bg-white border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                        <div className={`${
                          step.step === "1" ? "bg-primary" :
                          step.step === "2" ? "bg-medical-teal" :
                          step.step === "3" ? "bg-medical-green" :
                          step.step === "4" ? "bg-red-500" :
                          step.step === "5" ? "bg-medical-blue" :
                          step.step === "6" ? "bg-medical-green" : "bg-primary"
                        } text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold animate-pulse-glow group-hover:scale-110 transition-transform`}>
                    {step.step}
                  </div>
                        <div className={`${
                          step.step === "1" ? "bg-primary/10 group-hover:bg-primary/20" :
                          step.step === "2" ? "bg-medical-teal/10 group-hover:bg-medical-teal/20" :
                          step.step === "3" ? "bg-medical-green/10 group-hover:bg-medical-green/20" :
                          step.step === "4" ? "bg-red-500/10 group-hover:bg-red-500/20" :
                          step.step === "5" ? "bg-medical-blue/10 group-hover:bg-medical-blue/20" :
                          step.step === "6" ? "bg-medical-green/10 group-hover:bg-medical-green/20" : "bg-primary/10 group-hover:bg-primary/20"
                        } p-3 rounded-lg inline-block transition-colors`}>
                          <div className={`${
                            step.step === "1" ? "text-primary" :
                            step.step === "2" ? "text-medical-teal" :
                            step.step === "3" ? "text-medical-green" :
                            step.step === "4" ? "text-red-500" :
                            step.step === "5" ? "text-medical-blue" :
                            step.step === "6" ? "text-medical-green" : "text-primary"
                          } group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                  </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute -top-2 -right-2 bg-gray-100 text-xs px-2 py-1 rounded-full font-medium text-gray-600">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {step.duration}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                      {/* Tools/Tags */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {step.tools.slice(0, 2).map((tool, toolIndex) => (
                          <span key={toolIndex} className={`${
                            step.step === "1" ? "bg-primary/10 text-primary" :
                            step.step === "2" ? "bg-medical-teal/10 text-medical-teal" :
                            step.step === "3" ? "bg-medical-green/10 text-medical-green" :
                            step.step === "4" ? "bg-red-500/10 text-red-500" :
                            step.step === "5" ? "bg-medical-blue/10 text-medical-blue" :
                            step.step === "6" ? "bg-medical-green/10 text-medical-green" : "bg-primary/10 text-primary"
                          } px-2 py-1 rounded text-xs font-medium`}>
                            {tool}
                          </span>
                        ))}
                        {step.tools.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            +{step.tools.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-center text-xs text-muted-foreground">
                        <Info className="h-3 w-3 mr-1" />
                        Hover for details
                      </div>
              </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`${
                          step.step === "1" ? "bg-primary" :
                          step.step === "2" ? "bg-medical-teal" :
                          step.step === "3" ? "bg-medical-green" :
                          step.step === "4" ? "bg-red-500" :
                          step.step === "5" ? "bg-medical-blue" :
                          step.step === "6" ? "bg-medical-green" : "bg-primary"
                        } text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                          {step.step}
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.details}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-foreground">Key Activities:</p>
                        <div className="flex flex-wrap gap-1">
                          {step.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className={`${
                              step.step === "1" ? "bg-primary/20 text-primary" :
                              step.step === "2" ? "bg-medical-teal/20 text-medical-teal" :
                              step.step === "3" ? "bg-medical-green/20 text-medical-green" :
                              step.step === "4" ? "bg-red-500/20 text-red-500" :
                              step.step === "5" ? "bg-medical-blue/20 text-medical-blue" :
                              step.step === "6" ? "bg-medical-green/20 text-medical-green" : "bg-primary/20 text-primary"
                            } px-2 py-1 rounded text-xs`}>
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Duration: {step.duration}
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-medical-green text-white px-6 py-3 rounded-full mb-4 shadow-lg">
              <Target className="h-5 w-5" />
              <span className="font-semibold">Industries We Serve</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Comprehensive Healthcare Solutions</h3>
            <p className="text-muted-foreground">From single-specialty clinics to large hospital systems</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                name: "Super-Specialty & Multi-Specialty Hospitals",
                icon: <Building className="h-5 w-5" />,
                description: "Large-scale hospital systems with multiple specialties",
                features: ["Multi-specialty Integration", "Advanced Equipment", "Large Capacity"]
              },
              { 
                name: "Diagnostic & Imaging Centers", 
                icon: <Search className="h-5 w-5" />,
                description: "Specialized diagnostic and medical imaging facilities",
                features: ["Advanced Imaging", "Quick Diagnostics", "Specialized Equipment"]
              },
              { 
                name: "Clinics & Polyclinics",
                icon: <Stethoscope className="h-5 w-5" />,
                description: "Primary care and specialized outpatient facilities",
                features: ["Outpatient Care", "Multiple Specialties", "Community Focus"]
              },
              { 
                name: "Day-Care & Ambulatory Centers",
                icon: <Clock className="h-5 w-5" />,
                description: "Same-day surgical and ambulatory care centers",
                features: ["Same-day Surgery", "Quick Recovery", "Modern Facilities"]
              },
              { 
                name: "Medical Colleges & Teaching Institutions",
                icon: <Award className="h-5 w-5" />,
                description: "Educational institutions with clinical training programs",
                features: ["Academic Integration", "Research Facilities", "Training Programs"]
              },
              { 
                name: "Cardiac, Neuro, and Oncology Hospitals",
                icon: <Heart className="h-5 w-5" />,
                description: "Specialized hospitals for critical care specialties",
                features: ["Specialized Care", "Advanced Technology", "Expert Teams"]
              },
              { 
                name: "Gastroenterology & Urology Centers",
                icon: <Settings className="h-5 w-5" />,
                description: "Specialized centers for digestive and urological care",
                features: ["Specialized Procedures", "Modern Equipment", "Expert Care"]
              },
              { 
                name: "Mother & Child Hospitals",
                icon: <Heart className="h-5 w-5" />,
                description: "Specialized facilities for maternal and pediatric care",
                features: ["Maternal Care", "Pediatric Services", "Family-centered"]
              },
              { 
                name: "Digital Health, Telemedicine & HIS Integration",
                icon: <Zap className="h-5 w-5" />,
                description: "Technology-driven healthcare solutions and telemedicine",
                features: ["Digital Integration", "Telemedicine", "HIS Systems"]
              }
            ].map((industry, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-all duration-300 group interactive-hover cursor-pointer border border-gray-100 hover:border-primary/20"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform">
                        <div className="text-primary">
                          {industry.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors leading-tight mb-1">
                          {industry.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Info className="h-3 w-3" />
                          Hover for details
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform mt-1" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <div className="text-primary">
                            {industry.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-sm">{industry.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{industry.description}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-foreground">Key Features:</p>
                        <div className="space-y-1">
                          {industry.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-medical-green" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
              </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;