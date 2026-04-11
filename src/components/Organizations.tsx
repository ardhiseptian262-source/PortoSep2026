import { Users } from 'lucide-react'
import { organizations } from '../data/content'

export default function Organizations() {
  return (
    <section className="min-h-screen py-32 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Community & <span className="text-accent accent-glow">Leadership</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Dedication to leadership and social contribution within the community
          </p>
        </div>

        {/* Organizations */}
        <div className="space-y-8 animate-fade-in">
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className="glass p-8 sm:p-10 rounded-xl hover:border-accent transition-all duration-300 neon-glow hover:shadow-lg hover:shadow-accent/40 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-accent group-hover:accent-glow transition-all leading-tight mb-2">
                    {org.position}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg text-slate-300 font-semibold">{org.organization}</p>
                    <p className="text-slate-400">{org.location}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-400 whitespace-nowrap tracking-wide md:text-right">
                  {org.period}
                </span>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{org.description}</p>

              {/* Responsibilities */}
              <div className="pt-6 border-t border-accent/20">
                <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Users size={16} />
                  Responsibilities & Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {org.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-accent font-bold text-lg flex-shrink-0">•</span>
                      <span className="text-sm md:text-base leading-relaxed">{responsibility}</span>
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
