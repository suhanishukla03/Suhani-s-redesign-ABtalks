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