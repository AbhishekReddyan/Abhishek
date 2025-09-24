import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Cloud, 
  Code2, 
  Container, 
  Shield, 
  Users,
  Clock,
  Target,
  Lightbulb,
  MessageSquare,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Routing & Switching",
      icon: <Network className="w-6 h-6" />,
      skills: [
        "BGP", "OSPF", "EIGRP", "VLANs", "NAT", "ACLs", 
        "TCP/IP", "DNS", "DHCP", "ARP", "LAN/WAN Design", "Network Troubleshooting"
      ],
      color: "tech-blue"
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "AWS EC2", "S3", "IAM", "VPC", "CloudFormation", "Load Balancers",
        "Lambda", "RDS", "EKS", "ECS", "Azure VM", "Azure AD", "Virtual Networks", "Azure Storage"
      ],
      color: "primary"
    },
    {
      title: "Infrastructure as Code",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "Terraform", "CloudFormation", "Infrastructure Automation", "Configuration Management"
      ],
      color: "accent"
    },
    {
      title: "Containerization",
      icon: <Container className="w-6 h-6" />,
      skills: [
        "Docker", "Docker Compose", "Docker Swarm", "Kubernetes", "Container Orchestration"
      ],
      color: "tech-purple"
    },
    {
      title: "Programming & Tools",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "Python", "Git", "GitHub", "Grafana", "Prometheus", "Visual Studio Code", "Automation Scripts"
      ],
      color: "success"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "Network Security", "Firewall Configuration", "Security Monitoring", "Vulnerability Assessment"
      ],
      color: "warning"
    }
  ];

  const softSkills = [
    { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
    { name: "Leadership", icon: <Target className="w-4 h-4" /> },
    { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
    { name: "Adaptability", icon: <Zap className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern cloud infrastructure and network security
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="tech-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className={`text-${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="tech-card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Soft Skills</h3>
            <p className="text-muted-foreground">Essential qualities for effective collaboration and leadership</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Specializing in Cloud Security & Network Automation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;