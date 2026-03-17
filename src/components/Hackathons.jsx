import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { AnimatedCounter } from '@/components/ui/animated-counter.jsx';
import { Trophy, MapPin, Calendar, Users, Tv, Award, Globe, Code, ExternalLink, Github, Play, Video, Sparkles } from 'lucide-react';

const Hackathons = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const hackathons = [
    {
      id: 1,
      name: "HackZurich 2022",
      year: "2022",
      location: "Zurich, Switzerland",
      result: "🥇 1st Place",
      participants: "400+",
      project: "Elevate - AR Passenger Experience",
      description: "#1 Winner of the Schindler Group challenge. AR-powered elevator experience with image detection.",
      longDescription: "Won #1 for the Schindler Group challenge at HackZurich 2022. Using augmented reality and image detection, the team turned a short elevator trip into a hub for finding local happenings and even games. The project transformed a typically mundane experience into an interactive, technology-fueled journey.",
      technologies: ["Augmented Reality", "Image Detection", "iOS", "Swift", "ARKit"],
      media: "LinkedIn Video Feature",
      featured: true,
      flag: "🇨🇭",
      team: ["João B. S. Carvalho", "Roman", "Wael William Zakhari ABDELMALEK", "Thuong Tran"],
      links: {
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6985326800461537280/",
        project: "https://app.creatorspace.dev/nexusmukul/projects/elate"
      }
    },
    {
      id: 2,
      name: "HackZurich 2021",
      year: "2021",
      location: "Zurich, Switzerland",
      result: "🏆 Built Aron AI",
      participants: "400+",
      project: "Aron - AI Fitness App",
      description: "AI-powered fitness app using ML body pose detection, AR markers, and Garmin wearables. 93%+ ML accuracy.",
      longDescription: "Built Aron, an AI-powered fitness mobile application that uses machine learning and augmented reality to detect body pose feature points, places markers on points of interest, and understands workout activity in realtime. The team built the training dataset from scratch — recording 50 pushups, 50 squats, and 50 jumping-jacks each. Leveraged Garmin wearables for heart-rate, energy, and oxidation levels. The ML model achieved 93%+ accuracy in under 24 hours. Live feedback lets users know when to pause, fix form, or push harder.",
      technologies: ["CreateML", "CoreML", "ARKit", "SwiftUI", "Combine", "RealityKit", "Garmin SDK", "Body Pose Detection"],
      media: "YouTube Demo + Devpost",
      featured: true,
      flag: "🇨🇭",
      team: ["Marcel Engelmann", "Andreas Krawczyk"],
      links: {
        youtube: "https://www.youtube.com/watch?v=56jSyTk24VE",
        devpost: "https://devpost.com/software/aron-app-make-wellness-fitness-better",
        github: "https://github.com/Ripnrip/ARon",
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6848583120539807744/"
      }
    },
    {
      id: 3,
      name: "HackZurich 2018",
      year: "2018",
      location: "Zurich, Switzerland",
      result: "🏆 Finalist",
      participants: "400+",
      project: "Carly - AR Car Configurator",
      description: "AR car configurator with voice commands, ARKit, CoreML, Credit Suisse API, and AMAG API.",
      longDescription: "Built Carly, an innovative AR car configurator that gives customers the opportunity to design cars in an augmented reality setting with voice commands. Changes are made via voice, and the starting point can be a car seen on the street. Used ARKit for 3D car models, CoreML for image detection, Apple Speech Framework for voice input, AMAG API for vehicle data, and Credit Suisse API for financing calculations. Featured in an interview with Credit Suisse.",
      technologies: ["ARKit", "CoreML", "Swift", "Speech Framework", "Credit Suisse API", "AMAG API", "Azure"],
      media: "Credit Suisse Interview",
      featured: true,
      flag: "🇨🇭",
      links: {
        devpost: "https://devpost.com/software/cARly",
        linkedin: "https://www.linkedin.com/in/gurinder-singh-a30a1a48/"
      }
    },
    {
      id: 4,
      name: "MLH @ Bloomberg London",
      year: "2017",
      location: "London, UK",
      result: "🥇 1st Place",
      participants: "500+",
      project: "Automated Search & Rescue Drone",
      description: "Drone rescue system featured in BBC hackathon documentary. Won 1st among 500+ participants.",
      longDescription: "Won first place among 500+ participants by creating an innovative drone software using the DJI SDK (Objective-C) to find people in disaster and relief situations. The project was hosted at Bloomberg in London and gained significant media attention, being featured in a BBC hackathon documentary.",
      technologies: ["Objective-C", "DJI SDK", "Drone Technology", "Emergency Response", "Computer Vision"],
      media: "BBC Documentary Feature",
      featured: true,
      flag: "🇬🇧",
      links: {}
    },
    {
      id: 5,
      name: "Devcamp NYC",
      year: "2016",
      location: "New York, USA",
      result: "🥇 1st Place",
      participants: "300+",
      project: "Talent Management App",
      description: "App for modeling agencies to interact with talent and customers. Won 1st at Google NYC.",
      longDescription: "Won first place by building a comprehensive talent management application for modeling agencies to streamline interactions between agencies, talent, and customers. Held at Google NYC.",
      technologies: ["iOS", "Swift", "Backend APIs", "UI/UX"],
      media: "Google NYC Venue",
      featured: true,
      flag: "🇺🇸",
      links: {}
    }
  ];

  const stats = [
    { label: "Total Hackathons", value: 28, icon: <Code className="h-6 w-6" /> },
    { label: "Countries Visited", value: 6, icon: <Globe className="h-6 w-6" /> },
    { label: "1st Place Wins", value: 2, icon: <Trophy className="h-6 w-6" /> }
  ];

  const featuredVideos = [
    {
      id: 'drone-bbc',
      title: 'London Drone SAR (MLH Prime 2017)',
      description: 'BBC coverage of my first place win at MLH Prime London.',
      src: '/videos/mlh-2017-drone-bbc.mp4',
      badge: '🇬🇧 BBC Documentary'
    },
    {
      id: 'aron-fitness',
      title: 'HackZurich - Aron AI Fitness',
      description: 'AI fitness app demo with CreateML, CoreML, ARKit, and Garmin wearables.',
      src: '/videos/hackzurich-aron.mp4',
      badge: '🇨🇭 HackZurich 2021'
    },
    {
      id: 'carly-ar',
      title: 'HackZurich - Carly AR Visualizer',
      description: 'AR car configurator demo from HackZurich 2.0.',
      src: '/videos/hackzurich-carly-ar.mp4',
      badge: '🇨🇭 HackZurich 2018'
    },
    {
      id: 'journey',
      title: 'HackZurich - Journey',
      description: 'Atmosphere and highlights from my HackZurich journey.',
      src: '/videos/hackzurich-2018-journey.mp4',
      badge: '🇨🇭 HackZurich'
    }
  ];

  return (
    <section id="hackathons" className="py-20 px-6 md:px-8 bg-hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Hackathon Journey
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            28+ hackathons across the globe as participant, mentor, and judge. 
            From NYC to Barcelona, London to Zurich - building innovative solutions and inspiring communities.
          </p>
        </div>

        {/* Stats - 3 items */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <Spotlight key={index}>
              <Card className="glass text-center">
                <CardContent className="pt-6">
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    <AnimatedCounter end={stat.value} suffix="+" />
                  </div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </CardContent>
              </Card>
            </Spotlight>
          ))}
        </div>

        {/* Featured Media - All 4 Videos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Featured Media</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredVideos.map((video) => (
              <Spotlight key={video.id}>
                <Card className="bg-card-gradient border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 relative">
                      <video
                        className="w-full h-full object-cover min-h-[160px]"
                        preload="metadata"
                        controls
                        playsInline
                        poster=""
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="sm:w-3/5 p-4 flex flex-col justify-center">
                      <Badge className="w-fit mb-2 bg-primary/10 text-primary text-xs">
                        {video.badge}
                      </Badge>
                      <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
                      <p className="text-sm text-foreground/60">{video.description}</p>
                    </div>
                  </div>
                </Card>
              </Spotlight>
            ))}
          </div>

          {/* Easter Egg Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowEasterEgg(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-foreground/70 hover:text-foreground hover:border-primary/60 hover:from-primary/30 hover:to-accent/30 transition-all duration-300 hover:scale-105 group"
            >
              <Sparkles className="h-4 w-4 text-primary group-hover:animate-spin" />
              <span className="text-sm font-medium">Click to preview what it's like working with me</span>
              <Sparkles className="h-4 w-4 text-accent group-hover:animate-spin" />
            </button>
          </div>
        </div>

        {/* Featured Hackathons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Featured Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hackathons.filter(h => h.featured).map((hackathon) => (
              <Spotlight key={hackathon.id}>
                <Card 
                  className="bg-card-gradient border-primary/50 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedHackathon(hackathon)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">{hackathon.flag}</div>
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                        {hackathon.result}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{hackathon.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 text-foreground/70">
                      <MapPin className="h-4 w-4" />
                      <span>{hackathon.location}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span>{hackathon.year}</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-primary">{hackathon.project}</h4>
                    <p className="text-sm text-foreground/80 mb-3">{hackathon.description}</p>
                    
                    {hackathon.links && Object.keys(hackathon.links).length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {hackathon.links.github && (
                          <a href={hackathon.links.github} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
                            <Github className="h-3 w-3" /> Code
                          </a>
                        )}
                        {hackathon.links.devpost && (
                          <a href={hackathon.links.devpost} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-3 w-3" /> Devpost
                          </a>
                        )}
                        {hackathon.links.youtube && (
                          <a href={hackathon.links.youtube} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
                            <Play className="h-3 w-3" /> Video
                          </a>
                        )}
                        {hackathon.links.linkedin && (
                          <a href={hackathon.links.linkedin} target="_blank" rel="noopener noreferrer"
                             onClick={(e) => e.stopPropagation()}
                             className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-3 w-3" /> LinkedIn
                          </a>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{hackathon.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tv className="h-3 w-3" />
                        <span>{hackathon.media}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Spotlight>
            ))}
          </div>
        </div>

        {/* Hackathon Detail Modal */}
        {selectedHackathon && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedHackathon(null)}>
            <Spotlight>
              <Card className="max-w-2xl w-full bg-card-gradient border-primary/50 max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{selectedHackathon.flag}</div>
                      <div>
                        <CardTitle className="text-2xl text-gradient">{selectedHackathon.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-2 text-foreground/70">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedHackathon.location}</span>
                          <Calendar className="h-4 w-4 ml-2" />
                          <span>{selectedHackathon.year}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedHackathon(null)}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg px-4 py-2">
                      {selectedHackathon.result}
                    </Badge>
                    <div className="text-right text-sm text-foreground/60">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{selectedHackathon.participants} participants</span>
                      </div>
                    </div>
                  </div>

                  {selectedHackathon.links?.youtube && (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${selectedHackathon.links.youtube.split('v=')[1]}`}
                        title={`${selectedHackathon.project} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary">{selectedHackathon.project}</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedHackathon.longDescription}
                    </p>
                  </div>

                  {selectedHackathon.team && selectedHackathon.team.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">Team</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedHackathon.team.map((member, index) => (
                          <Badge key={index} variant="outline" className="border-primary/30 text-foreground/80">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedHackathon.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedHackathon.links && Object.keys(selectedHackathon.links).length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Links</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedHackathon.links.github && (
                          <a href={selectedHackathon.links.github} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                            <Github className="h-4 w-4" /> GitHub Repository
                          </a>
                        )}
                        {selectedHackathon.links.devpost && (
                          <a href={selectedHackathon.links.devpost} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4" /> Devpost Submission
                          </a>
                        )}
                        {selectedHackathon.links.youtube && (
                          <a href={selectedHackathon.links.youtube} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                            <Play className="h-4 w-4" /> YouTube Demo
                          </a>
                        )}
                        {selectedHackathon.links.linkedin && (
                          <a href={selectedHackathon.links.linkedin} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4" /> LinkedIn Post
                          </a>
                        )}
                        {selectedHackathon.links.project && (
                          <a href={selectedHackathon.links.project} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                            <ExternalLink className="h-4 w-4" /> Project Page
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-sm text-foreground/60">
                    <Tv className="h-4 w-4" />
                    <span>Media Coverage: {selectedHackathon.media}</span>
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          </div>
        )}

        {/* Easter Egg Modal - Working With Me Video */}
        {showEasterEgg && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
               onClick={() => setShowEasterEgg(false)}>
            <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <Card className="bg-card-gradient border-primary/50 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🎬</div>
                      <div>
                        <CardTitle className="text-xl text-gradient">Working With Me</CardTitle>
                        <CardDescription className="text-foreground/60">A day in the life...</CardDescription>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowEasterEgg(false)}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src="/videos/working-with-me.mp4" type="video/mp4" />
                    </video>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hackathons;
