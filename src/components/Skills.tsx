import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="min-h-screen py-32 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Professional <span className="text-accent accent-glow">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive range of technical and professional competencies developed through hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Technical Skills */}
          <div className="glass p-8 sm:p-10 rounded-xl neon-glow animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3 animate-fade-in tracking-tight">
              <span className="text-2xl">💻</span> Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.technical.map((skill) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${skills.technical.indexOf(skill) * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-accent text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-accent/20">
                    <div
                      className="h-full bg-gradient-to-r from-accent via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 shadow-lg shadow-accent/50 animate-pulse-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass p-8 rounded-xl neon-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 animate-fade-in">
              <span className="text-2xl">🎯</span> Soft Skills
            </h3>
            <div className="space-y-6">
              {skills.soft.map((skill) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${skills.soft.indexOf(skill) * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-accent text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary/50 rounded-full overflow-hidden border border-accent/20">
                    <div
                      className="h-full bg-gradient-to-r from-accent via-blue-400 to-cyan-400 rounded-full transition-all duration-1000 shadow-lg shadow-accent/50 animate-pulse-glow"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="glass p-8 sm:p-10 rounded-xl neon-glow animate-slide-up mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3 animate-fade-in tracking-tight">
            <span className="text-2xl">🛠️</span> Software & Tools
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.software.map((skill, idx) => (
              <div
                key={skill.name}
                className="glass p-4 rounded-lg border border-accent/20 hover:border-accent hover:bg-secondary/50 transition-all duration-300 text-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <p className="font-semibold text-slate-200 group-hover:text-accent transition-colors">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {[
            { number: '6+', label: 'Years in Tech' },
            { number: '5+', label: 'Positions Held' },
            { number: '2', label: 'Certifications' },
            { number: '100%', label: 'Dedication' },
          ].map((item, idx) => (
            <div key={item.label} className="glass p-6 rounded-lg text-center hover:bg-secondary transition-all duration-300 neon-glow hover:scale-105 transform animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-3xl font-bold text-accent mb-2 accent-glow">{item.number}</div>
              <div className="text-gray-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
