import { education } from '../data/content'

export default function Education() {
  return (
    <section className="min-h-screen py-32 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Education & <span className="text-accent accent-glow">Training</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Continuous journey of education and professional development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 animate-fade-in">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="glass p-8 sm:p-10 rounded-xl hover:border-accent transition-all duration-300 neon-glow hover:shadow-lg hover:shadow-accent/40 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-accent group-hover:accent-glow transition-all leading-tight mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-slate-300 font-semibold">{edu.school}</p>
                  <p className="text-slate-400 mt-1">{edu.description}</p>
                </div>
                <span className="text-sm font-semibold text-slate-400 whitespace-nowrap tracking-wide md:text-right">
                  {edu.period}
                </span>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-accent/20">
                <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">Achievements & Competencies</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-sm md:text-base leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
