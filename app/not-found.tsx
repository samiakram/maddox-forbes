"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-3xl bg-white">
      <h1>404 - Page Not Found</h1>
      <button
        onClick={router.back}
        className="text-base border-b-2 border-transparent hover:border-r-blue transition-all duration-300"
      >
        Back to previous page
      </button>
    </div>
  );
}
