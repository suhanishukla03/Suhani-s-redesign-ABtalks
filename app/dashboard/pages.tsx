const days = [
  { day: 1, status: "complete" },
  { day: 2, status: "complete" },
  { day: 3, status: "complete" },
  { day: 4, status: "complete" },
  { day: 5, status: "complete" },
  { day: 6, status: "complete" },
  { day: 7, status: "complete" },
  { day: 8, status: "complete" },
  { day: 9, status: "complete" },
  { day: 10, status: "complete" },
  { day: 11, status: "complete" },
  { day: 12, status: "complete" },
  { day: 13, status: "today" },
  { day: 14, status: "upcoming" },
  { day: 15, status: "upcoming" },
];

const achievements = [
  {
    icon: "🔥",
    title: "12 day streak",
    description: "You've shown up 12 days in a row.",
  },
  {
    icon: "⚡",
    title: "First 10 builds",
    description: "Ten projects shipped. Keep going.",
  },
  {
    icon: "◈",
    title: "Public builder",
    description: "Your work is visible on GitHub.",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#171717]">
      {/* Header */}
      <header className="border-b border-black/10 bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="/"
            className="text-lg font-black tracking-[-0.04em]"
          >
            AB<span className="text-[#ff5c35]">Talks</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-bold">Suhani</p>
              <p className="text-[10px] text-black/40">
                AI Engineer
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-xs font-bold text-white">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Welcome */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
            Day 13 of 60
          </p>

          <h1 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            Keep the
            <br />
            streak alive.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-black/50 sm:text-base">
            You're building momentum. One more project today keeps your
            public learning streak moving forward.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl bg-[#171717] p-5 text-white">
            <p className="text-3xl font-black">12</p>
            <p className="mt-1 text-xs text-white/50">day streak 🔥</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-3xl font-black">20%</p>
            <p className="mt-1 text-xs text-black/40">challenge done</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-3xl font-black">12</p>
            <p className="mt-1 text-xs text-black/40">projects shipped</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-3xl font-black">24</p>
            <p className="mt-1 text-xs text-black/40">proof points</p>
          </div>
        </section>

        {/* Today's build */}
        <section className="mt-6 overflow-hidden rounded-3xl bg-[#ff5c35] text-white">
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                  Today's build
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                  Build a weather
                  <br />
                  intelligence app.
                </h2>
              </div>

              <span className="shrink-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                ~45 min
              </span>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
              Use a public weather API to turn raw forecast data into
              something useful. Focus on clean states, useful information,
              and a polished mobile experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["APIs", "React", "UI states"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/day/12"
              className="mt-7 flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[#171717] transition hover:bg-[#171717] hover:text-white sm:w-fit"
            >
              Start today's build →
            </a>
          </div>
        </section>

        {/* Progress */}
        <section className="mt-6 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
                Your journey
              </p>
              <h2 className="mt-2 text-xl font-black">
                12 of 60 days complete
              </h2>
            </div>

            <p className="text-sm font-bold text-[#ff5c35]">20%</p>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-black/5">
            <div
              className="h-full rounded-full bg-[#ff5c35]"
              style={{ width: "20%" }}
            />
          </div>

          <div className="mt-6 grid grid-cols-5 gap-2">
            {days.map((item) => (
              <div
                key={item.day}
                className={`flex aspect-square items-center justify-center rounded-xl text-xs font-bold ${
                  item.status === "complete"
                    ? "bg-[#171717] text-white"
                    : item.status === "today"
                      ? "border-2 border-[#ff5c35] bg-[#fff5f1] text-[#ff5c35]"
                      : "bg-[#f7f7f4] text-black/25"
                }`}
              >
                {item.day}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-black/40">
            <span>● Completed</span>
            <span className="text-[#ff5c35]">● Today</span>
            <span>● Upcoming</span>
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/35">
                Momentum
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">
                You've earned this.
              </h2>
            </div>

            <span className="text-xs font-bold text-black/35">
              3 unlocked
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7f7f4] text-lg">
                  {achievement.icon}
                </div>

                <div>
                  <p className="text-sm font-bold">
                    {achievement.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-black/45">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom navigation */}
        <nav className="mt-10 grid grid-cols-3 rounded-2xl border border-black/10 bg-white p-1">
          <a
            href="/dashboard"
            className="rounded-xl bg-[#171717] py-3 text-center text-xs font-bold text-white"
          >
            Home
          </a>

          <a
            href="/day/12"
            className="rounded-xl py-3 text-center text-xs font-bold text-black/40"
          >
            Today's build
          </a>

          <a
            href="/"
            className="rounded-xl py-3 text-center text-xs font-bold text-black/40"
          >
            Profile
          </a>
        </nav>
      </div>
    </main>
  );
}