import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Catalogo: React.FC = () => {
  const productos = [
    {
      id: 1,
      titulo: "Sofá Moderno",
      descripcion: "Un cómodo sofá con diseño contemporáneo.",
      imagen:
        "https://www.portobellostreet.es/imagenes_muebles/Muebles-Sofa-Moderno-Exavu.jpg",
    },
    {
      id: 2,
      titulo: "Mesa de Centro",
      descripcion: "Ideal para complementar tu sala de estar.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcTGYN1EGRjFAthoP0aj5SIertIFctiX-Kg&s",
    },
    {
      id: 3,
      titulo: "Silla Vintage",
      descripcion: "Elegancia y estilo clásico para cualquier espacio.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2J7YArUdgvHmlz-hxS0Be4uIGRJe3fmpVQ&s",
    },
    {
      id: 4,
      titulo: "Estantería Minimalista",
      descripcion: "Perfecta para organizar tus libros y decoración.",
      imagen: "https://img.archiexpo.es/images_ae/photo-mg/9182-14695543.jpg",
    },
    {
      id: 5,
      titulo: "Cama King Size",
      descripcion: "El descanso perfecto con diseño moderno.",
      imagen:
        "https://cloudfront.dico.com.mx/media/catalog/product/cache/e5313a059d82e47a0dd0c73b13afb6be/r/e/recamara-moderna-cama-king-size-negro-salvatore_rad94104k1-d-f-01-w.jpg",
    },
    {
      id: 6,
      titulo: "Lámpara de Pie",
      descripcion: "Iluminación elegante para tu hogar.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8pNQrdwc6Re1mNM_FbEzjjSBRq36e6tWzg&s",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo de Mueblería</h1>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
