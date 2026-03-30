import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Folder,
  Layout,
  Zap,
  Clock,
  RotateCcw,
  ShieldCheck,
  Star,
  Mail,
  Phone,
  Plus,
  Minus,
  Menu,
  X,
  LayoutDashboard,
  TrendingUp,
  SearchCheck
} from 'lucide-react';
import { cn } from './lib/utils';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import CaseStudies from './CaseStudies';
import ClientFeedback from './ClientFeedback';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import images
import fullServiceImg from './images/Full-Service-Management.png';
import advertisingImg from './images/Amazon-Advertising.png';
import strategyImg from './images/Strategy-Consulting.png';

import { useNavigate } from 'react-router-dom';
import FullServiceManagement from './FullServiceManagement';
import logoImg from './images/footer_logo.jpg';
import AmazonAdvertising from './AmazonAdvertising';
import StrategyConsulting from './StrategyConsulting';


// import Hero from './Hero';
// import Services from './Services';
// import Benefits from './Benefits';
// import Work from './Work';
// import Pricing from './Pricing';
// import FAQ from './FAQ';
// import Contact from './Contact';
// import Footer from './Footer';

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Available for Projects
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            World-Class <br /> Design Partner <br /> For AI Startups
          </h1>
          <p className="text-xl text-brand-muted max-w-md mb-10 leading-relaxed">
            Premium design subscriptions for high-growth AI companies. We ship elite-level UI/UX
            at startup speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform group">
              View Pricing
              <Zap size={18} className="fill-white group-hover:animate-bounce" />
            </button>
            <button className="px-8 py-4 bg-white border border-brand-border rounded-full font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">
              Book a Call
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-medium text-brand-muted mt-1">
                Trusted by 100+ AI startups worldwide
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 h-[600px]"
        >
          <div className="space-y-4">
            <div className="h-[60%] bg-zinc-200 rounded-3xl overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/design1/800/1000"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Design"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium text-sm">Mobile App Design</span>
              </div>
            </div>
            <div className="h-[35%] bg-zinc-800 rounded-3xl overflow-hidden group">
              <img
                src="https://picsum.photos/seed/design2/800/600"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                alt="Design"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-[35%] bg-zinc-300 rounded-3xl overflow-hidden group">
              <img
                src="https://picsum.photos/seed/design3/800/600"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Design"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[60%] bg-zinc-100 rounded-3xl overflow-hidden group relative">
              <img
                src="https://picsum.photos/seed/design4/800/1000"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Design"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                New Case Study
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Continue similarly for Services, Benefits, Work, Pricing, FAQ, Contact, Footer ---
const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "1.	Full-Service Management",
      path: "/full-service-management",
      desc: "Growth and scale management, including operations and advertising ",
      tags: ["1. Ignite Your Business Growth", "2. Tailored Holistic Solutions", "3.	Maximize Your ROI", "4.	Collaborative Account Management", "5.	Transparent and Confident Delegation", "6.	Full Funnel Advertising Strategy"],
      icon: <LayoutDashboard className="text-zinc-400" />,
      img: fullServiceImg
    },
    {
      title: "2.	Amazon Advertising",
      path: "/amazon-advertising",
      desc: "Grow your business with a full-funnel Amazon search advertising strategy ",
      tags: ["1. Looking for Inspiration", " 2. Product/Brand Awareness ", " 3. Improving Purchase Intent", " 4. Finding Information ", " 5. Driving Purchase "],
      icon: <TrendingUp className="text-zinc-400" />,
      img: advertisingImg
    },
    {
      title: "3.	Strategy & Consulting",
      path: "/strategy-consulting",
      desc: "Work with experienced strategists to guide your business growth",
      tags: ["1. Product Launch", " 2. Product Market Fit ", " 3. Profitable Scaling ", " 4. Advertising Structure and Strategy ", " 5. Creative Strategy ", " 6. Global Launch Strategy "],
      icon: <SearchCheck className="text-zinc-400" />,
      img: strategyImg
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Services
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">What We Do.</h2>
          </div>
          <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
            We combine strategy, speed, and skill to deliver exceptional design — every time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              onClick={() => navigate(s.path)}
              className="bg-brand-bg rounded-[40px] p-8 flex flex-col h-full border border-brand-border group cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-brand-muted mb-8 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tags.map(t => (
                  <span key={t} className="px-3 py-1 bg-white border border-brand-border rounded-full text-[10px] font-bold uppercase text-brand-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto rounded-3xl overflow-hidden h-48">
                <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={s.title} referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Predictable Pricing", desc: "Simple pricing structure that gives you unlimited design.", icon: <Mail size={20} /> },
    { title: "Fast Turnarounds", desc: "Quick and reliable results to keep your business moving forward.", icon: <Clock size={20} /> },
    { title: "Unlimited Requests", desc: "We'll handle them one by one — or two at a time with the Pro plan.", icon: <RotateCcw size={20} /> },
    { title: "Design Portal", desc: "Manage tasks, revisions, and updates inside a clean, organized dashboard.", icon: <Layout size={20} /> },
    { title: "Top-Tier Quality", desc: "Built with care by a team that treats your brand like their own.", icon: <ShieldCheck size={20} /> },
    { title: "Problem Solving", desc: "We solve your brand challenges with innovative solutions.", icon: <Zap size={20} /> },
  ];

  return (
    <section id="benefits" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Benefits
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Our Benefits.</h2>
          </div>
          <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
            Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
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

const Work = () => {
  const projects = [
    { img: "https://picsum.photos/seed/work1/1200/800", title: "AI Dashboard", category: "UI/UX Design" },
    { img: "https://picsum.photos/seed/work2/1200/800", title: "Brand Identity", category: "Branding" },
    { img: "https://picsum.photos/seed/work3/1200/800", title: "E-commerce App", category: "Mobile Design" },
    { img: "https://picsum.photos/seed/work4/1200/800", title: "SaaS Platform", category: "Web Design" },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Work
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected Work.</h2>
          </div>
          <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
            A look at some of the brands we've helped — and the outcomes we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-brand-bg mb-6">
                <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={p.title} referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center justify-between px-4">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="text-brand-muted font-medium">{p.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Design Retainer",
      price: "$4,995",
      period: "/mo",
      desc: "Great for founders who need fast, reliable design help.",
      features: ["Unlimited requests", "One request at a time", "Fixed monthly rate", "Async communication", "Flexible scope", "Pause anytime"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro Retainer",
      price: "$7,995",
      period: "/mo",
      desc: "For scaling teams that need double the design output.",
      features: ["Unlimited requests", "Two requests at a time", "Priority support", "Weekly sync calls", "Design system management", "Pause anytime"],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Single Project",
      price: "$9,995",
      period: "start",
      desc: "Bring your dream website to life in just days, not months.",
      features: ["Dedicated team of experts", "End-to-End Web Development", "Fully Custom Timeline & Scope", "Async communication", "Advanced SEO & Marketing", "Updates every 48 hours"],
      cta: "Get in touch",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Pricing
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Flexible Pricing.</h2>
          </div>
          <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
            Pick your plan and start designing today. One flat fee. Unlimited design. Zero stress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={cn(
              "rounded-[40px] p-10 flex flex-col h-full border relative",
              p.popular ? "bg-black text-white border-black shadow-2xl scale-105 z-10" : "bg-white text-black border-brand-border"
            )}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold tracking-tighter">{p.price}</span>
                  <span className={cn("text-lg font-medium", p.popular ? "text-zinc-400" : "text-brand-muted")}>{p.period}</span>
                </div>
                <p className={cn("leading-relaxed", p.popular ? "text-zinc-400" : "text-brand-muted")}>{p.desc}</p>
              </div>

              <div className="space-y-4 mb-12">
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", p.popular ? "bg-zinc-800" : "bg-brand-bg")}>
                      <Check size={12} className={p.popular ? "text-white" : "text-black"} />
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-full font-bold transition-all",
                p.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-black/80"
              )}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How does the subscription model work?", a: "You pay a fixed monthly fee and get access to a dedicated design team. Submit unlimited requests, and we'll work through them one by one. No hourly billing, no contracts — cancel anytime." },
    { q: "What kind of design tasks can I request?", a: "Everything from brand identity and UI/UX design to social media graphics, pitch decks, and custom illustrations. We cover the full spectrum of digital design." },
    { q: "How fast will I receive my designs?", a: "Most requests are delivered in 2-3 business days. More complex projects like full website redesigns or mobile apps are broken down into smaller milestones." },
    { q: "What tools do you use to manage the work?", a: "We primarily use Figma for design and Trello or Notion for project management. Communication happens asynchronously via Slack or our dedicated design portal." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 px-6 bg-white">
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

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <div>
          <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            Contact
          </div>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none flex items-center gap-6">
            <img src={logoImg} alt="Vanguard Logo" className="h-[100px] w-auto object-contain rounded-xl shadow-sm" />
            Let's Talk.
          </h3>
          <p className="text-xl text-brand-muted mb-12 max-w-sm leading-relaxed">
            Got questions or ready to start your design project? Let's bring your ideas to life!
          </p>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-brand-border flex items-center gap-6 group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Chat to sales</p>
                <p className="text-xl font-bold">hello@vanguard.com</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-brand-border flex items-center gap-6 group cursor-pointer hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Call us</p>
                <p className="text-xl font-bold">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-[48px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your name*</label>
                <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email*</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Website</label>
              <input type="text" placeholder="www.example.com" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Pricing model</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="py-4 border border-zinc-800 rounded-2xl text-sm font-bold hover:bg-white hover:text-black transition-all">Design Retainer</button>
                <button type="button" className="py-4 border border-zinc-800 rounded-2xl text-sm font-bold hover:bg-white hover:text-black transition-all">Single Project</button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors resize-none" />
            </div>
            <button className="w-full py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-transform">
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 px-6 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-24">
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-brand-muted mb-6 max-w-xs">Join our newsletter and stay updated on the latest trends in digital design.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="flex-1 bg-brand-bg border border-brand-border rounded-full px-6 py-3 focus:outline-none focus:border-black" />
              <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-6">Navigation</h4>
            <ul className="space-y-4 font-medium">
              {['Services', 'Benefits', 'Work', 'Pricing', 'Reviews', 'FAQs'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-brand-muted transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-6">Resources</h4>
            <ul className="space-y-4 font-medium">
              {['All Projects', 'Privacy Policy', 'Terms of Service', '404 Page'].map(item => (
                <li key={item}><a href="#" className="hover:text-brand-muted transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-6">Socials</h4>
            <ul className="space-y-4 font-medium">
              {['X/Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map(item => (
                <li key={item}><a href="#" className="hover:text-brand-muted transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[15vw] font-bold tracking-tighter leading-none text-black select-none">VANGUARD</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-brand-border text-sm font-medium text-brand-muted">
          <p>© 2026 Vanguard Studio. Designed by AI.</p>
          <p>Built with Vanguard</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
// --- HomePage Component ---
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}

// --- Main App ---

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/client-feedback" element={<ClientFeedback />} />
        <Route path="/full-service-management" element={<FullServiceManagement />} />
        <Route path="/amazon-advertising" element={<AmazonAdvertising />} />
        <Route path="/strategy-consulting" element={<StrategyConsulting />} />
      </Routes>
    </Router>
  );
}