
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo login:", { email, password });
    onOpenChange(false);
    setEmail("");
    setPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">Demo Access</DialogTitle>
          <DialogDescription className="text-gray-300">
            Enter demo credentials to explore the dashboard
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="demo-email" className="block text-sm font-medium text-gray-300 mb-2">
              Email address
            </label>
            <Input
              id="demo-email"
              type="email"
              placeholder="demo@launchly.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label htmlFor="demo-password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <Input
              id="demo-password"
              type="password"
              placeholder="demo123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Access Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
