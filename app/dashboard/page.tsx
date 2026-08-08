"use client";

import { useState } from "react";

const achievements = [
  { icon: "⚡", title: "Early Builder", text: "Started your challenge" },
  { icon: "🔥", title: "7 Day Streak", text: "Showed up for a full week" },
  { icon: "🚀", title: "First Ship", text: "Published your first project" },
];

export default function Dashboard() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#171717]">
      {/* Header */}
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <a href="/" className="text-lg font-black tracking-tight">
            AB<span className="text-[#ff5c35]">Talks</span>
          </a>

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-sm font-bold text-white"
            aria-label="Open profile"
          >
            S
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-8 sm:py-12">

        {/* Profile reminder */}
        {profileOpen && (
          <section className="mb-5 rounded-3xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
              Your profile
            </p>

            <h2 className="mt-2 text-xl font-black">
              Your profile isn't complete yet.
            </h2>

            <p className="mt-2 text-sm leading-6 text-black/50">
              Add your name and track so your learning journey
              feels like yours.
            </p>

            <button className="mt-4 rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white">
              Complete profile →
            </button>
          </section>
        )}

        {/* Greeting */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
            Your learning journey
          </p>

          <h1 className="mt-3 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Keep
            <br />
            building.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
            You're on Day 12 of 60. One small build at a time,
            you're creating proof of what you can do.
          </p>
        </section>

        {/* Main progress card */}
        <section className="mt-8 rounded-3xl bg-[#171717] p-6 text-white sm:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                Current streak
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-6xl font-black tracking-[-0.06em]">
                  11
                </span>

                <span className="mb-2 text-sm font-bold text-white/50">
                  days
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-4xl">🔥</span>
              <p className="mt-1 text-xs font-bold text-white/40">
                Keep it going
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between text-xs font-bold text-white/45">
              <span>Challenge progress</span>
              <span>12 / 60</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#ff5c35]"
                style={{ width: "20%" }}
              />
            </div>
          </div>
        </section>

        {/* Today's task */}
        <section className="mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
              Today's task
            </p>

            <span className="rounded-full bg-[#f7f7f4] px-3 py-1.5 text-xs font-bold">
              Day 12
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
            Build weather intelligence.
          </h2>

          <p className="mt-3 text-sm leading-6 text-black/50">
            Turn live weather data into an experience that
            helps someone understand what they need to know.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["APIs", "React", "Mobile"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/day/12"
            className="mt-7 flex h-12 items-center justify-center rounded-full bg-[#ff5c35] text-sm font-bold text-white transition hover:bg-[#171717]"
          >
            Continue Day 12 →
          </a>
        </section>

        {/* Overall completion */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
              Overall completion
            </p>

            <p className="mt-4 text-4xl font-black tracking-[-0.05em]">
              20%
            </p>

            <p className="mt-2 text-sm text-black/45">
              12 of 60 challenge days
            </p>
          </article>

          <article className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
              Proof collected
            </p>

            <p className="mt-4 text-4xl font-black tracking-[-0.05em]">
              22
            </p>

            <p className="mt-2 text-sm text-black/45">
              GitHub + LinkedIn submissions
            </p>
          </article>
        </section>

        {/* Achievements */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
                Your wins
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight">
                Achievements
              </h2>
            </div>

            <span className="text-xs font-bold text-black/30">
              3 unlocked
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f7f4] text-xl">
                  {achievement.icon}
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {achievement.title}
                  </h3>

                  <p className="mt-1 text-xs text-black/45">
                    {achievement.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Thoughtful recovery feature */}
        <section className="mt-10 rounded-3xl border border-[#ff5c35]/20 bg-[#fff5f1] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff5c35]">
            Missed yesterday?
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight">
            That's okay. Keep going.
          </h2>

          <p className="mt-3 text-sm leading-6 text-black/50">
            Your challenge isn't about being perfect for 60
            days. It's about building the habit of coming back.
          </p>

          <a
            href="/day/12"
            className="mt-5 inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white"
          >
            Pick up today's build →
          </a>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center">
          <p className="text-xs font-medium text-black/30">
            48 days left in your challenge · Keep shipping.
          </p>
        </footer>
      </div>
    </main>
  );
}