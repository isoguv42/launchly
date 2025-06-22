
import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, BarChart3, Star } from "lucide-react";

const timelineSteps = [
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Validate your idea with real feedback",
    description: "Get validation before you invest time building"
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    title: "Publish your MVP faster than ever",
    description: "Go live without the usual technical headaches"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "Use data to make smarter decisions",
    description: "See what works and double down on it"
  },
  {
    icon: <Star className="w-8 h-8 text-blue-400" />,
    title: "Celebrate success. You've earned it.",
    description: "Join thousands of successful founders"
  }
];

export const StartupRoadmap = () => {
  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Startup Roadmap</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From 'I have an idea' to 'I just launched' — all in one platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main solid timeline line throughout */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-500" style={{ 
              top: '80px', 
              height: 'calc(100% - 160px)'
            }}></div>
            
            {timelineSteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-6 relative">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                      
                      {/* Dotted connecting lines for all steps */}
                      <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-8 h-0.5 opacity-60`}>
                        <div className="w-full h-full border-t-2 border-dotted border-blue-400"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 relative">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
