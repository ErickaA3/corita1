import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function AForm() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Error al subir el archivo');
    }
  };

  return (
    <div class="contenedor1">
      <h1>Sube tus fotos</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingresa tu correo electrónico." 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresa tu nombre." 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Número de Teléfono</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="Ingresa tu número de teléfono." 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            placeholder="Ingresa una descripción detallada de la edicion que deseas." 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Subir Imagen</Form.Label>
          <Form.Control 
            type="file" 
            onChange={handleFileChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Subir
        </Button>
      </Form>

      {message && <p>{message}</p>}
    </div>
    
  );
}

export default AForm;
