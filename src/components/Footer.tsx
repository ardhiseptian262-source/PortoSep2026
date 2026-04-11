import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'
import VisitorCounter from './VisitorCounter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass border-t border-slate-700 neon-glow animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-slide-up">
            <h3 className="font-bold text-xl sm:text-2xl mb-4 accent-glow tracking-tight">Portfolio</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Building modern web applications and creating inspiring content
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold mb-5 accent-glow text-lg tracking-tight">Navigation</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold mb-5 accent-glow text-lg tracking-tight">Resources</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="https://github.com/kocakjaya123" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/septian-ardhi-33a366234/" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/septian_arc/" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:ardhiseptiand@gmail.com" className="hover:text-accent transition-all hover:translate-x-1 transform inline-block font-medium">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold mb-5 accent-glow text-lg tracking-tight">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/6282233401530"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-green-900/30 hover:text-green-400 transition-all hover:scale-110 transform neon-glow"
                title="Chat via WhatsApp"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.instagram.com/septian_arc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-pink-900/30 hover:text-pink-400 transition-all hover:scale-110 transform neon-glow"
                title="Follow di Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/kocakjaya123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-secondary hover:text-accent transition-all hover:scale-110 transform neon-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/septian-ardhi-33a366234/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:bg-secondary hover:text-accent transition-all hover:scale-110 transform neon-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ardhiseptiand@gmail.com"
                className="p-3 glass rounded-lg hover:bg-secondary hover:text-accent transition-all hover:scale-110 transform neon-glow"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8 border-accent/30"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-in text-sm">
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-float" />
            <span>by Septian</span>
          </div>

          {/* Visitor Counter */}
          <div className="glass px-4 py-2 rounded-lg border border-accent/20 hover:border-accent transition-all duration-300">
            <VisitorCounter />
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-accent transition-all hover:translate-y-[-2px] transform font-medium">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-all hover:translate-y-[-2px] transform font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
