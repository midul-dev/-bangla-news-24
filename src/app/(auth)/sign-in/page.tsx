"use client";

import logo from "@/assets/logo.webp";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    console.log(user);

    const { data, error } = await signIn.email({
      
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });
    router.push("/");

    if (error) {
      setError(error.message as string);
    } 
    toast.success('Sign In Successfully!')
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <section className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <Link href="/" className="flex justify-center items-center gap-4">
            <Image src={logo} alt="bangl;a news 24"></Image>
            <span className="text-3xl font-bold tracking-tight text-red-600">
              Bangla News 24
            </span>
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Login to your account
          </h1>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Signin form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@mail.com"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs font-medium text-red-600 hover:text-red-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <p className="mt-2 text-xs text-gray-400">
              Include one uppercase letter and one number.
            </p>
          </div>

          {error && (
            <p
              role="status"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100"
          >
Sign In          </button>
        </form>

        {/* Social signup */}
        <div className="grid grid-cols-2 gap-3 pt-5">
          <button
            type="button"
            onClick={() => {
              // Connect Google OAuth here.
            }}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#EA4335"
                d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.8-6.8C35.9 2.4 30.5 0 24 0 14.6 0 6.5 5.4 2.6 13.2l8 6.2C12.4 13.7 17.7 9.5 24 9.5Z"
              />
              <path
                fill="#4285F4"
                d="M47 24.5c0-1.6-.2-3.1-.4-4.5H24v9h12.9c-.6 3-2.3 5.5-4.8 7.2l7.7 6C44.4 38 47 31.9 47 24.5Z"
              />
              <path
                fill="#FBBC05"
                d="M10.5 28.6A14.4 14.4 0 0 1 9.8 24c0-1.6.3-3.1.7-4.6l-8-6.2A24 24 0 0 0 0 24c0 3.9.9 7.6 2.6 10.8l7.9-6.2Z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.7-6c-2.2 1.4-4.9 2.3-8.2 2.3-6.3 0-11.6-4.2-13.5-9.9l-8 6.2C6.5 42.6 14.6 48 24 48Z"
              />
            </svg>
            Google
          </button>

          <button
            type="button"
            onClick={() => {
              // Connect GitHub OAuth here.
            }}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.78 2.1 3.27 1.59.1-.73.39-1.23.7-1.52-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.69.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.75 1.03.75 2.08v3.07c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
            </svg>
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">{
          `Don't have an account?`}{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}
