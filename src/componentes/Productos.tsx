import React from "react";

const Productos: React.FC = () => {
  const productos = [
    {
      id: 1,
      nombre: "Sofá Moderno",
      descripcion: "Sofá cómodo y elegante para cualquier espacio.",
      precio: "$350",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYumuFB08rHiHJAedxsCugIRsk7kn8BlC_Fg&s",
    },
    {
      id: 2,
      nombre: "Mesa de Comedor",
      descripcion: "Mesa de madera para 6 personas.",
      precio: "$450",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3toeeZo4syiCumbdgsMUSco3D82BbbwGdCg&s",
    },
    {
      id: 3,
      nombre: "Silla de Oficina",
      descripcion: "Ergonómica y ajustable para largas jornadas.",
      precio: "$120",
      imagen:
        "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/05/06/15887993260388.jpg",
    },
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Productos Destacados
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                {producto.nombre}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "0.5rem",
                }}
              >
                {producto.descripcion}
              </p>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {producto.precio}
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
