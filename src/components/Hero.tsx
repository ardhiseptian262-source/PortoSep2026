import { Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            {/* Main Headline - Name */}
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Welcome to my portfolio</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="block text-white">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block text-accent">{personalInfo.name.split(' ').slice(2).join(' ')}</span>
              </h1>
            </div>

            {/* Title & Key Info */}
            <div className="space-y-4 animate-slide-up">
              <div className="border-l-4 border-accent pl-4">
                <p className="text-xl font-semibold text-accent">{personalInfo.title}</p>
                <p className="text-slate-400 text-sm mt-1">{personalInfo.location}</p>
              </div>
              
              {/* Quick Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-accent">📧</span>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Description */}
            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              IT Professional with 6+ years of experience in software development, quality control, and technical infrastructure management. Currently pursuing Information Systems degree while working as QC & Technical Support Specialist.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium neon-glow hover:shadow-lg hover:shadow-accent/50 text-center"
              >
                Discover My Story
              </button>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-medium neon-glow hover:shadow-lg hover:shadow-accent/50 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4 animate-slide-up flex-wrap">
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-green-900/30 hover:text-green-400 transition-all duration-300 hover:scale-110 transform neon-glow text-sm"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/septian_arc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-pink-900/30 hover:text-pink-400 transition-all duration-300 hover:scale-110 transform neon-glow text-sm"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/kocakjaya123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-secondary hover:text-accent transition-all duration-300 hover:scale-110 transform neon-glow text-sm"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/septian-ardhi-33a366234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-secondary hover:text-accent transition-all duration-300 hover:scale-110 transform neon-glow text-sm"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 glass rounded-lg hover:bg-secondary hover:text-accent transition-all duration-300 hover:scale-110 transform neon-glow text-sm"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image Section */}
          <div className="flex justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-72 h-96 md:w-80 md:h-96 lg:w-96 lg:h-96">
              {/* Subtle Glow - Single powerful layer */}
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-3xl"></div>
              
              {/* Main Container - Square with rounded corners */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay - Top to bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/20"></div>
              </div>

              {/* Animated Gradient Border - Thin and elegant */}
              <div className="absolute inset-0 rounded-3xl p-[2px] pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent via-blue-500 to-accent animate-spin-slow opacity-60" style={{ animationDuration: '6s' }}></div>
                <div className="absolute inset-[2px] rounded-3xl bg-primary"></div>
              </div>

              {/* Secondary accent border */}
              <div className="absolute inset-0 rounded-3xl border border-accent/20"></div>

              {/* Top-right glow accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent/40 rounded-full blur-2xl"></div>
              
              {/* Bottom-left glow accent */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl"></div>

              {/* Corner flourishes - Minimal */}
              <div className="absolute -top-1 left-1/4 w-1 h-1 bg-accent rounded-full"></div>
              <div className="absolute -right-1 top-1/4 w-1.5 h-1.5 bg-accent/70 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center animate-fade-in">
          <div className="animate-bounce">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
