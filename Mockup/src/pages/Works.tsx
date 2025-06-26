import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Works = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wrench size={24} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Works</h1>
            <p className="text-muted-foreground">
              Manage work orders and maintenance tasks
            </p>
          </div>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          New Work Order
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Work Orders Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <Wrench size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Works Module</p>
                <p className="text-sm">
                  This section will contain work order management functionality
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Works;
