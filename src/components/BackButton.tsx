"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-accent text-sm hover:bg-accent-hover cursor-pointer transition text-gray-800 font-medium py-2 px-5 rounded-md shadow-sm"
    >
      ← بازگشت به صفحه قبل
    </button>
  );
}
