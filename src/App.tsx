import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Productos from "./componentes/Productos";
import Servicios from "./componentes/Servicios";
import Galeria from "./componentes/Galeria";
import Footer from "./componentes/Footer";
import Pagina2 from "./componentes/Pagina2";
import Pagina3 from "./componentes/Pagina3";
import Pagina4 from "./componentes/Pagina4";
import Pagina5 from "./componentes/Pagina5";
import Pagina6 from "./componentes/Pagina6";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Productos />
              <Servicios />
              <Galeria />
            </>
          }
        />
        <Route path="/Pagina2" element={<Pagina2 />} />
        <Route path="/Pagina3" element={<Pagina3 />} />
        <Route path="/Pagina4" element={<Pagina4 />} />
        <Route path="/Pagina5" element={<Pagina5 />} />
        <Route path="/Pagina6" element={<Pagina6 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
