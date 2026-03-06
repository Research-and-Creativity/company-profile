import { motion, type Variants } from 'framer-motion'
import TeamsCard from '../../components/ui/TeamsCard'
import { Teams } from '../../constants/teams'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
    },
};

export default function IndexAbout() {
    return (
        <>
            <div className='flex flex-col w-full'>
                <div className='py-28'>
                    <motion.div
                        className="container mx-auto px-6 md:px-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants} className="mb-16 ">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                ABOUT US
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                Zetech merupakan inisiatif pengembangan teknologi profesional yang
                                berada di bawah naungan
                                <span className="font-semibold text-white">
                                    {" "}
                                    Himpunan Mahasiswa Rekayasa Perangkat Lunak (HMSE){" "}
                                </span>
                                Telkom University Purwokerto. Kami berfokus pada penyediaan solusi
                                digital berkualitas tinggi guna mendukung transformasi bisnis dan
                                ekonomi kreatif.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                                Melalui kolaborasi di dalam kabinet{" "}
                                <span className="italic font-medium">Zenith</span>, kami berkomitmen
                                untuk menciptakan ekosistem IT yang inovatif, mulai dari
                                pengembangan web hingga aplikasi mobile yang ramah pengguna.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-10">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-zetech-primary/50"
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">Visi</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Menjadi mitra strategis terdepan dalam menghadirkan solusi digital inovatif yang mengakselerasi pertumbuhan bisnis dan memperkuat ekosistem ekonomi kreatif.
                                    </p>
                                </div>

                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-zetech-primary/50"
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">Misi</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Menghadirkan solusi teknologi untuk meningkatkan transformasi bisnis dan digitalisasi
                                        <br />
                                        Menyatukan inovasi digital dengan potensi ekonomi kreatif untuk menciptakan nilai tambah
                                        <br />
                                        Mengembangkan produk digital yang relevan dan menjawab tantangan pasar secara nyata
                                        <br />
                                        Membangun kemitraan strategis yang mendukung pertumbuhan bisnis secara berkelanjutan<br />
                                        <br />
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="flex justify-start lg:justify-center mt-20"
                        >
                        </motion.div>
                    </motion.div>
                </div>
                <div className='bg-white py-24'>
                    <motion.div
                        className="container mx-auto px-6 md:px-20"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants} className="mb-16 ">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-[#040850]">
                                OUR TEAM
                            </h2>

                            <div className='lg:pt-10 flex flex-wrap justify-center gap-0 gap-y-16 my-8'>
                                {Teams.map((team) => (
                                    <div
                                        key={team.id}
                                        className='w-full sm:w-[45%] lg:w-[30%] flex justify-center'
                                    >
                                        <div className="max-w-[320px] w-full">
                                            <TeamsCard {...team} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
