import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagina5: React.FC = () => {
  const imagenes = [
    "https://bobimuebles.com/cdn/shop/files/fabricacion-de-muebles.jpg?v=1705898853&width=1500",
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nuestra Historia</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {imagenes.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {imagenes.map((imagen, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={imagen}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nuestro Fundador Tomas Edison</h5>
                <p>
                  Una gran persona que creo Muebleria Elegante para aquellos que
                  quieran o obtener muebles de gran calidad{index + 1}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina5;
