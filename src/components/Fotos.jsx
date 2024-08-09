import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fotos() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Obtener las imágenes del backend cuando el componente se monte
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error al obtener las imágenes', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Fotos</h1>
      <div>
        {images.length === 0 ? (
          <p>No hay imágenes para mostrar.</p>
        ) : (
          images.map((user, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Teléfono: {user.phone}</p>
              <p>Descripción: {user.description}</p>
              <img
                src={`data:image/jpeg;base64,${user.image}`} // Asegúrate de que el tipo de imagen sea el correcto
                alt={`Imagen de ${user.name}`}
                style={{ maxWidth: '500px', maxHeight: '500px' }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Fotos;
