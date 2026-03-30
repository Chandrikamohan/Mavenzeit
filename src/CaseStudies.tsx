import { motion } from 'motion/react';
import { Folder, Layout, Zap, ArrowDown, ArrowUp, TimerIcon, Trophy, Dumbbell, Utensils, Gamepad2, Shirt, ShoppingBasket, TrendingUp, TrendingDown } from 'lucide-react';

const CaseStudies = () => {
  const CaseStudies = [
    {
      title: "Sports",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Elevate your identity: sharp positioning, cohesive visuals, real impact.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <Trophy size={20} />,
    },
    {
      title: "Fitness",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Refresh or rebrand your UI: hit retention with clear flows and micro-interactions.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <Dumbbell size={20} />,
    },
    {
      title: "Utensils",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Launch a revenue-driving site that captures qualified leads 24/7 — shipped in 14 days or less.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <Utensils size={20} />,
    },
    {
      title: "Kids Toys",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Launch a revenue-driving site that captures qualified leads 24/7 — shipped in 14 days or less.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <Gamepad2 size={20} />,
    },
    {
      title: "Fashion",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Launch a revenue-driving site that captures qualified leads 24/7 — shipped in 14 days or less.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <Shirt size={20} />,
    },
    {
      title: "Groceries",
      challenge: "Poor organic ranking due to unoptimized listings",
      solution: "Launch a revenue-driving site that captures qualified leads 24/7 — shipped in 14 days or less.",
      benf1: "ACOS Reduced",
      perc1: "45% - 18%",
      benf2: "Sales Increased",
      perc2: "65%",
      benf3: "Timeline",
      perc3: "90 Days",
      icon: <ShoppingBasket size={20} />,
    }
  ];

  return (
    <section id="CaseStudies" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Case Studies
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Success Stories</h2>
          </div>
          <p className="max-w-sm text-brand-muted text-lg leading-relaxed">
            Real results from real brands — see how we've helped 6 businesses scale across Amazon, Otto, Bol.com & more
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CaseStudies.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-bg rounded-[40px] p-8 flex flex-col h-full border border-brand-border group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p><b class="redCol">CHALLENGE</b></p>
              <p className="text-brand-muted mb-8 leading-relaxed">{s.challenge}</p>
              <p><b class="greenCol">SOLUTION</b></p>
              <p className="text-brand-muted mb-8 leading-relaxed">{s.solution}</p>
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-muted">{s.benf1}</span>
                  <div className="flex items-center gap-1 font-bold">
                    <TrendingDown size={14} />
                    <span>{s.perc1}</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-brand-muted">{s.benf2}</span>
                  <div className="flex items-center gap-1 font-bold">
                    <TrendingUp size={14} />
                    <span>{s.perc2}</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-brand-border">
                  <span className="text-sm font-medium text-brand-muted">{s.benf3}</span>
                  <div className="flex items-center gap-1 font-bold">
                    <TimerIcon size={14} />
                    <span>{s.perc3}</span>
                  </div>
                </div>
                ...
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CaseStudies;