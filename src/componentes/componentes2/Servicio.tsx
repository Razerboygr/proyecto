import React from "react";

const Hero: React.FC = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>No puedes llevarte mas? de lo que quieres?</h1>
        <p style={styles.subtitle}>
          No te preocupes con nuestro socio de transporte te lo llevamos todos
          los muebles que quieras a tu domicilio{" "}
        </p>
        <div style={styles.buttons}>
          <button style={styles.buttonPrimary}>Servicios</button>
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7UuvRsff7lTQeGfqtYrrhy3Ehw8fsZJC8g&s"
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
