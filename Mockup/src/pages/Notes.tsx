import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Notes = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Notes</h1>
            <p className="text-muted-foreground">
              Digital notepad and documentation system
            </p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Plus size={16} />
          New Note
        </Button>
      </div>

      {/* Content Placeholder */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notes Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              <div className="text-center">
                <FileText size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Notes Module</p>
                <p className="text-sm">
                  This section will contain note-taking and documentation tools
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notes;
