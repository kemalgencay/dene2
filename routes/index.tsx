interface PostAttributes{
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<PostAttributes[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};
async function getPosts(): Promise<PostAttributes[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as PostAttributes[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}
// Importing two new std lib functions to help with parsing front matter and joining file paths.
import { extractJson} from "jsr:@std/front-matter";
import { join } from "$std/path/mod.ts";

async function getPost(slug: string): Promise<PostAttributes | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extractJson(text) as { attrs: { title: string; published_at: string; snippet: string }, body: string };
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  };
}
import { PageProps } from "$fresh/server.ts";

export default function BlogIndexPage(props: PageProps<PostAttributes[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </main>
  );
}
function PostCard(props: { post: PostAttributes }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900">
          {post.snippet}
        </div>
      </a>
    </div>
  );
}
