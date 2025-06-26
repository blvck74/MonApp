import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Parameters = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings size={24} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Parameters</h1>
            <p className="text-muted-foreground">
              System configuration and parameter management
            </p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={16} />
          Add Parameter
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Parameter Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <Settings size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Parameters Module</p>
                <p className="text-sm">
                  This section will contain system configuration options
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Parameters;
