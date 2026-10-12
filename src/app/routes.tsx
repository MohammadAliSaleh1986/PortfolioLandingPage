import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
} from "react-router";

const Arrow = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const Book = () => (
  <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 32 32">
    <path
      d="M5 6.5c4.5 0 8 1 11 3v17c-3-2-6.5-3-11-3v-17Zm22 0c-4.5 0-8 1-11 3v17c3-2 6.5-3 11-3v-17Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const links = [
  ["About", "/about"],
  ["Degrees", "/degrees"],
  ["Certificates", "/certificates"],
  ["Projects", "/projects"],
  ["Services", "/services"],
];

function Layout() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur-md">
        <nav className="mx-auto flex min-h-20 max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-14">
          <Link className="group flex items-center gap-3" to="/">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-canvas transition-transform group-hover:rotate-12">
              MA
            </span>
            <span>
              <strong className="block text-sm">Mohammad Ali</strong>
              <span className="block text-[10px] uppercase tracking-[0.15em] text-ink/50">
                Business & education
              </span>
            </span>
          </Link>
          <div className="order-3 flex w-full gap-5 overflow-x-auto border-t border-ink/10 pt-3 text-sm font-medium md:order-2 md:w-auto md:border-0 md:pt-0">
            {links.map(([label, path]) => (
              <NavLink
                className={({ isActive }) =>
                  `whitespace-nowrap transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-ink/65"
                  }`
                }
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Link
            className="group order-2 flex items-center gap-2 text-sm font-semibold md:order-3"
            to="/services"
          >
            Work with me
            <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-14">
        <div className="grid gap-10 border-b border-canvas/20 pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker text-canvas/50">Let’s connect</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
              Knowledge creates{" "}
              <span className="italic text-gold">opportunity.</span>
            </h2>
          </div>
          <a
            className="group grid h-28 w-28 place-items-center rounded-full bg-accent text-canvas transition-transform hover:rotate-6"
            href="mailto:mohammad.ali@example.com"
          >
            <span className="flex flex-col items-center gap-2 text-sm font-semibold">
              Contact me
              <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-canvas/50 sm:flex-row sm:justify-between">
          <span>© 2025 Mohammad Ali</span>
          <span>Business administration specialist · Tutor</span>
        </div>
      </div>
    </footer>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="section-kicker text-accent">{children}</p>;
}

function PageHero({
  eyebrow,
  title,
  italic,
  description,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-24 lg:px-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <h1 className="font-display text-6xl leading-[0.88] tracking-[-0.04em] md:text-8xl lg:text-9xl">
          {title} <span className="italic text-accent">{italic}</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink/60">
          {description}
        </p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1440px] flex-col justify-between px-6 py-14 md:px-10 md:py-20 lg:px-14">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Business specialist since 2006
        </div>
        <div className="py-16">
          <p className="mb-6 max-w-xl text-lg leading-relaxed text-ink/60 md:ml-auto">
            Business administration specialist and multidisciplinary tutor,
            connecting finance, technology, mathematics, coding and robotics.
          </p>
          <h1 className="font-display text-[clamp(4.6rem,12vw,11rem)] leading-[0.76] tracking-[-0.06em]">
            Mohammad
            <br />
            <span className="ml-[12%] italic text-accent">Ali.</span>
          </h1>
        </div>
        <div className="grid gap-6 border-t border-ink/20 pt-6 md:grid-cols-3">
          <div>
            <strong className="font-display text-4xl">19+</strong>
            <p className="mt-1 text-sm text-ink/50">Years in administration</p>
          </div>
          <div>
            <strong className="font-display text-4xl">3</strong>
            <p className="mt-1 text-sm text-ink/50">University degrees</p>
          </div>
          <div>
            <strong className="font-display text-4xl">2022</strong>
            <p className="mt-1 text-sm text-ink/50">Tutoring journey began</p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <div>
            <Eyebrow>My profile</Eyebrow>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              Where business meets{" "}
              <span className="italic text-accent">technology.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["01", "Business", "Administration, accounting and auditing"],
              ["02", "Finance", "Financial foundations and practical literacy"],
              ["03", "Technology", "Informatics, coding and robotics"],
              ["04", "Education", "Clear, structured and patient tutoring"],
            ].map(([number, title, copy]) => (
              <div className="border border-ink/15 bg-canvas/50 p-7" key={number}>
                <span className="text-xs text-ink/40">{number}</span>
                <h3 className="mt-10 font-display text-3xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-14">
        <Eyebrow>Explore my portfolio</Eyebrow>
        <div className="mt-8">
          {[
            ["Academic background", "Three university degrees", "/degrees"],
            ["Continuous learning", "Training & certificates", "/certificates"],
            ["Applied experience", "Projects & initiatives", "/projects"],
          ].map(([label, title, path], index) => (
            <Link
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-ink/20 py-8 last:border-b md:gap-10"
              key={path}
              to={path}
            >
              <span className="text-xs text-ink/40">0{index + 1}</span>
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-ink/40">
                  {label}
                </span>
                <h3 className="mt-1 font-display text-3xl transition-transform group-hover:translate-x-2 md:text-5xl">
                  {title}
                </h3>
              </div>
              <Arrow className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHero
        description="My career combines long-term professional experience with continued academic growth and a commitment to helping others learn."
        eyebrow="About me"
        italic="experience."
        title="Built through"
      />
      <section className="bg-ink text-canvas">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14">
          <div className="flex aspect-square max-w-sm flex-col justify-between bg-gold p-8 text-ink">
            <Book />
            <p className="font-display text-4xl italic">
              Learning is a lifelong practice.
            </p>
          </div>
          <div>
            <p className="font-display text-4xl leading-tight md:text-6xl">
              I am a business administration specialist with a multidisciplinary
              foundation in{" "}
              <span className="italic text-gold">
                accounting, auditing, finance and informatics.
              </span>
            </p>
            <div className="mt-12 grid gap-8 border-t border-canvas/20 pt-8 text-canvas/65 sm:grid-cols-2">
              <p className="leading-relaxed">
                Since 2006, I have worked in business administration, developing
                practical experience in organization, finance and effective
                operations.
              </p>
              <p className="leading-relaxed">
                Since 2022, I have also tutored coding, robotics, finance and
                mathematics—making complex subjects approachable through clear,
                structured guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const degrees = [
  {
    level: "Master’s degree",
    title: "Business Administration",
    focus: "Major in Accounting & Auditing",
    color: "bg-accent",
  },
  {
    level: "Bachelor’s degree",
    title: "Finance",
    focus: "Financial studies and analysis",
    color: "bg-gold",
  },
  {
    level: "Bachelor’s degree",
    title: "Informatics",
    focus: "Information technology and computing",
    color: "bg-blue",
  },
];

function Degrees() {
  return (
    <>
      <PageHero
        description="A multidisciplinary academic foundation that bridges business leadership, financial knowledge and information technology."
        eyebrow="Education"
        italic="degrees."
        title="University"
      />
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {degrees.map((degree, index) => (
            <article className={`${degree.color} flex min-h-96 flex-col p-8`} key={degree.title}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  {degree.level}
                </span>
                <span className="font-display text-2xl">0{index + 1}</span>
              </div>
              <div className="mt-auto">
                <h2 className="font-display text-5xl leading-none">{degree.title}</h2>
                <p className="mt-5 border-t border-ink/25 pt-5 text-sm">
                  {degree.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/45">
          Institution names, graduation dates and document links can be added when
          available.
        </p>
      </section>
    </>
  );
}

function Certificates() {
  return (
    <>
      <PageHero
        description="A dedicated archive for professional training and continued development across business, finance, education and technology."
        eyebrow="Professional development"
        italic="learning."
        title="Continuous"
      />
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-14">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Business & administration", "Management, operations and professional practice"],
            ["Finance & accounting", "Financial knowledge, accounting and auditing"],
            ["Coding & robotics", "Technology, programming and educational robotics"],
            ["Teaching & mathematics", "Tutoring methods and mathematical education"],
          ].map(([title, detail], index) => (
            <article className="group border border-ink/20 p-8 transition-colors hover:bg-sage" key={title}>
              <div className="flex items-start justify-between">
                <span className="text-xs text-ink/40">0{index + 1}</span>
                <Arrow className="h-5 w-5 text-ink/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h2 className="mt-20 font-display text-4xl">{title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
                {detail}
              </p>
              <p className="mt-8 border-t border-ink/15 pt-4 text-xs uppercase tracking-[0.14em] text-ink/40">
                Certificate details ready to be added
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Projects() {
  const projects = [
    {
      title: "Business administration",
      copy: "Operational support, structured processes and practical business problem-solving.",
      style: "bg-sage",
    },
    {
      title: "Financial education",
      copy: "Learning materials that make finance and mathematics clear and applicable.",
      style: "bg-gold",
    },
    {
      title: "Coding & robotics",
      copy: "Hands-on learning activities that turn technology into an engaging experience.",
      style: "bg-blue",
    },
  ];

  return (
    <>
      <PageHero
        description="Selected areas where I apply business experience, analytical thinking and teaching practice to create useful outcomes."
        eyebrow="Applied work"
        italic="practice."
        title="Projects in"
      />
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-14">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              className={`grid min-h-80 overflow-hidden ${project.style} md:grid-cols-[0.4fr_1.6fr]`}
              key={project.title}
            >
              <div className="flex justify-between border-b border-ink/20 p-7 md:flex-col md:border-r md:border-b-0">
                <span className="section-kicker">Area 0{index + 1}</span>
                <Arrow className="h-6 w-6" />
              </div>
              <div className="flex flex-col justify-end p-8 md:p-12">
                <h2 className="font-display text-5xl leading-none md:text-7xl">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-ink/60">
                  {project.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>
      <PageHero
        description="Support grounded in professional business experience, multidisciplinary education and a patient approach to teaching."
        eyebrow="Services"
        italic="offer."
        title="What I"
      />
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-14">
        {[
          ["01", "Business administration support", "Organization, administration and practical operational guidance."],
          ["02", "Finance tutoring", "Clear instruction in finance, accounting foundations and financial literacy."],
          ["03", "Mathematics tutoring", "Patient, structured support for building confidence and problem-solving skills."],
          ["04", "Coding instruction", "Practical programming lessons adapted to the learner’s level and goals."],
          ["05", "Robotics education", "Engaging, hands-on guidance in educational robotics and computational thinking."],
        ].map(([number, title, copy]) => (
          <article
            className="grid gap-5 border-t border-ink/20 py-8 last:border-b md:grid-cols-[0.15fr_0.75fr_1.1fr] md:items-center"
            key={number}
          >
            <span className="text-xs text-ink/40">{number}</span>
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
            <p className="max-w-xl leading-relaxed text-ink/55">{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl italic text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl">This page was not found.</h1>
      <Link className="mt-8 border-b border-ink pb-1 text-sm font-semibold" to="/">
        Return home
      </Link>
    </section>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "degrees", Component: Degrees },
      { path: "certificates", Component: Certificates },
      { path: "projects", Component: Projects },
      { path: "services", Component: Services },
      { path: "*", Component: NotFound },
    ],
  },
]);
