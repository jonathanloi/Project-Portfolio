"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () =>{
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center relative z-10 min-h-11 px-2 -ml-2 text-sm hover:underline underline-offset-4 cursor-pointer touch-manipulation"
    >
      ← Back
    </button>
  );
}
