"use server";

import client from "@/app/(website)/api/client";

export const loginAction = async (formData: FormData): Promise<{ data: any, error: any }> => {
  console.log('formData', formData);
  const email = formData.get('email') as string;
  const password = formData.get('pwd') as string;

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if(error) {
    return {data: null, error: error.message}
  }

  return {data, error}
};