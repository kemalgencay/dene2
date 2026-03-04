import Layout from "../components/Layout.tsx";
export default function Hero() {
  return (
    <>
      <Layout>
        <div
          class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
          style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
        >
          <div class="space-y-4 text-center">
            <h1 class="text-4xl inline-block font-bold">
              Pek Yakında sizinle olacağız
            </h1>
          </div>
        </div>
      </Layout>
    </>
  );
}
