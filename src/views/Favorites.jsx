import React, { useContext } from 'react';
import { PhotosContext } from '../context/MyContext';
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  // Utilizando el contexto de Photos para acceder a las fotos y la función toggleLike
  const { photos, toggleLike } = useContext(PhotosContext);

  // Filtrando fotos que tienen la propiedad 'liked' como true para mostrar solo las favoritas
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div className="Title">
      <h1>Fotos Favoritas</h1>
      <div className="gallery grid-columns-5 p-3">

        {/* Iterando sobre el array de fotos favoritas para renderizar cada foto */}
        {favoritePhotos.map((photo) => ( {/* Cada foto es un elemento de la galería con una clave única */}
          <div key={photo.id} className="gallery-item"> 
            <img src={photo.src.large} alt={photo.alt} className="gallery-image" />
            <button className="heart-button" onClick={() => toggleLike(photo.id)}> {/* Botón para alternar el estado de "like" de la foto */}
              <IconHeart filled={true} />
            </button>
          </div>
        ))}
        {favoritePhotos.length === 0 && <p>No hay fotos favoritas seleccionadas.</p>}
      </div>
    </div>
  );
};

export default Favorites;
