import React from "react";

const Vision: React.FC = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Nuestra Mision",
      descripcion: "Es que estes encantando con tu compra",
    },
    {
      id: 2,
      titulo: "Nuestra Vision",
      descripcion: "Es tener un cliente satisfecho y que tenga un lindo dia",
    },
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          flexWrap: "wrap",
          background: "#d5d8dc ",
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
              backgroundColor: "#eaecee  ",
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

export default Vision;
