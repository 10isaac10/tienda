import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingBag, ArrowLeft, Heart, Share2, Info, CheckCircle2 } from "lucide-react";
import { MOCK_PRODUCTS } from "../constants";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-4xl">Producto No Encontrado</h1>
        <button onClick={() => navigate("/catalog")} className="mt-8 text-brand font-bold uppercase tracking-widest">
          Volver al Catálogo
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-12 uppercase tracking-widest text-xs font-bold"
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-[4/5] bg-white/5 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-3 gap-6 opacity-40">
             {[1, 2, 3].map(i => (
               <div key={i} className="aspect-square bg-white/5" />
             ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-10">
            <span className="text-brand font-black uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-2 border-brand pl-4">
              PERFORMANCE GEAR / {product.category}
            </span>
            <h1 className="text-6xl md:text-9xl leading-[0.8] mb-8 italic">{product.name}</h1>
            <p className="text-5xl font-display text-white mb-10 italic">${product.price}</p>
            <p className="text-white/40 leading-loose text-xs font-bold uppercase tracking-widest max-w-lg mb-12">
              {product.description} Engineered for unyielding performance and extreme durability. tested by elite athletes under rigorous conditions.
            </p>
          </div>

          <div className="mb-12">
            <h5 className="font-black uppercase text-[10px] tracking-[0.2em] text-white/30 mb-6 flex items-center gap-2">
              SELECT SIZE <Info size={14} className="text-brand" />
            </h5>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-14 border flex items-center justify-center font-black text-xs transition-all ${
                    selectedSize === size
                    ? "bg-brand border-brand text-black"
                    : "border-white/10 hover:border-white/30 text-white/50"
                  }`}
                >
                  {size.replace("US ", "")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-brand text-black py-7 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-[#c4e600] active:scale-95 transition-all disabled:opacity-50"
              disabled={added}
            >
              {added ? (
                <> <CheckCircle2 size={18} /> GEAR SECURED </>
              ) : (
                <> <ShoppingBag size={18} /> ADD TO GEAR BAG </>
              )}
            </button>
            <button className="w-full sm:w-24 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 space-y-6">
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-bold uppercase text-xs tracking-widest group-hover:text-brand">
                Especificaciones Técnicas
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="pt-4 text-white/50 text-sm leading-relaxed">
                Nuestra tecnología Orbit-Flux™ proporciona un retorno de energía superior, mientras que la malla Aero-Knit™ asegura ventilación constante incluso en climas extremos.
              </div>
            </details>
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-bold uppercase text-xs tracking-widest group-hover:text-brand">
                Sustentabilidad
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="pt-4 text-white/50 text-sm leading-relaxed">
                Este producto está fabricado con un 45% de materiales reciclados de alta resistencia, reduciendo nuestra huella de carbono sin comprometer el rendimiento.
              </div>
            </details>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
