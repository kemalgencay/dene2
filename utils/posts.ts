// Importing two new std lib functions to help with parsing front matter and joining file paths.
import { extractYaml } from "jsr:@std/front-matter@1.0.9";
import { join } from "$std/path/mod.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  attrs: string
}
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extractYaml(text);
  return {
    attrs: JSON.stringify(attrs),
    slug,
    title: (attrs as Record<string, unknown>).title as string,
    publishedAt: new Date((attrs as Record<string, unknown>).published_at as string),
    content: body,
    snippet: (attrs as Record<string, unknown>).snippet as string,
  };
}

