import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';
import { 
  Smartphone, 
  Brain, 
  Cloud, 
  Database, 
  Code, 
  Palette,
  Zap,
  Globe,
  Cpu,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Swift', level: 95, icon: '🔶' },
        { name: 'SwiftUI', level: 90, icon: '📱' },
        { name: 'iOS SDK', level: 95, icon: '🍎' },
        { name: 'Objective-C', level: 85, icon: '⚙️' },
        { name: 'Flutter', level: 80, icon: '🦋' },
        { name: 'Dart', level: 75, icon: '🎯' },
        { name: 'React Native', level: 70, icon: '⚛️' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML & Data',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'CoreML', level: 90, icon: '🧠' },
        { name: 'MLX', level: 85, icon: '🔬' },
        { name: 'RAG Systems', level: 88, icon: '🔍' },
        { name: 'ChromaDB', level: 80, icon: '🗄️' },
        { name: 'OpenAI APIs', level: 85, icon: '🤖' },
        { name: 'Vector Databases', level: 82, icon: '📊' },
        { name: 'Python ML', level: 75, icon: '🐍' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Cloud',
      icon: <Cloud className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Serverless', level: 82, icon: '⚡' },
        { name: 'DynamoDB', level: 78, icon: '🗃️' },
        { name: 'Lambda', level: 80, icon: '🔧' },
        { name: 'API Design', level: 90, icon: '🔗' },
        { name: 'Microservices', level: 85, icon: '🏗️' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend & Web',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React', level: 88, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TypeScript', level: 82, icon: '📘' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 90, icon: '💛' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'Vite', level: 80, icon: '⚡' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <GitBranch className="h-6 w-6" />,
      color: 'from-gray-500 to-slate-500',
      skills: [
        { name: 'Xcode', level: 95, icon: '🔨' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'GitHub', level: 88, icon: '🐙' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Supabase', level: 80, icon: '🔥' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Docker', level: 70, icon: '🐳' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section className="py-20 px-6 md:px-8 bg-hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A comprehensive toolkit spanning mobile development, AI/ML, cloud architecture, 
            and modern web technologies - built through a decade of hands-on experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <Spotlight key={category.id}>
              <Card className="bg-card-gradient border-primary/20 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gradient">{category.title}</CardTitle>
                      <CardDescription className="text-foreground/70">
                        {category.skills.length} technologies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-16">
          <Spotlight>
            <Card className="bg-card-gradient border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient text-center">
                  Professional Achievements
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Patents & IP</h3>
                    <p className="text-foreground/80">
                      AI/ML patent applications and innovative mobile solutions
                    </p>
                  </div>
                  <div>
                    <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Architecture</h3>
                    <p className="text-foreground/80">
                      High-Level Design (HLD) leadership for cross-org systems
                    </p>
                  </div>
                  <div>
                    <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Scale</h3>
                    <p className="text-foreground/80">
                      Systems serving 92M+ users with enterprise-grade reliability
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

export default Skills;

