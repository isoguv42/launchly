
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface CTAModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CTAModal = ({ open, onOpenChange }: CTAModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CTA submission:", { name, email });
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
      setName("");
      setEmail("");
    }, 2000);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-white mb-2">Thanks! I'll be in touch soon.</h3>
            <p className="text-gray-300">Looking forward to building something amazing together.</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Want a site like this? Let's talk.</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cta-name" className="block text-sm font-medium text-gray-300 mb-2">
              Your name
            </label>
            <Input
              id="cta-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label htmlFor="cta-email" className="block text-sm font-medium text-gray-300 mb-2">
              Email address
            </label>
            <Input
              id="cta-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Let's Build Something Great
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
