const stats = [
  { value: "60", label: "days to build" },
  { value: "1", label: "project every day" },
  { value: "2", label: "proofs of work" },
];

const steps = [
  {
    number: "01",
    title: "Pick your track",
    description: "Choose what you want to get better at and commit to the journey.",
  },
  {
    number: "02",
    title: "Build every day",
    description: "Turn small daily challenges into real projects and stronger skills.",
  },
  {
    number: "03",
    title: "Show your work",
    description: "Submit your GitHub commit and LinkedIn post. Make your progress visible.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#171717]">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="text-xl font-black tracking-[-0.06em]">
          AB<span className="text-[#ff5c35]">Talks</span>
        </a>

        <a
          href="/dashboard"
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
        >
          Student login →
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[680px] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-black/60">
            <span className="h-2 w-2 rounded-full bg-[#ff5c35]" />
            60-day build challenge
          </div>

          <h1 className="max-w-4xl text-[clamp(3.5rem,13vw,7.5rem)] font-black leading-[0.86] tracking-[-0.075em]">
            Build every day.
            <br />
            <span className="text-[#ff5c35]">Become visible.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-7 text-black/60 sm:text-xl sm:leading-8">
            A 60-day coding challenge for Indian college students. Build
            something every day, prove your progress, and create a public
            record of what you can actually do.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/dashboard"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#171717] px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff5c35]"
            >
              Start your 60 days →
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/10 bg-white px-7 text-base font-bold transition hover:bg-black/5"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid max-w-2xl grid-cols-3 border-y border-black/10 py-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-black/10 px-3 first:pl-0 last:border-0">
              <p className="text-2xl font-black tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium leading-4 text-black/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
            {/* Proof of work */}
      <section className="border-t border-black/10 bg-[#f7f7f4] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              Your public streak
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
              Every day
              <br />
              leaves proof.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-black/55">
              Your learning isn't hidden inside a notebook. Every challenge
              becomes evidence you can show to the world.
            </p>

            <div className="mt-7 rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-sm font-bold">60 days → 60 pieces of proof</p>
              <p className="mt-1 text-xs leading-5 text-black/50">
                Build it. Commit it. Share it. Keep the streak alive.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                  Current streak
                </p>
                <p className="mt-1 text-3xl font-black tracking-tight">
                  12 days 🔥
                </p>
              </div>

              <div className="rounded-full bg-[#fff0eb] px-3 py-1.5 text-xs font-bold text-[#ff5c35]">
                20% complete
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {[
                { day: "01", complete: true },
                { day: "02", complete: true },
                { day: "03", complete: true },
                { day: "04", complete: true },
                { day: "05", complete: true },
                { day: "06", complete: true },
                { day: "07", complete: true },
                { day: "08", complete: true },
                { day: "09", complete: true },
                { day: "10", complete: true },
                { day: "11", complete: true },
                { day: "12", complete: true },
                { day: "13", complete: false },
                { day: "14", complete: false },
                { day: "15", complete: false },
                { day: "16", complete: false },
                { day: "17", complete: false },
                { day: "18", complete: false },
              ].map((item) => (
                <div
                  key={item.day}
                  className={`flex aspect-square flex-col items-center justify-center rounded-xl border text-xs font-bold ${
                    item.complete
                      ? "border-[#ff5c35] bg-[#ff5c35] text-white"
                      : "border-black/10 bg-[#f7f7f4] text-black/30"
                  }`}
                >
                  <span>{item.day}</span>
                  {item.complete && (
                    <span className="mt-0.5 text-[9px]">✓ proof</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#f7f7f4] p-4">
                <p className="text-lg font-black">12/12</p>
                <p className="mt-1 text-xs text-black/45">GitHub commits</p>
              </div>

              <div className="rounded-2xl bg-[#f7f7f4] p-4">
                <p className="text-lg font-black">12/12</p>
                <p className="mt-1 text-xs text-black/45">LinkedIn posts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Choose your track */}
      <section className="border-t border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              Choose your direction
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              One challenge.
              <br />
              Your own path.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
              Pick a track that matches what you want to become. The goal
              isn't to watch more tutorials. It's to build more things.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {/* Build in Public */}
            <article className="group flex flex-col rounded-3xl border border-black/10 bg-[#f7f7f4] p-6 transition hover:-translate-y-1 hover:border-black/20">
              <div className="flex items-center justify-between">
                <span className="text-3xl">◈</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black/50">
                  60 days
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black tracking-tight">
                Build in Public
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Ship websites, apps, and real projects while building a
                public record of your progress.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Frontend", "Full-stack", "Projects"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="/dashboard"
                className="mt-8 flex h-12 items-center justify-center rounded-full bg-[#171717] text-sm font-bold text-white transition group-hover:bg-[#ff5c35]"
              >
                Explore track →
              </a>
            </article>

            {/* AI Engineer */}
            <article className="group flex flex-col rounded-3xl border border-[#ff5c35]/30 bg-[#fff5f1] p-6 transition hover:-translate-y-1 hover:border-[#ff5c35]">
              <div className="flex items-center justify-between">
                <span className="text-3xl">✦</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#ff5c35]">
                  Popular
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black tracking-tight">
                AI Engineer
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Build AI-powered products and learn the systems behind
                RAG, agents, APIs, and modern AI applications.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["RAG", "Agents", "AI Apps"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#ff5c35]/15 bg-white px-3 py-1.5 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="/dashboard"
                className="mt-8 flex h-12 items-center justify-center rounded-full bg-[#ff5c35] text-sm font-bold text-white transition hover:bg-[#171717]"
              >
                Explore track →
              </a>
            </article>

            {/* Data & ML */}
            <article className="group flex flex-col rounded-3xl border border-black/10 bg-[#f7f7f4] p-6 transition hover:-translate-y-1 hover:border-black/20">
              <div className="flex items-center justify-between">
                <span className="text-3xl">⌁</span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black/50">
                  60 days
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-black tracking-tight">
                Data & ML
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Work with real datasets, Python, machine learning concepts,
                and projects that turn data into useful decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "ML", "Data"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="/dashboard"
                className="mt-8 flex h-12 items-center justify-center rounded-full bg-[#171717] text-sm font-bold text-white transition group-hover:bg-[#ff5c35]"
              >
                Explore track →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-black/10 bg-white px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5c35]">
              The system
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Small builds.
              <br />
              Serious momentum.
            </h2>

            <p className="mt-5 text-base leading-7 text-black/55 sm:text-lg">
              You don't need to become a different developer overnight.
              You just need to show up, build, and leave evidence behind.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-black/10 bg-[#f7f7f4] p-6"
              >
                <p className="text-sm font-black text-[#ff5c35]">
                  {step.number}
                </p>

                <h3 className="mt-12 text-xl font-black tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a6d]">
            Your next 60 days
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            Don't just learn.
            <br />
            Leave proof.
          </h2>

          <a
            href="/dashboard"
            className="mt-9 inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-[#171717] transition hover:bg-[#ff5c35] hover:text-white"
          >
            Begin the challenge →
          </a>
        </div>
      </section>
    </main>
  );
}