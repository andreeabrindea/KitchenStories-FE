"use server";
import { cookies } from 'next/headers'

export async function setCookiesForAuthentication(token: string) {

    const cookieStore = await cookies();
    cookieStore.set("authtoken", token, {
            path: "/",
            httpOnly: true,
            secure: true,
            expires: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000)
    });
}