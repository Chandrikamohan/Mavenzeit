import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        { q: "How does the subscription model work?", a: "You pay a fixed monthly fee and get access to a dedicated design team. Submit unlimited requests, and we'll work through them one by one. No hourly billing, no contracts — cancel anytime." },
        { q: "What kind of design tasks can I request?", a: "Everything from brand identity and UI/UX design to social media graphics, pitch decks, and custom illustrations. We cover the full spectrum of digital design." },
        { q: "How fast will I receive my designs?", a: "Most requests are delivered in 2-3 business days. More complex projects like full website redesigns or mobile apps are broken down into smaller milestones." },
        { q: "What tools do you use to manage the work?", a: "We primarily use Figma for design and Trello or Notion for project management. Communication happens asynchronously via Slack or our dedicated design portal." },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faqs" className="py-24 px-6 bg-white pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        FAQs
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Questions.</h2>
                    <p className="text-brand-muted text-lg">Everything you need to know about our design subscription service.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-brand-border rounded-3xl overflow-hidden">
                            <button
                                className="w-full p-8 flex items-center justify-between text-left hover:bg-brand-bg transition-colors"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span className="text-xl font-bold">{f.q}</span>
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-brand-muted leading-relaxed">
                                            {f.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
