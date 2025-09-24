import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

const About = () => {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      status: "Completed",
      year: "2024"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      status: "In Progress",
      year: "2025"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "SJB Institute of Technology, Bengaluru",
      period: "2019-2023",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Pre-university - Science",
      field: "Science",
      institution: "VBR PU College, Bengaluru",
      period: "2017-2019",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about securing cloud infrastructure and automating network operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Network Security Engineer with over 2 years of experience in global cloud operations, 
                I specialize in managing and securing infrastructure across diverse regions including EMEA, 
                APAC, the Middle East, and US markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from configuring EC2 instances and managing firewalls to designing 
                robust VPC architectures. I have hands-on experience with Dell switches, firewall upgrades, 
                BGP routing protocols, and NAT configurations across both AWS cloud environments and 
                traditional data centers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on transitioning deeper into AWS cloud security, combining my 
                strong network engineering foundation with cloud-native security solutions to build 
                resilient and scalable infrastructure.
              </p>
            </div>

            {/* Current Focus */}
            <div className="tech-card">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Current Focus</h4>
              <p className="text-muted-foreground">
                Advancing my cloud security expertise through AWS certifications while applying 
                Infrastructure as Code practices with Terraform and container orchestration with Kubernetes.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="tech-card border-none">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">{edu.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground">{edu.field}</p>
                          <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {edu.period}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="tech-card border-none">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{cert.name}</h4>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge 
                              variant={cert.status === "Completed" ? "default" : "secondary"}
                              className={cert.status === "Completed" ? "bg-success text-white" : ""}
                            >
                              {cert.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="tech-card border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Based in Bengaluru, India</h4>
                    <p className="text-sm text-muted-foreground">Available for remote and hybrid opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;