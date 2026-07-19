import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    techStack: z.array(z.string()),
    mitre: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, research, blog };
