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
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <img src="/logo.jpg" alt="Medicover Logo" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ValueMed</h1>
                <p className="text-base text-white/70">Healthcare Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming healthcare visions into world-class hospitals, clinics, and diagnostic centers with 25+ years of expertise in healthcare consulting.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bachupally, Hyderabad – 500090</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91-9701876584</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@valuemedhealthcare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary" />
                <span>www.valuemedhealthcare.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Education Programs</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.education.map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © {currentYear} ValueMed Healthcare Solutions. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                Cookie Policy
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