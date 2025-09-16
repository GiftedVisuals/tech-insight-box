import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    metrics: {
      performance: "98/100",
      users: "10K+",
      uptime: "99.9%"
    }
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning insights and interactive data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    metrics: {
      performance: "95/100",
      accuracy: "94.5%",
      speed: "< 200ms"
    }
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with social features and gamification.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "GraphQL", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    metrics: {
      downloads: "50K+",
      rating: "4.8/5",
      retention: "85%"
    }
  },
  {
    id: 4,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative coding environment with syntax highlighting and live sharing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Socket.io", "Monaco Editor", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    metrics: {
      latency: "< 50ms",
      concurrent: "500+",
      uptime: "99.8%"
    }
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    metrics: {
      security: "A+",
      transactions: "1M+",
      efficiency: "99.2%"
    }
  },
  {
    id: 6,
    title: "IoT Home Automation",
    description: "Smart home control system with voice commands and intelligent automation rules.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    technologies: ["Arduino", "React", "MQTT", "Machine Learning", "AWS IoT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    metrics: {
      devices: "200+",
      response: "< 100ms",
      energy: "-30%"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications, 
            demonstrating problem-solving skills and modern development practices.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-elevated transition-all duration-smooth bg-card-elevated border-border slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-smooth"
                />
                
                {/* Project Overlay */}
                <div className="absolute inset-0 bg-gradient-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-smooth flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button variant="hero" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="text-lg font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-card transition-all duration-smooth bg-card border-border slide-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-smooth"
                />
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12 fade-in">
          <Button variant="project" size="lg" className="group">
            <Code className="w-5 h-5 mr-2" />
            View All Projects on GitHub
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;