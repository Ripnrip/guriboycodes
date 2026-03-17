import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Spotlight } from '@/components/ui/spotlight.jsx';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Comprehensive skills data organized by category with connections
  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile',
      color: '#3B82F6',
      icon: '📱',
      skills: [
        'Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'SwiftData', 'Core Data',
        'ARKit', 'RoomPlan', 'BLE', 'NFC', 'MapKit',
        'CoreML', 'MLX', 'RxSwift', 'Combine',
        'Flutter', 'Dart', 'React Native',
        'ActivityKit', 'WidgetKit', 'Dynamic Island',
        'Xcode', 'Fastlane', 'TestFlight'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML',
      color: '#A855F7',
      icon: '🤖',
      skills: [
        'Python', 'PyTorch', 'CoreML', 'MLX',
        'OpenAI', 'Anthropic', 'Gemini', 'Llama',
        'LangChain', 'LlamaIndex', 'CrewAI', 'N8N',
        'MCP Servers', 'RAG', 'GraphRAG', 'Vector Stores',
        'SDXL', 'LoRA', 'Stable Diffusion',
        'YOLO', 'OpenCV', 'Computer Vision',
        'Whisper', 'ElevenLabs',
        'Agentic AI', 'Agent0'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      color: '#10B981',
      icon: '☁️',
      skills: [
        'AWS Lambda', 'AWS EC2', 'AWS S3',
        'GCP', 'Vertex AI', 'Azure',
        'Docker', 'Kubernetes',
        'Supabase', 'Firebase',
        'GitHub Actions', 'Jenkins', 'CI/CD',
        'Vercel', 'Cloudflare R2',
        'Serverless', 'Microservices'
      ]
    },
    {
      id: 'data',
      title: 'Data & APIs',
      color: '#F59E0B',
      icon: '💾',
      skills: [
        'PostgreSQL', 'MongoDB', 'DynamoDB',
        'Pinecone', 'ChromaDB', 'Qdrant', 'Redis',
        'GraphQL', 'REST APIs',
        'Amplitude', 'DataDog',
        'TDD', 'Agile', 'Jira'
      ]
    },
    {
      id: 'web',
      title: 'Web & Frontend',
      color: '#EF4444',
      icon: '🌐',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript',
        'Tailwind CSS', 'Vite', 'HTML/CSS',
        'Node.js', 'Express',
        'Strapi', 'Figma', 'Cursor',
        'Framer Motion', 'Three.js'
      ]
    },
    {
      id: 'platforms',
      title: 'Platforms & Hardware',
      color: '#06B6D4',
      icon: '🔧',
      skills: [
        'iOS', 'iPadOS', 'watchOS', 'visionOS',
        'Android', 'Web',
        'Garmin SDK', 'Nordic Semiconductor',
        'Google Eddystone', 'Bluetooth LE',
        'NFC', 'QR Codes'
      ]
    }
  ];

  // Get all unique skills
  const allSkills = [...new Set(skillCategories.flatMap(cat => cat.skills))];

  // Canvas constellation animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Create particles for constellation
    const particles = [];
    const numParticles = 80;
    const rect = canvas.getBoundingClientRect();
    
    for (let i = 0; i < numParticles; i++) {
      const catIndex = i % skillCategories.length;
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        color: skillCategories[catIndex].color,
        alpha: Math.random() * 0.5 + 0.3,
        category: catIndex
      });
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            const isSelected = selectedCategory !== null && 
              (particles[i].category === skillCategories.findIndex(c => c.id === selectedCategory) ||
               particles[j].category === skillCategories.findIndex(c => c.id === selectedCategory));
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isSelected 
              ? `rgba(168, 85, 247, ${alpha * 3})`
              : `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = isSelected ? 1.5 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;

        const isSelected = selectedCategory !== null && 
          p.category === skillCategories.findIndex(c => c.id === selectedCategory);

        ctx.beginPath();
        ctx.arc(p.x, p.y, isSelected ? p.radius * 2 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (isSelected ? 'FF' : '80');
        ctx.fill();
        
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = p.color + '20';
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [selectedCategory]);

  const filteredSkills = selectedCategory 
    ? skillCategories.find(c => c.id === selectedCategory)?.skills || []
    : [];

  const totalSkills = allSkills.length;

  return (
    <section id="skills" className="py-20 px-6 md:px-8 bg-hero-gradient relative overflow-hidden">
      {/* Constellation Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Constellation
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {totalSkills}+ technologies across 6 domains — a decade of building at the intersection of 
            mobile, AI/ML, cloud, and creative engineering.
          </p>
        </div>

        {/* Category Orbit Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-3 rounded-xl transition-all duration-500 font-medium ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground border border-border/50'
            }`}
          >
            All ({totalSkills})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              className={`px-5 py-3 rounded-xl transition-all duration-500 font-medium flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-foreground border border-border/50'
              }`}
              style={selectedCategory === category.id ? { 
                backgroundColor: category.color,
                boxShadow: `0 10px 25px ${category.color}40`
              } : {}}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
              <span className="text-xs opacity-70">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Visualization - Interactive Grid */}
        {selectedCategory === null ? (
          /* Full constellation view - all categories as cards */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Spotlight key={category.id}>
                <Card 
                  className="bg-card-gradient border-primary/20 h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: category.color + '20' }}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <p className="text-sm text-foreground/60">{category.skills.length} technologies</p>
                        </div>
                      </div>
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.slice(0, 12).map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="text-xs transition-all duration-200 hover:scale-105"
                          style={{ 
                            backgroundColor: category.color + '15',
                            color: category.color,
                            borderColor: category.color + '30'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                      {category.skills.length > 12 && (
                        <Badge variant="outline" className="text-xs text-foreground/50">
                          +{category.skills.length - 12} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Spotlight>
            ))}
          </div>
        ) : (
          /* Expanded category view */
          <div className="space-y-8">
            <Spotlight>
              <Card className="bg-card-gradient border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ backgroundColor: skillCategories.find(c => c.id === selectedCategory)?.color + '20' }}
                      >
                        {skillCategories.find(c => c.id === selectedCategory)?.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gradient">
                          {skillCategories.find(c => c.id === selectedCategory)?.title}
                        </CardTitle>
                        <p className="text-foreground/60">
                          {filteredSkills.length} technologies in this domain
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="text-foreground/40 hover:text-foreground transition-colors text-xl"
                    >
                      ✕
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {filteredSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <Badge
                          className="text-sm px-4 py-2 cursor-default transition-all duration-300 hover:scale-110 hover:shadow-lg"
                          style={{
                            backgroundColor: hoveredSkill === skill 
                              ? skillCategories.find(c => c.id === selectedCategory)?.color
                              : skillCategories.find(c => c.id === selectedCategory)?.color + '20',
                            color: hoveredSkill === skill 
                              ? 'white'
                              : skillCategories.find(c => c.id === selectedCategory)?.color,
                            borderColor: skillCategories.find(c => c.id === selectedCategory)?.color + '50',
                            animationDelay: `${index * 50}ms`,
                            transform: hoveredSkill === skill ? 'scale(1.15)' : 'scale(1)'
                          }}
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Spotlight>
          </div>
        )}

        {/* Bottom stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Languages', count: '8+', detail: 'Swift, Python, TS, Dart...' },
            { label: 'Frameworks', count: '25+', detail: 'SwiftUI, React, LangChain...' },
            { label: 'Cloud Services', count: '15+', detail: 'AWS, GCP, Azure, Vercel...' },
            { label: 'AI/ML Tools', count: '20+', detail: 'PyTorch, CoreML, RAG...' }
          ].map((stat) => (
            <Spotlight key={stat.label}>
              <Card className="bg-card-gradient border-primary/20 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.count}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground/50">{stat.detail}</div>
                </CardContent>
              </Card>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
