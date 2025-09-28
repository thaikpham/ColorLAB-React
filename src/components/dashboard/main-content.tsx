import { Calendar, DollarSign, Download, Filter, Settings, TrendingUp, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";

const DashboardMainContent = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Total Contacts", value: "2,847", change: "+12%", icon: Users, color: "text-blue-400" },
          { title: "Active Deals", value: "156", change: "+8%", icon: TrendingUp, color: "text-green-400" },
          { title: "Revenue", value: "$89.2K", change: "+23%", icon: DollarSign, color: "text-yellow-400" },
          { title: "Meetings", value: "24", change: "+5%", icon: Calendar, color: "text-purple-400" },
        ].map((stat, index) => (
          <Card
            key={index}
            className="backdrop-blur-xl bg-muted/20 border border-primary/20 rounded-3xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-white/15"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary/80 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-muted-foreground">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Contacts and Sales Target Cards */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="backdrop-blur-xl bg-muted/10 border border-primary/20 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary/80">Recent Contacts 👥</h3>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" className="text-muted-foreground">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm" variant="ghost" className="text-muted-foreground">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Sarah Johnson",
                email: "sarah@company.com",
                phone: "+1 (555) 123-4567",
                company: "TechCorp Inc.",
                status: "Active",
                value: "$12.5K",
                avatar: "SJ",
              },
              {
                name: "Michael Chen",
                email: "michael@startup.io",
                phone: "+1 (555) 987-6543",
                company: "StartupHub",
                status: "Prospect",
                value: "$8.2K",
                avatar: "MC",
              },
              {
                name: "Emily Rodriguez",
                email: "emily@agency.com",
                phone: "+1 (555) 456-7890",
                company: "Creative Agency",
                status: "Active",
                value: "$15.7K",
                avatar: "ER",
              },
              {
                name: "David Kim",
                email: "david@tech.com",
                phone: "+1 (555) 321-0987",
                company: "TechSolutions",
                status: "Inactive",
                value: "$3.1K",
                avatar: "DK",
              },
              {
                name: "Lisa Thompson",
                email: "lisa@design.co",
                phone: "+1 (555) 654-3210",
                company: "Design Studio",
                status: "Active",
                value: "$9.8K",
                avatar: "LT",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border hover:bg-muted/100 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/20 text-muted-foreground text-sm font-medium">
                      {contact.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-primary text-sm">{contact.name}</p>
                        <p className="text-xs text-muted-foreground/80">
                          {contact.company} • {contact.phone}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-accent-foreground text-sm">{contact.value}</p>
                        <Badge
                          variant={
                            contact.status === "Active"
                              ? "default"
                              : contact.status === "Prospect"
                                ? "secondary"
                                : "outline"
                          }
                          className={`text-xs ${contact.status === "Active"
                            ? "bg-primary-foreground/20 text-primary border-border"
                            : contact.status === "Prospect"
                              ? "bg-blue-500/20 text-blue-400 border-blue-400/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-400/30"
                            }`}
                        >
                          {contact.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="backdrop-blur-xl bg-muted/10 border border-primary/20 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary/80">Sales Target 🎯</h3>
            <Button size="sm" variant="ghost" className="text-muted-foreground hover:bg-white/10">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Monthly Target Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-primary text-sm">Monthly Target</span>
                <span className="text-accent-foreground font-semibold">$125K</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-400">$85K achieved</span>
                <span className="text-primary">68%</span>
              </div>
            </div>

            {/* Quarterly Target Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-primary text-sm">Quarterly Target</span>
                <span className="text-accent-foreground font-semibold">$375K</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-yellow-400">$168K achieved</span>
                <span className="text-primary/60">45%</span>
              </div>
            </div>

            {/* Team Performance */}
            <div className="space-y-3">
              <h4 className="text-primary/80 font-medium">Team Performance</h4>
              <div className="space-y-2">
                {[
                  { name: "Sales Team A", progress: 78, color: "from-blue-400 to-purple-500" },
                  { name: "Sales Team B", progress: 62, color: "from-green-400 to-teal-500" },
                  { name: "Sales Team C", progress: 54, color: "from-orange-400 to-red-500" },
                ].map((team, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-foreground/80">{team.name}</span>
                      <span className="text-accent-foreground">{team.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${team.color} h-2 rounded-full`}
                        style={{ width: `${team.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Days Remaining */}
            <div className="bg-muted/5 backdrop-blur-2xl rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-accent-foreground">12</p>
              <p className="text-accent-foreground/60 text-sm">Days left in month</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Full-width Premium Upgrade Banner */}
      {/* <Card className="backdrop-blur-xl bg-muted/10 border border-border rounded-3xl p-8"> */}
      {/*   <div className="flex items-center justify-between"> */}
      {/*     <div className="flex items-center space-x-6"> */}
      {/*       <div className="flex items-center justify-center w-16 h-16 bg-white/20 border border-white/30 rounded-2xl"> */}
      {/*         <Crown className="h-8 w-8 text-white" /> */}
      {/*       </div> */}
      {/*       <div> */}
      {/*         <h3 className="text-2xl font-bold text-white mb-2">Upgrade to CRM Pro Premium</h3> */}
      {/*         <p className="text-white/80 text-lg mb-3"> */}
      {/*           Unlock advanced analytics, unlimited contacts, and premium integrations */}
      {/*         </p> */}
      {/*         <div className="flex items-center space-x-6 text-sm text-white/70"> */}
      {/*           <div className="flex items-center space-x-2"> */}
      {/*             <div className="w-2 h-2 bg-green-400 rounded-full"></div> */}
      {/*             <span>Advanced Reports</span> */}
      {/*           </div> */}
      {/*           <div className="flex items-center space-x-2"> */}
      {/*             <div className="w-2 h-2 bg-blue-400 rounded-full"></div> */}
      {/*             <span>Unlimited Storage</span> */}
      {/*           </div> */}
      {/*           <div className="flex items-center space-x-2"> */}
      {/*             <div className="w-2 h-2 bg-purple-400 rounded-full"></div> */}
      {/*             <span>Priority Support</span> */}
      {/*           </div> */}
      {/*           <div className="flex items-center space-x-2"> */}
      {/*             <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> */}
      {/*             <span>API Access</span> */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="text-right space-y-4"> */}
      {/*       <div className="bg-muted/10 rounded-xl p-4 border border-border"> */}
      {/*         <p className="text-white/60 text-sm">Switch to Annual</p> */}
      {/*         <p className="text-2xl font-bold text-white">$79/month → $63/month</p> */}
      {/*         <p className="text-sm font-medium text-amber-300">Save 20%</p> */}
      {/*       </div> */}
      {/*       <Button */}
      {/*         size="lg" */}
      {/*         variant='outline' */}
      {/*         className="transition-all duration-700 ease-out hover:scale-[1.05] px-8 py-3 text-lg font-semibold" */}
      {/*       > */}
      {/*         Upgrade Now */}
      {/*         <ChevronRight className="ml-2 h-5 w-5" /> */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </Card> */}
    </div>
  )
}

export default DashboardMainContent;
