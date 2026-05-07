/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-pitch">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>


        
        <footer className="py-20 border-t border-white/10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <h2 className="text-3xl mb-4">ORBIT SPORTS</h2>
              <p className="text-white/50 text-sm">
                Redefiniendo el performance deportivo a través del diseño y la ciencia.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="font-bold uppercase text-xs tracking-widest text-brand mb-6">Shop</h5>
                <ul className="space-y-4 text-sm text-white/70">
                  <li>Footwear</li>
                  <li>Apparel</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase text-xs tracking-widest text-brand mb-6">Support</h5>
                <ul className="space-y-4 text-sm text-white/70">
                  <li>Shipping</li>
                  <li>Returns</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase text-xs tracking-widest text-brand mb-6">Social</h5>
                <ul className="space-y-4 text-sm text-white/70">
                  <li>Instagram</li>
                  <li>X (Twitter)</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
            <p>© 2026 Orbit Sports International.</p>
            <p>Built for Performance</p>
          </div>
        </footer>
      </div>
     </CartProvider>
    </Router>
  );
}

