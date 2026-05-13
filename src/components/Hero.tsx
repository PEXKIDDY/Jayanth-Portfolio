import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Award } from 'lucide-react';
import { FaGithub, FaMedium, FaYoutube } from 'react-icons/fa6';

const roles = ["Engineer", "Cybersecurity Specialist", "Researcher"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center bg-black overflow-hidden z-0">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#00BFFF]/10 blur-[150px] rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-neutral-800/50 blur-[150px] rounded-full" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-8 lg:mt-16">

                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-center order-2 lg:order-1"
                    >
                        <h2 className="text-xl md:text-3xl text-zinc-400 font-semibold mb-2">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white mb-4">
                            Sai Jayanth
                        </h1>

                        <div className="h-12 md:h-16 overflow-hidden mb-8">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={roles[roleIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-5xl text-[#00BFFF] font-bold tracking-tight"
                                >
                                    {roles[roleIndex]}
                                </motion.h3>
                            </AnimatePresence>
                        </div>

                        <div className="space-y-8 max-w-2xl">
                            <div className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                                <p>
                                    Cybersecurity enthusiast specializing in <span className="text-red-500 font-bold">Red Team</span> and <span className="text-blue-500 font-bold">Blue Team</span> operations, with a strong focus on identifying, exploiting, and responsibly disclosing real-world vulnerabilities to strengthen organizational security.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                                    title="Google Certified"
                                >
                                    <img
                                        src="/google badge.png"
                                        alt="Google Cybersecurity Professional Badge"
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                                    title="EC-Council Certified Ethical Hacker"
                                >
                                    <img
                                        src="/ceh.svg"
                                        alt="CEH Certified Ethical Hacker Badge"
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                                    title="APISEC University CASA"
                                >
                                    <img
                                        src="/apisec-casa.png"
                                        alt="APISEC CASA Badge"
                                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    />
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <motion.a
                                    href="/Saijayanth  final  resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-[#00BFFF] text-black font-bold rounded-full text-lg shadow-lg shadow-[#00BFFF]/20 w-full sm:w-auto text-center inline-block"
                                >
                                    Resume
                                </motion.a>

                                {/* Social Icons inline */}
                                <div className="flex gap-4">
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://www.linkedin.com/in/sai-jayanth-066589242/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-zinc-800 hover:border-[#00BFFF] text-zinc-400 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 flex items-center justify-center transition-colors">
                                        <Linkedin size={24} />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://github.com/PEXKIDDY" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-zinc-800 hover:border-[#00BFFF] text-zinc-400 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 flex items-center justify-center transition-colors">
                                        <FaGithub size={24} />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://medium.com/@saijayanth25dec2003" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-zinc-800 hover:border-[#00BFFF] text-zinc-400 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 flex items-center justify-center transition-colors">
                                        <FaMedium size={24} />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href="mailto:saijayanth9247@gmail.com" className="w-14 h-14 rounded-full border-2 border-zinc-800 hover:border-[#00BFFF] text-zinc-400 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 flex items-center justify-center transition-colors">
                                        <Mail size={24} />
                                    </motion.a>
                                    <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://www.youtube.com/@0xsaisec" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-zinc-800 hover:border-[#00BFFF] text-zinc-400 hover:text-[#00BFFF] hover:bg-[#00BFFF]/10 flex items-center justify-center transition-colors">
                                        <FaYoutube size={24} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side Image Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full"
                    >
                        <div className="relative hero-image-box w-[350px] md:w-[450px] max-w-full aspect-[4/5] md:aspect-square mx-auto lg:mx-0">
                            <img
                                src="/sai jayanth image 1.jpeg"
                                alt="Sai Jayanth"
                                className="w-full h-full object-cover object-top rounded-3xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default Hero;
