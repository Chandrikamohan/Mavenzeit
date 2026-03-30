import { motion } from 'motion/react';
import { Zap, Puzzle, TrendingUp, Users, ShieldCheck, Filter } from 'lucide-react';
import fsmGif from './images/fsmGif.gif';
const FullServiceManagement = () => {
    const FullServiceManagement = [
        {
            title: "Ignite Your Business Growth",
            description: "A data-driven strategy to streamline operations, enhance assets, and optimize your catalog for maximum market reach.",
            icon: <Zap size={20} className="text-zinc-400" />,
        },
        {
            title: "Tailored Holistic Solutions",
            description: "Comprehensive strategies built to overcome bottlenecks and capitalize on market opportunities for scalable, long-term growth.",
            icon: <Puzzle size={20} className="text-zinc-400" />,
        },
        {
            title: "Maximize Your ROI",
            description: "Leveraging advanced advertising technologies to ensure every campaign delivers the highest possible return on your investment.",
            icon: <TrendingUp size={20} className="text-zinc-400" />,
        },
        {
            title: "Collaborative Account Management",
            description: "A dedicated team of experts taking a collaborative approach to manage your account and simplify complex data sets.",
            icon: <Users size={20} className="text-zinc-400" />,
        },
        {
            title: "Transparent and Confident Delegation",
            description: "Transparent processes and detailed reporting that give you the confidence to delegate your advertising with complete ease.",
            icon: <ShieldCheck size={20} className="text-zinc-400" />,
        },
        {
            title: "Full-Funnel Advertising Strategy",
            description: "A strategic approach targeting every stage of the customer journey—from initial awareness to final conversion—to drive sales.",
            icon: <Filter size={20} className="text-zinc-400" />,
        }
    ];

    return (
        <section id="FullServiceManagement" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className=" md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                            Full Service Management
                        </div>
                        <img
                            src={fsmGif}
                            alt="fsmGif"
                            width="800"
                            height="400"
                            className="  mx-auto block mb-16  hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {FullServiceManagement.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-brand-bg rounded-[40px] p-8 flex flex-col h-full border border-brand-border group"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-brand-muted mb-8 leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FullServiceManagement;