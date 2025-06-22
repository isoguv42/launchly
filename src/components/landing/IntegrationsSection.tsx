
import { Card, CardContent } from "@/components/ui/card";
import Marquee from "react-fast-marquee";

const integrations = [
  { name: "Discord", logo: "/discord.svg" },
  { name: "Google Analytics", logo: "/google_analytics.svg" },
  { name: "Mailchimp", logo: "/mailchimp.svg" },
  { name: "Notion", logo: "/notion.svg" },
  { name: "Shopify", logo: "/shopify.svg" },
  { name: "Slack", logo: "/slack.svg" },
  { name: "Stripe", logo: "/stripe.svg" },
  { name: "Zapier", logo: "/zapier.svg" }
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Integrates with your favorite tools</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect Launchly with the tools you already love and use
          </p>
        </div>
        <div className="relative overflow-hidden">
          <Marquee 
            speed={50} 
            gradient={false} 
            pauseOnHover={true} 
            loop={0}
            className="py-4"
          >
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative mx-6"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 w-28 h-28">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-8 h-8 mb-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <p className="text-xs text-gray-400 text-center">{integration.name}</p>
                  </CardContent>
                </Card>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Coming soon
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            More integrations coming soon. Need a specific tool? Let us know.
          </p>
        </div>
      </div>
    </section>
  );
};
