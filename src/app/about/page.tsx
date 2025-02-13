export default function About() {
    return (
      <main className="min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-primary text-4xl font-bold mb-6">About Me</h1>
          <div className="bg-black/50 p-6 rounded-lg border border-primary/20">
            <p className="text-primary/80 mb-4">
              สวัสดีครับ! ผมชื่อ “นพดล ศรีมันตะ” หรือ “ปั้น” เองนะครับ ผมเป็นนักพัฒนาซอฟต์แวร์ที่ชอบเขียนโปรแกรมและออกแบบเว็บไซต์ครับ ผมประสบการณ์ที่พึ่งเริ่มฝึกงานได้ 4 เดือน แต่ผมมีความสามารถในการเรียนรู้และพัฒนาตนเองอย่างรวดเร็วครับ และอีกอย่างนั้นผมเป็นเกมเมอร์ด้วย
            </p>
            <p className="text-primary/80 mb-4">
              ทักษะสกิลของผม:
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