import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            q: "How do I get started with Mavenzeit's services?",
            a: "To begin, please contact us through our website or reach out to our team directly. We will schedule a strategic consultation to discuss your specific needs, growth goals, and how our specialized services can help you achieve your objectives."
        },
        {
            q: "What makes Mavenzeit's services unique?",
            a: "Our services are engineered to deliver exceptional results by combining deep industry expertise with data-driven strategies and high-end creative solutions. We focus on crafting content that not only looks premium but is also optimized for high conversion rates—leveraging our extensive experience with over one million product listings and award-winning Amazon advertising strategies."
        },
        {
            q: "How do you ensure the confidentiality of the data used in your audits?",
            a: "We prioritize data security. All data collected during our audits is kept strictly confidential and protected within our secure audit infrastructure. Only authorized personnel have access to this information to ensure your business intelligence remains private."
        },
        {
            q: "How does the Amazon DSP Management service work?",
            a: "Our Amazon DSP Management includes:\n\n• Utilizing a self-serve seat for precise campaign execution\n• Building high-intent audience segments based on your product's specific requirements\n• Launching campaigns with budgets starting as low as $1,000\n• Developing custom audience creations with granular targeting\n• Dedicated creative services for DSP advertising (billed separately from service fees)"
        },
        {
            q: "What is included in the Strategy Consulting service?",
            a: "Our Strategy Consulting service provides:\n\n• A comprehensive one-to-three month engagement package\n• Hands-on strategic guidance and tailored roadmap creation\n• Direct collaboration with your team to develop a robust sales strategy\n• Empowering your team to operate independently following the consulting period"
        },
        {
            q: "How does a well-designed product page improve sales performance?",
            a: "A professionally designed product page captures more consumer attention, clearly communicates unique product benefits, and builds the trust necessary to drive purchase decisions through optimized visuals, persuasive copy, and strategic keyword placement."
        },
        {
            q: "What is Enhanced Brand Content (EBC)?",
            a: "Enhanced Brand Content (also known as A+ Content) allows brand owners to create richer, highly detailed product descriptions. It incorporates high-quality imagery, compelling brand stories, and custom layout modules to elevate your product's visual presentation and brand identity on Amazon."
        },
        {
            q: "What are the core benefits of utilizing EBC?",
            a: "Implementing EBC significantly improves conversion rates, fosters brand loyalty, and reduces product return rates. It also enhances SEO performance and provides a distinct competitive advantage by offering an immersive and informative shopping experience."
        },
        {
            q: "What is the typical timeline for project completion?",
            a: "Project timelines vary based on the specific scope and complexity of the requirements. Generally, we provide a detailed milestone schedule during our initial consultation and are committed to delivering high-quality, professional results within a timely and efficient manner."
        },
        {
            q: "Do you provide ongoing support and optimization?",
            a: "Yes, we offer comprehensive ongoing support and optimization services to ensure your content maintains peak performance as market conditions evolve. If you have any additional questions or would like to learn more about how Mavenzeit can scale your business, please contact us. We are here to help you achieve your Amazon sales and growth goals."
        },
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
                                        <div className="p-8 pt-0 text-brand-muted leading-relaxed whitespace-pre-line">
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
