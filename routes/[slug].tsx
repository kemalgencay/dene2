import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};
import { PageProps } from "$fresh/server.ts";

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
      <div class="mt-8">
        {post.content}
      </div>
    </main>
  )
}
