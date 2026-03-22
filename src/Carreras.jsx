import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaLaptopCode, FaChartLine, FaTools, FaBuilding, FaIndustry, FaHeartbeat, FaRoad,
  FaRobot, FaWrench, FaTshirt, FaUserNurse, FaUserMd, FaFileInvoiceDollar, FaTree
} from "react-icons/fa";

const carreras = [
  { nombre: "ING. en Tecnologías de la Información e Innovación Digital", descripcion: "Diseño, desarrollo y mantenimiento de software.", icono: <FaLaptopCode />, clase: "tecnologia" },
  { nombre: "LIC. en Negocios y Mercadotecnia", descripcion: "Estrategias comerciales, ventas y posicionamiento de marcas.", icono: <FaChartLine />, clase: "negocios" },
  { nombre: "ING. en Mantenimiento Industrial", descripcion: "Mantenimiento y optimización de equipos industriales.", icono: <FaTools />, clase: "mantenimiento" },
  { nombre: "LIC. en Administración", descripcion: "Gestión y dirección de organizaciones empresariales.", icono: <FaBuilding />, clase: "administracion" },
  { nombre: "ING. Industrial", descripcion: "Optimización de procesos industriales y logísticos.", icono: <FaIndustry />, clase: "industrial" },
  { nombre: "LIC. en Terapia Física", descripcion: "Rehabilitación y tratamiento de lesiones físicas.", icono: <FaHeartbeat />, clase: "terapia" },
  { nombre: "ING. Civil", descripcion: "Diseño y construcción de infraestructura y obras civiles.", icono: <FaRoad />, clase: "civil" },
  { nombre: "ING. Mecatrónica", descripcion: "Integración de sistemas mecánicos y electrónicos.", icono: <FaRobot />, clase: "mecatronica" },
  { nombre: "ING. Mecánica", descripcion: "Diseño y mantenimiento de maquinaria y sistemas mecánicos.", icono: <FaWrench />, clase: "mecanica" },
  { nombre: "ING. en Diseño Textil y Moda", descripcion: "Diseño, confección y producción de moda.", icono: <FaTshirt />, clase: "textil" },
  { nombre: "LIC. en Enfermería", descripcion: "Atención médica y cuidado de pacientes.", icono: <FaUserNurse />, clase: "enfermeria" },
  { nombre: "ING. Médico Cirujano y Partero", descripcion: "Formación médica y práctica quirúrgica.", icono: <FaUserMd />, clase: "medico" },
  { nombre: "LIC. en Contaduría", descripcion: "Gestión y auditoría financiera.", icono: <FaFileInvoiceDollar />, clase: "contaduria" },
  { nombre: "ING. en Manejo de Recursos Naturales", descripcion: "Gestión ambiental y desarrollo sostenible.", icono: <FaTree />, clase: "recursos" }
];

const Carreras = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const [busqueda, setBusqueda] = useState("");

  const carrerasFiltradas = carreras.filter((carrera) =>
    carrera.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Header */}
      <header className="header d-flex justify-content-between align-items-center">
        <img src="/logo.jpg" alt="Logo Universidad" className="logo" />
        <nav>
  <button className="btn btn-outline-primary mx-1" onClick={() => navigate("/")}>
    Inicio
  </button>
  <button className="btn btn-outline-primary mx-1">Oferta Educativa</button>
  <button className="btn btn-outline-primary mx-1">Direcciones</button>
  <button className="btn btn-outline-primary mx-1">Acerca de</button>
  <button className="btn btn-outline-primary mx-1" onClick={() => navigate("/Estudiantes")}>
    Estudiantes
  </button>
</nav>

        <input
          className="form-control w-25"
          type="text"
          placeholder="Buscar carrera..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </header>

      {/* Tarjetas */}
      <div className="row mt-4">
        {carrerasFiltradas.map((carrera, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card p-3 shadow-lg ${carrera.clase}`}>
              <div className="card-img-top text-center" style={{ fontSize: "3rem" }}>
                {carrera.icono}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{carrera.nombre}</h5>
                <p className="card-text">{carrera.descripcion}</p>
                <button className="btn btn-primary">Explorar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carreras;
