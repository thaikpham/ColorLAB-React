import { MoveUpRight, Settings, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "./ui/card"
import LogoutButton from "./logout-button"

interface MenuItem {
  label: string
  value?: string
  href: string
  icon?: React.ReactNode
  external?: boolean
}

interface Profile01Props {
  name: string
  avatar: string
}

const defaultProfile = {
  name: "Eugene An",
  avatar: "/logo.png",
} satisfies Required<Profile01Props>

export default function ProfilePopup({
  name = defaultProfile.name,
  avatar = defaultProfile.avatar,
}: Partial<Profile01Props> = defaultProfile) {
  const menuItems: MenuItem[] = [
    {
      label: "Settings",
      href: "#",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="w-4 h-4" />,
      external: true,
    },
  ]

  return (
    <Card className="relative overflow-hidden rounded-2xl bg-card/20 ">
      <div className="relative px-6 py-3">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative shrink-0 w-20 aspect-square">
            <Image
              src={avatar}
              alt={name}
              fill
              className="absolute rounded-full ring-4 ring-card dark:ring-card object-cover "
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
          </div>
        </div>
        <div className="h-px bg-card/20 my-6" />
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between p-2 
                                    hover:bg-zinc-50 dark:hover:bg-zinc-800/50 
                                    rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
              </div>
              <div className="flex items-center">
                {item.value && <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{item.value}</span>}
                {item.external && <MoveUpRight className="w-4 h-4" />}
              </div>
            </Link>
          ))}
          <LogoutButton />
        </div>
      </div>
    </Card>
  )
}
