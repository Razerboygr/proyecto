import React from "react";

const Hero: React.FC = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Bienvenido a Mueblería Elegante</h1>
        <p style={styles.subtitle}>
          Encuentra muebles únicos para crear espacios con estilo y comodidad.
        </p>
        <div style={styles.buttons}>
          <button style={styles.buttonPrimary}>Ver Productos</button>
          <button style={styles.buttonSecondary}>Contáctanos</button>
        </div>
      </div>
      <img
        src="https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/3:2/w_1685,h_1123,c_limit/renovar-los-muebles-sala.jpg"
        alt="Muebles elegantes"
        style={styles.image}
      />
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    backgroundColor: "#f7f7f7",
  },
  textContainer: {
    maxWidth: "50%",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
  buttonPrimary: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    color: "#4CAF50",
    padding: "0.75rem 1.5rem",
    border: "2px solid #4CAF50",
    borderRadius: "5px",
    cursor: "pointer",
  },
  image: {
    width: "50%",
    height: "auto",
    borderRadius: "10px",
  },
};

export default Hero;
