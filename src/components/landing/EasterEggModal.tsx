
import { Button } from "@/components/ui/button";

interface EasterEggModalProps {
  showEasterEgg: boolean;
  setShowEasterEgg: (show: boolean) => void;
}

export const EasterEggModal = ({ showEasterEgg, setShowEasterEgg }: EasterEggModalProps) => {
  if (!showEasterEgg) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] animate-fade-in">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center max-w-md animate-scale-in">
        <h2 className="text-2xl font-bold mb-4">🎉 You found it!</h2>
        <p className="text-lg mb-4">Konami Code Master Detected!</p>
        <p className="text-sm opacity-80">True founders know the secrets...</p>
        <Button 
          onClick={() => setShowEasterEgg(false)}
          className="mt-4 bg-white text-blue-600 hover:bg-gray-100"
        >
          Continue Building
        </Button>
      </div>
    </div>
  );
};
