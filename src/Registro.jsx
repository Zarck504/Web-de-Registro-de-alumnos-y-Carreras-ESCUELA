import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registro exitoso");
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" name="nombre" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo Electrónico:</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} required />
        </div>

        {/* Contenedor de botones alineados en fila */}
        <div className="d-flex gap-2 mt-3">
          <button type="submit" className="btn btn-primary">Registrarse</button>
          <Link to="/">
            <button className="btn btn-secondary">Volver al Inicio</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registro;
