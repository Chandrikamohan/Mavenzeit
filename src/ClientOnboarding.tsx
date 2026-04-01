import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    User,
    Mail,
    Building,
    Phone,
    MessageSquare,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    ChevronDown,
    Palette,
    TrendingUp
} from "lucide-react";
import { cn } from "./lib/utils";

const ClientOnboarding = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        category: "Marketing",
        projectDetails: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 pt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-2xl border border-brand-border text-center"
                >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Onboarding Started!</h2>
                    <p className="text-brand-muted mb-10 leading-relaxed">
                        Thank you for your trust. We've received your details and our team will be in touch within 24 hours to kick off your project.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-4 bg-black text-white rounded-full font-bold hover:bg-black/90 transition-all flex items-center justify-center gap-2 group"
                    >
                        Return Home
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-brand-bg pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={12} className="text-yellow-400" />
                            Kickoff your project
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                            Client Onboarding
                        </h1>
                        <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
                            Tell us more about your vision. We'll handle the strategy, design, and execution.
                        </p>
                    </div>

                    <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-2xl border border-brand-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bg rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                            {/* Section 01: Contact Information */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold">01</div>
                                    <h3 className="text-xl font-bold tracking-tight">Contact Information</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                                            <User size={12} /> Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-brand-bg border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all outline-none text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                                            <Mail size={12} /> Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="hello@example.com"
                                            required
                                            className="w-full bg-brand-bg border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all outline-none text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                                            <Building size={12} /> Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Brand Inc."
                                            className="w-full bg-brand-bg border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all outline-none text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                                            <Phone size={12} /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-brand-bg border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition-all outline-none text-sm font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 02: Choose Category */}
                            <div className="space-y-8 pt-6 border-t border-brand-border/10">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold">02</div>
                                    <h3 className="text-xl font-bold tracking-tight">Choose Category</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { id: 'Marketing', icon: <TrendingUp size={18} />, label: 'Marketing' },
                                        { id: 'Creatives', icon: <Palette size={18} />, label: 'Creatives' }
                                    ].map((cat) => (
                                        <button
                                            key={cat.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, category: cat.id })}
                                            className={cn(
                                                "flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left",
                                                formData.category === cat.id
                                                    ? "border-black bg-black text-white"
                                                    : "border-brand-border bg-brand-bg text-brand-muted hover:border-black/20"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                                                formData.category === cat.id ? "bg-white/10" : "bg-white"
                                            )}>
                                                {cat.icon}
                                            </div>
                                            <span className="font-bold tracking-tight">{cat.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Section 03: Project Details */}
                            <div className="space-y-8 pt-6 border-t border-brand-border/10">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold">03</div>
                                    <h3 className="text-xl font-bold tracking-tight">Project Details</h3>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-1 flex items-center gap-2">
                                        <MessageSquare size={12} /> Brief Description*
                                    </label>
                                    <textarea
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your brand goals, scope, and timeline..."
                                        required
                                        className="w-full bg-brand-bg border-none rounded-[32px] p-6 focus:ring-2 focus:ring-black transition-all outline-none text-sm font-medium resize-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="px-10 py-5 bg-black text-white rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10 group"
                                >
                                    Submit Onboarding
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-brand-muted mt-12 text-sm">
                        By submitting this form, you agree to our <a href="/privacy-policy" className="text-black font-bold hover:underline">Privacy Policy</a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientOnboarding;