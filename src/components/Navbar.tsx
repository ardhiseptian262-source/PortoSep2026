import { useState } from 'react'
import LiveClock from './LiveClock'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  onNavigate: (sectionId: string) => void
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <nav className="glass fixed top-0 w-full z-50 border-b border-slate-700 neon-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-accent/50 transition-all">
              <span className="text-white font-bold animate-float">S</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline accent-glow">Portfolio</span>
          </div>

          {/* Center navigation (shown on large screens only) */}
          <div className="flex-1 flex justify-center">
            <div className="hidden lg:flex space-x-6 whitespace-nowrap">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-300 hover:text-accent transition-all duration-200 text-sm font-medium transform relative group animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right actions: Contact + Clock + Mobile button */}
          <div className="flex items-center space-x-3 ml-auto">
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-blue-600 transition-all duration-200 text-sm font-medium neon-glow"
              >
                Contact
              </button>

              <div className="flex items-center pl-4 border-l border-slate-700">
                <LiveClock />
              </div>
            </div>

            {/* Mobile Menu Button (visible below large) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-all hover:scale-110 transform"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="animate-rotate-slow" /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-all hover:scale-110 transform"
          >
            {isOpen ? <X size={24} className="animate-rotate-slow" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slide-down">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-accent hover:bg-secondary rounded-lg transition-all duration-300 hover:translate-x-2 transform animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-600 transition-all duration-300 neon-glow"
            >
              Contact Me
            </button>
            <div className="pt-3 border-t border-slate-700 px-4">
              <LiveClock />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
