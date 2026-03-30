import { motion } from 'motion/react';
import { Rocket, Target, TrendingUp, LayoutDashboard, Palette, Globe } from 'lucide-react';
import fsmGif from './images/Strategy and Consulting.gif';
const StrategyConsulting = () => {
  const StrategyConsulting = [
    {
      title: "Product Launch",
      description: "Master the complexities of launching on Amazon with our end-to-end guidance and strategic support.",
      icon: <Rocket size={20} className="text-zinc-400" />,
    },
    {
      title: "Product Market Fit",
      description: "Identify and target the ideal market segments to ensure your product resonates with your core audience.",
      icon: <Target size={20} className="text-zinc-400" />,
    },
    {
      title: "Profitable Scaling",
      description: "Scale your operations sustainably with strategies designed to maximize profitability and mitigate risk.",
      icon: <TrendingUp size={20} className="text-zinc-400" />,
    },
    {
      title: "Advertising Structure and Strategy",
      description: "Optimize your campaign architecture to increase visibility and drive efficient, long-term sales.",
      icon: <LayoutDashboard size={20} className="text-zinc-400" />,
    },
    {
      title: "Creative Strategy",
      description: "Craft compelling brand narratives and visuals that captivate your audience and elevate your brand's presence.",
      icon: <Palette size={20} className="text-zinc-400" />,
    },
    {
      title: "Global Launch Strategy",
      description: "Expand into international marketplaces with a data-driven strategy for global growth and brand recognition.",
      icon: <Globe size={20} className="text-zinc-400" />,
    }
  ];

  return (
    <section id="StrategyConsulting" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className=" md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Strategy and Consulting
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
          {StrategyConsulting.map((s, i) => (
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


export default StrategyConsulting;