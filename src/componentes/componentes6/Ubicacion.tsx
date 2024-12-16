import React from "react";

const Ubicacion: React.FC = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Como Contactarse o llegar?</h1>
        <p style={styles.subtitle}>Visitanos en nuestra sucursal</p>
        <div style={styles.buttons}>
          <button style={styles.buttonPrimary}>Ir a la Ubicacion</button>
        </div>
      </div>
      <img
        src="https://www.umsa.bo/documents/20142/0/dir+%28Copiar%29.jpg/65ca4e7b-f864-2cfd-5019-86032c57be38?t=1611859688285"
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

export default Ubicacion;
