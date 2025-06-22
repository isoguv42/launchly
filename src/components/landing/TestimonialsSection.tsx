
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Marcus Rodriguez",
    role: "Founder, TechStart",
    content: "Launchly helped me validate my SaaS idea and get my first 100 customers in just 6 weeks. The analytics dashboard is incredible.",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=3b82f6&color=fff&size=150"
  },
  {
    name: "Emma Thompson",
    role: "CEO, Creative Studio",
    content: "As a non-technical founder, Launchly was exactly what I needed. I launched my marketplace without hiring a single developer.",
    avatar: "https://ui-avatars.com/api/?name=Emma+Thompson&background=8b5cf6&color=fff&size=150"
  },
  {
    name: "David Park",
    role: "Startup Advisor",
    content: "I recommend Launchly to all the founders I mentor. It's the fastest way to go from idea to revenue.",
    avatar: "https://ui-avatars.com/api/?name=David+Park&background=06b6d4&color=fff&size=150"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Founders</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of entrepreneurs who've launched successfully with Launchly.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card h-full hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.content}"</p>
                      <div className="flex items-center mt-auto">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
