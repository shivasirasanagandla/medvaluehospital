import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Hospital Planning & Feasibility",
      "Architecture & Design", 
      "Licensing & Accreditation",
      "Operations & Commissioning",
      "Recruitment & Training",
      "Growth Strategy"
    ],
    industries: [
      "Multi-Specialty Hospitals",
      "Diagnostic Centers",
      "Clinics & Polyclinics", 
      "Medical Colleges",
      "Specialty Hospitals",
      "Digital Health"
    ],
    education: [
      "MRCP (UK)",
      "MRCS (UK)",
      "MRCOG",
      "MRCEM",
      "MRCPsych",
      "FRCR"
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-foreground text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="ValueMed Logo" 
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-white/20" 
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                  ValueMed
                </h1>
                <p className="text-sm sm:text-base text-white/70 mt-1">Healthcare</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">
              Transforming healthcare visions into world-class hospitals, clinics, and diagnostic centers with 25+ years of expertise in healthcare consulting.
            </p>

            <div className="space-y-2 sm:space-y-3 text-sm sm:text-[15px]">
              <a 
                href="https://maps.app.goo.gl/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Bachupally, Hyderabad – 500090, Telangana, India
                </span>
              </a>
              
              <a 
                href="tel:+919701876584" 
                className="flex items-center gap-3 group"
              >
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  +91 97018 76584
                </span>
              </a>
              
              <a 
                href="mailto:info@valuemedhealthcare.com" 
                className="flex items-center gap-3 group"
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  info@valuemedhealthcare.com
                </span>
              </a>
              
              <a 
                href="https://www.valuemedhealthcare.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/90 group-hover:text-white transition-colors">
                  www.valuemedhealthcare.com
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Our Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-sm sm:text-[15px] text-white/80 hover:text-primary transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Industries</h3>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((industry, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-sm sm:text-[15px] text-white/80 hover:text-primary transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Education</h3>
            <ul className="space-y-2.5">
              {footerLinks.education.map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-sm sm:text-[15px] text-white/80 hover:text-primary transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs sm:text-sm text-white/50">
              © {currentYear} ValueMed Healthcare. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs sm:text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Building the Future of Healthcare – One Project at a Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;