import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Play, Users } from "lucide-react";

interface HeroSectionProps {
  selectedPersona: string;
  setSelectedPersona: (persona: string) => void;
  ctaClicks: number;
  currentTagline: number;
  taglines: string[];
  handleMagneticCTA: (e: React.MouseEvent) => void;
  onCTAClick: () => void;
  setDemoOpen: (open: boolean) => void;
}

const personas = ["Founder", "Freelancer", "Agency"];

const getPersonaContent = (persona: string) => {
  switch(persona) {
    case "Freelancer":
      return {
        headline: "Build Your Dream Portfolio",
        subtext: "Transform your passion into profit. Join 50,000+ independent creators who've built their empire with our platform.",
        badge: "Perfect for Creatives"
      };
    case "Agency":
      return {
        headline: "Scale Your Agency Impact",
        subtext: "Streamline client delivery and boost your revenue. Trusted by leading agencies for faster, better results.",
        badge: "Enterprise Ready"
      };
    default:
      return {
        headline: "Launch What Matters",
        subtext: "Turn your vision into reality. Join thousands of successful founders who chose the smart path to market.",
        badge: "Founder Approved"
      };
  }
};

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow floating-element" />
    <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow floating-element" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow floating-element" style={{ animationDelay: '4s' }} />
  </div>
);

export const HeroSection = ({ 
  selectedPersona, 
  setSelectedPersona, 
  ctaClicks, 
  currentTagline, 
  taglines, 
  handleMagneticCTA,
  onCTAClick,
  setDemoOpen
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const personaContent = getPersonaContent(selectedPersona);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <FloatingElements />
      
      {/* Interactive cursor glow */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: isHovered ? 0.6 : 0.3
        }}
      />

      <div className="container mx-auto text-center max-w-6xl relative z-10">
        {/* Badge with announcement */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="glass-card px-6 py-3 text-sm font-medium border-0">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            {personaContent.badge} • Now with AI Integration
          </Badge>
        </div>

        {/* Personality Picker */}
        <div className="flex justify-center mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-2 rounded-2xl flex space-x-2">
            {personas.map((persona) => (
              <button
                key={persona}
                onClick={() => setSelectedPersona(persona)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedPersona === persona
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg glow-effect'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {persona}
                {selectedPersona === persona && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg -z-10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gradient-text block mb-2">
            {personaContent.headline.split(' ').slice(0, -1).join(' ')}
          </span>
          <span className="text-white/90 block">
            {personaContent.headline.split(' ').slice(-1)}
          </span>
        </h1>
        
        {/* Dynamic Tagline Rotator */}
        <div className="mb-4 h-16 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            <p className="text-2xl md:text-3xl font-bold gradient-text animate-gradient" key={currentTagline}>
              {taglines[currentTagline]}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-lg -z-10" />
          </div>
        </div>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          {personaContent.subtext}
        </p>
        
        {/* CTA Section */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slide-up"
          style={{ animationDelay: '1s' }}
        >
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 glow-effect"
            onMouseMove={handleMagneticCTA}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onCTAClick}
          >
            <span className="relative z-10 flex items-center">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="glass-button text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-2xl group"
            onClick={() => setDemoOpen(true)}
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Social Proof */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm">
              <span className="text-blue-400 font-semibold">{ctaClicks.toLocaleString()}</span> people started today
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <span className="text-sm">No credit card required</span>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <span className="text-sm">14-day free trial</span>
        </div>

        {/* Trust Indicators */}
        <div 
          className="mt-16 animate-fade-in"
          style={{ animationDelay: '1.4s' }}
        >
          <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-8 opacity-50 hover:opacity-80 transition-opacity">
            {['Google', 'Microsoft', 'Stripe', 'Notion', 'Slack'].map((company, index) => (
              <div 
                key={company} 
                className="text-gray-400 font-semibold text-lg hover:text-white transition-colors"
                style={{ animationDelay: `${1.6 + index * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
