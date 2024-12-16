import React from "react";

const Equipo: React.FC = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Juan Perez",
      descripcion: "Nuestro Socio mas Grande que tenemos.",
      icono:
        "https://imagenes.elpais.com/resizer/v2/ZVGE2DFKQRBSDHQXRSJZJYO3JA.jpeg?auth=ad9ea7ad48d0391cb560aa2efe34e028db0d851fc31548c880f8442c4585434f&width=1960&height=1470&focal=1285%2C276", // Cambia esto por un ícono real o un SVG.
    },
    {
      id: 2,
      titulo: "Maria Garcia ",
      descripcion: "nuestra co-directora y co-fundadora",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20NXhETa_YmHAha5GPwVSSy_UCdnCSivERg&s",
    },
    {
      id: 3,
      titulo: "Carlos Lopez",
      descripcion: "El mejor empleado del mes ",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuy8FRusXDxd1eCH3RY2Y7I6Y_m6Z8b8j5Yg&s",
    },
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Nuestro Equipo Que nos ayuda o colabora
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

export default Equipo;
