import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-animate opacity-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-secondary font-mono text-sm tracking-wider">
                  Hello, I'm
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Alex</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Johnson
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Full Stack Developer & UI/UX Designer
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                I craft exceptional digital experiences through clean code, innovative design, 
                and cutting-edge technologies. Specialized in React, Node.js, and modern web development.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30 transform rotate-3"></div>
              <img 
                src={heroImage}
                alt="Alex Johnson - Full Stack Developer"
                className="relative rounded-2xl shadow-elevated object-cover w-full h-[600px] transform hover:scale-105 transition-transform duration-smooth"
              />
              
              {/* Code Snippet Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-card-elevated/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-mono">~/current-project</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-primary">"passionate"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <Button variant="ghost" size="icon" className="animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;