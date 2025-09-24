import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Network Security Engineer",
      company: "Betsol India Pvt Ltd",
      period: "Jan 2025 - Present",
      location: "Bengaluru, India",
      type: "Full-time",
      current: true,
      responsibilities: [
        "Configure and manage EC2 instances across multiple AWS regions for optimal performance and security",
        "Design and implement robust VPC architectures with proper network segmentation and security controls",
        "Lead network infrastructure migrations from on-premises to cloud environments",
        "Implement automated firewall configuration and security policy management",
        "Monitor and optimize network performance across global cloud operations",
        "Collaborate with DevOps teams to integrate security best practices into CI/CD pipelines"
      ],
      technologies: ["AWS EC2", "VPC", "Firewalls", "Network Security", "Cloud Migration", "Automation"]
    },
    {
      title: "Associate Network Engineer",
      company: "Betsol Software India Ltd",
      period: "Jun 2023 - Jan 2025",
      location: "Bengaluru, India",
      type: "Full-time",
      current: false,
      responsibilities: [
        "Managed data center network operations ensuring 99.9% uptime across critical infrastructure",
        "Provided technical support for complex TCP/IP, DNS, DHCP, and NAT troubleshooting",
        "Collaborated with cross-functional teams on network design and implementation projects",
        "Configured and maintained Dell network switches and routing protocols including BGP and OSPF",
        "Implemented network monitoring solutions using Grafana and Prometheus",
        "Assisted in firewall upgrades and security policy implementations",
        "Documented network configurations and maintained network topology diagrams"
      ],
      technologies: ["TCP/IP", "DNS", "DHCP", "NAT", "BGP", "OSPF", "Dell Switches", "Grafana", "Prometheus"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building secure and scalable network infrastructure across global cloud operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-16 tech-card hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center gap-2">
                            {exp.title}
                            {exp.current && (
                              <Badge className="bg-success text-white">Current</Badge>
                            )}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Progression Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <div className="text-primary">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Career Growth</p>
              <p className="text-sm text-muted-foreground">Promoted from Associate to Senior Network Security Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;