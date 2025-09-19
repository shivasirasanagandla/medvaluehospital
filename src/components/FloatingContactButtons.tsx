import { useState, useEffect } from "react";
import { MessageCircle, Phone, Mail, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
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

  if (!isScrolled) return null;

  return (
    <>
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
          className={`${isOpen ? 'bg-primary' : 'bg-gradient-to-r from-primary to-medical-teal'} text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110`}
          aria-label={isOpen ? 'Close contact menu' : 'Contact us'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Get a Quote Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-medical-teal text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
        >
          <span className="mr-2">Get a Free Quote</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
};
