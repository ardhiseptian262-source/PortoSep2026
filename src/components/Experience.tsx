import { CheckCircle, Briefcase } from 'lucide-react'
import { experience, achievements } from '../data/content'

export default function Experience() {
  return (
    <section className="min-h-screen py-32 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Professional <span className="text-accent accent-glow">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            A story of consistent growth, dedication, and meaningful accomplishments
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.id}
              className="glass p-6 sm:p-8 rounded-xl hover:border-accent transition-all duration-300 text-center neon-glow hover:scale-105 transform animate-slide-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">{achievement.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">{achievement.title}</h3>
              <p className="text-slate-400 text-sm sm:text-base mb-4 leading-relaxed font-medium">{achievement.description}</p>
              <p className="text-accent text-xs sm:text-sm font-bold accent-glow tracking-wide">{achievement.impact}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 accent-glow">
            <Briefcase className="text-accent animate-pulse" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="glass p-8 sm:p-10 rounded-xl hover:border-accent transition-all neon-glow hover:shadow-lg hover:shadow-accent/40 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-accent group-hover:accent-glow transition-all leading-tight">{exp.role}</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 whitespace-nowrap tracking-wide">{exp.period}</span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed font-medium">{exp.description}</p>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3 group/item">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1 group-hover/item:animate-float transition-all" />
                      <span className="text-slate-300 group-hover/item:text-slate-100 transition-colors font-medium leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline Connector */}
                {index < experience.length - 1 && (
                  <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent mt-8 ml-2.5"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 p-8 glass rounded-xl border-l-4 border-accent text-center">
          <h3 className="text-2xl font-bold mb-4">💪 The Transformation Story</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lost <span className="text-accent font-bold">35kg</span> through unwavering discipline and consistency (110kg → 75kg).
            This personal transformation demonstrates the same commitment and problem-solving mindset I bring to every project and challenge.
          </p>
        </div>
      </div>
    </section>
  )
}
