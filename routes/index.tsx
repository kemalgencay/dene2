import { Handlers } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/posts.ts";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kemal Gençay'ın sitesi</title>
      </Head>
      <Layout>
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/zuzukemal.jpg"
            class="w-50 h-32"
            alt="Zuzu Kemal"
          />
          <p class="my-6">
            <p>
              Ben Kemal, 1967'den beri{" "}
              <i>computer*</i>üstünde yenilikleri izliyor ve uyguluyorum.
            </p>
            <br></br>

            <p>
              Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri,
              burada paylaşmaktayım. Çizgim Atatürk çizgisidir, ikinci vazifemiz
              devrimleri Anadolu'ya yaymaktır.<br></br>
              <br></br>
              <br></br>
            </p>
            <p>*bilgisayar değil, bilgi soyuttur sayılamaz.</p>
          </p>
          <img
            src="/ogrenmek.jpg"
            class="w-50 h-32"
            alt="öğrenmek"
          />
        </div>
      </Layout>
    </>
  );
}

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};
//import { PageProps } from "$fresh/server.ts";


export function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
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
