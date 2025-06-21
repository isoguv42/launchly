import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Bell, ArrowUp, Star, Zap, Shield, Rocket, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Lightning Setup",
    description: "From zero to live in under 5 minutes. No technical knowledge required.",
    gradient: "from-blue-500 to-cyan-500",
    delay: "0s"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Smart Analytics",
    description: "AI-powered insights that actually help you grow your business.",
    gradient: "from-purple-500 to-pink-500",
    delay: "0.1s"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-level security with automatic backups and 99.9% uptime.",
    gradient: "from-green-500 to-emerald-500",
    delay: "0.2s"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Auto Scaling",
    description: "Built to handle viral growth. From 10 to 10M users seamlessly.",
    gradient: "from-orange-500 to-yellow-500",
    delay: "0.3s"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <Card 
    className="group relative glass-card border-0 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden animate-slide-up"
    style={{ animationDelay: feature.delay }}
  >
    {/* Gradient background effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    
    {/* Border gradient effect */}
    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
    
    <CardContent className="relative p-8 text-center">
      <div className="mb-6 flex justify-center">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
          {feature.icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
        {feature.description}
      </p>
    </CardContent>
  </Card>
);

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="secondary" className="glass-card px-4 py-2 text-sm font-medium border-0 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Why Choose Us
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Zero to Launch</span>
            <br />
            <span className="text-white/90">in Minutes</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, launch, and scale your business—
            <span className="gradient-text font-semibold"> nothing you don't.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to see the magic?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who've already made the switch to the modern way of building.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex -space-x-2 mr-3">
                  {[
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500', 
                    'from-green-500 to-emerald-500',
                    'from-orange-500 to-red-500',
                    'from-indigo-500 to-blue-500'
                  ].map((gradient, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} border-2 border-gray-900 flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
                <span>50,000+ happy customers</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
              <div className="flex items-center text-sm text-gray-400">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
