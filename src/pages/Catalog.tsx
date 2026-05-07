import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { MOCK_PRODUCTS } from "../constants";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", "footwear", "apparel", "accessories"];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <p className="text-[10px] font-black uppercase text-brand tracking-[0.4em] mb-4">Elite Inventory</p>
          <h1 className="text-6xl md:text-9xl mb-12 italic leading-[0.8]">Orbit <br /> <span className="text-stroke">Hardware</span></h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border-b-2 ${
                    selectedCategory === cat 
                    ? "border-brand text-brand" 
                    : "border-white/5 text-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80 border-b border-white/20">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" size={16} />
              <input
                type="text"
                placeholder="SEARCH GEAR..."
                className="w-full bg-transparent py-4 pl-8 pr-4 text-[10px] font-black uppercase tracking-widest focus:outline-none placeholder:text-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group bg-pitch p-8"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-0 right-0 bg-brand text-black px-2 py-1 text-[8px] font-black uppercase italic">
                      {product.category}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl italic group-hover:text-brand transition-colors uppercase tracking-tight">{product.name}</h3>
                    <div className="flex justify-between items-baseline mt-4 pt-4 border-t border-white/5">
                      <span className="text-3xl font-display italic text-white">${product.price}</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                        Stats →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-3xl text-white/20">No se encontraron productos</h2>
            <p className="text-white/40 mt-4">Intenta ajustar tus criterios de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
