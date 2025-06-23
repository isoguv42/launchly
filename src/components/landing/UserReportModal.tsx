
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, BarChart3, Calendar } from "lucide-react";

interface UserReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UserReportModal = ({ open, onOpenChange }: UserReportModalProps) => {
  const reportData = [
    {
      title: "Total Users",
      value: "8,547",
      change: "+12%",
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Growth Rate",
      value: "23%",
      change: "+5%",
      icon: <TrendingUp className="w-5 h-5 text-green-400" />
    },
    {
      title: "Engagement",
      value: "78%",
      change: "+8%",
      icon: <BarChart3 className="w-5 h-5 text-purple-400" />
    },
    {
      title: "This Month",
      value: "1,247",
      change: "+18%",
      icon: <Calendar className="w-5 h-5 text-orange-400" />
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border-gray-700 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">User Analytics Report</DialogTitle>
          <DialogDescription className="text-gray-300">
            Overview of your user metrics and engagement data.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {reportData.map((item, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    {item.icon}
                    <span className="text-green-400 text-sm">{item.change}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Download Full Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
