import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  Shield, 
  Zap,
  Cpu,
  Globe,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-primary",
    skills: [
      { name: "React/Next.js", level: 95, years: 4 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "Vue.js/Nuxt", level: 85, years: 3 },
      { name: "Tailwind CSS", level: 92, years: 2 },
      { name: "Three.js/WebGL", level: 78, years: 2 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-secondary",
    skills: [
      { name: "Node.js/Express", level: 88, years: 4 },
      { name: "Python/Django", level: 82, years: 3 },
      { name: "PostgreSQL", level: 85, years: 3 },
      { name: "GraphQL", level: 80, years: 2 },
      { name: "Redis/MongoDB", level: 75, years: 2 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-accent-secondary",
    skills: [
      { name: "AWS/Azure", level: 85, years: 3 },
      { name: "Docker/K8s", level: 80, years: 2 },
      { name: "CI/CD", level: 88, years: 3 },
      { name: "Terraform", level: 70, years: 1 },
      { name: "Monitoring", level: 82, years: 2 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-primary-glow",
    skills: [
      { name: "React Native", level: 85, years: 3 },
      { name: "Flutter", level: 75, years: 2 },
      { name: "iOS/Swift", level: 65, years: 1 },
      { name: "Android/Kotlin", level: 70, years: 2 },
      { name: "PWA", level: 88, years: 3 }
    ]
  }
];

const tools = [
  "Git", "VS Code", "Figma", "Postman", "Jest", "Cypress", 
  "Webpack", "Vite", "ESLint", "Prettier", "Storybook", "Linear"
];

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    badge: "🏆"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2023",
    badge: "☁️"
  },
  {
    name: "React Advanced Patterns",
    issuer: "Meta",
    year: "2023",
    badge: "⚛️"
  },
  {
    name: "Kubernetes Admin",
    issuer: "CNCF",
    year: "2022",
    badge: "🚢"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card-elevated/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiency across modern development stacks, 
            tools, and methodologies acquired through years of hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="bg-card border-border hover:shadow-card transition-all duration-smooth slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.years}y
                          </span>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tools & <span className="text-secondary">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Button key={tool} variant="skill" size="skill" className="hover:scale-105">
                {tool}
              </Button>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & <span className="text-primary">Achievements</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="text-center p-6 bg-card border-border hover:shadow-card transition-all duration-smooth hover:scale-105 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{cert.badge}</div>
                <h4 className="font-semibold text-sm mb-2">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                <Badge variant="outline" className="text-xs">
                  {cert.year}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 fade-in">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-secondary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent-secondary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary-glow mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;