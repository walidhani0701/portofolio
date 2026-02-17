import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        {/* Kolom kiri */}
        <div>
          <h1 className="text-5xl/tight font-bold mb-10">
            <Typewriter
              words={["Hai, Saya Walidhani", "Front End Developer"]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lulusan dari SMK Jurusan Rekayasa Perangkat Lunak yang befokus pada
            pengembangan website dan desain grafis.{" "}
          </p>
          <div className=" flex gap-4 items-center ">
            <a
              href="portofolio/cv.pdf"
              className="bg-red-700 text-white font-semibold hover:bg-zinc-600 p-4 m-3 rounded-2xl"
            >
              <i class="ri-download-line"></i> Download CV
            </a>
          </div>
        </div>

        {/* Kolom kanan */}
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[400px] md:ml-auto  rounded-2xl"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10 " id="tentang">
        <div className="xl:w-2/2 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Tentang Saya</h1>
          <img
            src={DataImage.LogoImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10 opacity-50">
            Halo! Saya Walidhani Faturrohman, lulusan SMK Negeri Situraja
            jurusan Rekayasa Perangkat Lunak. Saya memiliki minat yang besar di
            bidang teknologi, khususnya dalam pengembangan web dan desain
            grafis. Saya telah mengembangkan berbagai proyek yang mencakup
            pembuatan website.
          </p>

          <p className="text-base/lose mb-10 opacity-50">
            Saya adalah pribadi yang teliti, semangat belajar tinggi, dan senang
            mengeksplorasi hal-hal baru di dunia pemrograman. Saya percaya bahwa
            proses belajar tidak berhenti, dan saya selalu terbuka untuk
            mengembangkan diri melalui pengalaman baru maupun kerja sama tim.
          </p>

          <div className="flex items-center justify-between">
            <img
              src={DataImage.LogoImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
          </div>
        </div>

        {/* PENDIDIKAN & PENGALAMAN */}
        <div className="mt-32 py-20 bg-zinc-800 text-white" id="education">
          {/* Judul */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Pendidikan & Pengalaman</h1>

            <p className="opacity-70 max-w-2xl mx-auto">
              Ringkasan pendidikan dan pengalaman saya selama belajar dan
              praktik di bidang pengembangan web.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
            {/* Kiri */}
            <div className="border-l-2 border-gray-400 pl-6">
              <h2 className="text-2xl font-bold mb-2">SMK Negeri Situraja</h2>

              <p className="opacity-80 mb-2">Rekayasa Perangkat Lunak</p>

              <p className="font-semibold">2022 - 2025</p>
            </div>

            {/* Kanan */}
            <div className="space-y-6 opacity-80 leading-relaxed">
              <p>
                Saya telah mengikuti Praktik Kerja Lapangan (PKL), di mana saya
                terlibat dalam proyek pembuatan website testimoni makanan.
                Pengalaman ini membantu saya mengasah keterampilan dalam
                pengembangan web dan bekerja dalam tim.
              </p>

              <p>
                Dan juga sudah mendapatkan sertifikat dari SMK dan juga dari
                CyberLabs.
              </p>

              <p>Berikut adalah sertifikasi yang telah saya peroleh:</p>
            </div>
          </div>
        </div>

        {/* SERTIFIKAT */}
        <div className="py-20 bg-zinc-800">
          <h1 className="text-4xl font-bold text-center mb-16">Sertifikat</h1>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 justify-items-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition max-w-sm">
              <img
                src="/public/assets/walidhani-ttd.png"
                alt="Sertifikat CyberLabs"
                className="rounded-xl mb-6 w-full"
              />

              <h2 className="text-xl font-bold mb-2">Sertifikat CyberLabs</h2>

              <p className="text-gray-600 font-bold mb-4 text-sm">
                Sertifikat Praktik Kerja Lapangan (PKL)
              </p>

              <a
                href="/public/assets/walidhani-ttd.png"
                target="_blank"
                className="bg-red-500 font-bold text-white px-5 py-2 rounded-lg inline-block text-sm"
              >
                Lihat Sertifikat
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition max-w-sm">
              <img
                src="/public/assets/serti.jpg"
                alt="Sertifikat SMK"
                className="rounded-xl mb-6 w-full"
              />

              <h2 className="text-xl font-bold mb-2">Sertifikat SMK</h2>

              <p className="text-gray-600 font-bold mb-2 text-sm">
                Sertifikat SMK Negeri Situraja
              </p>

              <a
                href="/public/assets/serti.jpg"
                target="_blank"
                className="bg-red-500 font-bold text-white px-5 py-2 rounded-lg inline-block text-sm"
              >
                Lihat Sertifikat
              </a>
            </div>
          </div>
        </div>

        {/* tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-10 ">
            Tools & Bahasa Pemograman yang saya gunakan
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools dan bahasa pemograman yang sering saya
            gunanakan :
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 border border-zinc-600 rounded-md hover:bg-red-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-white"
                />
                <div className="">
                  <h1 className="font-semibold">{tool.nama}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* proyek */}

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-4xl font-bold mb-10 ">Proyek Saya</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
          Berikut ini beberapa proyek yang telah saya kerjakan :
        </p>
        <div className="proyek-box mt-14 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  gap-10">
          {listProyek.map((proyek) => (
            <div className="mb-10" key={proyek.id}>
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                className="w-600  object-cover"
              />
              <div className="p-4 bg-zinc-800">
                <h1 className="text-xl font-semibold mb-2">{proyek.nama}</h1>
                <p className="text-sm opacity-50 mb-2">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 border-t pt-2 mt-2 border-zinc-600 ">
                  {proyek.tools.map((tool) => (
                    <span
                      className="bg-red-700 text-xs py-1 px-2 rounded-md font-semibold "
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
