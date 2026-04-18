import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Shield, Terminal, Activity, Lock, FileText } from 'lucide-react'
import './App.css'

// 1. The Classified Dossier Component
const ProjectCard = ({ title, category, description, tech }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.5)' }}
    className="relative p-6 bg-slate-900/40 border border-slate-800 backdrop-blur-xl group overflow-hidden text-left"
  >
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
      <span className="text-[10px] uppercase tracking-widest text-slate-500">{category}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-sm text-slate-400 mb-6 leading-relaxed font-sans">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-[9px] px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

function App() {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const projectSectionRef = useRef(null);
  const [logs, setLogs] = useState(['[SYSTEM] Sentinel Node Initialized...', '[SEC] Scanning Port 5173...']);

  const addLog = (msg) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 6));
  };

  const handleDecrypt = () => {
    addLog("ACCESS GRANTED: Project vault decrypted.");
    setIsDecrypted(true);
    
    // Smooth scroll to content after it renders
    setTimeout(() => {
      projectSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-cyan-400 font-mono overflow-x-hidden">
      
      {/* Visual Status Bar */}
      <nav className="fixed top-0 w-full p-4 border-b border-cyan-900/30 flex justify-between bg-black/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-cyan-500 animate-pulse" /> 
          <span className="tracking-widest text-xs uppercase">Jake Javier // SECURE_ACCESS</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px]">
          <span className="text-slate-500 uppercase">Uplink: Active</span>
          <div className="flex items-center gap-1 text-green-500">
            <Activity size={14} /> <span>ENCRYPTION: AES-256</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10"
        >
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full border border-cyan-500/20 bg-cyan-500/5">
              <Lock size={40} className="text-cyan-500" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2">SENTINEL</h1>
          <p className="text-slate-500 mb-10 tracking-[0.3em] text-xs uppercase italic">System & Network Security Portfolio</p>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 245, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDecrypt}
            className="px-10 py-4 border border-cyan-500 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors duration-300 font-bold tracking-[0.2em] text-sm uppercase"
          >
            {isDecrypted ? "SYSTEM_UNLOCKED" : "Initiate Decrypt"}
          </motion.button>
        </motion.div>

        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      </section>

      {/* REVEALED CONTENT ON DECRYPT */}
      {isDecrypted && (
        <motion.div
          ref={projectSectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Vault */}
          <section className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex items-center gap-4 mb-12">
              <FileText className="text-cyan-500" />
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Classified_Projects</h2>
              <div className="h-[1px] flex-1 bg-cyan-900/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Project 01: E-Athleta */}
  <ProjectCard 
    title="E-Athleta" 
    category="Athlete Profiling"
    description="Secure profiling and analytics platform for student-athletes. Implemented real-time sync and cloud-based reporting."
    tech={['Vite', 'Node.js', 'PostgreSQL', 'Supabase', 'SendGrid', 'Render']}
  />

  {/* Project 02: Alexa's Tech and Development */}
  <ProjectCard 
    title="Alexa's Tech" 
    category="Enterprise Solutions"
    description="Full-stack engineering and development management system featuring complex role-based authentication."
    tech={['Laravel', 'PHP', 'Vite', 'Tailwind CSS', 'XAMPP', 'JavaScript']}
  />
</div>
          </section>

          {/* Contact Terminal Section */}
          <section className="max-w-4xl mx-auto px-6 py-24 pb-40">
            <div className="border border-cyan-900/50 bg-black/40 backdrop-blur-md p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 animate-scan" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <h2 className="text-xl font-bold text-white tracking-[0.3em] uppercase">Secure_Communication_Channel</h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                addLog("ENCRYPTING_MESSAGE... DISPATCHING TO JAKE_JAVIER...");
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase">Identity_Label</label>
                    <input type="text" placeholder="Name / Organization" className="w-full bg-slate-900/50 border border-slate-800 p-3 text-cyan-400 focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 uppercase">Return_Address</label>
                    <input type="email" placeholder="Email@protocol.com" className="w-full bg-slate-900/50 border border-slate-800 p-3 text-cyan-400 focus:border-cyan-500 focus:outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 uppercase">Encrypted_Payload</label>
                  <textarea rows="4" placeholder="Enter your message here..." className="w-full bg-slate-900/50 border border-slate-800 p-3 text-cyan-400 focus:border-cyan-500 focus:outline-none transition-all resize-none"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 211, 238, 0.2)' }} whileTap={{ scale: 0.98 }} className="w-full py-4 border border-cyan-500 text-cyan-400 font-bold tracking-widest uppercase text-xs">
                  Transmit_Message
                </motion.button>
              </form>
            </div>
          </section>
        </motion.div>
      )}

      {/* Security Console Log (Bottom Left) */}
      <aside className="fixed bottom-8 left-8 w-72 bg-black/90 border border-slate-800 p-4 rounded-lg shadow-2xl z-50 hidden sm:block">
        <div className="text-slate-500 border-b border-slate-800 mb-3 pb-1 flex justify-between items-center text-[10px]">
          <span className="flex items-center gap-2 uppercase tracking-tighter"><Terminal size={12} /> Secure_Console</span>
          <span className="text-green-900 animate-pulse uppercase text-[8px]">● Live</span>
        </div>
        <div className="h-32 overflow-hidden space-y-2">
          {logs.map((log, i) => (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className={i === 0 ? "text-cyan-400 text-[11px]" : "text-slate-600 text-[10px]"}>
              {log}
            </motion.div>
          ))}
        </div>
      </aside>

    </div>
  )
}

export default App