
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Bell, ArrowUp, Star } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    title: "One-click Setup",
    description: "No devs needed. Just launch."
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-400" />,
    title: "Smart Analytics",
    description: "Know what's working instantly."
  },
  {
    icon: <ArrowUp className="w-8 h-8 text-blue-400" />,
    title: "Auto Scaling",
    description: "Built to handle your success."
  },
  {
    icon: <Star className="w-8 h-8 text-blue-400" />,
    title: "Founder Support",
    description: "Get help from people who've been there."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero to Launch in Minutes</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need — nothing you don't.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>  
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
