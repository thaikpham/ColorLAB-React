"use client"

import { Button } from "@/components/ui/button";
import { memo, ReactNode, useCallback } from "react";

interface LoginButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  variant: "outline" | "default" | "link" | "destructive" | "ghost" | "secondary"
  client: "google" | "microsoft"
}

const resolverRecord: Record<string, string> = {
  google: "https://google.com",
  microsoft: "https://microsoft.com"
}

const LoginButton = ({ children, type, variant, client }: LoginButtonProps) => {

  // handle user click event
  const handleClick = useCallback(() => {
    console.log('navigated to: ', resolverRecord[client])
  }, [client])

  return (
    <Button
      type={type}
      variant={variant}
      onClick={handleClick}
      className="cursor-pointer"
    >
      {children}
    </Button>
  )
}

export default memo(LoginButton);
