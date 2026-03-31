"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

/**
 * AccordionItem — single expandable FAQ item.
 * Used as building block by AccordionFAQ organism.
 *
 * @param {boolean}  defaultOpen - start expanded
 * @param {"light"|"dark"} mode
 */
export default function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  mode = "light",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isDark = mode === "dark";

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border transition-colors",
        isDark
          ? "border-zinc-800 bg-zinc-900"
          : "border-gray-200 bg-white"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors",
          isDark
            ? "hover:bg-zinc-800/60"
            : "hover:bg-gray-50"
        )}
        aria-expanded={open}
      >
        <span
          className={cn(
            "text-base sm:text-lg font-medium pr-4",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200",
            open
              ? "bg-amber-500 text-black rotate-45"
              : isDark
              ? "bg-zinc-700 text-zinc-300"
              : "bg-gray-100 text-gray-600"
          )}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className={cn(
            "px-5 sm:px-6 pb-5 sm:pb-6",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
