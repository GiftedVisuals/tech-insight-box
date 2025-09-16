import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card-elevated border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AJ</span>
              </div>
              <span className="font-bold text-xl">Alex Johnson</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences 
              through clean code, innovative design, and cutting-edge technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>San Francisco, CA</p>
              <p>alex@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p className="text-primary font-medium">Available for freelance</p>
            </div>
            <Button variant="hero" size="sm" className="group">
              Start a Project
              <Mail className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Alex Johnson. Built with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>and React</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                <span className="text-primary">●</span> Available for work
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:text-primary hover:bg-primary/10"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;