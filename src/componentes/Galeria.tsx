import React from "react";

const Galeria: React.FC = () => {
  const imagenes = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM6P99SZkalHWcG4oteh430jaH0C22_TPdg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63zTyNUPFE0XIuFz1yGEowjG4OaiUo6XE4A&s",
    "https://i.pinimg.com/236x/5a/95/dc/5a95dcab1ccb0e9ae4a06352d6433ef1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqW_TAFQrGIqQ9jc8Sl7o-tn7Y9kH4RQdPQ&s",
    "https://www.dellacasaonline.com/wp-content/uploads/2023/10/Camastro-Valdivia-1-300x300.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uxMJpmrD1fz_n5UceJyZMII4DJzbrWKGAg&s",
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Galería
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
