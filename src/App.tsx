import { useEffect, useState } from "react"

const ArrowUpRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const Spark = () => (
  <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 1c.6 7 4 10.4 11 11-7 .6-10.4 4-11 11-.6-7-4-10.4-11-11 7-.6 10.4-4 11-11Z"
      fill="currentColor"
    />
  </svg>
)

const projects = [
  {
    number: "01",
    title: "Noma",
    type: "Brand direction & digital",
    year: "2025",
    theme: "bg-[#b9c8af]",
    mockup: (
      <div className="absolute inset-[12%] flex items-center justify-center bg-[#f4f0e8] shadow-[0_28px_80px_rgba(37,40,32,0.2)] transition-transform duration-700 group-hover:scale-[1.025]">
        <div className="absolute top-5 left-5 font-sans text-[10px] font-bold tracking-[0.22em]">
          NOMA
        </div>
        <div className="text-center">
          <span className="block font-display text-6xl italic text-[#2d3c2c] md:text-8xl">
            N
          </span>
          <span className="mt-2 block text-[9px] uppercase tracking-[0.32em] text-[#526050]">
            Objects for slower living
          </span>
        </div>
        <div className="absolute right-5 bottom-5 h-14 w-10 rounded-t-full bg-[#cc6b45]" />
      </div>
    ),
  },
  {
    number: "02",
    title: "Editorial No. 7",
    type: "Art direction & campaign",
    year: "2024",
    theme: "bg-[#d9a13b]",
    mockup: (
      <div className="absolute inset-x-[15%] top-[8%] bottom-0 overflow-hidden bg-[#20201f] shadow-[0_28px_80px_rgba(37,40,32,0.28)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex h-full flex-col justify-between p-5 text-[#f2ede3] md:p-8">
          <div className="flex justify-between text-[9px] uppercase tracking-[0.2em]">
            <span>Independent culture</span>
            <span>Vol. 07</span>
          </div>
          <div>
            <p className="font-display text-5xl leading-[0.78] italic md:text-7xl">
              The
              <br />
              new
              <br />
              utility.
            </p>
            <div className="mt-6 h-1 w-full bg-[#d9a13b]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Serein",
    type: "Identity & packaging",
    year: "2024",
    theme: "bg-[#9eadd0]",
    mockup: (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[70%] w-[72%] rounded-[50%] border border-white/40" />
        <div className="absolute h-[52%] w-[54%] rounded-[50%] border border-white/50" />
        <div className="relative flex h-[62%] w-[38%] rotate-6 flex-col items-center justify-between bg-[#eee8da] px-3 py-7 shadow-[0_28px_80px_rgba(37,40,32,0.2)] transition-transform duration-700 group-hover:rotate-0 md:px-6">
          <span className="text-[8px] uppercase tracking-[0.25em]">
            Eau de parfum
          </span>
          <span className="font-display text-3xl italic md:text-5xl">
            Serein
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em]">
            Paris — 50ml
          </span>
        </div>
      </div>
    ),
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-canvas/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14"
        >
          <a className="group flex items-center gap-2.5 font-sans" href="#top">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-semibold text-canvas transition-transform group-hover:rotate-12">
              AM
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Alex Morgan
            </span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-medium md:flex">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
          </div>

          <a className="link-arrow group text-sm font-semibold" href="#contact">
            Let's talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      <section
        className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pt-32 pb-10 md:px-10 md:pb-14 lg:px-14"
        id="top"
      >
        <div className="absolute top-32 right-[7%] hidden w-52 rotate-3 border border-ink/20 bg-canvas p-2 shadow-[0_16px_50px_rgba(37,40,32,0.1)] lg:block">
          <div className="aspect-[4/5] overflow-hidden bg-[#cc6b45]">
            <div className="flex h-full items-end p-5">
              <span className="font-display text-5xl leading-none italic text-canvas">
                Ideas,
                <br />
                made clear.
              </span>
            </div>
          </div>
          <p className="px-1 pt-2 pb-1 font-hand text-sm">
            Currently in London
          </p>
        </div>

        <div className="mb-auto flex items-center gap-3 pt-12 text-xs font-semibold uppercase tracking-[0.2em] text-ink/65">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#cc6b45]" />
          Independent designer — available for select projects
        </div>

        <div className="relative">
          <p className="mb-5 max-w-md text-base leading-relaxed text-ink/65 md:ml-[52%] md:text-lg">
            I build identities and digital experiences for ambitious people
            doing meaningful work.
          </p>
          <h1 className="font-display text-[clamp(4.6rem,13vw,12rem)] leading-[0.75] tracking-[-0.065em]">
            Creative
            <span className="ml-[0.1em] inline-block font-normal italic text-accent">
              designer
            </span>
          </h1>
          <div className="mt-7 flex items-end justify-between border-t border-ink/20 pt-4">
            <span className="max-w-48 text-xs font-medium uppercase leading-relaxed tracking-[0.16em] text-ink/55">
              Brand identity / Art direction / Digital
            </span>
            <a
              className="group flex items-center gap-3 text-sm font-semibold"
              href="#work"
            >
              Scroll to explore
              <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/30 transition-colors group-hover:bg-ink group-hover:text-canvas">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14"
        id="work"
      >
        <div className="mb-12 flex items-end justify-between border-b border-ink/20 pb-5 md:mb-16">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight md:text-7xl">
              Recent <span className="italic text-accent">projects</span>
            </h2>
          </div>
          <span className="hidden text-sm text-ink/55 md:block">2023—2025</span>
        </div>

        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className={index === 2 ? "md:col-start-2" : ""}
              key={project.title}
            >
              <a className="group block" href="#contact">
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${project.theme}`}
                >
                  {project.mockup}
                </div>
                <div className="mt-5 flex items-start justify-between border-b border-ink/20 pb-5">
                  <div className="flex gap-4 md:gap-7">
                    <span className="pt-1 text-xs text-ink/45">
                      {project.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink/55">{project.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-ink/45">{project.year}</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-canvas" id="about">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:px-14">
          <div>
            <p className="section-kicker text-canvas/55">A little about me</p>
            <div className="mt-10 w-fit rotate-[-3deg] bg-[#d9a13b] p-3">
              <div className="flex aspect-[4/5] w-48 items-end bg-[#b8c7af] p-5 md:w-64">
                <p className="font-display text-4xl leading-[0.9] italic text-ink">
                  Curious
                  <br />
                  by nature.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Spark />
            <h2 className="mt-9 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
              I turn complex ideas into{" "}
              <span className="italic text-[#d9a13b]">simple, memorable</span>{" "}
              experiences.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-canvas/20 pt-8 text-canvas/65 sm:grid-cols-2">
              <p className="leading-relaxed">
                For the past eight years, I’ve partnered with founders, cultural
                institutions and global teams to create brands that feel honest,
                useful and built to last.
              </p>
              <p className="leading-relaxed">
                My practice moves between strategy, identity and digital design.
                The outcome is never decoration—it’s clarity with a distinct
                point of view.
              </p>
            </div>
            <a
              className="link-arrow group mt-10 w-fit border-b border-canvas/30 pb-2 font-semibold"
              href="mailto:hello@alexmorgan.design"
            >
              More about my approach
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14"
        id="services"
      >
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker">What I do</p>
            <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
              Ways I can
              <br />
              <span className="italic text-accent">help.</span>
            </h2>
          </div>
          <div>
            {[
              ["01", "Brand identity", "Strategy, visual systems, guidelines"],
              ["02", "Digital design", "Websites, products, prototypes"],
              ["03", "Creative direction", "Campaigns, teams, storytelling"],
            ].map(([number, title, description]) => (
              <div
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-ink/20 py-7 last:border-b md:gap-8"
                key={number}
              >
                <span className="text-xs text-ink/45">{number}</span>
                <div className="md:flex md:items-baseline md:justify-between">
                  <h3 className="font-display text-3xl transition-transform group-hover:translate-x-2 md:text-5xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/50 md:mt-0">
                    {description}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-colors group-hover:text-ink" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#cc6b45] text-ink" id="contact">
        <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-8 md:px-10 md:pt-32 lg:px-14">
          <p className="section-kicker">Have a project in mind?</p>
          <div className="mt-7 flex flex-col items-start justify-between gap-8 border-b border-ink/25 pb-16 md:flex-row md:items-end">
            <h2 className="max-w-4xl font-display text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              Let's make
              <br />
              something <span className="italic text-canvas">matter.</span>
            </h2>
            <a
              className="group grid h-24 w-24 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-transform hover:rotate-6 md:h-32 md:w-32"
              href="mailto:hello@alexmorgan.design"
            >
              <span className="flex flex-col items-center gap-2 text-sm font-semibold">
                Say hello
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-6 pt-7 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Alex Morgan</span>
            <div className="flex gap-6">
              <a className="nav-link" href="#top">
                Instagram
              </a>
              <a className="nav-link" href="#top">
                LinkedIn
              </a>
              <a className="nav-link" href="#top">
                Behance
              </a>
            </div>
            <a className="link-arrow group" href="#top">
              Back to top
              <span className="transition-transform group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
