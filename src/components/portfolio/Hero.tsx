import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import heroProfile from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Abhishek Reddy A N</span>
                <br />
                {/* <span className="text-foreground"></span> */}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Network Security Engineer | Cloud Operations
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
                Securing and automating cloud infrastructure with 2+ years of experience 
                in global cloud operations across EMEA, APAC, Middle East, and US regions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://www.linkedin.com/in/abhishekreddyan/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://github.com/abhishekreddyan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="mailto:abhishekreddyan@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <div className="h-6 w-px bg-border mx-2" />
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => {
                  // Create a downloadable resume file
                  const link = document.createElement('a');
                  link.href = '/resume-abhishek-reddy-an.pdf';
                  link.download = 'Abhishek-Reddy-AN-Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-4 space-y-2 text-sm text-muted-foreground">
              <p>📧 abhishekreddyan@gmail.com</p>
              <p>📱 +91 8088223872</p>
              <p>📍 Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;