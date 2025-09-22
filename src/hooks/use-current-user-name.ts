import { createClient } from '@/lib/supabase/client'
import { useUserStore } from '@/store/user-store';
import { useLayoutEffect, useState } from 'react'

export const useCurrentUser = () => {
  const user = useUserStore(s => s.user)
  const setUser = useUserStore(s => s.setUser);
  const [isFetch, setFetch] = useState(false);

  useLayoutEffect(() => {
    const fetchProfileName = async () => {
      const { data, error } = await createClient().auth.getUser();
      if (error) {
        setFetch(true);
        return;
      }
      setUser({
        email: data.user?.email || '',
        name: data.user?.user_metadata!.first_name || '',
        profileImage: data.user?.user_metadata.avatar || '',
      });
      setFetch(true);
    }
    fetchProfileName()
  }, [setUser])
  return { user, isFetch };
}
