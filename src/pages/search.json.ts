import { getCollection } from "astro:content";

export async function GET() {
  const [projects, research, blog] = await Promise.all([
    getCollection("projects"),
    getCollection("research"),
    getCollection("blog"),
  ]);

  const index = [
    ...projects.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: `/projects/${p.slug}/`,
      type: "project" as const,
    })),
    ...research.map((r) => ({
      title: r.data.title,
      description: r.data.summary,
      url: `/research/${r.slug}/`,
      type: "research" as const,
    })),
    ...blog.map((b) => ({
      title: b.data.title,
      description: b.data.summary,
      url: `/blog/${b.slug}/`,
      type: "blog" as const,
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
}
