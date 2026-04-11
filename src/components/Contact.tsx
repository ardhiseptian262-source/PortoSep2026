import { useState } from 'react'
import { Send, Mail, MessageSquare, User, Phone, MessageCircle, Instagram, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in section-header">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Let's <span className="text-accent accent-glow animate-neon-flicker">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg animate-slide-up leading-relaxed font-medium">
            Have a project in mind? Let's work together and create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-8 accent-glow leading-tight">Get In Touch</h3>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium text-lg">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:ardhiseptiand@gmail.com"
                className="glass p-6 sm:p-8 rounded-lg hover:border-accent transition-all flex items-start gap-4 group neon-glow hover:scale-105 transform"
              >
                <Mail className="text-accent flex-shrink-0 group-hover:scale-110 group-hover:animate-float transition-transform" size={24} />
                <div>
                  <h4 className="font-bold mb-1 group-hover:text-accent transition-colors text-lg">Email</h4>
                  <p className="text-slate-400 font-medium">ardhiseptiand@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/6282233401530"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 sm:p-8 rounded-lg hover:border-accent transition-all flex items-start gap-4 group neon-glow hover:scale-105 transform"
              >
                <Phone className="text-accent flex-shrink-0 group-hover:scale-110 group-hover:animate-float transition-transform" size={24} />
                <div>
                  <h4 className="font-bold mb-1 group-hover:text-accent transition-colors text-lg">Phone</h4>
                  <p className="text-slate-400 font-medium">+62 822-3340-1530</p>
                </div>
              </a>

              <div className="glass p-6 sm:p-8 rounded-lg flex items-start gap-4 neon-glow hover:scale-105 transform transition-all duration-300 cursor-pointer">
                <MessageSquare className="text-accent flex-shrink-0 animate-pulse" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-lg">Response Time</h4>
                  <p className="text-slate-400 font-medium">Usually within 24 hours</p>
                </div>
              </div>

              <div className="glass p-6 sm:p-8 rounded-lg flex items-start gap-4 neon-glow hover:scale-105 transform transition-all duration-300 cursor-pointer">
                <User className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1 text-lg">Availability</h4>
                  <p className="text-slate-400 font-medium">Open for freelance & full-time projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 sm:p-10 rounded-xl neon-glow animate-slide-up">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg animate-fade-in">
                <p className="text-green-300 font-semibold">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-3 text-slate-100 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg focus:border-accent focus:outline-none focus:shadow-lg focus:shadow-accent/30 transition-all text-white placeholder-slate-500 font-medium"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-3 text-slate-100 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg focus:border-accent focus:outline-none focus:shadow-lg focus:shadow-accent/30 transition-all text-white placeholder-slate-500 font-medium"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-3 text-slate-100 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg focus:border-accent focus:outline-none focus:shadow-lg focus:shadow-accent/30 transition-all text-white placeholder-slate-500 font-medium"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-3 text-slate-100 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-slate-700 rounded-lg focus:border-accent focus:outline-none focus:shadow-lg focus:shadow-accent/30 transition-all text-white placeholder-slate-500 resize-none font-medium"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-accent hover:bg-blue-600 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 neon-glow hover:shadow-lg hover:shadow-accent/50 hover:scale-105 transform disabled:scale-100"
              >
                {isLoading ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="animate-float" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/6282233401530"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-lg hover:border-accent hover:bg-green-900/20 transition-all inline-flex items-center gap-2 group neon-glow hover:scale-110 transform"
              title="Chat di WhatsApp"
            >
              <MessageCircle size={20} className="group-hover:animate-float" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/septian_arc/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-lg hover:border-accent hover:bg-pink-900/20 transition-all inline-flex items-center gap-2 group neon-glow hover:scale-110 transform"
              title="Follow di Instagram"
            >
              <Instagram size={20} className="group-hover:animate-float" />
              Instagram
            </a>
            <a
              href="https://github.com/kocakjaya123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-lg hover:border-accent transition-all inline-flex items-center gap-2 group neon-glow hover:scale-110 transform"
              title="Lihat GitHub Profile"
            >
              <Github size={20} className="group-hover:animate-float" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/septian-ardhi-33a366234/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass rounded-lg hover:border-accent transition-all inline-flex items-center gap-2 group neon-glow hover:scale-110 transform"
              title="Lihat LinkedIn Profile"
            >
              <Linkedin size={20} className="group-hover:animate-float" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
