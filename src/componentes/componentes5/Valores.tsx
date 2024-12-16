import React from "react";

const Valores: React.FC = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Innovacion",
      descripcion: "Buscamos constantemente neuvas formas de mejorar.",
      icono: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      titulo: "Integridad",
      descripcion: "Actuamos con honestidad y transparencia.",
      icono: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      titulo: "Excelencia",
      descripcion: "Nos esforzmos por la calidad en todo lo que hacemos.",
      icono: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      titulo: "Colaboracion",
      descripcion: "Trabajamos juntos para alcanzar objetivos comunes.",
      icono: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Nuestros Valores
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          flexWrap: "wrap",
          backgroundColor: "#eaecee ",
        }}
      >
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            style={{
              width: "300px",
              textAlign: "center",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "silver",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              {servicio.titulo}
            </h3>
            <p style={{ fontSize: "1rem", color: "#666" }}>
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Valores;
