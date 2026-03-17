import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { Building2, Users, Award, Code, Briefcase } from 'lucide-react';

const About = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const careerData = [
    {
      company: "PayPal",
      role: "Staff iOS Engineer → Applied AI/ML Engineer",
      period: "2020 – Present",
      location: "San Jose, CA / Remote",
      icon: <Building2 className="h-6 w-6" />,
      highlights: [
        "Project Mercury (2025): Built AI-powered agentic e-commerce platform in 72 hours; presented to SVP of AI, earning immediate backing",
        "Trained 5 SDXL LoRA models achieving 23% loss reduction and 109MB optimized models for production deployment",
        "Agent0 (2025): Deployed autonomous AI agent framework to Venmo & PayPal engineering teams for self-correcting workflows",
        "AI-powered crash detection using RAG pipelines + Vector stores with automated DataDog monitors — adopted team-wide",
        "Pay With Venmo (2024): Reduced end-to-end pay sheet render latency by ~2 seconds, lowering conversion drop-offs",
        "Venmo Gift Cards (2023): Led iOS architecture supporting major merchants like Amazon & Starbucks",
        "QRC Touch-Free Payments (2021): Led moonshot initiative winning $60M CVS contract",
        "QRC Widget Patent (2022): Filed 'Interface Widget Tool for Automatic QR Code Generation' — first team to use SwiftUI for iOS widgets at Venmo",
        "Conducted 500+ technical interviews; Interfaith ERG Chapter Lead (Sikh community)"
      ],
      technologies: ["Swift", "SwiftUI", "CoreML", "Python", "PyTorch", "LangChain", "SDXL", "LoRA", "MCP", "RAG", "CrewAI", "DataDog"]
    },
    {
      company: "Google Stadia",
      role: "iOS Developer/Consultant",
      period: "2019 – 2020",
      location: "Mountain View, CA",
      icon: <Code className="h-6 w-6" />,
      highlights: [
        "Worked on Google Stadia for mobile platforms using Flutter/Dart and native iOS plugins",
        "Implemented Core Bluetooth integration for Stadia controller connectivity and low-latency communication",
        "Utilized Xcode Instruments for performance profiling and CPU/GPU optimization"
      ],
      technologies: ["Flutter", "Dart", "iOS", "Objective-C", "Swift", "Cloud Gaming"]
    },
    {
      company: "Morgan Stanley",
      role: "iOS Developer/Consultant",
      period: "2018 – 2019",
      location: "New York City, NY",
      icon: <Briefcase className="h-6 w-6" />,
      highlights: [
        "Worked on Hybrid (Cordova + Native) Banking and Wealth Management apps for iOS",
        "Developed key features: check-deposit, biometric authentication, certificate-pinning, jailbreak detection",
        "Migrated codebase from 98% Objective-C to 80% Objective-C / 20% Swift"
      ],
      technologies: ["Swift", "Objective-C", "Cordova", "Angular", "iOS", "Banking"]
    },
    {
      company: "Parabit Systems",
      role: "Mobile Developer / R&D",
      period: "2017 - 2018",
      location: "Freeport, New York",
      icon: <Award className="h-6 w-6" />,
      highlights: [
        "R&D for iOS, Android, Cloud, and Blockchain applications",
        "Created internal tool using Bluetooth Low Energy on MMR hardware",
        "Built app from scratch using Swift with MVC-N architecture",
        "Implemented AWS Serverless with NodeJS/Lambda and DynamoDB",
        "Worked with Nordic Semiconductor Chipsets and Google Eddystone Beacons"
      ],
      technologies: ["Swift", "Bluetooth LE", "AWS", "NodeJS", "DynamoDB", "IoT"]
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Career Journey
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A decade of building legendary apps at global scale, from startup innovation 
            to enterprise solutions serving millions of users worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {careerData.map((job, index) => (
                <Spotlight key={index}>
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedJob === index 
                        ? 'bg-card-gradient border-primary/50 shadow-lg' 
                        : 'bg-card/50 hover:bg-card-gradient/50 border-border/50'
                    }`}
                    onClick={() => setSelectedJob(index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          selectedJob === index ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          {job.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{job.company}</CardTitle>
                          <CardDescription className="text-sm">{job.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Spotlight>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-2">
            <Spotlight>
              <Card className="bg-card-gradient border-primary/20 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      {careerData[selectedJob].icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gradient">
                        {careerData[selectedJob].role}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {careerData[selectedJob].company} • {careerData[selectedJob].period}
                      </CardDescription>
                      <CardDescription className="text-sm text-foreground/60">
                        📍 {careerData[selectedJob].location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h4>
                    <ul className="space-y-2">
                      {careerData[selectedJob].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {careerData[selectedJob].technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20">
          <Spotlight>
            <Card className="bg-card-gradient border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient text-center">
                  Engineering Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Scale & Impact</h3>
                    <p className="text-foreground/80">
                      Building systems that serve millions while maintaining performance and reliability.
                    </p>
                  </div>
                  <div>
                    <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                    <p className="text-foreground/80">
                      Bridging cutting-edge AI/ML with practical mobile solutions for real-world problems.
                    </p>
                  </div>
                  <div>
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Leadership</h3>
                    <p className="text-foreground/80">
                      Mentoring engineers, conducting interviews, and fostering inclusive tech communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Spotlight>
        </div>
      </div>
    </section>
  );
};

export default About;

