import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Building2, Users, Award, Stethoscope, Settings, Info, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  const highlights = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Hospital Planning & Feasibility",
      description: "Strategic planning for world-class healthcare facilities",
      tooltip: "Market research, financial modeling, and strategic investment planning for new healthcare facilities"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Architecture & Equipment Planning", 
      description: "Comprehensive design and equipment integration",
      tooltip: "Infrastructure planning, clinical layouts, equipment procurement, and workflow optimization"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Licensing & Accreditation",
      description: "NABH / NABL / JCI compliance and certification",
      tooltip: "Statutory approvals, regulatory compliance, and international quality certifications"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Recruitment & Training",
      description: "Expert staffing and professional development",
      tooltip: "Clinical staffing, management hiring, and comprehensive training programs"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Hospital Operations & Commissioning",
      description: "Complete operational setup and launch",
      tooltip: "SOP development, IT integration, and end-to-end commissioning support"
    },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Healthcare Consulting" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-hero/85"></div>
        {/* Subtle medical pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 40px 40px'
        }}></div>
        {/* Floating medical icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Stethoscope className="h-8 w-8 text-white/10" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle">
          <Award className="h-6 w-6 text-white/10" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Building2 className="h-10 w-10 text-white/10" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-gentle">
          <Users className="h-7 w-7 text-white/10" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Content Section */}
          <div className="text-white animate-slide-in-left">
            <div className="mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium interactive-hover animate-pulse-glow">
                <Sparkles className="inline h-4 w-4 mr-2" />
                25+ Years of Healthcare Expertise
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              From Vision to 
              <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse-glow"> Commission</span> – 
              Your End-to-End Hospital Consulting Partner
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Transform your healthcare vision into world-class hospitals, clinics, and diagnostic centers with our comprehensive consulting solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-medical group interactive-hover animate-bounce-gentle"
              >
                👉 Start Your Healthcare Project with Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl backdrop-blur-sm interactive-hover"
                    >
                      <Info className="mr-2 h-5 w-5" />
                      Learn More
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Discover our comprehensive healthcare consulting services</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Service Highlights Cards */}
          <div className="grid gap-4 animate-slide-in-right">
            {highlights.map((service, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card 
                      className="bg-white backdrop-blur-md border-gray-200 p-4 hover:bg-gray-50 transition-all duration-300 group interactive-hover medical-card cursor-pointer shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4 text-foreground">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform">
                          <div className="text-primary">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">{service.title}</h3>
                          <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{service.description}</p>
                        </div>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">{service.tooltip}</p>
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

export default Hero;