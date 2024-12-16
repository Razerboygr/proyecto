import React from "react";

const Galeria: React.FC = () => {
  const imagenes = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9qWV30urvXbNXIO1mQO2f3A_7RNjU6ol7g&s",
    "https://i.ytimg.com/vi/6UZ9RC7J3m8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBweaZbtinLzVC6HjY5lnbORVaOdw",
    "https://i.ytimg.com/vi/ohYvTnbJb4E/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JPrePPz6aT12ta1_1E2klyN8DAdLuW4i_w&s",
    "https://208f1686.rocketcdn.me/wp-content/uploads/2023/11/image-8.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHs3mbMpDwS-8Ttykmn4dmC_7TQqssJIXzYA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJnQEp8v2-ARPxCDnlxFFidBFfgmCafdJN9J_FfXFPQf8iN0dG8lI-VmP7iyQAOk_W8M&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwAyKYSmakN2mmp4h3rDfewiYkc1phXYdnAORzWwnsLXkqA-MXLIKNg0kBQuHZ6IjdsQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEg2lnMLd-AtTtx13UxRh5YdmZ-EUVomh6pA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUA-xSYI9VBtuwTf9tj-V8iDQVu4O4YprYA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPfGRuBVourhRo0heeCdcwuN1ZutsJV22Hg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuojBSlzl5uPzAe3JI0SKmVz7jYHRWBa6-4-SrPwZNTmOisu9OdlT-JHNchOAeljoA1ig&usqp=CAU",
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        Nuestros Socios
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
