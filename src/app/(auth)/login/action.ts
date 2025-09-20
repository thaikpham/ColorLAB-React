"use server"

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const loginAction = async (_: string, formData: FormData): Promise<string> => {
  const client = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('pwd') as string;

  const { error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error && !!error.message) return error?.message;

  revalidatePath('/', 'layout')
  return redirect('/');
};
