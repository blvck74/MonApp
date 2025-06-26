import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Accidents = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertTriangle size={24} className="text-destructive" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Accidents</h1>
            <p className="text-muted-foreground">
              Track and manage safety incidents and accidents
            </p>
          </div>
        </div>
        <Button variant="destructive" className="flex items-center gap-2">
          <Plus size={16} />
          Report Accident
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Accident Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Accidents Module</p>
                <p className="text-sm">
                  This section will contain accident reporting and tracking
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Accidents;
