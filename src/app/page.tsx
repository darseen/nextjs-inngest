"use client";

import { useState, useTransition } from "react";
import triggerEvent from "@/actions/trigger-event";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleEventTrigger = () => {
    setMessage({ text: "", type: "" });

    startTransition(async () => {
      try {
        await triggerEvent();
        setMessage({
          text: "Event triggered! Check your Inngest dashboard.",
          type: "success",
        });
      } catch {
        setMessage({
          text: "Failed to trigger event. Please try again.",
          type: "error",
        });
      }
    });
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black gap-8">
        <h1 className="text-3xl font-bold text-center tracking-tight text-zinc-800 dark:text-zinc-100">
          Welcome to the Next.js + Inngest Starter Template!
        </h1>

        <div className="w-full flex flex-col items-center mt-8">
          <button
            onClick={handleEventTrigger}
            disabled={isPending}
            className={`flex w-full sm:w-auto items-center justify-center rounded-md border border-zinc-200 bg-white px-8 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all
              ${isPending ? "opacity-70 cursor-not-allowed" : "hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-zinc-700 dark:focus:ring-blue-800"} 
              dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300`}
          >
            {isPending ? "Triggering..." : "Trigger Event"}
          </button>

          <div className="h-6 mt-4 flex justify-center">
            {message.text && (
              <p
                className={`text-sm font-medium animate-in fade-in zoom-in duration-300 ${message.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
              >
                {message.text}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
