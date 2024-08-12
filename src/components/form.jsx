import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Formulario() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('description', description);

    // Agregar cada opción individualmente al FormData
    selectedOptions.forEach((option, index) => {
      formData.append(`options[${index}]`, option);
    });

    try {
      const response = await axios.post('https://corita1-production.up.railway.app/upload', formData, {
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
    <div className="contenedor1">
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

        <Form.Group className="mb-3">
          <Form.Label>Opciones de Edición</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              label="Ajuste de calidez."
              value="Ajuste de calidez"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Aumento de saturación."
              value="Aumento de saturación"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Reducción de ruido."
              value="Reducción de ruido"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Eliminación de imperfecciones."
              value="Eliminación de imperfecciones"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Ajuste de contraste."
              value="Ajuste de contraste"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Mejora de nitidez."
              value="Mejora de nitidez"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Restauración de fotos."
              value="Restauración de fotos"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Cambio de fondo."
              value="Cambio de fondo"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Aplicación de filtro vintage."
              value="Aplicación de filtro vintage"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Corrección de exposición."
              value="Corrección de exposición"
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="Eliminar elementos no deseados."
              value="Eliminar elementos no deseados"
              onChange={handleCheckboxChange}
            />
          </div>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ingresa una descripción detallada de la edición que deseas."
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

export default Formulario;
