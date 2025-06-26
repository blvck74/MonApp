import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Users,
  Activity,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  color?: "default" | "success" | "warning" | "destructive" | "info";
}

function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  color = "default",
}: StatCardProps) {
  const colorClasses = {
    default: "text-foreground",
    success: "text-success",
    warning: "text-warning",
    destructive: "text-destructive",
    info: "text-info",
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={colorClasses[color]}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {trend && (
              <span
                className={cn(
                  "inline-flex items-center gap-1",
                  trend === "up"
                    ? "text-success"
                    : trend === "down"
                      ? "text-destructive"
                      : "text-muted-foreground",
                )}
              >
                {trend === "up" && <TrendingUp size={12} />}
                {trend === "down" && (
                  <ArrowUpRight size={12} className="rotate-90" />
                )}
              </span>
            )}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

interface TicketItem {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  status: "open" | "in-progress" | "resolved";
  time: string;
  assignee?: string;
}

function TicketCard({ ticket }: { ticket: TicketItem }) {
  const priorityColors = {
    high: "destructive",
    medium: "warning",
    low: "secondary",
  };

  const statusColors = {
    open: "destructive",
    "in-progress": "warning",
    resolved: "success",
  };

  return (
    <div className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex-shrink-0 mt-1">
        <AlertCircle size={16} className="text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-medium text-sm text-foreground truncate">
            {ticket.title}
          </p>
          <Badge
            variant={priorityColors[ticket.priority] as any}
            className="text-xs"
          >
            {ticket.priority}
          </Badge>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{ticket.time}</span>
          <Badge
            variant={statusColors[ticket.status] as any}
            className="text-xs"
          >
            {ticket.status.replace("-", " ")}
          </Badge>
          {ticket.assignee && <span>• {ticket.assignee}</span>}
        </div>
      </div>
    </div>
  );
}

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export function Dashboard() {
  const mockTickets: TicketItem[] = [
    {
      id: "1",
      title: "Critical equipment malfunction in Sector A",
      priority: "high",
      status: "open",
      time: "10 min ago",
      assignee: "P. Petrov",
    },
    {
      id: "2",
      title: "Routine maintenance check overdue",
      priority: "medium",
      status: "in-progress",
      time: "1 hour ago",
      assignee: "A. Sidorov",
    },
    {
      id: "3",
      title: "Environmental sensor calibration required",
      priority: "medium",
      status: "open",
      time: "2 hours ago",
    },
    {
      id: "4",
      title: "Safety protocol review completed",
      priority: "low",
      status: "resolved",
      time: "3 hours ago",
      assignee: "M. Volkov",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitoring shift management system overview
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Tasks"
          value={23}
          description="+2 from yesterday"
          icon={<CheckCircle size={20} />}
          trend="up"
          color="info"
        />
        <StatCard
          title="Open Incidents"
          value={7}
          description="+1 from last hour"
          icon={<AlertTriangle size={20} />}
          trend="up"
          color="warning"
        />
        <StatCard
          title="New Tickets"
          value={12}
          description="+4 from yesterday"
          icon={<Clock size={20} />}
          trend="up"
          color="success"
        />
        <StatCard
          title="Active Personnel"
          value={45}
          description="On current shift"
          icon={<Users size={20} />}
          color="default"
        />
      </div>

      {/* Important Tickets Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity size={20} />
                Important Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm text-foreground">
                  Create New Ticket
                </div>
                <div className="text-xs text-muted-foreground">
                  Report an incident or issue
                </div>
              </button>
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm text-foreground">
                  Start Shift Handover
                </div>
                <div className="text-xs text-muted-foreground">
                  Begin handover process
                </div>
              </button>
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium text-sm text-foreground">
                  View Reports
                </div>
                <div className="text-xs text-muted-foreground">
                  Access shift reports
                </div>
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Main Systems</span>
                <Badge
                  variant="default"
                  className="bg-success text-success-foreground"
                >
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Backup Power</span>
                <Badge
                  variant="default"
                  className="bg-success text-success-foreground"
                >
                  Ready
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Communications</span>
                <Badge variant="warning">Limited</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Safety Systems</span>
                <Badge
                  variant="default"
                  className="bg-success text-success-foreground"
                >
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
