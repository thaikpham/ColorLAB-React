'use client'

import { useCurrentUser } from '@/hooks/use-current-user-name'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const CurrentUserAvatar = () => {
  const { user } = useCurrentUser();
  const initials = user?.name
    ?.split(' ')
    ?.map((word) => word[0])
    ?.join('')
    ?.toUpperCase()

  return (
    <Avatar className='dark:border-2 border-border scale-125'>
      {user?.profileImage && <AvatarImage src={user.profileImage} alt={initials} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
