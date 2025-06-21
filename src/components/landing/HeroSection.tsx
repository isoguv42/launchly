
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  selectedPersona: string;
  setSelectedPersona: (persona: string) => void;
  ctaClicks: number;
  currentTagline: number;
  taglines: string[];
  handleMagneticCTA: (e: React.MouseEvent) => void;
  onCTAClick: () => void;
}

const personas = ["Founder", "Freelancer", "Agency"];

const getPersonaContent = (persona: string) => {
  switch(persona) {
    case "Freelancer":
      return {
        headline: "Launch What Matters",
        subtext: "Build smarter, launch faster. Join thousands of independent pros who skipped the fluff and built something lasting with Launchly."
      };
    case "Agency":
      return {
        headline: "Launch What Matters",
        subtext: "Build smarter, launch faster. Join thousands of agency owners who streamlined their process with Launchly."
      };
    default:
      return {
        headline: "Launch What Matters",
        subtext: "Build smarter, launch faster. Join thousands of founders who skipped the fluff and built businesses with Launchly."
      };
  }
};

export const HeroSection = ({ 
  selectedPersona, 
  setSelectedPersona, 
  ctaClicks, 
  currentTagline, 
  taglines, 
  handleMagneticCTA,
  onCTAClick
}: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Personality Picker */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-lg flex space-x-1">
            {personas.map((persona) => (
              <button
                key={persona}
                onClick={() => setSelectedPersona(persona)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedPersona === persona
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {persona}
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight animate-slide-up">
          {getPersonaContent(selectedPersona).headline}
        </h1>
        
        {/* Dynamic Tagline Rotator */}
        <div className="mb-4 h-16 flex items-center justify-center">
          <p className="text-3xl md:text-4xl font-bold text-blue-400 animate-fade-in" key={currentTagline}>
            {taglines[currentTagline]}
          </p>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          {getPersonaContent(selectedPersona).subtext}
        </p>
        
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 magnetic-button"
          onMouseMove={handleMagneticCTA}
          onClick={onCTAClick}
        >
          Try it Free
        </Button>
        
        {/* Real-Time CTA Click Counter */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            🔁 <span className="text-blue-400 font-semibold">{ctaClicks}</span> people clicked this today
          </p>
        </div>
        
        <p className="text-sm text-gray-400 mt-2">No credit card needed · 14-day free trial</p>
      </div>
    </section>
  );
};
