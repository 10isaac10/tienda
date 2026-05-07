import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-pitch/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand rounded-sm transform rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-black"></div>
          </div>
          <span className="text-xl font-display italic tracking-tighter uppercase whitespace-nowrap">
            ORBIT <span className="text-brand">SPORTS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Catalog", "Performance", "Lookbook", "Community"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-brand transition-colors text-white/40">
            <Search size={18} />
          </button>
          <Link to="/cart" className="flex items-center gap-2 group transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-brand">CART</span>
            <div className="relative">
              <ShoppingBag size={18} className="text-white/80 group-hover:text-brand" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand text-pitch text-[9px] font-black w-3.5 h-3.5 rounded-sm flex items-center justify-center italic">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
          <button 
            className="md:hidden hover:text-brand transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-pitch border-b border-white/10"
      >
        <div className="flex flex-col p-4 gap-4">
          {["Catalog", "Performance", "Lookbook", "Community"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-2xl font-display uppercase tracking-tighter hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
