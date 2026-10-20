import {
  siDocker,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siGithubactions,
  siGooglegemini,
  siModelcontextprotocol,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siRedux,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVitest,
  type SimpleIcon,
} from "simple-icons";

const brands: Record<string, SimpleIcon> = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Framer Motion": siFramer,
  Redux: siRedux,
  "TanStack Query": siReactquery,
  "Node.js": siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  Supabase: siSupabase,
  "Gemini API": siGooglegemini,
  "MCP servers": siModelcontextprotocol,
  Vitest: siVitest,
  Git: siGit,
  "GitHub Actions": siGithubactions,
  Docker: siDocker,
  Vercel: siVercel,
  pnpm: siPnpm,
  Figma: siFigma,
};

// Near-black or near-white marks take the text colour so they show in both themes.
const monochrome = new Set(["Next.js", "shadcn/ui", "Express", "Vercel", "Prisma", "MCP servers", "Framer Motion"]);

export function BrandIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  const icon = brands[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill={monochrome.has(name) ? "currentColor" : `#${icon.hex}`} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export function GitHubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  );
}

// simple-icons no longer ships the LinkedIn mark, so this is a plain "in" glyph.
export function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.15V21h-4v-4.99c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.64V21h-4V9.75Z" />
    </svg>
  );
}
