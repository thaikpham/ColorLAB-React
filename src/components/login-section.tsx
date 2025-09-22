"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { useCurrentUser } from "@/hooks/use-current-user-name";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import ProfilePopup from "./profile-card";
import { CurrentUserAvatar } from "./current-user-avatar";

const LoginSection = () => {
  const { user, isFetch } = useCurrentUser();
  if (!isFetch) return <></>;

  if (user) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-0 cursor-pointer select-none">
          <CurrentUserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-[280px] sm:w-80 bg-transparent border-0 backdrop-blur-2xl"
        >
          <ProfilePopup
            name={user.name}
            avatar={user.profileImage} />
        </DropdownMenuContent>
      </DropdownMenu>)
  }
  return (
    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
      <Button asChild variant="outline" size="sm">
        <Link href="/login" className="text-primary">
          <span>Login</span>
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href="/sign-up" className="text-muted-foreground">
          <span>Sign Up</span>
        </Link>
      </Button>
    </div>
  )
}



export default LoginSection;
