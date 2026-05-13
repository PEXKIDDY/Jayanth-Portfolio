import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    external?: string;
    dateAdded?: string;
    isLogo?: boolean;
    status?: string;
}

const ProjectCard = ({ title, description, image, tags, github, external, dateAdded, isLogo, status }: ProjectProps) => {
    const isNew = dateAdded ? (new Date().getTime() - new Date(dateAdded).getTime()) / (1000 * 3600 * 24) <= 7 : false;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden group border border-glass-border hover:border-zinc-700 transition-colors"
        >
            <div className="relative h-64 overflow-hidden">
                {isNew && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                        New
                    </div>
                )}
                {status && (
                    <div className="absolute top-4 left-4 bg-[#FF4500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                        {status}
                    </div>
                )}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full ${isLogo ? 'object-contain p-4 bg-zinc-900/50' : 'object-cover grayscale group-hover:grayscale-0'} group-hover:scale-105 transition-all duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 gap-4">
                    {github && <a href={github} className="p-2 bg-white rounded-full text-black hover:bg-zinc-200 transition-colors"><Github size={20} /></a>}
                    {external && <a href={external} className="p-2 bg-white rounded-full text-black hover:bg-zinc-200 transition-colors"><ExternalLink size={20} /></a>}
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">
                    {external || github ? (
                        <a href={external || github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00BFFF] transition-colors">
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>
                <p className="text-secondary mb-6 whitespace-pre-line">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-glass-border bg-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
