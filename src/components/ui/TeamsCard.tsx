import { motion } from "framer-motion";
import type { TeamsType } from "../../types/teams";

export default function TeamsCard({
    name,
    role,
    image,
    socials
}: TeamsType) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
            className="glass-effect rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            <div className="flex flex-col items-start">
                <div className=" rounded-lg text-zetech-primary">
                    <img src={image} alt={name} className="w-full h-fit object-cover" />
                </div>
                <div className="bg-linear-to-r from-[#040850] to-[#044F9D] rounded-b-2xl px-6 py-4 w-full">
                    <h3 className="text-xl font-bold text-white leading-tight">
                        {name}
                    </h3>
                    <span className="text-xs font-bold text-gray-200 uppercase tracking-wide">
                        {role}
                    </span>
                    <div>
                        {socials.linkedin && (
                            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zetech-primary hover:text-zetech-primary/80 transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" rx="1" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
