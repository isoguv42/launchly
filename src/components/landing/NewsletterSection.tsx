
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    console.log("Newsletter signup:", email);
    
    // Simulate API call
    try {
      // In a real app, this would be an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Want launch tips & founder insights?
          </h2>
        </div>
        <p className="text-gray-300 text-lg mb-2">
          Drop your email — no spam, just value.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Insights, tips, and the occasional founder meme.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 flex-1"
            required
            disabled={loading}
          />
          <Button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 px-8"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        {submitted && (
          <p className="text-green-400 text-sm mt-4 animate-fade-in">
            Thanks! You're on the list.
          </p>
        )}
        <p className="text-xs text-gray-400 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
