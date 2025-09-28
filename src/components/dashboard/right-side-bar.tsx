import { Calendar, Mail, Phone, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const DashboardRightSideBar = () => {
  return (
    <Card className="col-span-2 backdrop-blur-xl bg-muted/10 border border-border rounded-3xl p-6 pb-6 h-fit">
      <div className="space-y-6">
        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-primary/80 mb-4">Quick Actions ⚡</h3>
          <div className="space-y-2">
            {[
              { icon: Phone, label: "Schedule Call" },
              { icon: Mail, label: "Send Email" },
              { icon: Calendar, label: "Book Meeting" },
              { icon: Plus, label: "Add Note" },
            ].map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground/80 transition-all duration-500 ease-out hover:scale-[1.05]"
              >
                <action.icon className="mr-3 h-4 w-4" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold text-primary/80 mb-4">Recent Activity 📈</h3>
          <div className="space-y-3">
            {[
              { action: "New contact added", time: "2 min ago", type: "success" },
              { action: "Deal closed", time: "1 hour ago", type: "success" },
              { action: "Meeting scheduled", time: "3 hours ago", type: "info" },
              { action: "Email sent", time: "5 hours ago", type: "default" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/20 backdrop-blur-2xl rounded-xl">
                <div
                  className={`w-2 h-2 rounded-full ${activity.type === "success"
                    ? "bg-green-400"
                    : activity.type === "info"
                      ? "bg-blue-400"
                      : "bg-white/60"
                    }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-secondary-foreground">{activity.action}</p>
                  <p className="text-xs text-secondary-foreground/60">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div>
          <h3 className="text-lg font-semibold text-primary/80 mb-4">Top Performers 🏆</h3>
          <div className="space-y-3">
            {[
              { name: "Alex Smith", deals: 12, avatar: "AS" },
              { name: "Maria Garcia", deals: 9, avatar: "MG" },
              { name: "John Doe", deals: 7, avatar: "JD" },
            ].map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-muted-foreground text-xs">{performer.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-primary">{performer.name}</p>
                    <p className="text-xs text-primary/60">{performer.deals} deals</p>
                  </div>
                </div>
                <Badge className="bg-white/10 text-accent-foreground border-border">#{index + 1}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DashboardRightSideBar;
