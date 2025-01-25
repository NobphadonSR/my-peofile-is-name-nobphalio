export default function Home() {
  return (
    <main className="min-h-screen bg-black/50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <h1 className="text-primary text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Welcome to My Projects
          </h1>
          <h5 className="text-primary text-4xl md:text-3xl font-bold mb-4 md:mb-6">
            ยินดีต้อนรับสู่โปรเจกต์ของฉัน
          </h5>
          <p className="text-primary/80 text-lg md:text-xl mb-6 md:mb-8">
            Hi, I&apos;m Nobphadon Srimanta
          </p>
          <p className="text-primary/80 text-lg md:text-xl mb-6 md:mb-8">
            Developer | Creator | Tech Enthusiast
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
            {/* Featured Projects */}
            <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-primary/20">
              <img src="https://firebasestorage.googleapis.com/v0/b/imagesss-7501d.appspot.com/o/1307306.png?alt=media&token=a49da995-4398-4d1f-ab62-30ed550a58c6" alt="Projrct #1" className="rounded-md mb-3 md:mb-4"/>
              <h3 className="text-primary text-lg md:text-xl font-bold mb-3 md:mb-4">ระบบบริการลูกค้าของ SakolService</h3>
              <p className="text-primary/70 text-sm md:text-base"><a href="https://github.com/NobphadonSR/company_project_about_sakol_service">View Project →</a></p>
            </div>

            <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-primary/20">
              <h3 className="text-primary text-lg md:text-xl font-bold mb-3 md:mb-4">ระบบเช็คชื่อของ Sakol</h3>
              <p className="text-primary/70 text-sm md:text-base"><a href="https://github.com/NobphadonSR/sakol_checkin">View Project →</a></p>
            </div>

            <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-primary/20">
              <h3 className="text-primary text-lg md:text-xl font-bold mb-3 md:mb-4">Featured Project 1</h3>
              <p className="text-primary/70 text-sm md:text-base"><a href="">View Project →</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}