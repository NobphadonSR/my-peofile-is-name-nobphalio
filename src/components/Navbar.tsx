import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className= "bg-black/50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-primary text-2xl font-bold">
          Nobphanolio
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-primary hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-primary hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="text-primary hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-primary hover:text-accent transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar