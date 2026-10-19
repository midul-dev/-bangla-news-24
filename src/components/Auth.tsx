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
        <div className="w-24 h-10 animate-pulse rounded-lg bg-gray-200" />
      ) : session ? (
        <div>
          <button onClick={handleSignOut} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link href={"/sign-in"}>
            <button className="btn-sm sm:btn-md btn btn-ghost hover:btn-ghost">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn-sm sm:btn-md btn btn-error bg-red-600 text-white hover:bg-red-800">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Auth;
