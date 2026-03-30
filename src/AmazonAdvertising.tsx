import { motion } from 'motion/react';
import { Sparkles, Megaphone, Target, Search, ShoppingCart } from 'lucide-react';
import fsmGif from './images/Amazon Advertising.gif';
import adGif from './images/adGif.gif';
const AmazonAdvertising = () => {
  const AmazonAdvertising = [
    {
      title: "Looking for Inspiration",
      description: "The primary source for product and brand inspiration.",
      icon: <Sparkles size={20} className="text-zinc-400" />,
    },
    {
      title: "Product/Brand Awareness",
      description: "Strategic initiatives to increase your product or brand's visibility.",
      icon: <Megaphone size={20} className="text-zinc-400" />,
    },
    {
      title: "Improving Purchase Intent",
      description: "Targeted efforts to strengthen customer intent and purchase desire.",
      icon: <Target size={20} className="text-zinc-400" />,
    },
    {
      title: "Finding Information",
      description: "Optimization strategies to help customers easily find relevant product details.",
      icon: <Search size={20} className="text-zinc-400" />,
    },
    {
      title: "Driving Purchase",
      description: "High-conversion tactics designed to encourage and finalize the customer purchase.",
      icon: <ShoppingCart size={20} className="text-zinc-400" />,
    }
  ];
  const AmazonAdvertising1 = [
    {
      title: "Sustainable Ad Campaigns for Increased Revenue",
      description: "Understanding the importance of creating sustainable Amazon ad campaigns and increasing product revenue is at the core of our strategy. Our team specializes in Amazon advertising, holding 20+ certifications in ad campaign strategies and ad-revenue management.",
    },
    {
      title: "Collaborative Advertising Management",
      description: "Our in-house team of Account Executives takes a collaborative approach to advertising management, ensuring no opportunities are missed. We simplify data analysis with our tech and expertise, providing you with the transparency needed to confidently delegate your advertising.",
    },
    {
      title: "Utilizing Data to Unlock the Amazon Flywheel",
      description: "We utilize Amazon's API to fuel the strategies outlined in the Amazon Advertising Flywheel. This allows for quick and accurate decision-making, automating and optimizing advertising campaigns on Amazon efficiently.",
    },
    {
      title: "Deep Analytical Tech Integration",
      description: "We integrate advanced technology through our API to study product-wise distribution, identify best-performing targets, perform bulk actions on campaigns, and automate processes with human intelligence combined with machine learning for optimal results."
    },
    {
      title: "Human Decisions with Tech Efficiencies",
      description: "Your customer’s journey doesn’t end at a single ad placement. We combine tech automation and intuition to lead audiences through the full funnel, analyzing data efficiently to adjust campaigns and maximize your return.",
    }
  ];
  return (
    <section id="AmazonAdvertising" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className=" md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Amazon Advertising
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
          {AmazonAdvertising.map((s, i) => (
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

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start mt-24">
          {/* Left Side: Sticky Animation */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="">
              <img
                src={adGif}
                alt="Full Service Management Animation"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover/gif:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Scrolling Content */}
          <div className="space-y-6">
            {AmazonAdvertising1.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className=" transition-all duration-300"
              >
                <p className="text-2xl mb-3 tracking-tight mt-20">{s.title}</p>
                <p className="text-brand-muted text-lg leading-relaxed mb-20">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section >

  );
};


export default AmazonAdvertising;