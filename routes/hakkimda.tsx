import Layout from "../components/Layout.tsx";

export default function AboutPage() {
  return (
    <>
      <Layout>
        <main class="p-4 mx-auto max-w-screen-md">
          <img
            src="/eskiben.jpg"
            class="w-50 h-32"
            alt="Sakallı resmim"
          />
          <br />
          <br />
          <p>
            1944 yılında Ankara'da doğdum. İlk Orta Lise eğitimimi TED Ankara
            Kolejinde tamamladım.A.Ü.Fen.Fak.Doğa Bilimlerinde okudum, 1970
            yılında ODTÜ Elektrik Mühendisliğini bitirdim.Askerlik sonrası IBM
            Türk Limited şirketinde pazarlama temsilcisi olarak iş yaşamına
            atıldım. 1985 yılında bu görevimden ayrılarak serbest danışman,
            eğitmen ve sistem kurucu olarak çalışmaya başladım.
          </p>
          <br/>
          <p>
            Günümüze dek yüze yakın Küçük Orta boy işletmelere sistemler
            kurdum, uygulamalarını yazdım, elemanlarını eğittim. Çeşitli Vakıf
            Üniversitelerinde dersler verdim.
          </p>
          <br/>

          <p>
            İlgi alanlarım: bilim / teknoloji, kişisel gelişim, spritüel
            çalışmalar, eğitim, doğa, genetik, davranış bilimi, sosyal / siyasal
            olaylar, ekonomi.
          </p>
        </main>
      </Layout>
    </>
  );
}
