import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Professional <span className="text-accent accent-glow">Certifications</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Credentials and certifications that validate professional expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass p-8 sm:p-10 rounded-xl hover:border-accent transition-all duration-300 neon-glow hover:shadow-lg hover:shadow-accent/40 animate-slide-up group flex flex-col"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent group-hover:accent-glow transition-all leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-accent/20">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-semibold">{cert.field}</span>
                  <span className="text-sm font-bold text-accent tracking-wider">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
