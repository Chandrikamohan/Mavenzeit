import { Clock, Layout, Mail, Quote, RotateCcw, ShieldCheck, Zap } from "lucide-react";

const ClientFeedback = () => {
    const ClientFeedback = [
        { title: "Emily Roberts – Chicago, IL", desc: "The marketing strategy helped our small business reach more customers than ever", icon: <Quote size={20} /> },
        { title: "James Turner – Austin, TX", desc: "QCampaigns were clear, effective, and really boosted our online engagement.", icon: <Quote size={20} /> },
        { title: "Sophia Martinez – Miami, FL", desc: "We saw real growth in leads after working with the marketing team.", icon: <Quote size={20} /> },
        { title: "Michael Johnson – New York, NY", desc: "MTheir creative approach made our brand stand out in a crowded market.", icon: <Quote size={20} /> },
        { title: "Olivia Smith – Los Angeles, CA", desc: "We loved how data-driven and results-focused the marketing was.", icon: <Quote size={20} /> },
        { title: "Daniel Brown – Seattle, WA", desc: "From strategy to execution, everything was smooth and impactful.", icon: <Quote size={20} /> },
    ];

    return (
        <section id="ClientFeedback" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                            Client Feedback
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Client Feedback</h2>
                    </div>
                    <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
                        Our clients’ success drives us. We deliver designs that exceed expectations — here’s what they say about working with us.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ClientFeedback.map((b, i) => (
                        <div key={i} className="bg-white rounded-[32px] p-8 border border-brand-border hover:shadow-xl transition-shadow group">
                            <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                                {b.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                            <p className="text-brand-muted leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ClientFeedback;