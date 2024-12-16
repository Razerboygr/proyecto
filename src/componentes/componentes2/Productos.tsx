import React from "react";

const Productos: React.FC = () => {
  const productos = [
    {
      id: 1,
      nombre: "Sofá Moderno",
      descripcion: "Sofá cómodo y elegante para cualquier espacio.",
      precio: "$350",
      imagen:
        "https://image.made-in-china.com/2f0j00yfpcdWkCEEuF/Contemporary-Channel-Modular-Sofa-Set-Furniture-Modern-Living-Room-Sectional-White-3-Seater-Boucle-Curved-Sofa.jpg",
    },
    {
      id: 2,
      nombre: "Mesa de Comedor",
      descripcion: "Mesa de madera para 6 personas.",
      precio: "$450",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDk4xpQDr_f47V_Tc1mEFma1yDb193ZpFyBw&s",
    },
    {
      id: 3,
      nombre: "Silla de Oficina",
      descripcion: "Ergonómica y ajustable para largas jornadas.",
      precio: "$120",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4XBYsvbxAx1G9WiXbMOrwKKEVEwv93y-kQ&s",
    },
    {
      id: 4,
      nombre: "Silla de Madera",
      descripcion: "organica para disfrutar paisajes y comodidad",
      precio: "$570",
      imagen:
        "https://mobel.store/cdn/shop/files/Mobel.Store_silla-de-comedor-madera-macizo-roble-Victoria-NS23SL2_1.jpg?v=1716541869&width=1000",
    },
    {
      id: 5,
      nombre: "Mesa Moderna",
      descripcion: "Mesa para compartir con familiares",
      precio: "$220",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3DdMkCkITNhDBhNeyUgAG1N3B8eQhLkukw&s",
    },
    {
      id: 6,
      nombre: "Muebleria",
      descripcion: "Muebles Mas muebles!",
      precio: "$$$",
      imagen:
        "https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/3:2/w_1685,h_1123,c_limit/renovar-los-muebles-sala.jpg",
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
