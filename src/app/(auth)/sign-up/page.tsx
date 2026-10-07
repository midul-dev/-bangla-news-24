
'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
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
            <h1 className="text-2xl text-center text-red-700 font-bold tracking-tight">
              অ্যাকাউন্ট তৈরি করুন
            </h1>

            <p className="text-sm text-base-content/60 mt-2">
              অ্যাকাউন্ট তৈরি করতে আপনার তথ্য পূরণ করুন।
            </p>
          </div>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              নাম
            </label>

            <input
              name="name"
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="input input-bordered w-full h-12 rounded-xl focus:outline-none focus:border-primary"
            />
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
            className="btn bg-red-700 text-white w-full h-12 rounded-xl text-base font-semibold hover:btn-error"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
          <p className="text-sm text-center pt-4">অ্যাকাউন্ট আছে? <Link className="text-red-700 font-semibold hover:underline" href={"/sign-in"}>সাইন ইন করুন</Link></p>
        </form>

      </div>
    </main>
  );
};

export default SignUpPage;