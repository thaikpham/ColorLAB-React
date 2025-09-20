"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const logoutAction = async (_: any): Promise<void> => {
  const client = await createClient();
  await client.auth.signOut();
  revalidatePath('/', 'layout')
  redirect('/');
}
