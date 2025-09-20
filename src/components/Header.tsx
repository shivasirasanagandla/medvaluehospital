import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Floating Contact Buttons Component
const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="flex flex-col gap-3 mb-3 items-end">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${method.color} text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
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
        className={`${isOpen ? 'bg-primary' : 'bg-gradient-hero'} text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300`}
        aria-label={isOpen ? 'Close contact menu' : 'Contact us'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Core Pillars", href: "/#pillars" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
            <a href="tel:+919701876584" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span>+91-9701876584</span>
            </a>
            <span className="hidden xs:inline-block text-primary/50">|</span>
            <a href="mailto:info@valuemedhealthcare.com" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <Mail className="h-3 w-3 flex-shrink-0" />
              <span className="truncate max-w-[180px] sm:max-w-none">info@valuemedhealthcare.com</span>
            </a>
          </div>
          <div className="hidden sm:block text-sm">
            <span>25+ Years of Healthcare Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50 transition-shadow duration-300 hover:shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img src="/logo.jpg" alt="Medicover Logo" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">ValueMed</h1>
              <p className="text-sm text-muted-foreground">Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isHash = item.href.includes("#");
              return isHash ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild variant="default" className="hidden md:inline-flex bg-gradient-hero hover:opacity-90">
              <Link to="/start-building">Start Your Project</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="relative">
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link to="/" className="flex items-center gap-2">
                      <img src="/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
                      <span className="font-bold text-lg">ValueMed</span>
                    </Link>
                  </div>
                  <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/90 hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Button className="w-full">Contact Us</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <FloatingContactButtons />
    </>
  );
};

export default Header;