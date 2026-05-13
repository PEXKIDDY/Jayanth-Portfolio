import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import { Shield, Sun, Info, Award, Eye } from "lucide-react";

const mncOrgs = [
  {
    org: "Apple",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
    count: "x1",
  },
  {
    org: "Microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
    count: "x3",
  },
  {
    org: "Cisco",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    alt: "Cisco",
    count: "x1",
  },
  {
    org: "Perplexity",
    img: "/perplexity.svg",
    alt: "Perplexity",
    count: "x1",
  },
  {
    org: "Ferrari",
    img: "/ferrari.svg",
    alt: "Ferrari",
    count: "x1",
  },
  {
    org: "Glassdoor",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Glassdoor_logo.svg",
    alt: "Glassdoor",
    count: "x1",
  },
  {
    org: "MathWorks",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    alt: "MATLAB",
    count: "x1",
  },
  {
    org: "eToro",
    img: "/etoro.png",
    alt: "eToro",
    count: "x1",
  },
  {
    org: "Artsy",
    img: "/Artsy.jpg",
    alt: "Artsy",
    count: "x3",
  },
];

const govOrgs = [
  {
    org: "NASA",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    alt: "NASA",
    count: "x1",
  },
  {
    org: "World Health Organization",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/WHO_logo.svg",
    alt: "WHO",
    count: "x1",
  },
  {
    org: "State of Maryland",
    img: "/maryland.svg",
    alt: "Maryland",
    count: "x2",
  },
  {
    org: "United States Environmental Protection Agency",
    img: "/lg_4.svg",
    alt: "EPA",
    count: "x1",
  },
];

const hallOfFameOrgs = [...mncOrgs, ...govOrgs];

const App = () => {

  const projects = [
    {
      title: "Sensitive Dorks Vault",
      description: `A comprehensive OSINT dashboard for managing sensitive Google Dorks.

Results:
• 3 hall of frames at Microsoft
• 1 hall of frame at Apple`,
      image: "/sensitive-dorks-logo.jpg",
      isLogo: true,
      tags: ["OSINT", "Google Dorks", "Security", "JavaScript"],
      github: "https://github.com/PEXKIDDY/Sensitive-dorks-vault-",
      external: "https://pexkiddy.github.io/Sensitive-dorks-vault-/",
      dateAdded: "2026-05-04"
    },
    {
      title: "JS-FINDER",
      description:
        "A lightweight browser-based JavaScript discovery tool designed for educational cybersecurity research. Extracts external JS files from a target domain.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      tags: ["JavaScript", "Cybersecurity", "Reconnaissance"],
      github: "https://github.com/PEXKIDDY/JS-FINDER",
      status: "Under Upgrade"
    },

  ];

  const skills = [
    {
      category: "Security",
      items: [
        "Network Security",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Digital Forensics",
      ],
    },
    {
      category: "Technical",
      items: ["Python", "C/C++", "Linux Admin", "Wireshark"],
    },
    {
      category: "General",
      items: [
        "Team Collaboration",
        "Critical Thinking",
        "Public Speaking",
        "Problem Solving",
      ],
    },
  ];

  const services = [
    {
      title: "Cyber Security Analyst",
      description:
        "Cyber Security Analyst specializing in threat monitoring, incident detection, log analysis, and defensive security operations.",
      icon: <Shield size={32} />,
    },
    {
      title: "Security Researcher",
      description:
        "Specializing in Web, API, and Android Security Testing with a focus on vulnerability discovery and responsible disclosure.",
      icon: <Sun size={32} />,
    },
    {
      title: "Threat Intelligence Analyst",
      description:
        "As a Threat Intelligence Analyst I have focused on threat research, IOC analysis, and cyber threat monitoring.",
      icon: <Award size={32} />,
    },
  ];

  return (
    <div className="bg-bg-color min-h-screen">
      <Navbar />

      <Hero />

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About
              </h2>
              <p className="text-secondary text-lg mb-6">
                A passionate Cybersecurity Researcher and Analyst specializing in vulnerability discovery, exploitation, and responsible disclosure. I focus on identifying real-world security flaws and translating them into actionable insights that strengthen system defenses.
              </p>
              <p className="text-secondary text-lg mb-6">
                With a strong foundation in both Red Team and Blue Team operations, I bring a practical, hands-on approach to security — combining offensive techniques with defensive strategies to understand and mitigate modern threats.
              </p>
              <p className="text-secondary text-lg mb-6">
                I am constantly exploring new attack vectors, analyzing emerging threats, and pushing the boundaries of digital security to build safer and more resilient systems.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-3xl font-bold mb-2 text-red-500">RED TEAM</h4>
                  <p className="text-secondary text-sm font-bold tracking-widest">OFFENSIVE</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">{hallOfFameOrgs.length}+</h4>
                  <p className="text-secondary text-sm">HALL OF FAME SELECTIONS</p>
                </div>
              </div>
            </motion.div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="aspect-square w-full glass rounded-3xl overflow-hidden shadow-2xl shadow-[#00BFFF]/10">
                  <img
                    src="/about page img.png"
                    alt="Cybersecurity Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Hall of Fame Section */}
          <section id="hall-of-fame" className="py-24 bg-black/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="text-left mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Hall of Fame
                </h2>
                <p className="text-secondary text-sm md:text-base">
                  Showing the top engagements Sai Jayanth has valid submissions
                  against.
                </p>
              </div>

              {/* MNC Category */}
              <h3 className="text-lg font-bold text-white/80 tracking-widest uppercase w-full mt-2 mb-1">MNC</h3>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 w-full">
                {mncOrgs.map((hof, index) => (
                  <div key={`mnc-${index}`} className="flex flex-col items-center gap-3 w-[120px] sm:w-[140px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-3 hover:scale-105 transition-transform group relative border-4 border-white"
                      title={hof.org}
                    >
                      <img
                        src={hof.img}
                        alt={hof.alt}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                      />
                    </motion.div>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mb-1 line-clamp-2" title={hof.org}>{hof.org}</span>
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border ${hof.count === "x1"
                        ? "bg-black/70 text-white border-white/30"
                        : "bg-[#00BFFF] text-black border-[#00BFFF]"
                        }`}>
                        {hof.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* GOV Category */}
              <h3 className="text-lg font-bold text-white/80 tracking-widest uppercase w-full mt-8 mb-1">GOV</h3>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 w-full">
                {govOrgs.map((hof, index) => (
                  <div key={`gov-${index}`} className="flex flex-col items-center gap-3 w-[120px] sm:w-[140px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-3 hover:scale-105 transition-transform group relative border-4 border-white"
                      title={hof.org}
                    >
                      <img
                        src={hof.img}
                        alt={hof.alt}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                      />
                      {hof.org === "NASA" && (
                        <a
                          href="/NASALetterOfAppreciation.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-1 right-1 bg-black/60 hover:bg-[#00BFFF] backdrop-blur-sm p-1 rounded-full text-white transition-colors border border-white/20"
                          title="View Letter of Appreciation"
                        >
                          <Info size={12} />
                        </a>
                      )}
                    </motion.div>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight mb-1 line-clamp-2" title={hof.org}>{hof.org}</span>
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border ${hof.count === "x1"
                        ? "bg-black/70 text-white border-white/30"
                        : "bg-[#00BFFF] text-black border-[#00BFFF]"
                        }`}>
                        {hof.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-6 text-sm pt-4">
                <p className="text-zinc-400">
                  Total companies{" "}
                  <span className="text-white font-bold text-lg md:text-xl ml-2">
                    {hallOfFameOrgs.length}
                  </span>
                </p>

              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-white">
                Cyber security certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
                {[
                  { name: "GOOGLE", file: "/Coursera SKAJ9ESB69L8.pdf" },
                  { name: "AWS", file: "/AWS Certificate.pdf" },
                  { name: "EHE", file: "/EHE.pdf" },
                  { name: "CEH", file: "/ECC-CEH-Certificate.pdf" },
                  { name: "CCEP", file: "/certified_certificate.pdf" },
                  { name: "THREAT INTELLIGENCE", file: "/1756253756570.jpg" },
                  { name: "APISEC CASA", file: "/apisec-casa-certificate.png" }
                ].map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group flex items-center justify-center h-40 rounded-xl border-[4px] border-dashed border-white/60 hover:border-white transition-all bg-black"
                  >
                    <span className="text-2xl font-bold text-white tracking-widest">
                      {cert.name}
                    </span>
                    {cert.file && (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-1 right-1 bg-black/60 hover:bg-[#00BFFF] backdrop-blur-sm p-1 rounded-full text-white transition-colors border border-white/20"
                        title={`View ${cert.name} Certificate`}
                      >
                        <Info size={12} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">
                Others
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                {[
                  { name: "PYTHON (MICHIGAN)", file: "/PYTHON MICHIGAN.pdf" },
                  { name: "CYBER WARFARE LAB", file: "/cyberwarfare lab c3sa.pdf" },
                  { name: "SMART CONTRACTS", file: "/sai jayanth_215891004.pdf" },
                  { name: "CTF", file: "/CERTIFICATION OF CTF.jpeg" },
                  { name: "SBI HACKATHON", file: "/SBI Hackathon .jpeg" },
                  { name: "", file: "" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-16 rounded-xl flex items-center justify-center gap-4 bg-white relative shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:shadow-[4px_8px_0px_rgba(255,255,255,0.15)] transition-all"
                  >
                    {item.name ? (
                      <>
                        <span className="font-bold text-black text-xl tracking-wide">
                          {item.name}
                        </span>
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00BFFF] hover:text-blue-700 transition-colors"
                          title={`View ${item.name} Certificate`}
                        >
                          <Eye size={24} />
                        </a>
                      </>
                    ) : null}
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  My <span className="text-[#00BFFF]">Skills</span>
                </h2>
                <p className="text-secondary text-lg">
                  Specializing in security and digital forensics.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h4 className="text-xl font-bold mb-6 text-[#00BFFF]">
                      {skill.category}
                    </h4>
                    <ul className="space-y-3">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="text-secondary flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  What I <span className="text-[#00BFFF]">Do</span>
                </h2>
                <p className="text-secondary text-lg">
                  Core services and areas of expertise.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-[#00BFFF]/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-2xl flex items-center justify-center text-[#00BFFF] mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00BFFF] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Pro<span className="text-[#00BFFF]">jects</span>
                  </h2>
                  <p className="text-secondary text-lg">
                    Investigating modern security challenges.
                  </p>
                </div>
                <button className="px-8 py-4 border border-[#00BFFF]/30 glass rounded-full font-bold text-white hover:bg-[#00BFFF] hover:text-black transition-all">
                  View All Projects
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 text-center">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
              <div className="glass p-12 md:p-24 rounded-[3rem] relative overflow-hidden border border-white/5 max-w-full">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 italic">
                    Let's secure together.
                  </h2>
                  <p className="text-secondary text-lg md:text-xl mb-12 max-w-xl mx-auto">
                    Interested in collaborating on cybersecurity research or
                    projects?
                  </p>
                  <a
                    href="mailto:saijayanth9247@gmail.com"
                    className="inline-block px-10 py-5 rounded-full bg-[#00BFFF] text-black text-lg md:text-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-[#00BFFF]/20 mb-4 md:mb-0 md:mr-4"
                  >
                    saijayanth9247@gmail.com
                  </a>

                </div>

                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00BFFF]/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 blur-[100px] rounded-full" />
              </div>
            </div>
          </section>

          <footer className="py-10 text-center text-secondary border-t border-white/5 bg-black">
            <p>© 2026 Sai Jayanth. Built with React & Vite. All Rights Reserved.</p>
          </footer>
        </div>
      </section >
    </div >
  );
}

export default App;
