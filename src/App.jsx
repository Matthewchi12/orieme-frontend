 export default function App() {
  return (
    <div style={{
      background: "black",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ color: "#D4AF37", fontSize: "40px" }}>
        ORIEME MATTHEW FASHION STORE
      </h1>
      <p>Your brand is now live 🚀</p>
    </div>
  )
}
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Native Agbada",
    price: 45000,
    category: "Native Wear",
    inStock: true,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"
  },
  {
    id: 2,
    name: "Designer Sneakers",
    price: 38000,
    category: "Shoes",
    inStock: true,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
  },
  {
    id: 3,
    name: "Luxury Chronograph Watch",
    price: 65000,
    category: "Accessories",
    inStock: false,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
  },
  {
    id: 4,
    name: "Classic Hoodie",
    price: 22500,
    category: "Casual Wear",
    inStock: true,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
  }
];

export default function App() {
  const [items] = useState(products);

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      
      {/* BRAND HEADER */}
      <h1 style={{ textAlign: "center", color: "#D4AF37", fontSize: "40px" }}>
        ORIEME MATTHEW FASHION STORE
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Premium Clothing • Luxury Wear • Available for Sale
      </p>

      {/* PRODUCT GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {items.map((item) => (
          <div key={item.id} style={{
            background: "#111",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #333"
          }}>
            
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "10px" }}>
              <h3>{item.name}</h3>
              <p style={{ color: "#aaa" }}>{item.category}</p>

              <h2 style={{ color: "#D4AF37" }}>
                ₦{item.price.toLocaleString()}
              </h2>

              <p style={{
                color: item.inStock ? "lime" : "red",
                fontWeight: "bold"
              }}>
                {item.inStock ? "Available for Sale" : "Out of Stock"}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
