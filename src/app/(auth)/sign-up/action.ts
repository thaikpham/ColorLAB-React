"use server"

import { createClient, createServiceClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const signUpAction = async (_: string, formData: FormData): Promise<string> => {
  const client = await createClient();
  const adminClient = await createServiceClient();
  const email = formData.get('email') as string;
  const password = formData.get('pwd') as string;
  const firstName = formData.get('firstname') as string;
  const lastName = formData.get('lastname') as string;
  const avatar = (formData.get('avatar')) as File;

  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      }
    }
  });

  if (error?.message) return error.message;

  if (!data?.user?.id) return 'User id is not found';


  const fileExt = avatar.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `${data.user.id}/${fileName}`

  const { error: uploadError } = await client.storage.from('avatars').upload(
    filePath,
    avatar, {
    cacheControl: '3600',
    upsert: false
  })


  if (!!uploadError?.message) return uploadError?.message;

  const { data: imageData } = client.storage
    .from('avatars')
    .getPublicUrl(filePath);

  const { error: updateError } = await adminClient.auth.admin.updateUserById(data.user.id, {
    user_metadata: {
      avatar: imageData?.publicUrl
    }
  })

  if (!!updateError?.message) return updateError?.message;
  return redirect(`/email-confirmation`);
}
