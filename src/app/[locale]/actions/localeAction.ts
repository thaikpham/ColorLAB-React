'use server'

import { LocaleType } from "@/type/locale.type"
import { cookies } from "next/headers"

export const setLocale = async (locale: LocaleType) => {
  const cookieStore = await cookies();
  await cookieStore.set('locale', cookieStore);
}
