import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagina4: React.FC = () => {
  const imagenes = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThy1WowYz6NaicXt2_QzXQ1vD0q2Uq7EsRA&s",
    "https://roble.store/cdn/shop/articles/NordicStory_mueble_flotante_aparador_de_pared_comoda_mueble_de_TV_madera_maciza_roble_diseno_nordico_escandinavo_moderno_13_3024x.jpg?v=1662470702",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ccv3xY_hCk5QLr8goZQq0NlBEsy4aJLQZA&s",
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"></h1>
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
                <h5>Nuestra Galeria {index + 1}</h5>
                <p>Vea nuestros mejores muebles mas vendidos! {index + 1}.</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Pagina4;
