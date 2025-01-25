export default function Projects() {
    return (
      <main className="min-h-screen p-4 md:p-8">
        <div className="container mx-auto">
          <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4 md:mb-6">My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Add project cards here */}
            <div className="bg-black/50 p-4 md:p-6 rounded-lg border border-primary/20">
              <h2 className="text-primary text-xl md:text-2xl font-bold mb-2">Project Title</h2>
              <p className="text-primary/80 text-sm md:text-base">Project description...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }