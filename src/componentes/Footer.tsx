import React from "react";
const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "1rem 2rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p style={{ margin: "0.5rem 0" }}>
        © 2024 Mueblería XYZ. Todos los derechos reservados.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        <a href="#facebook" style={{ color: "#fff", textDecoration: "none" }}>
          Facebook
        </a>
        <a href="#instagram" style={{ color: "#fff", textDecoration: "none" }}>
          Instagram
        </a>
        <a href="#twitter" style={{ color: "#fff", textDecoration: "none" }}>
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
