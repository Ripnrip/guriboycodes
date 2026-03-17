import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { ExternalLink, Github, Play, Smartphone, Brain, Search, Heart, GraduationCap, Dumbbell, Car, Newspaper, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project Mercury",
      description: "AI-powered agentic e-commerce platform for merchant automation at PayPal",
      longDescription: "Built fully functional prototype in 72 hours; presented to SVP of AI, earning immediate backing and leading a high-velocity team. Trained five SDXL LoRA models achieving 23% loss reduction and 109MB optimized models for production deployment. AI-powered agentic e-commerce platform for merchant automation at PayPal.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Python", "SDXL", "LoRA", "GraphRAG", "MCP", "LangChain", "AI/ML", "MLOps"],
      category: "AI/ML",
      featured: true,
      link: null,
      github: null
    },
    {
      id: 2,
      title: "Ethereal Dimension",
      description: "AI/ML & Spatial Computing platform — Austin DoT barricade detection & Hylios AR room scanner",
      longDescription: "Austin DoT Partnership: Built computer vision system for real-time barricade detection & compliance using YOLO and CoreML. Hylios: AR room scanner using RoomPlan/ARKit for 3D spatial intelligence — available on App Store.",
      icon: <Play className="h-6 w-6" />,
      technologies: ["YOLO", "CoreML", "ARKit", "RoomPlan", "Computer Vision", "Swift"],
      category: "AI/ML",
      featured: true,
      link: "https://etherealdimension.io/",
      github: "https://github.com/Ripnrip/EtherealDimension"
    },
    {
      id: 3,
      title: "VectorVerse Evolve",
      description: "AI Automation & SEO — fully automated social media platform with agentic SEO strategist",
      longDescription: "Content Pipeline: Fully automated social media platform with n8n workflows & Strapi CMS. 3-stage pipeline: Intelligence → Ideation → Generation. Agentic SEO: AI-powered SEO strategist with keyword research, geographic targeting & magic reports.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["n8n", "Strapi", "Next.js", "AI/ML", "SEO", "Automation"],
      category: "AI/ML",
      featured: true,
      link: null,
      github: "https://github.com/Ripnrip"
    },
    {
      id: 4,
      title: "Rosicrucian Knowledge Explorer",
      description: "Full-stack RAG search engine for 73K+ vectors from digests, books, symposiums, podcasts, YouTube",
      longDescription: "Full-stack RAG search engine for 73K+ vectors from digests, books, symposiums, podcasts, YouTube videos. PDF viewer with page-jump & highlighting, video and podcast player with timestamp seeking. Qdrant + OpenAI + R2. 60-test suite. Amplitude analytics.",
      icon: <Search className="h-6 w-6" />,
      technologies: ["Next.js", "Qdrant", "R2", "OpenAI", "Supabase", "RAG"],
      category: "AI/ML",
      featured: true,
      link: "https://rosicrucian-knowledge-explorer.vercel.app/",
      github: "https://github.com/Ripnrip/etherealsearch-frontend"
    },
    {
      id: 5,
      title: "Aron - AI Fitness App",
      description: "AI-powered fitness app with ML body pose detection, AR markers, and Garmin wearables. 93%+ accuracy.",
      longDescription: "Built at HackZurich 2021. AI-powered fitness mobile app using CreateML, CoreML, ARKit, SwiftUI, Combine, and RealityKit. Detects body pose feature points, places AR markers on points of interest, and understands workout activity in realtime. Training dataset built from scratch — 50 pushups, 50 squats, 50 jumping-jacks each. Garmin wearables for heart-rate, energy, and oxidation levels. ML model achieved 93%+ accuracy in under 24 hours. Live feedback for form correction.",
      icon: <Dumbbell className="h-6 w-6" />,
      technologies: ["CreateML", "CoreML", "ARKit", "SwiftUI", "Combine", "RealityKit", "Garmin SDK"],
      category: "Mobile",
      featured: true,
      link: "https://devpost.com/software/aron-app-make-wellness-fitness-better",
      github: "https://github.com/Ripnrip/ARon",
      youtube: "https://www.youtube.com/watch?v=56jSyTk24VE"
    },
    {
      id: 6,
      title: "Carly - AR Car Configurator",
      description: "AR car configurator with voice commands, ARKit, CoreML, and Credit Suisse/AMAG APIs. HackZurich 2018 Finalist.",
      longDescription: "Built at HackZurich 2018. AR car configurator that lets customers design cars in augmented reality with voice commands. Starting point can be a car seen on the street. ARKit for 3D car models, CoreML for image detection, Apple Speech Framework for voice input, AMAG API for vehicle data, Credit Suisse API for financing calculations. Featured in an interview with Credit Suisse.",
      icon: <Car className="h-6 w-6" />,
      technologies: ["ARKit", "CoreML", "Swift", "Speech Framework", "Credit Suisse API", "AMAG API", "Azure"],
      category: "Mobile",
      featured: false,
      link: "https://devpost.com/software/cARly",
      github: null
    },
    {
      id: 7,
      title: "Agentic News Pipeline",
      description: "AI news content transformation pipeline with multi-agent orchestration",
      longDescription: "A news content transformation pipeline using AI agents for content curation, summarization, and distribution. Built with modern agentic AI patterns for automated news processing.",
      icon: <Newspaper className="h-6 w-6" />,
      technologies: ["AI Agents", "Python", "LangChain", "Automation"],
      category: "AI/ML",
      featured: false,
      link: null,
      github: "https://github.com/Ripnrip/Agentic-News-Pipeline"
    },
    {
      id: 8,
      title: "Flow - Dynamic Island",
      description: "Dynamic Island flow visualization for iOS with Live Activities",
      longDescription: "iOS app showcasing Dynamic Island and Live Activities capabilities with beautiful flow visualizations. Demonstrates advanced iOS 16+ features including ActivityKit and WidgetKit integration.",
      icon: <Zap className="h-6 w-6" />,
      technologies: ["Swift", "SwiftUI", "ActivityKit", "WidgetKit", "Dynamic Island"],
      category: "Mobile",
      featured: false,
      link: null,
      github: "https://github.com/Ripnrip/Flow"
    },
    {
      id: 9,
      title: "Gurdwara Langar App",
      description: "Community app for Sikh temple Langar service coordination and education",
      longDescription: "An interactive application designed for the Sikh community to coordinate Langar (community kitchen) services at Gurdwaras. Features gamification, educational content about Sikh culture and the Langar tradition, and community engagement tools.",
      icon: <Heart className="h-6 w-6" />,
      technologies: ["React Native", "Gamification", "Education", "Community"],
      category: "Community",
      featured: false,
      link: null,
      github: "https://github.com/Ripnrip/GurdwaraLangarApp"
    },
    {
      id: 10,
      title: "ZAI Vision Studio",
      description: "Multi-platform GLSL shader visualization studio",
      longDescription: "Multi-platform GLSL shader visualization studio for creating and experimenting with GPU-accelerated visual effects. Supports real-time shader editing and preview across platforms.",
      icon: <Play className="h-6 w-6" />,
      technologies: ["GLSL", "Shaders", "GPU", "Multi-platform", "Graphics"],
      category: "Creative",
      featured: false,
      link: null,
      github: "https://github.com/Ripnrip/zai-vision-studio"
    },
    {
      id: 11,
      title: "Flutter Apps Suite",
      description: "Vowel Sound Trainer and Parenting App for mobile learning",
      longDescription: "A collection of educational mobile applications including a Vowel Sound Trainer for language learning and a comprehensive Parenting App with resources and tools for modern parents.",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["Flutter", "Dart", "Mobile", "Education", "Firebase"],
      category: "Mobile",
      featured: false,
      link: null,
      github: null
    },
    {
      id: 12,
      title: "CTE Advisory Board",
      description: "Industry advisory role guiding high school tech curriculum",
      longDescription: "Serving on the Career and Technical Education (CTE) Advisory Board to guide high school technology curriculum development, ensuring students receive relevant, industry-aligned education in computer science and technology.",
      icon: <GraduationCap className="h-6 w-6" />,
      technologies: ["Education", "Curriculum", "Mentorship", "Industry"],
      category: "Community",
      featured: false,
      link: null,
      github: null
    }
  ];

  const categories = ["All", "AI/ML", "Mobile", "Creative", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI/ML, mobile development, 
            creative storytelling, and community impact initiatives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-primary/50 text-foreground hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Spotlight key={project.id}>
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 hover:scale-105 ${
                  project.featured 
                    ? 'bg-card-gradient border-primary/50' 
                    : 'bg-card/80 hover:bg-card-gradient/50 border-border/50'
                } hover:border-primary/50 hover:shadow-lg`}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-primary/20">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-foreground/80 mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-foreground/70">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-foreground/70">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}>
                        <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}>
                        <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer"
                         onClick={(e) => e.stopPropagation()}>
                        <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Play className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          ))}
        </div>

        {/* Project Modal/Detail View */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedProject(null)}>
            <Spotlight>
              <Card className="max-w-2xl w-full bg-card-gradient border-primary/50 max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gradient">{selectedProject.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-primary/20">
                          {selectedProject.category}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedProject(null)}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Embedded YouTube Video in Modal */}
                  {selectedProject.youtube && (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${selectedProject.youtube.split('v=')[1]}`}
                        title={`${selectedProject.title} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}
                    {selectedProject.youtube && (
                      <a href={selectedProject.youtube} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <Play className="h-4 w-4 mr-2" />
                          YouTube Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
