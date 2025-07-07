"use server"

import { db, auth } from "@/firebase/admin";

import { cookies } from "next/headers";

export async function Signup(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists",
      };
    }

  await db.collection("users").doc(uid).set({
      name,
      email,
    });

    return {
      success : true,
      message : "You have successfully created the account"
    }
  } catch (error: any) {
    console.log("you got an error ", error);

    if (error.code === "auth/email-already-in-use") {
      return {
        success: false,
        message: "email is already in use",
      };
    }

    return {
      success: false,
      message: "something went wrong plz check the credentials",
    };
  }
}

export async function SignIn(params: SignInParams) {
  const { email, idToken } = params;

  console.log("id token " , idToken);

  try {
    const user = auth.getUserByEmail(email);

    if (!user) {
      return {
        success: false,
        message: "NO user Found try to first Sign-up",
      };
    }

    console.log("user token coming from frontend ", idToken);

    await setSessionCookie(idToken);
    
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Some Error while login uo the user",
    };
  }
}

export async function setSessionCookie(token: string) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  const cookie_Store = await cookies();
  const sessionID = await auth.createSessionCookie(token, {
    expiresIn: ONE_WEEK * 1000,
  });

  cookie_Store.set("session", sessionID, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}


export async function getUser() : Promise< User | null >
{
  const cookie_store = await cookies();

  const seesion_cookie = cookie_store.get("session")?.value;

  if(!seesion_cookie)
  {
    return null;
  }

  try {

    const session_data = await auth.verifySessionCookie(seesion_cookie,true);

    const user = await db.collection('users').doc(session_data.uid).get();
    
    if(!user)
    {
      return null;
    }

    return {
      ...user.data(),
      id: user.id,
    } as User
    
    
  } catch (error:any) {

    console.log("errorr during routing to authorized page", error.message);

    return null;
    
  }

}

export async function isauthenticated(){

const user = await getUser();

return !!user;

}