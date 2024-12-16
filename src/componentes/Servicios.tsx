import React from "react";

const Servicios: React.FC = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Diseño Personalizado",
      descripcion: "Creamos muebles únicos adaptados a tus necesidades.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0jnNyjkgfOMLqKEXOeb0TP1rIVmj_Gn_Dg&s",
    },
    {
      id: 2,
      titulo: "Entrega a Domicilio",
      descripcion: "Llevamos tus muebles hasta tu hogar, rápido y seguro.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CSnysCuaN7rYfA_rwiZOwYuvn9Qiqx1-vg&s",
    },
    {
      id: 3,
      titulo: "Restauración de Muebles",
      descripcion: "Devolvemos la vida a tus muebles antiguos.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj48eDNrHzQHomD1ZvwZLDMtgfM9YjqJkHvQ&s",
    },
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Nuestros Servicios
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          flexWrap: "wrap",
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
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={servicio.icono}
              alt={servicio.titulo}
              style={{ width: "100px", height: "100px", marginBottom: "1rem" }}
            />
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

export default Servicios;
