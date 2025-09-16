import { Card } from "@/components/ui/card";
import { Target, Eye, CheckCircle } from "lucide-react";
import consultingImage from "@/assets/consulting-work.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 medical-section-bg relative overflow-hidden">
      {/* Floating medical icons */}
      <div className="absolute top-20 right-10 opacity-10">
        <div className="animate-float">
          <Target className="h-16 w-16 text-medical-blue" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <div className="animate-bounce-gentle">
          <Eye className="h-12 w-12 text-medical-green" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg">Who We Are</span>
              <h2 className="text-4xl font-bold text-foreground mt-2 mb-6">
                Building Healthcare Excellence for 25+ Years
              </h2>
            </div>
            
            <div className="prose prose-lg mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Value Med Healthcare Solutions, we specialize in building healthcare institutions that combine clinical excellence, regulatory compliance, and operational efficiency. From single-specialty clinics to tertiary-care hospitals, our team provides integrated, end-to-end consulting solutions that bring your healthcare vision to life.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 25 years of leadership in the healthcare industry, we bring deep insights into hospital planning, project execution, accreditation, and long-term operational success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary shadow-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground text-sm">
                      To be the most trusted healthcare consulting partner, delivering value-driven, sustainable, and patient-centric solutions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-medical-teal shadow-card">
                <div className="flex items-start gap-4">
                  <div className="bg-medical-teal/10 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-medical-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground text-sm">
                      To transform healthcare delivery through innovation, expertise, and operational excellence.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="animate-gentle-appear">
            <div className="relative">
              <img 
                src={consultingImage} 
                alt="Healthcare Consulting" 
                className="rounded-2xl shadow-medical w-full"
              />
              
              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-6 bg-white p-6 shadow-medical animate-counter-up">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-medical-green">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Why Choose Value Med */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Value Med?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "25+ Years of Experience in Healthcare Consulting",
              "Integrated Services from Feasibility to Commissioning", 
              "Domain Expertise Across Hospitals, Clinics & Diagnostic Centers",
              "Proven Track Record with NABH/NABL/JCI Readiness",
              "Strong Focus on Cost Efficiency + Clinical Quality",
              "Dedicated Training and Global Medical Education Programs"
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-medical-green flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;