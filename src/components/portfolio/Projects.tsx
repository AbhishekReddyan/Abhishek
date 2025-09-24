import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GitBranch, 
  Award, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap,
  ExternalLink,
  Github
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Implementation",
      description: "Implemented a comprehensive CI/CD pipeline using GitHub Actions for a microservices application deployed on Kubernetes (EKS).",
      fullDescription: "Designed and implemented an automated deployment pipeline that streamlined the development workflow for a complex microservices architecture. The solution included automated testing, security scanning, and progressive deployment strategies.",
      impact: "Reduced application deployment time by 60%",
      impactValue: "60%",
      impactMetric: "Deployment Time Reduction",
      technologies: ["GitHub Actions", "Kubernetes", "EKS", "Docker", "Terraform"],
      type: "project",
      icon: <GitBranch className="w-6 h-6" />,
      features: [
        "Automated testing and quality gates",
        "Security vulnerability scanning",
        "Blue-green deployment strategy",
        "Infrastructure as Code integration",
        "Monitoring and alerting setup"
      ]
    },
    {
      title: "Infrastructure Automation",
      description: "Automated cloud infrastructure provisioning and configuration using Terraform across multiple AWS regions.",
      fullDescription: "Developed a comprehensive Infrastructure as Code solution that standardized and automated the provisioning of cloud resources, ensuring consistency and reducing manual configuration errors.",
      impact: "Reduced manual setup efforts by 80%",
      impactValue: "80%",
      impactMetric: "Manual Effort Reduction",
      technologies: ["Terraform", "AWS", "CloudFormation", "Python", "Ansible"],
      type: "project",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Multi-region deployment automation",
        "Resource tagging and cost optimization",
        "Security compliance checks",
        "Automated backup configurations",
        "Environment-specific configurations"
      ]
    }
  ];

  const achievements = [
    {
      title: "Spot Award Q1 2025",
      description: "Awarded for driving a key network infrastructure project that significantly improved network stability and performance.",
      impact: "Enhanced network uptime by 30%",
      impactValue: "30%",
      impactMetric: "Network Uptime Improvement",
      type: "achievement",
      icon: <Award className="w-6 h-6" />,
      quarter: "Q1 2025",
      category: "Excellence in Network Security"
    },
    {
      title: "Team Excellence Award Q2 2024",
      description: "Recognized for outstanding contributions to optimizing multi-region cloud operations and improving team collaboration.",
      impact: "Improved team efficiency and cross-region coordination",
      impactValue: "Multi-region",
      impactMetric: "Operations Optimization",
      type: "achievement",
      icon: <TrendingUp className="w-6 h-6" />,
      quarter: "Q2 2024",
      category: "Team Leadership & Collaboration"
    }
  ];

  const allItems = [...projects, ...achievements];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Projects & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Impactful solutions and recognition for excellence in network security and cloud operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {allItems.map((item, index) => (
            <Card key={index} className="tech-card hover:scale-[1.02] transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`text-primary group-hover:scale-110 transition-transform ${
                      item.type === 'achievement' ? 'text-warning' : 'text-primary'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      {item.type === 'achievement' && 'quarter' in item && (
                        <Badge variant="outline" className="mt-2">
                          {item.quarter}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {item.type === 'project' && (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Impact Metrics */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm font-semibold text-foreground">Impact</span>
                  </div>
                  <p className="text-success font-semibold">{item.impact}</p>
                  {item.impactMetric && (
                    <p className="text-xs text-muted-foreground mt-1">{item.impactMetric}</p>
                  )}
                </div>

                {/* Technologies or Category */}
                <div>
                  {item.type === 'project' && 'technologies' in item ? (
                    <>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </>
                  ) : 'category' in item ? (
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                    </div>
                  ) : null}
                </div>

                {/* Project Features */}
                {item.type === 'project' && 'features' in item && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Clock className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-semibold text-foreground">Ready for new challenges</p>
              <p className="text-sm text-muted-foreground">Let's build something amazing together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;