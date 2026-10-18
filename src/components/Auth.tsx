"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Auth = () => {
  const handleSignOut = async () => {
    await signOut();
    toast.error("Logout Successfully!");
  };

  const { data: session, isPending } = useSession();
  console.log(session);

  return (
    <div>
      {isPending ? (
        <></>
      ) : session ? (
        <div>
          <button onClick={handleSignOut} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/sign-in"}>
            <button className="btn btn-ghost hover:btn-ghost">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn btn-error bg-red-600 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Auth;
