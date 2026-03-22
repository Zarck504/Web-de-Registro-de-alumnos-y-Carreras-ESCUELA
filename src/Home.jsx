import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido a la Universidad</h1>
      <p>Explora nuestras opciones</p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/registro">
          <button className="btn btn-primary">Regístrate</button>
        </Link>
        <Link to="/carreras">
          <button className="btn btn-success">Ver Carreras</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
