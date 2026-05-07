import { Product } from "./types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Velocity Pro X",
    description: "Zapatillas de running de alto rendimiento con amortiguación reactiva y malla transpirable.",
    price: 189.99,
    category: "footwear",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["Black/Orange", "White/Cyan"],
    featured: true
  },
  {
    id: "2",
    name: "Nebula Jersey",
    description: "Camiseta técnica con tecnología de evaporación rápida y ajuste ergonómico.",
    price: 59.99,
    category: "apparel",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Neon Green", "Carbon Black"],
    featured: true
  },
  {
    id: "3",
    name: "Apex Gym Bag",
    description: "Maleta deportiva ultra resistente con compartimentos especializados para calzado y ropa húmeda.",
    price: 75.00,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
    sizes: ["OS"],
    colors: ["Slate Grey"],
    featured: false
  },
  {
    id: "4",
    name: "Titan Compression Tights",
    description: "Mallas de compresión diseñadas para recuperación muscular máxima.",
    price: 85.00,
    category: "apparel",
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600",
    sizes: ["M", "L", "XL"],
    colors: ["Midnight Blue"],
    featured: false
  }
];
