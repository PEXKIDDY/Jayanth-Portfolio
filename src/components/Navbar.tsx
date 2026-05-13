import { motion } from 'framer-motion';
import { Linkedin, Menu, X, Sun } from 'lucide-react';
import { FaGithub, FaMedium, FaYoutube } from 'react-icons/fa6';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sun size={28} className="text-[#00BFFF] animate-spin-slow" />
          <span className="text-white font-bold text-xl tracking-wide">Portfolio</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/PEXKIDDY" target="_blank" rel="noopener noreferrer"><FaGithub size={20} className="text-secondary hover:text-white transition-colors" /></a>
          <a href="https://www.linkedin.com/in/sai-jayanth-066589242/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-secondary hover:text-white transition-colors" /></a>
          <a href="https://medium.com/@saijayanth25dec2003" target="_blank" rel="noopener noreferrer"><FaMedium size={20} className="text-secondary hover:text-white transition-colors" /></a>
          <a href="https://www.youtube.com/@0xsaisec" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} className="text-secondary hover:text-white transition-colors" /></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4 text-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
            <a href="https://github.com/PEXKIDDY" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="text-secondary" /></a>
            <a href="https://www.linkedin.com/in/sai-jayanth-066589242/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className="text-secondary" /></a>
            <a href="https://medium.com/@saijayanth25dec2003" target="_blank" rel="noopener noreferrer"><FaMedium size={24} className="text-secondary" /></a>
            <a href="https://www.youtube.com/@0xsaisec" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} className="text-secondary" /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
