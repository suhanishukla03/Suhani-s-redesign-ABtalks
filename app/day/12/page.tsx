"use client";

import { useState } from "react";

const checklist = [
  "Connect a public weather API",
  "Create loading and error states",
  "Turn forecast data into useful information",
  "Make the experience work beautifully on mobile",
];

export default function Day12() {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [completed, setCompleted] = useState(false);

  const canComplete =
    github.trim() !== "" && linkedin.trim() !== "";

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#171717]">
      {/* Header */}
      <header className="border-b border-black/10 bg-white px-5 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <a
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-bold"
          >
            <span className="text-lg">←</span>
            Dashboard
          </a>

          <span className="text-sm font-black tracking-[-0.03em]">
            AB<span className="text-[#ff5c35]">Talks</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-8 sm:py-12">

        {/* Day introduction */}
        <section>
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              Challenge day
            </p>

            <p className="text-xs font-bold text-black/35">
              12 / 60
            </p>
          </div>

          <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Weather
            <br />
            intelligence.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
            Build a weather experience that turns raw forecast
            data into information people can actually use.
          </p>
        </section>

        {/* Today's mission */}
        <section className="mt-8 rounded-3xl bg-[#171717] p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            Today's mission
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Don't just display the weather.
            <br />
            Make it useful.
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/60">
            Use a public weather API and design an interface
            that helps someone quickly understand today's
            conditions, what's changing, and what they should
            know next.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["APIs", "React", "UI states", "Mobile"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/75"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </section>

        {/* What you'll practice */}
        <section className="mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
            What you'll practice
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["01", "API integration"],
              ["02", "Data handling"],
              ["03", "Interface states"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl bg-[#f7f7f4] p-4"
              >
                <span className="text-xs font-black text-[#ff5c35]">
                  {number}
                </span>

                <p className="mt-6 text-sm font-bold">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Build checklist */}
        <section className="mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
            Build checklist
          </p>

          <div className="mt-5 space-y-3">
            {checklist.map((item, index) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-black/5 bg-[#f7f7f4] p-4"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#ff5c35]"
                />

                <span className="text-sm leading-5 text-black/70">
                  <span className="mr-2 text-xs font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Proof of work */}
        <section className="mt-6 rounded-3xl border border-[#ff5c35]/20 bg-[#fff5f1] p-6 sm:p-8">

          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
            Proof of work
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight">
            Show what you shipped.
          </h2>

          <p className="mt-2 text-sm leading-6 text-black/50">
            Add the two pieces of public proof that make this
            day part of your learning record.
          </p>

          {/* GitHub */}
          <div className="mt-7">
            <label
              htmlFor="github"
              className="text-sm font-bold"
            >
              GitHub repository
            </label>

            <p className="mt-1 text-xs text-black/40">
              Paste the URL of the repository containing
              today's build.
            </p>

            <input
              id="github"
              type="url"
              value={github}
              onChange={(event) =>
                setGithub(event.target.value)
              }
              placeholder="https://github.com/you/weather-app"
              className="mt-3 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition placeholder:text-black/25 focus:border-[#ff5c35]"
            />
          </div>

          {/* LinkedIn */}
          <div className="mt-5">
            <label
              htmlFor="linkedin"
              className="text-sm font-bold"
            >
              LinkedIn post
            </label>

            <p className="mt-1 text-xs text-black/40">
              Share the post where you documented today's
              build.
            </p>

            <input
              id="linkedin"
              type="url"
              value={linkedin}
              onChange={(event) =>
                setLinkedin(event.target.value)
              }
              placeholder="https://linkedin.com/posts/..."
              className="mt-3 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition placeholder:text-black/25 focus:border-[#ff5c35]"
            />
          </div>

          {/* Complete button */}
          <button
            type="button"
            disabled={!canComplete || completed}
            onClick={() => setCompleted(true)}
            className={`mt-6 flex h-12 w-full items-center justify-center rounded-full text-sm font-bold transition ${
              completed
                ? "bg-[#171717] text-white"
                : canComplete
                  ? "bg-[#ff5c35] text-white hover:bg-[#171717]"
                  : "cursor-not-allowed bg-black/10 text-black/30"
            }`}
          >
            {completed
              ? "Day 12 completed ✓"
              : "Complete Day 12 →"}
          </button>

          {!canComplete && !completed && (
            <p className="mt-3 text-center text-xs text-black/35">
              Add both proof links to complete today's
              challenge.
            </p>
          )}

          {completed && (
            <div className="mt-4 rounded-2xl bg-white p-4 text-center">
              <p className="text-sm font-bold">
                🔥 Your streak continues.
              </p>

              <p className="mt-1 text-xs text-black/40">
                Day 12 has been added to your public
                learning journey.
              </p>
            </div>
          )}
        </section>

        {/* Bottom navigation */}
        <div className="mt-8 flex items-center justify-between">
          <a
            href="/dashboard"
            className="text-xs font-bold text-black/40 hover:text-black"
          >
            ← Back to dashboard
          </a>

          <span className="text-xs font-bold text-black/25">
            48 days remaining
          </span>
        </div>

      </div>
    </main>
  );
}