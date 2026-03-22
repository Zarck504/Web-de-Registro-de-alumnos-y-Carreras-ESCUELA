import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";  // Asegúrate de tener este componente
import Carreras from "./Carreras"; 
import Registro from "./Registro";
import Estudiantes from "./Estudiantes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreras" element={<Carreras />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/estudiantes" element={<Estudiantes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
