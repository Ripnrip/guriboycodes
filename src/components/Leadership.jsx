import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { AnimatedCounter } from '@/components/ui/animated-counter.jsx';
import { 
  Users, 
  GraduationCap, 
  Heart, 
  Award, 
  BookOpen, 
  Lightbulb,
  Target,
  Globe,
  Handshake,
  Star,
  Calendar,
  MapPin,
  Code,
  Briefcase,
  Trophy,
  Zap
} from 'lucide-react';

const Leadership = () => {
  const achievements = [
    { icon: <Code className="h-6 w-6" />, label: "Technical Interviews Conducted", value: 500, suffix: "+" },
    { icon: <GraduationCap className="h-6 w-6" />, label: "Students Reached", value: 200, suffix: "+" },
    { icon: <Users className="h-6 w-6" />, label: "ERG Members", value: 150, suffix: "+" }
  ];

  const initiatives = [
    {
      title: "CTE Advisory Board",
      role: "Industry Advisory Member",
      organization: "High School Career & Technical Education",
      period: "2023 - Present",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Guiding high school tech curriculum development and providing industry insights to prepare students for modern tech careers.",
      achievements: [
        "Curriculum review and modernization recommendations",
        "Guest speaking at career development sessions",
        "Industry trend analysis and future skills mapping",
        "Student mentorship and career guidance"
      ],
      impact: "200+ students reached through curriculum improvements"
    },
    {
      title: "Sikh Faith ERG Leadership",
      role: "Co-Lead & Founding Member",
      organization: "PayPal Employee Resource Group",
      period: "2020 - Present",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Leading PayPal's Sikh Faith Employee Resource Group, fostering inclusion and cultural awareness across the organization.",
      achievements: [
        "Founded and grew ERG to 150+ members globally",
        "Organized cultural awareness events and celebrations",
        "Developed Langar App for community education",
        "Cross-ERG collaboration and allyship programs"
      ],
      impact: "150+ ERG members across PayPal globally"
    },
    {
      title: "Technical Mentorship",
      role: "Senior Engineer Mentor",
      organization: "PayPal & Industry",
      period: "2019 - Present",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Mentoring junior engineers, conducting technical interviews, and fostering the next generation of tech talent.",
      achievements: [
        "500+ technical interviews conducted",
        "Mentored 20+ junior engineers to promotion",
        "Technical leadership in cross-functional teams",
        "Knowledge sharing through internal tech talks"
      ],
      impact: "20+ engineers promoted under mentorship"
    }
  ];

  const langarApp = {
    title: "ERG Langar App",
    subtitle: "Gamified Sikh Temple Education",
    description: "A React Native application designed to educate PayPal ERG members about Sikh temple traditions, specifically the concept of Langar (community kitchen). Features gamification elements to make learning engaging and interactive.",
    features: [
      "Interactive temple tour with AR elements",
      "Gamified learning modules about Sikh traditions",
      "Community engagement tracking",
      "Cultural awareness quizzes and challenges",
      "Multi-language support for global ERG members"
    ],
    technologies: ["React Native", "Gamification", "Education", "Cultural Awareness"],
    impact: "Used for ERG onboarding and cultural education at PayPal"
  };

  return (
    <section id="leadership" className="py-20 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Leadership & Community
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Committed to fostering inclusive communities, mentoring the next generation of technologists, 
            and bridging the gap between industry and education.
          </p>
        </div>

        {/* Three Key Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Spotlight key={achievement.label}>
                <Card className="bg-card-gradient border-primary/20 text-center">
                  <CardContent className="p-10">
                    <div className="flex justify-center mb-5">
                      <div className="p-4 rounded-xl bg-primary/10 text-primary">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-5xl lg:text-6xl font-bold text-gradient mb-3">
                      <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                    </div>
                    <p className="text-lg text-foreground/70 font-medium">{achievement.label}</p>
                  </CardContent>
                </Card>
              </Spotlight>
            ))}
          </div>
        </div>

        {/* Leadership Initiatives */}
        <div className="space-y-8 mb-16">
          <h3 className="text-3xl font-bold text-gradient text-center mb-12">
            Leadership Initiatives
          </h3>
          
          {initiatives.map((initiative, index) => (
            <Spotlight key={initiative.title}>
              <Card className="bg-card-gradient border-primary/20">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${initiative.color} text-white`}>
                        {initiative.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gradient">{initiative.title}</CardTitle>
                        <CardDescription className="text-foreground/70">
                          {initiative.role} • {initiative.organization}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span>{initiative.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground/80 mb-6">{initiative.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {initiative.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-foreground/80">
                            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Impact</h4>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-primary">
                          <Target className="h-5 w-5" />
                          <span className="font-medium">{initiative.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          ))}
        </div>

        {/* Langar App Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gradient text-center mb-12">
            Featured Community Project
          </h3>
          
          <Spotlight>
            <Card className="bg-card-gradient border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gradient">{langarApp.title}</CardTitle>
                    <CardDescription className="text-lg text-foreground/70">
                      {langarApp.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/80 mb-6">{langarApp.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {langarApp.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-foreground/80">
                          <Handshake className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {langarApp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="bg-green-500/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                        <Globe className="h-5 w-5" />
                        <span className="font-medium">{langarApp.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                    <Award className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Spotlight>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Spotlight>
            <Card className="bg-card-gradient border-primary/20">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Let's Build Communities Together
                </h3>
                <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                  Interested in collaboration, mentorship opportunities, or community initiatives? 
                  I'm always looking for ways to give back and make a positive impact.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Users className="h-4 w-4 mr-2" />
                    Connect for Mentorship
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                    <Handshake className="h-4 w-4 mr-2" />
                    Collaboration Opportunities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Spotlight>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
