export default function About() {
    return (
      <main className="min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-primary text-4xl font-bold mb-6">About Me</h1>
          <div className="bg-black/50 p-6 rounded-lg border border-primary/20">
            <p className="text-primary/80 mb-4">
              Hello! I&apos;m Nobphadon Srimanta, a passionate developer who loves creating beautiful and functional web applications.
            </p>
            <p className="text-primary/80 mb-4">
              My expertise includes:
            </p>
            <ul className="list-disc list-inside text-primary/80">
              <li>Full Stack Development</li>
              <li>Backend Development</li>
              <li>Frontend Development</li>
              <li>React & Next.js</li>
              <li>Django Framework</li>
              <li>UI/UX Design</li>
              <li>Web Programing</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }