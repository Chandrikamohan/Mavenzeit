import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import { ArrowRight, Menu, UserPlus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from './images/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (item: string) => {
    setIsMenuOpen(false);

    if (item === 'Case Studies') {
      navigate('/case-studies');
    } else if (item === 'Client Feedback') {
      navigate('/client-feedback'); // NEW
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: item.toLowerCase().replace(' ', '-') } });
      } else {
        const section = document.getElementById(item.toLowerCase().replace(' ', '-'));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-brand-border" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logoImg} alt="Vanguard Logo" className="h-[26px] w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'Benefits', 'Case Studies', 'Client Feedback'].map(item => (
            <button
              key={item}
              className="text-sm font-medium hover:text-brand-muted transition-colors"
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-8 py-4 bg-white border border-brand-border rounded-full font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">
            CLient Onboarding
            <ArrowRight size={18} />
          </button>
          <button
            className="md:hidden p-2 hover:bg-black/5 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand-border p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {['Services', 'Work', 'Benefits', 'Pricing', 'FAQs', 'Case Studies', 'Client Feedback'].map(item => (
              <button
                key={item}
                className="text-lg font-medium text-left"
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </button>
            ))}
            <button className="w-full py-4 bg-black text-white rounded-xl font-medium mt-2">
              Client Onboarding
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;