import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShiftHandover = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeftRight size={24} className="text-info" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Shift Handover
            </h1>
            <p className="text-muted-foreground">
              Manage shift transitions and handover procedures
            </p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={16} />
          Start Handover
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Shift Handover Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <ArrowLeftRight size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Shift Handover Module</p>
                <p className="text-sm">
                  This section will contain shift transition management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShiftHandover;
