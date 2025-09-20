import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Brain, Server, Globe, Smartphone } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Akshayath P V</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl">
              <img 
                src="/ak image.jpg" 
                alt="Akshayath P V" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 mx-auto w-48 h-48"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Akshayath</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            B.Tech AI & Data Science Student | Aspiring Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about artificial intelligence, data science, and building innovative web applications. 
            Currently exploring the intersection of AI and full stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing my B.Tech in Artificial Intelligence and Data Science at 
                Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College in Chennai.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As a beginner full stack developer, I'm passionate about creating innovative solutions 
                that bridge the gap between AI/ML technologies and user-friendly web applications.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy learning new technologies, solving complex problems, and contributing to 
                projects that make a meaningful impact.
              </p>
           </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-white">B.Tech Artificial Intelligence and Data Science</h4>
                  <p className="text-purple-300">Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College</p>
                  <p className="text-gray-400">Chennai, Tamil Nadu</p>
                  <p className="text-gray-400">Currently Pursuing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
              <Brain className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">AI & Data Science</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Machine Learning</li>
                <li>• Data Analysis</li>
                <li>• Python</li>
                <li>• Statistical Analysis</li>
                <li>• Deep Learning (Learning)</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
              <Code className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript</li>
                <li>• React (Learning)</li>
                <li>• Responsive Design</li>
                <li>• UI/UX Basics</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
              <Server className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js (Learning)</li>
                <li>• Database Management</li>
                <li>• API Development</li>
                <li>• Version Control (Git)</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'MongoDB', 'TypeScript', 'TensorFlow', 'Docker'].map((tech) => (
                <span key={tech} className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white px-4 py-2 rounded-full border border-purple-400/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders for future work */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg mb-6 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Coming Soon</h3>
              <p className="text-gray-300 mb-4">Exciting projects in development. Stay tuned for updates!</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">AI/ML</span>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Web Dev</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-lg mb-6 flex items-center justify-center">
                <Database className="w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Science Projects</h3>
              <p className="text-gray-300 mb-4">Working on data analysis and visualization projects as part of my studies.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Data Analysis</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
              <div className="w-full h-48 bg-gradient-to-br from-green-600/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Full Stack Applications</h3>
              <p className="text-gray-300 mb-4">Learning to build end-to-end web applications with modern technologies.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-green-600/20 text-green-300 px-2 py-1 rounded">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Get In Touch</h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="mailto:akshayath660@gmail.com"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group flex items-center space-x-4"
            >
              <Mail className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">akshayath660@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+918122415829"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group flex items-center space-x-4"
            >
              <Phone className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-300">+91 8122415829</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Akshayath-PV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akshayath-p-v-44145734b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Akshayath P V. Built with passion and React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;