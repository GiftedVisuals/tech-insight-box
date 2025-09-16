import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  MessageSquare,
  Coffee
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: "alex@example.com",
    action: "mailto:alex@example.com",
    color: "text-primary"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call for urgent matters",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    color: "text-secondary"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in San Francisco",
    value: "San Francisco, CA",
    action: "#",
    color: "text-accent-secondary"
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book a consultation",
    value: "Available Mon-Fri",
    action: "#",
    color: "text-primary-glow"
  }
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    username: "@alexjohnson",
    url: "https://github.com",
    followers: "2.5K"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    username: "/in/alexjohnson",
    url: "https://linkedin.com",
    followers: "3.2K"
  },
  {
    icon: Twitter,
    name: "Twitter",
    username: "@alexjohnsondev",
    url: "https://twitter.com",
    followers: "1.8K"
  }
];

const projectTypes = [
  { name: "Web Application", budget: "$5K - $15K", duration: "2-4 months" },
  { name: "Mobile App", budget: "$8K - $20K", duration: "3-6 months" },
  { name: "E-commerce", budget: "$10K - $25K", duration: "3-5 months" },
  { name: "Consultation", budget: "$150/hour", duration: "Flexible" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-card-elevated/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects, 
            full-time opportunities, and technical consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4 fade-in">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card 
                    key={method.title} 
                    className="p-4 bg-card border-border hover:shadow-card transition-all duration-smooth hover:scale-105 cursor-pointer slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-muted ${method.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-primary">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="p-6 bg-card border-border fade-in">
              <h3 className="font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                Connect with Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={social.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {social.followers}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Project Types */}
            <Card className="p-6 bg-card border-border fade-in">
              <h3 className="font-semibold mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-secondary" />
                Project Types & Rates
              </h3>
              <div className="space-y-3">
                {projectTypes.map((project, index) => (
                  <div key={project.name} className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-medium">{project.name}</h4>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>{project.budget}</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-card fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Start a Conversation</CardTitle>
                <CardDescription>
                  Tell me about your project and let's discuss how we can work together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Type</label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 bg-muted/50 border border-border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select project type</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 bg-muted/50 border border-border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5K</option>
                        <option value="5k-15k">$5K - $15K</option>
                        <option value="15k-30k">$15K - $30K</option>
                        <option value="30k-plus">$30K+</option>
                        <option value="hourly">Hourly Rate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, requirements, and any specific technologies you'd like to use..."
                      required
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="hero" size="lg" className="flex-1 group">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button type="button" variant="contact" size="lg" className="group">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Call
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. For urgent matters, please call directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;