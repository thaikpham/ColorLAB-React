import Link from "next/link";
import { Card } from "../ui/card";

const DashboardHeader = () => {
  return (
    <Card className="backdrop-blur-xl bg-muted/10 border border-border rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-accent-foreground">
            <Link href='/admin'>
              Dashboard 📊
            </Link>
          </h2>
          <p className="text-muted-foreground">Welcome back! Here's your SNCL overview</p>
        </div>
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </Card>
  )
}

export default DashboardHeader;
