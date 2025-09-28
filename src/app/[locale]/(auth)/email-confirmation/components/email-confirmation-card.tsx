import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
const EmailConfirmationCard = () => {
  return (
    <Card className="bg-card/10 shadow-md shadow-shadow-color rounded-3xl p-8 md:p-12 max-w-md w-full relative z-10">
      <div className="text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="glass-card rounded-full p-6 w-20 h-20 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gradient">
            Check Your Email
          </h1>
          <p className="text-muted-foreground text-lg">
            {`We've sent a confirmation link to your email address`}
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-4 text-muted-foreground">
          <p>
            {`Click the confirmation link in the email to verify your account and get started.`}
          </p>
          <p className="text-sm">
            {`Can't find the email? Check your spam folder or try resending.`}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 text-sm text-muted-foreground">
          <p>
            Still having trouble?{" "}
            <a
              href="mailto:support@example.com"
              className="text-primary hover:text-secondary transition-colors underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default EmailConfirmationCard;
