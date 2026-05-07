import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Trophy, ShieldCheck } from "lucide-react";
import { MOCK_PRODUCTS } from "../constants";

export default function Home() {
  const featured = MOCK_PRODUCTS.filter(p => p.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Athlete"
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch via-pitch/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="absolute -top-12 -left-12 z-0">
            <h1 className="text-[12vw] font-black leading-[0.8] italic uppercase tracking-tighter opacity-5 select-none pointer-events-none">
              UNSTOPPABLE<br/>FORCE
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl relative z-10"
          >
            <span className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-brand pl-4">
              NEW ARRIVALS / {new Date().getFullYear()}
            </span>
            <h2 className="text-8xl md:text-[140px] leading-[0.8] mb-10 italic">
              ORBIT <br />
              <span className="text-stroke">INFINITY</span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-12 max-w-xs leading-loose">
              Engineered with proprietary AeroMesh and 4D-printed soles for unmatched energy return.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/catalog"
                className="bg-brand text-black px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-[#c4e600] transition-colors"
              >
                Catalog Entry
              </Link>
              <button className="border border-white/10 px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                Lookbook
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-pitch border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 px-4">
            <div>
              <p className="text-[10px] font-black uppercase text-brand tracking-[0.4em] mb-4">Limited Collections</p>
              <h2 className="text-6xl md:text-8xl leading-none italic">Elite <br /> <span className="text-stroke">Hardware</span></h2>
            </div>
            <Link to="/catalog" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-brand transition-colors">
              VIEW GEAR
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {featured.map((product) => (
              <motion.div
                key={product.id}
                className="group relative bg-pitch p-12 overflow-hidden"
              >
                <div className="aspect-square mb-12 relative">
                  <div className="absolute inset-0 bg-brand/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-2xl" />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <h3 className="text-3xl mb-1 italic">{product.name}</h3>
                    <p className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-display italic block">${product.price}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-[10px] font-black uppercase text-brand tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Stats
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Recap */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand/10 border border-brand/20 flex items-center justify-center rounded-full mb-6">
              <Zap className="text-brand" size={32} />
            </div>
            <h4 className="text-2xl mb-2">Energía Reactiva</h4>
            <p className="text-white/60">Tecnología de suela que retorna el 85% de la energía de impacto.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand/10 border border-brand/20 flex items-center justify-center rounded-full mb-6">
              <Trophy className="text-brand" size={32} />
            </div>
            <h4 className="text-2xl mb-2">Grado Elite</h4>
            <p className="text-white/60">Probado por atletas olímpicos en las condiciones más extremas.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand/10 border border-brand/20 flex items-center justify-center rounded-full mb-6">
              <ShieldCheck className="text-brand" size={32} />
            </div>
            <h4 className="text-2xl mb-2">Garantía Pro</h4>
            <p className="text-white/60">Soporte técnico y garantía de durabilidad por 2 años.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
