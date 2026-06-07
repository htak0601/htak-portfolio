"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <button
      aria-label="scroll to top"
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
    >
      <ArrowUp size={20} />
    </button>
  );
}
