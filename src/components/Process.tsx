import { useState } from 'react';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      title: "Discovery", 
      description: "We begin by thoroughly understanding your goals, constraints, and success metrics to ensure alignment with your vision.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
    },
    { 
      title: "Planning", 
      description: "Our experts create a detailed roadmap with clear timelines and resource allocation for seamless project execution.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
    },
    { 
      title: "Design", 
      description: "We architect innovative solutions that comply with healthcare regulations and industry best practices.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
            </svg>
    },
    { 
      title: "Implementation", 
      description: "Our team executes the plan with rigorous quality checks and continuous stakeholder collaboration.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
    },
    { 
      title: "Handover", 
      description: "We ensure a smooth transition with comprehensive training and ongoing support for your team.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Structured Approach to Excellence</h2>
          <p className="text-lg text-gray-600">Our proven methodology ensures your healthcare project's success from concept to completion.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Steps Navigation */}
          <div className="md:w-1/3 space-y-2">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                  activeStep === index 
                    ? 'bg-white shadow-lg border-l-4 border-purple-600 transform -translate-x-1' 
                    : 'hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep === index 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500">Step {index + 1}</p>
                </div>
                <ChevronRight className={`ml-auto h-5 w-5 ${
                  activeStep === index ? 'text-purple-600' : 'text-gray-400'
                }`} />
              </button>
            ))}
          </div>
          
          {/* Active Step Content */}
          <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                {steps[activeStep].icon}
              </div>
              <div>
                <span className="text-sm font-medium text-purple-600">Step {activeStep + 1} of {steps.length}</span>
                <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">{steps[activeStep].description}</p>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
                  activeStep === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <ArrowRight className="h-4 w-4 transform rotate-180" />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array(steps.length).fill(0).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeStep ? 'bg-purple-600 w-6' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg ${
                  activeStep === steps.length - 1
                    ? 'bg-purple-100 text-purple-400 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {activeStep === steps.length - 1 ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Completed
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
