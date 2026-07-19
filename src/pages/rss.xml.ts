import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  return rss({
    title: "cyb3rval3nt1n3 — Security Research",
    description: "Thoughts on threat hunting, detection engineering, and security research.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.slug}/`,
    })),
  });
}
