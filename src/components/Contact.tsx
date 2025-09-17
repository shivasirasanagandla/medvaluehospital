import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe, Send, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background medical-section-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build the Future of Healthcare – Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your healthcare vision into reality? Get in touch with our expert consultants today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 25 years of healthcare expertise, we're here to help you navigate every step of your healthcare project journey. From initial feasibility to final commissioning, we're your trusted partner.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Above+HDFC+Bank%2C+Kolan+Krishna+Reddy+Complex%2C+Bachupally%2C+Hyderabad+500090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:no-underline"
              >
                <Card className="p-6 hover:shadow-card transition-all duration-300 group hover:ring-2 hover:ring-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Our Location</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Above HDFC Bank, Kolan Krishna Reddy Complex,<br />
                        Bachupally, Hyderabad – 500090
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="tel:+919701876584" className="block hover:no-underline">
                <Card className="p-6 hover:shadow-card transition-all duration-300 group hover:ring-2 hover:ring-medical-teal/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-teal/10 p-3 rounded-lg group-hover:bg-medical-teal/20 transition-colors">
                      <Phone className="h-6 w-6 text-medical-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Phone</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">+91-9701876584</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="mailto:info@valuemedhealthcare.com" className="block hover:no-underline">
                <Card className="p-6 hover:shadow-card transition-all duration-300 group hover:ring-2 hover:ring-medical-green/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-green/10 p-3 rounded-lg group-hover:bg-medical-green/20 transition-colors">
                      <Mail className="h-6 w-6 text-medical-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Email</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">info@valuemedhealthcare.com</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="https://www.valuemedhealthcare.com" target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
                <Card className="p-6 hover:shadow-card transition-all duration-300 group hover:ring-2 hover:ring-trust-blue/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-trust-blue/10 p-3 rounded-lg group-hover:bg-trust-blue/20 transition-colors">
                      <Globe className="h-6 w-6 text-trust-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">Website</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">www.valuemedhealthcare.com</p>
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="p-8 shadow-medical bg-gradient-card">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-hero p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Start Your Project</h3>
                </div>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your healthcare project requirements.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <Input 
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      placeholder="e.g., Hospital, Clinic, Diagnostic Center"
                      className="focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your healthcare project vision, requirements, and timeline..."
                    rows={5}
                    required
                    className="focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero hover:opacity-90 text-lg group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-hero text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Healthcare Journey?</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Join 100+ successful healthcare projects that have trusted ValueMed Healthcare Solutions
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;