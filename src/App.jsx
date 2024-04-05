//Imports
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import './app.css';

//Import Context
import { PhotosProvider } from "./context/MyContext";

const App = () => {
  return (
    
    <PhotosProvider> {/*Envolviendo la App con componente Provider para generar estado global compartido*/}

      <div>
        <Navbar />

        <Routes> {/*Definiendo rutas para la navegación*/}

          <Route path="/" element={<Home />} /> {/*Ruta para la página "Home"*/}

          <Route path="/favoritos" element={<Favorites />} /> {/*Ruta para la página "Favorites"*/}

        </Routes>

      </div>

    </PhotosProvider>
    
  );
};

export default App;


