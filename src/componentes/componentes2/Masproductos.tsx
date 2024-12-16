import React from "react";

const Galeria: React.FC = () => {
  const imagenes = [
    "https://mueblesavanti.com.mx/cdn/shop/files/1..jpg?v=1713223477&width=1500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM6P99SZkalHWcG4oteh430jaH0C22_TPdg&s",
    "https://www.superaki.mx/cdn/shop/collections/MUEBLES_1.webp?v=1692729055",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsPXHjnJREin_evADCBUKMb3xxCdyRvsjrUgASDzyLFPdUUhZh9au_DONc8XE_CJ85Yk&usqp=CAU",
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Mas Muebles a Futuro
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={imagen}
              alt={`Galería ${index + 1}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
