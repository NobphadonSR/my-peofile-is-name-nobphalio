import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Welcome to My Portfolio
          </h1>
          <h5 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            ยินดีต้อนรับสู่ผลงานของผม
          </h5>
          <p className="text-primary/80 text-base sm:text-lg md:text-xl">
            Hi, I&apos;m Nobphadon Srimanta
          </p>
          <p className="text-primary/80 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            สวัสดีครับ, ผมนพดล ศรีมันตะ
          </p>
          <p className="text-primary/80 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            Developer | Creator | Gamer
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-16">
            {/* Featured Projects */}
            <div className="bg-black/50 p-4 sm:p-6 rounded-lg border border-primary/20">
              <div className="mb-3 md:mb-4">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/imagesss-7501d.appspot.com/o/1307306.png?alt=media&token=a49da995-4398-4d1f-ab62-30ed550a58c6"
                  alt="Project #1"
                  width={1920}
                  height={1080}
                  className="rounded-md object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-primary text-lg md:text-xl font-bold mb-3 md:mb-4">
                  ระบบบริการลูกค้าของ SakolService
                </h3>
                <p className="text-primary/70 text-sm md:text-base">
                  <a
                    href="https://github.com/NobphadonSR/company_project_about_sakol_service"
                    className="hover:text-accent transition-colors"
                  >
                    View Project →
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-black/50 p-4 sm:p-6 rounded-lg border border-primary/20">
              <div className="mb-3 md:mb-4">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/imagesss-7501d.appspot.com/o/1307306.png?alt=media&token=a49da995-4398-4d1f-ab62-30ed550a58c6"
                  alt="Project #2"
                  width={1920}
                  height={1080}
                  className="rounded-md object-cover"
                  priority
                />
              </div>
              <h3 className="text-primary text-lg md:text-xl font-bold mb-3 md:mb-4">
                ระบบเช็คชื่อของ Sakol
              </h3>
              <p className="text-primary/70 text-sm md:text-base">
                <a
                  href="https://github.com/NobphadonSR/sakol_checkin"
                  className="hover:text-accent transition-colors"
                >
                  View Project →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
