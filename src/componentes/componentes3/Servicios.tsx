import React from "react";

const Servicios: React.FC = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Diseño Personalizado",
      descripcion: "Creamos muebles únicos adaptados a tus necesidades.",
      icono:
        "https://www.shutterstock.com/image-vector/furniture-interior-icon-logo-design-260nw-2146191167.jpg",
    },
    {
      id: 2,
      titulo: "Entrega a Domicilio",
      descripcion: "Llevamos tus muebles hasta tu hogar, rápido y seguro.",
      icono:
        "https://st4.depositphotos.com/3573725/22627/v/450/depositphotos_226272056-stock-illustration-furniture-delivery-logo-design-template.jpg",
    },
    {
      id: 3,
      titulo: "Restauración de Muebles",
      descripcion: "Devolvemos la vida a tus muebles antiguos.",
      icono:
        "https://www.zarla.com/images/zarla-rstico-de-hoy-1x1-2400x2400-20221115-j9kx67rfx7pg9m3brx76.png?crop=1:1,smart&width=250&dpr=2",
    },
    {
      id: 4,
      titulo: "Asesoramiento de Diseño",
      descripcion: "Te ayudamos a elegir el mueble ideal para tu espacio.",
      icono:
        "https://static.vecteezy.com/system/resources/previews/007/410/276/non_2x/furniture-logo-design-vector.jpg",
    },
    {
      id: 5,
      titulo: "Instalación Profesional",
      descripcion: "Instalamos tus muebles con máxima precisión.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7UuvRsff7lTQeGfqtYrrhy3Ehw8fsZJC8g&s",
    },
    {
      id: 6,
      titulo: "Reparaciones",
      descripcion: "Reparamos muebles dañados para que queden como nuevos.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uS6lGWAr0zC1fzrgeLbwZRyV-e8MrSEATg&s",
    },
    {
      id: 7,
      titulo: "Venta de Accesorios",
      descripcion: "Ofrecemos accesorios que complementan tus muebles.",
      icono:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebpei2O38DKjPrxiwN26oVaYzliT8h9Q2Fw&s",
    },
    {
      id: 8,
      titulo: "Garantía Extendida",
      descripcion: "Protección adicional para tus compras.",
      icono:
        "https://www.costco.com.mx/medias/sys_master/products/hc7/hba/46493885825054.jpg",
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
