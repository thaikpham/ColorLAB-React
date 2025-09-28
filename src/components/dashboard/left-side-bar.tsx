import {
  Users,
  Settings,
  BarChart3,
  FileText,
  Briefcase,
  MessageSquare,
  Database,
  Zap,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { headers } from "next/headers";

const LABEL_CLASS_NAME = 'w-full justify-start text-base text-muted-foreground hover:text-secondary-foreground transition-all duration-500 ease-out hover:scale-[1.05] h-11';

const DashboardSidebar = async () => {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname');
  return (
    <Card className="col-span-2 backdrop-blur-xl bg-muted/10 border border-border rounded-3xl p-6 pb-6 h-fit flex flex-col">
      <div className="space-y-6">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-accent-foreground">
            <Link href='/admin'>
              SNCL
            </Link>
          </h1>
          <p className="text-muted-foreground text-sm">Recipe Management</p>
        </div>
        {/* Main Navigation */}
        <div>
          <h4 className="text-primary/80 text-sm font-semibold uppercase tracking-wider mb-3">Main Menu</h4>
          <nav className="space-y-2">
            {[
              { icon: Users, label: "Recipes", name: 'recipes' },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(LABEL_CLASS_NAME, `${pathname === `/admin/${item.name}` ? "bg-muted-foreground/20 text-primary border border-border" : ""}`)}
                asChild
              >
                <Link href={`/admin/${item.name}`}>
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        {/* CRM Tools */}
        <div>
          <h4 className="text-primary/80 text-sm font-semibold uppercase tracking-wider mb-3">CRM Tools</h4>
          <nav className="space-y-2">
            {[
              { icon: FileText, label: "Reports" },
              { icon: Briefcase, label: "Deals" },
              { icon: MessageSquare, label: "Messages" },
              { icon: Database, label: "Data Import" },
              { icon: BarChart3, label: "Forecasting" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(LABEL_CLASS_NAME)}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Administration */}
        <div>
          <h4 className="text-primary/80 text-sm font-semibold uppercase tracking-wider mb-3">Administration</h4>
          <nav className="space-y-2">
            {[
              { icon: Settings, label: "Settings" },
              { icon: Zap, label: "Automations" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(LABEL_CLASS_NAME)}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex-shrink-0 space-y-4 pt-4 border-t border-white/10">
        <div className="space-y-2">
          <Button
            variant="ghost"
            className={cn(LABEL_CLASS_NAME)}
          >
            <HelpCircle className="mr-3 h-5 w-5" />
            Contact Support
          </Button>
          <Button
            variant="ghost"
            className={cn(LABEL_CLASS_NAME)}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default DashboardSidebar;
