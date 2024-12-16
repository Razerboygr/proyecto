import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Pedir en linea o una queja? ,contactanos
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <label>
          <strong>Nombre</strong>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          <strong>Email</strong>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          <strong>Mensaje</strong>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={5}
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "none",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "0.8rem",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
