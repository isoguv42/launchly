
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricing = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for validating your first idea",
    features: [
      "1 Business Launch",
      "Basic Analytics",
      "Email Support",
      "Template Library",
      "Payment Processing"
    ],
    popular: false,
    cta: "Test the waters"
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Scale your business with advanced tools",
    features: [
      "5 Business Launches",
      "Advanced Analytics",
      "Priority Support",
      "Custom Branding",
      "A/B Testing",
      "API Access"
    ],
    popular: true,
    cta: "Most Popular — Get serious"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For serious entrepreneurs and agencies",
    features: [
      "Unlimited Launches",
      "Custom Analytics",
      "24/7 Phone Support",
      "White-label Solution",
      "Team Collaboration",
      "Custom Integrations"
    ],
    popular: false,
    cta: "Let's go big"
  }
];

interface PricingSectionProps {
  onCTAClick: () => void;
}

export const PricingSection = ({ onCTAClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built to Scale With You</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Start small. Grow big. Always know what you're paying for.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <Card key={index} className={`relative bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 ${plan.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <Button 
                  className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                  onClick={onCTAClick}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
