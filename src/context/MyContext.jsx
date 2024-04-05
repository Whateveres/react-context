// Configuración del Contexto para gestionar los estados de las fotos y su estado de "like" en un contexto global utilizando Context API.

import { createContext, useState, useEffect } from "react";
export const PhotosContext = createContext(null); // Definiendo y exportando "PhotosContext" para consumir el contexto en la aplicación

export const PhotosProvider = ({ children }) => { // Definiendo y exportando el Proveedor del Contexto para envolver los componentes de la
                                                 // aplicación y proporcionarles el estado y las funciones necesarias que necesitan
                                           
  const [photos, setPhotos] = useState([]); // Inicializando el estado de las fotos como un arreglo vacío

  useEffect(() => {  

    fetch("/photos.json") // Obteniendo los datos de las fotos desde la carpeta photos.json cuando el componente se monta
    
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo completar la solicitud");
        }
        return response.json(); // Procesando la respuesta
      })

      .then((data) => {

        // Creando el arreglo de fotos

        const initializedPhotos = data.photos.map((photo) => ({
          ...photo,
          liked: false, // Inicializando la propiedad 'liked' para cada foto
        }));


        setPhotos(initializedPhotos); // Actualizando el estado con las fotos iniciatizadas
      })
      .catch((error) => { // Capturando y registrando errores
        console.error("Problema al obtener las fotos:", error);
      });
  }, []);

  const toggleLike = (id) => { // Función para alternar el estado de 'liked' de una foto basándose en su ID
    setPhotos(
      photos.map((photo) =>
        photo.id === id ? { ...photo, liked: !photo.liked } : photo
      )
    );
  };

  return (
    <PhotosContext.Provider value={{ photos, toggleLike }}> {/*Renderizando Provider*/}
      {children}
    </PhotosContext.Provider>
  );
};
