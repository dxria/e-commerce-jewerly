"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


export default function LogInWithGoogle() {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })}
      className="w-60 px-6 py-2 flex justify-center items-center gap-2 font-raleway font-semibold border-2 border-grey-rose rounded-md ">
      <FcGoogle /> 
      <div>
        Login with Google 
        </div>
    </button>
  );
}
