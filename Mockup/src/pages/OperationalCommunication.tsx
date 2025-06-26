import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const OperationalCommunication = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageCircle size={24} className="text-info" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Operational Communication
            </h1>
            <p className="text-muted-foreground">
              Internal communication and messaging system
            </p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={16} />
          New Message
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Communication Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Communication Module</p>
                <p className="text-sm">
                  This section will contain messaging and communication tools
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperationalCommunication;
