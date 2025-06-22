import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

const pricing = [
  {
    name: "Starter",
    price: "$29",
    yearlyPrice: "$290",
    period: "/month",
    description: "Perfect for validating your first idea and getting started",
    features: [
      "1 Business Launch",
      "Advanced Analytics Dashboard",
      "Email & Chat Support",
      "50+ Premium Templates",
      "Secure Payment Processing",
      "SEO Optimization Tools"
    ],
    popular: false,
    cta: "Start Building",
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-blue-600 to-blue-700",
    borderGradient: "from-blue-500/50 to-blue-600/50"
  },
  {
    name: "Pro",
    price: "$79",
    yearlyPrice: "$790",
    period: "/month",
    description: "Scale your business with advanced tools and priority support",
    features: [
      "5 Business Launches",
      "AI-Powered Analytics",
      "Priority Support & Phone",
      "Custom Branding & Domain",
      "Advanced A/B Testing",
      "API Access & Integrations",
      "Team Collaboration Tools",
      "Advanced Automations"
    ],
    popular: true,
    cta: "Go Pro",
    icon: <Star className="w-5 h-5" />,
    gradient: "from-purple-600 to-pink-600",
    borderGradient: "from-purple-500/50 to-pink-500/50"
  },
  {
    name: "Enterprise",
    price: "$199",
    yearlyPrice: "$1990",
    period: "/month",
    description: "For serious entrepreneurs and agencies scaling fast",
    features: [
      "Unlimited Launches",
      "Enterprise Analytics Suite",
      "24/7 Dedicated Support",
      "White-label Solution",
      "Advanced Team Management",
      "Custom Integrations",
      "Priority Feature Requests",
      "Dedicated Account Manager"
    ],
    popular: false,
    cta: "Contact Sales",
    icon: <Crown className="w-5 h-5" />,
    gradient: "from-orange-600 to-red-600",
    borderGradient: "from-orange-500/50 to-red-500/50"
  }
];

interface PricingSectionProps {
  onCTAClick: () => void;
}

const PricingCard = ({ plan, onCTAClick, isYearly }: { plan: typeof pricing[0], onCTAClick: () => void, isYearly: boolean }) => (
  <Card 
    className={`group relative glass-card border-0 transition-all duration-500 hover:scale-105 hover:-translate-y-4 overflow-hidden ${
      plan.popular 
        ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/20' 
        : 'hover:shadow-2xl hover:shadow-blue-500/10'
    }`}
  >
    {/* Background gradient effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${plan.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
    
    {/* Popular badge */}
    {plan.popular && (
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
        <Badge className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-1 text-xs font-semibold shadow-lg`}>
          <Star className="w-3 h-3 mr-1 fill-current" />
          Most Popular
        </Badge>
      </div>
    )}
    
    {/* Glow effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
    
    <CardContent className="relative p-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${plan.gradient} text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
          {plan.icon}
        </div>
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-black text-white">
            {isYearly ? plan.yearlyPrice : plan.price}
          </span>
          <span className="text-gray-400 text-base ml-1">
            {isYearly ? "/year" : plan.period}
          </span>
        </div>
        {isYearly && (
          <p className="text-green-400 text-sm mt-1">Save 20% with yearly billing</p>
        )}
        <p className="text-gray-300 mt-2 leading-relaxed text-sm">{plan.description}</p>
      </div>

      {/* CTA Button */}
      <Button 
        className={`w-full mb-6 text-white text-base py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 ${
          plan.popular 
            ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-purple-500/25 glow-effect` 
            : 'glass-button hover:bg-white/10'
        }`}
        onClick={onCTAClick}
      >
        <span className="flex items-center justify-center">
          {plan.cta}
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Button>

      {/* Features */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">What's included:</h4>
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li 
              key={featureIndex} 
              className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
              style={{ transitionDelay: `${featureIndex * 50}ms` }}
            >
              <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export const PricingSection = ({ onCTAClick }: PricingSectionProps) => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="secondary" className="glass-card px-4 py-2 text-sm font-medium border-0 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Pricing Plans
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Built to Scale</span>
            <br />
            <span className="text-white/90">With You</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Start small, grow big. Always know what you're paying for—
            <span className="gradient-text font-semibold"> no hidden fees, ever.</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`transition-colors ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
              />
              <div 
                className="glass-card w-14 h-8 rounded-full p-1 cursor-pointer"
                onClick={() => setIsYearly(!isYearly)}
              >
                <div className={`w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-6' : ''}`}></div>
              </div>
            </div>
            <span className={`transition-colors ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {pricing.map((plan, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard plan={plan} onCTAClick={onCTAClick} isYearly={isYearly} />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Need something custom?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We work with enterprise clients to create custom solutions. Let's talk about your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                className="glass-button text-white border-white/20 hover:bg-white/10 px-8 py-3"
                onClick={() => window.open('mailto:hello@launchly.com?subject=Schedule a Call&body=Hi, I would like to schedule a call to discuss custom solutions.', '_blank')}
              >
                Schedule a Call
              </Button>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span>Usually responds in under 1 hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
