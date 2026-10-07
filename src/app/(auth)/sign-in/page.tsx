'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignIn = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md">

        <form
          onSubmit={onSubmit}
          className="bg-base-100 border border-base-300 rounded-2xl p-8 shadow-xl"
        >
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl text-center text-red-700 font-bold tracking-tight">
              স্বাগতম
            </h1>

            <p className="text-sm text-base-content/60 mt-2">
              আপনার অ্যাকাউন্ট ব্যবহার করতে আপনার তথ্য পূরণ করুন
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              ইমেইল
            </label>

            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেল আইডি"
              className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:border-primary"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              পাসওয়ার্ড
            </label>

            <input
              name="password"
              type="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:border-primary"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn bg-red-700 text-white w-full h-12 rounded-xl text-base font-semibold"
          >
            সাইন ইন
          </button>
          <p className="text-center pt-4">অ্যাকাউন্ট নেই? <Link className="font-semibold text-red-700 hover:underline" href={"/sign-up"}>সাইন আপ করুন</Link></p>
        </form>

      </div>
    </main>
  );
};

export default SignIn;
