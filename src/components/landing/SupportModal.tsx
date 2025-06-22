
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SupportModal = ({ open, onOpenChange }: SupportModalProps) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support request:", { email, subject, message });
    
    toast({
      title: "Support Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setEmail("");
    setSubject("");
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white">Get Support</DialogTitle>
          <DialogDescription className="text-gray-300">
            Tell us how we can help you today.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Textarea
            placeholder="How can we help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
            required
          />
          <div className="flex gap-3 pt-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 flex-1">
              Send Request
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
