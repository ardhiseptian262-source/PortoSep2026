import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Featured <span className="text-accent accent-glow">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Showcasing expertise across web development, design, and technical infrastructure
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 neon-glow animate-fade-in hover:scale-105 transform"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed font-medium">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-secondary text-accent text-xs font-semibold rounded-full border border-accent/30 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Details */}
                {project.details && (
                  <p className="text-slate-300 text-sm mb-6 italic border-l-2 border-accent pl-4">{project.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in more projects?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-semibold"
          >
            View Full Portfolio on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
