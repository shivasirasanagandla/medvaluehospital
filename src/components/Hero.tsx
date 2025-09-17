import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Building2, Users, Award, Stethoscope, Settings, Info, Sparkles, HeartPulse, CheckCircle, ShieldCheck, X, BarChart2, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-consulting.jpg";
import HealthQuiz from './HealthQuiz';

interface HealthGoal {
  id: number;
  name: string;
  current: number;
  target: number;
  unit: string;
}

interface Milestone {
  id: number;
  name: string;
  achieved: boolean;
  date?: string;
  target?: string;
}

interface UserProgress {
  appointments: number;
  nextAppointment: string;
  healthGoals: HealthGoal[];
  milestones: Milestone[];
}

interface HighlightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tooltip: string;
}

const Hero: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [healthScore, setHealthScore] = useState<number | null>(null);
  const [showProgress, setShowProgress] = useState(false);
  const [lastQuizDate, setLastQuizDate] = useState<string | null>(null);
  
  // Sample progress data with dynamic health score integration
  const [userProgress, setUserProgress] = useState<UserProgress>({
    appointments: 3,
    nextAppointment: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
    healthGoals: [
      { id: 1, name: 'Daily Steps', current: 6500, target: 10000, unit: 'steps' },
      { id: 2, name: 'Water Intake', current: 5, target: 8, unit: 'glasses' },
      { id: 3, name: 'Sleep', current: 7, target: 8, unit: 'hours' },
    ],
    milestones: [
      { id: 1, name: 'First Checkup', achieved: true, date: '2023-09-01' },
      { id: 2, name: 'Health Assessment', achieved: true, date: '2023-10-15' },
      { id: 3, name: 'Fitness Goal', achieved: false, target: 'Complete 30 days of exercise' },
    ]
  });

  // Update health goals based on quiz score
  useEffect(() => {
    if (healthScore !== null) {
      const scorePercentage = (healthScore / (3 * 4)) * 100; // 3 questions, max 4 points each
      const newProgress = JSON.parse(JSON.stringify(userProgress)) as UserProgress;
      
      // Update steps goal based on score
      newProgress.healthGoals[0].current = Math.min(
        userProgress.healthGoals[0].target,
        Math.round((scorePercentage / 100) * userProgress.healthGoals[0].target)
      );
      
      // Update water intake goal based on score
      newProgress.healthGoals[1].current = Math.min(
        userProgress.healthGoals[1].target,
        Math.round((scorePercentage / 100) * userProgress.healthGoals[1].target * 1.2) // Slightly more aggressive goal
      );
      
      // Update sleep goal based on score
      newProgress.healthGoals[2].current = Math.min(
        userProgress.healthGoals[2].target,
        userProgress.healthGoals[2].target * 0.8 + ((scorePercentage / 100) * userProgress.healthGoals[2].target * 0.3)
      );
      
      // Update milestones if score is high enough
      if (scorePercentage > 75 && !userProgress.milestones[2].achieved) {
        newProgress.milestones[2] = {
          ...userProgress.milestones[2],
          achieved: true,
          date: new Date().toISOString()
        };
      }
      
      setUserProgress(newProgress);
      setLastQuizDate(new Date().toISOString());
    }
  }, [healthScore]);

  const highlights: HighlightCard[] = [
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
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 2px, transparent 2px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px, 40px 40px'
          }}
        ></div>
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
        <div className="grid grid-cols-1 gap-12 items-center w-full">
          
          {/* Content Section */}
          <div className="text-white animate-slide-in-left">
            <div className="mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium interactive-hover animate-pulse-glow">
                <Sparkles className="inline h-4 w-4 mr-2" />
                From Vision to Commission – Your End-to-End Hospital Consulting Partner
              </span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Redefining Healthcare 
                <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse-glow"> Excellence </span> 
                Through Innovation
              </h1>
              
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                At ValueMed Healthcare, we transform healthcare visions into reality with 25+ years of expertise in hospital planning, design, and operations. Our end-to-end solutions ensure world-class healthcare infrastructure that delivers exceptional patient care.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <HeartPulse className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold text-yellow-300">25+</h3>
                  </div>
                  <p className="text-sm text-white/80">Years of Excellence in Healthcare Consulting</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold text-yellow-300">100+</h3>
                  </div>
                  <p className="text-sm text-white/80">Successful Healthcare Projects</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="h-6 w-6 text-yellow-300" />
                    <h3 className="text-xl font-bold text-yellow-300">100%</h3>
                  </div>
                  <p className="text-sm text-white/80">Regulatory Compliance Success</p>
                </motion.div>
              </div>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold">End-to-End Solutions:</span> From concept to commissioning, we handle every aspect of healthcare facility development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold">Patient-Centric Design:</span> Creating healing environments that prioritize patient comfort and care
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold">Operational Excellence:</span> Implementing efficient workflows and best practices for sustainable healthcare delivery
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              {/* Replacement label for removed buttons */}
              <span className="inline-flex items-center gap-2 bg-white/15 text-white/95 px-4 py-3 rounded-full backdrop-blur-sm border border-white/20 text-sm md:text-base">
                <span role="img" aria-label="start">👉</span>
                <span className="font-medium">Start Your Healthcare Project with Us</span>
              </span>
              
              {/* Keep Learn More button */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-gray-800 text-gray-900 hover:bg-gray-100 hover:text-gray-800 text-lg px-8 py-6 rounded-xl bg-white/90 backdrop-blur-sm interactive-hover group"
                        onClick={() => window.open('http://www.valuemedclinics.com', '_blank', 'noopener,noreferrer')}
                      >
                        <div className="flex items-center">
                          <Info className="h-5 w-5 mr-2" />
                          <span>Learn More</span>
                        </div>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Discover our comprehensive healthcare consulting services</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
            
          </div>

          
          
          {/* Health Progress Tracker */}
          <AnimatePresence>
            {showProgress && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="col-span-full mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2 text-yellow-300" />
                    Your Health Journey
                  </h3>
                  <button 
                    onClick={() => setShowProgress(false)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Health Goals */}
                  <div>
                    <h4 className="font-semibold text-white/90 mb-4">Health Goals</h4>
                    <div className="space-y-4">
                      {userProgress.healthGoals.map((goal) => (
                        <div key={goal.id} className="bg-white/5 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-white/90">{goal.name}</span>
                            <span className="text-sm text-yellow-300">{goal.current} / {goal.target} {goal.unit}</span>
                          </div>
                          <Progress 
                            value={(goal.current / goal.target) * 100} 
                            className="h-2 bg-white/10 [&>div]:bg-yellow-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Milestones */}
                  <div>
                    <h4 className="font-semibold text-white/90 mb-4">Milestones</h4>
                    <div className="space-y-3">
                      {userProgress.milestones.map((milestone) => (
                        <div 
                          key={milestone.id} 
                          className={`flex items-start p-3 rounded-lg ${milestone.achieved ? 'bg-green-900/30 border border-green-500/30' : 'bg-white/5'}`}
                        >
                          <div className={`h-5 w-5 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 ${milestone.achieved ? 'bg-green-500' : 'bg-white/20'}`}>
                            {milestone.achieved ? (
                              <CheckCircle className="h-3.5 w-3.5 text-white" />
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-white/60" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white/90">{milestone.name}</p>
                            <p className="text-xs text-white/60">
                              {milestone.achieved 
                                ? `Completed on ${new Date(milestone.date).toLocaleDateString()}`
                                : milestone.target}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  {lastQuizDate && (
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <p className="text-sm text-yellow-300 mb-1">Last Health Assessment</p>
                      <p className="text-xs text-white/70">
                        Completed on {new Date(lastQuizDate).toLocaleDateString()} • Score: {healthScore}/12
                      </p>
                      <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-yellow-300 h-1.5 rounded-full" 
                          style={{ width: `${(healthScore || 0) / 12 * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">Next Appointment</p>
                      <p className="font-medium text-white">
                        {new Date(userProgress.nextAppointment).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-gray-800 text-gray-900 hover:bg-gray-100 hover:text-gray-800 bg-white/90"
                      size="sm"
                      onClick={() => {
                        // Create a future date for the calendar event (1 week from now)
                        const appointmentDate = new Date();
                        appointmentDate.setDate(appointmentDate.getDate() + 7);
                        
                        // Format date for Google Calendar
                        const formatDate = (date: Date) => {
                          return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                        };
                        
                        const startDate = formatDate(appointmentDate);
                        const endDate = formatDate(new Date(appointmentDate.getTime() + 60 * 60 * 1000)); // 1 hour later
                        
                        // Create Google Calendar URL
                        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&text=Health+Checkup&details=Your+scheduled+health+checkup+appointment`;
                        
                        // Open in new tab
                        window.open(calendarUrl, '_blank');
                      }}
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Health Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl"
            >
              <button 
                onClick={() => setShowQuiz(false)}
                className="absolute -top-10 right-0 text-white hover:text-yellow-300 transition-colors"
                aria-label="Close quiz"
              >
                <X className="h-6 w-6" />
              </button>
              <HealthQuiz onComplete={(score) => {
                setHealthScore(score);
                setShowQuiz(false);
                setShowProgress(true); // Show progress after completing quiz
              }} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;