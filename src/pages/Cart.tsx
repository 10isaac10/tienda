import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center h-screen px-4">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-8 border border-white/10">
            <ShoppingBag size={40} className="text-white/20" />
          </div>
          <h1 className="text-5xl mb-4">Carrito Vacío</h1>
          <p className="text-white/40 mb-10 leading-relaxed">
            Parece que aún no has seleccionado el equipamiento para tu próxima victoria.
          </p>
          <Link to="/catalog" className="bg-brand text-pitch px-8 py-4 font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Empezar a Comprar <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-16">Tu <br /> <span className="text-stroke">Selección</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-white/10"
              >
                <div className="w-full sm:w-40 aspect-square bg-white/5 flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl mb-1">{item.name}</h3>
                      <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Category: {item.category}</p>
                    </div>
                    <p className="text-2xl font-display">${item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-3 hover:text-brand transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-3 hover:text-brand transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/30 hover:text-red-500 transition-colors flex items-center gap-2 uppercase text-[10px] font-bold tracking-widest"
                    >
                      <Trash2 size={14} /> Eliminar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 p-8 border border-white/10">
              <h4 className="text-2xl mb-8">Resumen</h4>
              
              <div className="space-y-4 mb-8 text-sm text-white/60">
                <div className="flex justify-between">
                  <span>Productos ({totalItems})</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="text-brand">GRATIS</span>
                </div>
                <div className="flex justify-between">
                  <span>Impuestos</span>
                  <span>Calculados en checkout</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mb-10 flex justify-between items-end">
                <span className="text-sm font-bold uppercase tracking-widest">Total</span>
                <span className="text-4xl font-display text-brand">${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-brand text-pitch py-6 font-bold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                Proceder al Pago <ArrowRight size={18} />
              </button>
              
              <div className="mt-8 space-y-4">
                 <div className="flex items-center gap-3 text-xs text-white/40">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                   Pago 100% Seguro
                 </div>
                 <div className="flex items-center gap-3 text-xs text-white/40">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                   Envío Express Global
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
