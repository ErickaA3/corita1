import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fotos() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Obtener las imágenes del backend cuando el componente se monte
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://corita1-production.up.railway.app/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error al obtener las imágenes', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      
      <div className='contenedor3'>
            <h1 className='title'>Fotos Registradas:</h1>
            {images.length === 0 ? (
                <p>No hay imágenes para mostrar.</p>
            ) : (
                images.map((user, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2 className='spann'>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Teléfono: {user.phone}</p>
                        <p>Descripción: {user.description}</p>
                        <p>Opciones de edición: {user.options.join(', ')}</p>
                        <img
                            src={`data:image/jpeg;base64,${user.image}`}
                            alt={`Imagen de ${user.name}`}
                            style={{ maxWidth: '500px', maxHeight: '500px' }}
                        />
                        <p>
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = `data:image/jpeg;base64,${user.image}`;
                                link.download = `${user.name}.jpeg`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="boton"
                           
                        >
                            Descargar
                        </button>
                        </p>
                    </div>
                ))
            )}
        </div>
    </div>
  );
}

export default Fotos;
