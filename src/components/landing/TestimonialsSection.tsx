
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
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "CEO, Creative Studio",
    content: "As a non-technical founder, Launchly was exactly what I needed. I launched my marketplace without hiring a single developer.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1cd?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Park",
    role: "Startup Advisor",
    content: "I recommend Launchly to all the founders I mentor. It's the fastest way to go from idea to revenue.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
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
                  <Card className="bg-gray-800 border-gray-700 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=4f46e5&color=fff`;
                          }}
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
