import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import estudiantesData from "./estudiantes.json"; // Asegúrate de importar el JSON
import "bootstrap/dist/css/bootstrap.min.css";

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    // Cargar los datos al montar el componente
    setEstudiantes(estudiantesData);
  }, []);

  const toggleStatus = (matricula) => {
    setEstudiantes((prevEstudiantes) =>
      prevEstudiantes.map((est) =>
        est.matricula === matricula
          ? { ...est, status: est.status === "active" ? "Inactive" : "active" }
          : est
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Estudiantes</h2>

      {/* Botón para regresar a Carreras */}
      <button className="btn btn-outline-primary mb-3" onClick={() => navigate("/carreras")}>
        Volver al Inicio
      </button>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Matrícula</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Lugar de Nacimiento</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes
            .sort((a, b) => (a.status === "Inactive" ? -1 : 1))
            .map((est) => (
              <tr key={est.matricula} className={est.status === "Inactive" ? "table-danger" : ""}>
                <td>{est.matricula}</td>
                <td>{est.name}</td>
                <td>{est.age}</td>
                <td>{est.birthplace}</td>
                <td>{est.status}</td>
                <td>
                  <button
                    className={est.status === "Inactive" ? "btn btn-success" : "btn btn-danger"}
                    onClick={() => toggleStatus(est.matricula)}
                  >
                    {est.status === "Inactive" ? "Activar" : "Desactivar"}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estudiantes;
