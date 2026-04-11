import { personalInfo } from '../data/content'
import VisitorStats from './VisitorStats'

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            About <span className="text-accent accent-glow">Me</span>
          </h2>
        </div>

        {/* Main Biography */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up space-y-6">
            <div className="glass p-8 sm:p-10 rounded-xl border border-accent/20 hover:border-accent transition-all duration-300">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '6+ Years' },
                { label: 'Current Role', value: 'QC & Technical Support' },
                { label: 'Education', value: 'Information Systems' },
                { label: 'Location', value: 'Surabaya, Indonesia' },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="glass p-4 rounded-lg border border-accent/20 hover:border-accent transition-all duration-300 hover:bg-secondary/50 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-accent">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values / Mindset */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-accent">Core Values</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Continuous Learning',
                  description: 'Always exploring new technologies and skills to stay ahead in tech.',
                  icon: '📚'
                },
                {
                  title: 'Problem Solving',
                  description: 'Approaching challenges with analytical thinking and practical solutions.',
                  icon: '🧠'
                },
                {
                  title: 'Quality Excellence',
                  description: 'Committed to delivering high-quality work in every project and task.',
                  icon: '✨'
                },
                {
                  title: 'Team Leadership',
                  description: 'Building strong teams and fostering collaborative work environments.',
                  icon: '🤝'
                },
              ].map((value, idx) => (
                <div
                  key={value.title}
                  className="glass p-6 rounded-lg border border-accent/20 hover:border-accent transition-all duration-300 hover:bg-secondary/50 group animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                    <div>
                      <h4 className="font-bold mb-2 group-hover:text-accent transition-colors">{value.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visitor Stats Section */}
        <div className="mt-20 mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent mb-2">Portfolio Engagement</h3>
            <p className="text-slate-400 text-sm">See how many people have visited this portfolio</p>
          </div>
          <div className="max-w-md mx-auto">
            <VisitorStats />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-slate-400 mb-6">Ready to work together or want to know more?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold neon-glow hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transform"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
