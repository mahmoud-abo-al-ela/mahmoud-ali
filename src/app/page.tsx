import type { ComponentProps, CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { autome, profile, projects, stack, type Project } from "@/content/site";
import { BrandIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const external = { target: "_blank", rel: "noreferrer" } as const;

function Button({ variant = "primary", className = "", children, ...rest }: ComponentProps<"a"> & { variant?: "primary" | "secondary" }) {
  const look =
    variant === "primary"
      ? "bg-primary text-on-primary hover:brightness-110"
      : "border border-line-strong bg-surface-2 text-text hover:border-muted";
  return (
    <a className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] px-5 text-[15px] font-semibold transition active:scale-[0.98] ${look} ${className}`} {...rest}>
      {children}
    </a>
  );
}

function SectionTitle({ id, children, aside }: { id: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <h2 id={id} className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
        {children}
      </h2>
      {aside}
    </div>
  );
}

function Links({ live, source, note }: Pick<Project, "live" | "source" | "note">) {
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-medium">
      {live && (
        <a href={live} {...external} className="text-link">
          Visit {new URL(live).hostname.replace(/^www\./, "")}
        </a>
      )}
      {source && (
        <a href={source} {...external} className="text-link">
          Read the source
        </a>
      )}
      {note && <span className="font-normal text-muted">{note}</span>}
    </p>
  );
}

function Hero() {
  const arrive = (i: number) => ({ className: "arrive", style: { "--i": i } as CSSProperties });
  return (
    <section aria-labelledby="intro" className="grid gap-3 sm:gap-4 lg:grid-cols-12">
      <div {...arrive(0)} className={`tile arrive flex flex-col gap-8 p-7 sm:p-10 lg:col-span-8`}>
        <p className="text-lg font-semibold text-accent">{profile.role}</p>
        <h1 id="intro" className="font-display text-[clamp(2.5rem,1.3rem+4.4vw,5rem)] leading-[1.0] font-extrabold tracking-[-0.03em]">
          {profile.headline}
        </h1>
        <p className="max-w-[58ch] text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-auto flex flex-wrap gap-2.5">
          <Button href="#work">See my work</Button>
          <Button href={profile.linkedin} variant="secondary" {...external}>
            <LinkedInIcon /> LinkedIn
          </Button>
          <Button href={profile.github} variant="secondary" {...external}>
            <GitHubIcon /> GitHub
          </Button>
        </div>
      </div>

      <a href={autome.live} {...external} {...arrive(1)} className="tile arrive group flex flex-col gap-5 p-6 lg:col-span-4">
        <span className="flex items-center justify-between text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Now shipping
          </span>
          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display text-3xl font-bold tracking-[-0.02em]">{autome.name}</span>
          <span className="mt-1 block text-muted">{autome.summary}</span>
        </span>
        <span className="media relative mt-auto block h-72 lg:h-auto lg:flex-1">
          <Image src={autome.shots.mobile.image} alt={autome.shots.mobile.alt} sizes="(min-width: 1024px) 380px, 100vw" placeholder="blur" className="absolute inset-0 h-full w-full object-cover object-top" />
        </span>
      </a>
    </section>
  );
}

function Work() {
  const [dateshub, taskManager, artme] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-6">
      <SectionTitle
        id="work-title"
        aside={
          <a href={`${profile.github}?tab=repositories`} {...external} className="text-link text-[15px]">
            All repositories
          </a>
        }
      >
        Selected work
      </SectionTitle>

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <article aria-labelledby="autome" className="tile grid gap-8 p-6 sm:p-8 lg:col-span-12 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <h3 id="autome" className="font-display text-4xl font-bold tracking-[-0.02em]">
              {autome.name}
            </h3>
            <p className="text-xl leading-snug font-medium">{autome.summary}</p>
            <p className="leading-relaxed text-muted">{autome.description}</p>
            <ul className="divide-y divide-line border-y border-line">
              {autome.highlights.map((h) => (
                <li key={h} className="py-2.5 leading-snug">
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">{autome.stack}</p>
            <Links live={autome.live} source={autome.source} />
          </div>
          <figure className="flex flex-col gap-2.5 lg:col-span-7">
            <div className="media">
              <Image src={autome.shots.car.image} alt={autome.shots.car.alt} sizes="(min-width: 1024px) 640px, 100vw" placeholder="blur" className="h-full w-full object-cover object-top" />
            </div>
            <figcaption className="text-sm text-muted">{autome.shots.car.caption}</figcaption>
          </figure>
        </article>


        {[dateshub, taskManager].map((p) => (
          <article key={p.name} aria-labelledby={slug(p.name)} className="tile flex flex-col gap-5 p-3 pb-6 lg:col-span-6">
            <div className="media h-[clamp(200px,24vw,300px)]">
              <Image src={p.image!} alt={p.imageAlt ?? ""} sizes="(min-width: 1024px) 560px, 100vw" placeholder="blur" className={`h-full w-full object-cover ${p.imagePosition ?? "object-top"}`} />
            </div>
            <ProjectText project={p} />
          </article>
        ))}

        <article aria-labelledby={slug(artme.name)} className="tile grid gap-6 p-6 sm:p-8 lg:col-span-8 lg:grid-cols-2">
          <ProjectText project={artme} padded={false} />
          {artme.parts && (
            <dl className="divide-y divide-line self-start border-y border-line text-[15px]">
              {artme.parts.map((part) => (
                <div key={part.name} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5">
                  <dt className="font-semibold">{part.name}</dt>
                  <dd className="text-muted">{part.detail}</dd>
                </div>
              ))}
            </dl>
          )}
        </article>

        <a href={`${profile.github}?tab=repositories`} {...external} className="tile group flex flex-col justify-between gap-8 p-6 sm:p-8 lg:col-span-4">
          <GitHubIcon className="size-8" />
          <span>
            <span className="flex items-center gap-1 font-display text-2xl font-bold tracking-[-0.02em]">
              Everything else is on GitHub
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
            <span className="mt-1 block text-muted">Frontend challenges, internship work and experiments, at @{profile.githubHandle}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

function ProjectText({ project, padded = true }: { project: Project; padded?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 ${padded ? "px-3" : ""}`}>
      <h3 id={slug(project.name)} className="font-display text-2xl font-bold tracking-[-0.02em]">
        {project.name}
      </h3>
      <p className="font-medium">{project.summary}</p>
      <p className="max-w-[62ch] leading-relaxed text-muted">{project.description}</p>
      <p className="text-sm text-muted">{project.stack}</p>
      <div className="mt-2">
        <Links live={project.live} source={project.source} note={project.note} />
      </div>
    </div>
  );
}

function Stack() {
  const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-6">
      <SectionTitle id="stack-title">Tech stack</SectionTitle>
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        {stack.map((group, i) => (
          <div key={group.title} className={`tile p-6 sm:p-7 ${spans[i]}`}>
            <h3 className="font-display text-xl font-bold">{group.title}</h3>
            <ul className={`mt-4 grid gap-x-6 gap-y-2.5 ${i === 0 ? "grid-cols-2 text-lg sm:grid-cols-3" : "grid-cols-2"}`}>
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <BrandIcon name={item} className={i === 0 ? "size-5" : "size-4"} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="tile scroll-mt-6 p-7 sm:p-12">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="font-display text-[clamp(2.25rem,1.5rem+3vw,4rem)] leading-[1.03] font-extrabold tracking-[-0.03em]">
            Have a role or a project in mind?
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-muted">The quickest way to reach me is a message on LinkedIn. My code is on GitHub.</p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:col-span-5 lg:justify-end">
          <Button href={profile.linkedin} {...external}>
            <LinkedInIcon /> Message me on LinkedIn
          </Button>
          <Button href={profile.github} variant="secondary" {...external}>
            <GitHubIcon /> GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1200px] px-4 sm:px-6">
      <header className="flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-display text-lg font-extrabold tracking-[-0.02em]">
          Mahmoud Ali
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 text-[15px]">
          <a href="#work" className="hidden rounded-[10px] px-3 py-2 text-muted hover:bg-surface-2 hover:text-text sm:block">
            Work
          </a>
          <a href="#stack" className="hidden rounded-[10px] px-3 py-2 text-muted hover:bg-surface-2 hover:text-text sm:block">
            Stack
          </a>
          <a href="#contact" className="rounded-[10px] px-3 py-2 text-muted hover:bg-surface-2 hover:text-text">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex flex-col gap-16 pt-2 pb-16 sm:gap-24">
        <Hero />
        <Work />
        <Stack />
        <Contact />
      </main>

      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line py-6 text-sm text-muted">
        <p>
          {profile.name}, {profile.role.toLowerCase().replace("mern", "MERN")}
        </p>
        <a href="#top" className="text-link">
          Back to top
        </a>
      </footer>
    </div>
  );
}
