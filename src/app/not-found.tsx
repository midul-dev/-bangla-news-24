'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        {/* 404 */}
        <p className="text-8xl font-extrabold tracking-tight text-red-700 sm:text-9xl">
          404
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-red-700" />

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
          পেজটি সরিয়ে ফেলা হতে পারে অথবা লিংকটি ভুল হতে পারে।
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-md bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:w-auto"
          >
            ← Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-700 hover:text-red-700 sm:w-auto"
          >
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-gray-400">
          Something went wrong? Let&apos;s get you back to the latest news.
        </p>
      </div>
    </main>
  );
}
