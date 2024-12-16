import React from "react";

const Galeria: React.FC = () => {
  const imagenes = [
    "https://www.mueblesgaleriasanmiguel.com/wp-content/uploads/2024/08/MUEBLES-GALERIA-SAN-MIGUEL-SALAS-SILLAS-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwTBltZpV96LuhBUnLPyS1SWppS9ZMt4dSg&s",
    "https://img.freepik.com/fotos-premium/pared-galeria-monocromatica-color-negro-gris-oscuro-muebles-carteles-plantas-espacio-interior-color-plano-cinco-marcos-pared_872147-24414.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBu-Hqsb56yotcVTqVa_nynovfp_4IZGbTw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYT_uM6TDEYQ9UKY-Lgmhns3MblGi_nfntg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qjut2w5wJWOA1sSjtiJxBbz3YAfUyBdxBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0cqiOIFaz2rLGA9yaDIXrpx_zhe_93Otnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBQZ5UBCulTQKLgbmXsDx58VEOoxmTJ1w7A&s",
    "https://castormya.co/cdn/shop/collections/SALAS_345x345_crop_center.jpg?v=1713385857",
    "https://castormya.co/cdn/shop/files/GET-THE-LOOK-1_750x562_crop_center.jpg?v=1713387429",
    "https://decomuebles.pe/cdn/shop/files/juegodesala.jpg?v=1698717877",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGloY9_3bejN3en93E5ULLhMt0AaTuuquqw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxEJa-nGziRmP6YFMIZoKzRNv3MUe8ygzpw&s",
    "https://dbhg6mekyuoi1.cloudfront.net/images/upload/77337/card/66576d171adb08.23820099.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyJG4Q2VKF0rcvJ357EXpbSJhIvTLThji3Q&s",
    "https://dcdn.mitiendanube.com/stores/854/520/products/whatsapp-image-2021-04-30-at-18-30-14-51-56bec2543a426e676316204088989309-1024-1024.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cMWttJ7vQonRNAT27LY6U14LXk-u49NIzw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmAlhsrVjoHjmY2jkvLSEeJ1lPWvgO5EFFw&s",
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Galería
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={imagen}
              alt={`Galería ${index + 1}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
