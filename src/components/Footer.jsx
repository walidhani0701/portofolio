const Footer = () => {
  return (
    <footer className="mt-32 py-16 bg-zinc-900 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Link menu */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a href="#" className="hover:text-white">Beranda</a>
          <a href="#tentang" className="hover:text-white">Tentang</a>
          <a href="#education" className="hover:text-white">Pendidikan & Pengalaman</a>
          <a href="#proyek" className="hover:text-white">Proyek</a>
          {/* <a href="#kontak" className="hover:text-white">Kontak</a> */}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 text-3xl">

          <a href="https://instagram.com/" target="_blank" className="hover:text-white">
            <i className="ri-instagram-line"></i>
          </a>

          <a href="https://github.com/" target="_blank" className="hover:text-white">
            <i className="ri-github-fill"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/628131433902"
            target="_blank"
            className="hover:text-green-400"
          >
            <i className="ri-whatsapp-line"></i>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@usernamekamu"
            target="_blank"
            className="hover:text-white"
          >
            <i className="ri-tiktok-fill"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/walidhani-faturrohman-488081368 "
            target="_blank"
            className="hover:text-blue-400"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2025 Portofolio Walidhani Faturrohman, All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
