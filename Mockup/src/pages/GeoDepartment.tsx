import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeoDepartment = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Building2 size={24} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              GEO Department
            </h1>
            <p className="text-muted-foreground">
              Geological department operations and monitoring
            </p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={16} />
          New Report
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>GEO Department Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <Building2 size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">GEO Department Module</p>
                <p className="text-sm">
                  This section will contain geological operations management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeoDepartment;
