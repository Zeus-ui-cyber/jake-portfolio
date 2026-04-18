import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, Mail, ExternalLink, Code, Database, 
  Globe, User, Award, BookOpen, Terminal, Activity, Lock, FileText 
} from 'lucide-react'
import './App.css'

export default function App() {
  const projects = [
  {
    title: "E-Athleta",
    category: "Advanced Secure System // Capstone",
    description: "A robust student-athlete profiling platform featuring Two-Way Factor Authentication (2FA) and a multi-tier Role-Based Access Control (RBAC) architecture. Engineered to ensure high-level data integrity, secure session management, and granular user permissions.",
    technologies: ["SendGrid", "Render", "PostgreSQL", "Supabase", "Vite", "React.js", "Node.js"],
    image: "Screenshot 2025-12-15 122025.png"
  },
  {
    title: "Alexa's Tech & Development",
    category: "Corporate Brand Website // OJT",
    description: "Official digital presence for Alexa's Tech and Development. Built to establish a professional identity, showcasing engineering services and technical solutions with a focus on clean UI, performance optimization, and cross-platform responsiveness.",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "Vite", "UI/UX Architecture"],
    image: "image.png"
  }
];

  const skills = [
    "System Security", "Network Security", "Full-Stack Development", 
    "Database Management", "Cloud Infrastructure", "API Development", 
    "Authentication Systems", "DevOps"
  ];

  const certifications = [
    { title: "Introduction to Cybersecurity", issuer: "CISCO Network Academy", icon: <Shield size={24} /> },
    { title: "Fundamentals of Game Hacking Dev", issuer: "Red Team Leaders", icon: <Code size={24} /> },
    { title: "Managing a Business Venture", issuer: "CISCO Network Academy", icon: <Database size={24} /> }
  ];

  const experience = [
    {
      title: "ICT MONTH Walang Iwanan sa Digital Bayanihan",
      role: "Technical Team",
      organization: "College of Computer Studies and Technology, PLSP Pavilion",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Animated Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-xl font-bold tracking-tighter">Jake E. Javier</span>
            </div>
            <div className="hidden md:flex gap-8 text-xs uppercase font-bold tracking-widest">
              <a href="#work" className="hover:text-blue-400 transition-colors font-mono">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition-colors font-mono">About</a>
              <a href="#history" className="hover:text-blue-400 transition-colors font-mono">Record</a>
              <a href="#certifications" className="hover:text-blue-400 transition-colors font-mono">Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors font-mono">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-[10px] uppercase font-mono tracking-widest font-bold">Available for secure opportunities</span>
            </div>
            <h1 className="text-6xl md:text-8xl mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent font-black uppercase">
              Jake E. Javier
            </h1>
            <div className="space-y-2 mb-8 uppercase tracking-widest">
              <p className="text-xl text-zinc-100 font-bold">BS Information Systems Graduate</p>
              <p className="text-lg text-blue-400 font-mono">Major in System and Network Security</p>
            </div>
            <p className="text-base text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Fresh graduate from <span className="text-white">Pamantasan ng Lungsod ng San Pablo</span> specializing in secure system development, full-stack engineering, and cloud infrastructure.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#work" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                View Projects
              </a>
              <a href="#contact" className="inline-block bg-zinc-800 border border-zinc-700 px-8 py-4 rounded-full font-bold hover:bg-zinc-700 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase italic">Classified Archives // SECURE UPLINK</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                <div className="aspect-video overflow-hidden bg-zinc-900 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{project.title}</h3>
                      <p className="text-blue-400 text-[10px] font-mono uppercase tracking-[0.2em]">{project.category}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-[9px] text-zinc-300 uppercase font-mono tracking-tighter">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- ABOUT SECTION: SIDE-BY-SIDE DESIGN --- */}
<section id="about" className="bg-zinc-900/30 backdrop-blur-sm py-24 border-t border-zinc-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      
      {/* KALIWA: Ang Picture Mo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <div className="relative group w-full max-w-[300px]">
          <div className="aspect-[3/4] bg-zinc-900 border-2 border-zinc-800 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all">
            {/* Subtle overlay glow */}
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
            
            <img 
              src="jake-mirror.jpg" 
              alt="Jake E. Javier" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-4 -left-4 bg-zinc-950/90 border border-blue-500/50 px-4 py-2 rounded-lg z-20 backdrop-blur-md">
            <p className="text-[10px] font-mono text-blue-400 font-bold tracking-[0.2em] uppercase">Status: AUTHORIZED OPERATOR</p>
          </div>
        </div>
      </motion.div>

     
      <div className="w-full md:w-2/3">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">About Me</h2>
        <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-10">
          <p>Fresh graduate from <span className="text-white font-semibold">Pamantasan ng Lungsod ng San Pablo</span> with a degree in <span className="text-white font-semibold">Bachelor of Science in Information Systems</span>, majoring in <span className="text-blue-400 font-mono">System and Network Security</span>.</p>
          <p>Passionate about building secure, scalable applications with expertise in full-stack development, cloud infrastructure, and cybersecurity.</p>
          <p>Currently based in <span className="text-white">Brgy. San Buenaventura, San Pablo City, Laguna</span>.</p>
        </div>

        {/* Technical Skills Header */}
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 font-mono">Technical Skill Set</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="bg-zinc-950/50 px-3 py-2 rounded-lg border border-zinc-800 hover:border-blue-500/50 transition-colors group">
              <span className="text-[10px] font-mono uppercase text-zinc-400 group-hover:text-blue-400 transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
{/* --- SERVICE HISTORY: EDUCATION TIMELINE --- */}
<section id="history" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
  <div className="mb-16">
    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Service_History</h2>
    <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase italic">Academic_Trace // EDUCATIONAL_CLEARANCE</p>
  </div>

  <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12">
    {[
      {
        school: "Pamantasan ng Lungsod ng San Pablo",
        year: "2025 - 2026",
        level: "College",
        degree: "BS Information Systems (Major in System and Network Security)",
        status: "CURRENTLY DEPLOYED"
      },
      {
        school: "Capellan Institute of Technology",
        year: "2022 - 2023",
        level: "Senior High School",
        degree: "Home Economics (With Honors)",
        status: "COMPLETED"
      },
      {
        school: "Dolores National High School",
        year: "2019 - 2020",
        level: "Junior High School",
        degree: "Secondary Education",
        status: "COMPLETED"
      },
      {
        school: "San Buenaventura Elementary School",
        year: "2015 - 2016",
        level: "Elementary",
        degree: "Primary Education",
        status: "COMPLETED"
      }
    ].map((item, idx) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="relative pl-8 group"
      >
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-blue-500 transition-colors z-10" />
        
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <span className="text-blue-400 font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-blue-500/5 border border-blue-500/20 rounded w-fit">
              {item.level}
            </span>
            <span className="text-zinc-500 font-mono text-xs">{item.year}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{item.school}</h3>
          <p className="text-zinc-400 text-sm mb-4">{item.degree}</p>
          
          <div className="flex items-center gap-2">
             <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'COMPLETED' ? 'bg-green-500' : 'bg-blue-400 animate-pulse'}`} />
             <span className="text-[9px] font-mono text-zinc-500 tracking-tighter uppercase">{item.status}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

        {/* Certifications & Experience */}
        <section id="certifications" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Credentials</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{cert.icon}</div>
                <h4 className="font-bold mb-1 uppercase text-sm tracking-tight">{cert.title}</h4>
                <p className="text-zinc-500 text-[10px] font-mono">{cert.issuer}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest">Experience & Involvement</h3>
            {experience.map((exp, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold uppercase tracking-tighter">{exp.title}</h4>
                  <span className="text-purple-400 text-xs font-mono">{exp.year}</span>
                </div>
                <p className="text-blue-400 text-xs uppercase font-bold mb-1 font-mono">{exp.role}</p>
                <p className="text-zinc-500 text-[10px] font-mono">{exp.organization}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION: ENCRYPTED UPLINK --- */}
<section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-zinc-900">
  <div className="grid md:grid-cols-2 gap-16">
    
    {/* Left Column: Contact Info & Socials */}
<div>
  <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Secure_Uplink</h2>
  <p className="text-zinc-400 text-lg leading-relaxed mb-12">
    I am currently open to full-time roles in <span className="text-white">System Security</span> and <span className="text-blue-400">Full-Stack Development</span>. Drop a message to establish a secure connection.
  </p>

  <div className="space-y-6 mb-12">
    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-blue-500/50 transition-colors">
        <Mail className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email_Address</p>
        <a href="mailto:jakejavier016@gmail.com" className="text-white hover:text-blue-400 transition-colors">jakejavier016@gmail.com</a>
      </div>
    </div>

    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-blue-500/50 transition-colors">
        <Globe className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Location_Node</p>
        <p className="text-white">San Pablo City, Laguna, PH</p>
      </div>
    </div>
  </div>

  {/* RESTORED SOCIAL LINKS WITH LINKEDIN ADDED */}
<div className="flex gap-6">
  {/* LinkedIn - Official Blue: #0077B5 */}
  <a href="https://www.linkedin.com/in/jake-javier-5aa6ab3a3/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-[#0077B5]/50 group-hover:bg-[#0077B5]/10 transition-all duration-300">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-500 group-hover:text-[#0077B5] transition-colors">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </div>
    <span className="text-[8px] font-mono font-bold uppercase text-zinc-600 group-hover:text-zinc-400 tracking-widest transition-colors">LinkedIn</span>
  </a>

  {/* Facebook - Official Blue: #1877F2 */}
  <a href="https://facebook.com/kimvllskrrrrt" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-[#1877F2]/50 group-hover:bg-[#1877F2]/10 transition-all duration-300">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-500 group-hover:text-[#1877F2] transition-colors">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </div>
    <span className="text-[8px] font-mono font-bold uppercase text-zinc-600 group-hover:text-zinc-400 tracking-widest transition-colors">Facebook</span>
  </a>

  {/* Instagram - Official Pink: #E4405F */}
  <a href="https://instagram.com/rvijae/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-[#E4405F]/50 group-hover:bg-[#E4405F]/10 transition-all duration-300">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-500 group-hover:text-[#E4405F] transition-colors">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.617 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.617-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </div>
    <span className="text-[8px] font-mono font-bold uppercase text-zinc-600 group-hover:text-zinc-400 tracking-widest transition-colors">Instagram</span>
  </a>
</div>
</div>

    {/* Right Column: Contact Form */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm relative"
    >
      <form action="https://formspree.io/f/mqewqjjo" method="POST" className="space-y-6">
        <div>
          <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-blue-500/50 transition-all"
            required 
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="name@company.com" 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-blue-500/50 transition-all"
            required 
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Message</label>
          <textarea 
            name="message"
            rows="4" 
            placeholder="Write your message here..." 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Send Message</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
      
      {/* Decorative corner */}
      <div className="absolute -top-px -right-px w-8 h-8 border-t border-r border-blue-500/30 rounded-tr-2xl"></div>
    </motion.div>
  </div>
</section>

        <footer className="py-12 border-t border-zinc-900 text-center text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-mono">
          <p>© 2026 JAKE E. JAVIER // System & Network Security Specialist</p>
        </footer>
      </div>
    </div>
  );
}