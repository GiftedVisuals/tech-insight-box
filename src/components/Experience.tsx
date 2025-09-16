import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, TrendingUp, Users, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechVision Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Increased application performance by 40% through optimization",
      "Led team of 5 developers on flagship product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Architected real-time chat system handling 10K concurrent users"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis", "Docker"],
    metrics: {
      impact: "40% Performance Boost",
      team: "5 Developers Led",
      users: "100K+ Active Users"
    }
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Austin, TX",
    period: "2021 - 2022",
    type: "Full-time",
    description: "Developed responsive web applications and mobile-first experiences. Collaborated with UX team to implement pixel-perfect designs.",
    achievements: [
      "Built e-commerce platform generating $2M+ annual revenue",
      "Reduced bundle size by 50% through code optimization",
      "Implemented accessibility standards achieving WCAG 2.1 AA",
      "Created reusable component library used across 8 projects"
    ],
    technologies: ["Vue.js", "TypeScript", "Sass", "Jest", "Figma", "Git"],
    metrics: {
      revenue: "$2M+ Generated",
      performance: "50% Bundle Reduction",
      projects: "8 Projects Supported"
    }
  },
  {
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Remote",
    period: "2020 - 2021",
    type: "Contract",
    description: "Built MVP applications for early-stage startups. Rapid prototyping and iterative development in fast-paced environments.",
    achievements: [
      "Delivered 12 MVPs in 8 months with 95% client satisfaction",
      "Reduced development time by 30% using modern frameworks",
      "Integrated 15+ third-party APIs and payment systems",
      "Mentored 3 junior developers through code reviews"
    ],
    technologies: ["React", "Django", "PostgreSQL", "Stripe", "AWS", "MongoDB"],
    metrics: {
      projects: "12 MVPs Delivered",
      satisfaction: "95% Client Rating",
      efficiency: "30% Time Reduction"
    }
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Denver, CO",
    period: "2019 - 2020",
    type: "Full-time",
    description: "Developed client websites and learned modern web development practices. Focused on responsive design and performance optimization.",
    achievements: [
      "Built 25+ client websites with 100% on-time delivery",
      "Improved site speed by 60% through optimization techniques",
      "Learned and implemented modern JavaScript frameworks",
      "Collaborated with design team on 15+ branding projects"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    metrics: {
      websites: "25+ Delivered",
      speed: "60% Improvement",
      delivery: "100% On-time"
    }
  }
];

const achievements = [
  {
    title: "Top Contributor",
    organization: "Open Source Community",
    description: "Contributed to 15+ open source projects with 500+ GitHub stars",
    icon: "🌟"
  },
  {
    title: "Tech Speaker",
    organization: "Developer Conferences",
    description: "Presented at 8 conferences reaching 2000+ developers",
    icon: "🎤"
  },
  {
    title: "Mentor",
    organization: "Code Academy",
    description: "Mentored 50+ junior developers in career advancement",
    icon: "👥"
  },
  {
    title: "Innovation Award",
    organization: "TechVision Inc.",
    description: "Recognized for developing breakthrough real-time architecture",
    icon: "🏆"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through challenging roles where I've delivered impactful solutions, 
            led teams, and continuously grown as a developer and technical leader.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company} 
              className="bg-card-elevated border-border hover:shadow-card transition-all duration-smooth slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                  <div>
                    <CardTitle className="text-xl text-primary mb-1">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(exp.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-muted rounded-lg">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <CardDescription className="text-base">
                  {exp.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Notable <span className="text-secondary">Achievements</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="text-center p-6 bg-card border-border hover:shadow-card transition-all duration-smooth hover:scale-105 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <Button variant="contact" size="lg" className="group">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Full Resume
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;