import React, { useEffect, useState } from 'react';
import Formulario from './components/form';
import Fotos from './components/Fotos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './assets/logo-corita1.png';

import Cuerpo from './cuerpo.jsx';

function App() {
    const [developerMode, setDeveloperMode] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setDeveloperMode(window.location.hash === '#developer');
        };

        // Add hash change event listener
        window.addEventListener('hashchange', handleHashChange);

        // Check the hash on component mount
        handleHashChange();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div>
            <Navbar expand="lg" className="glass sticky-top">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <img src={logo} alt="Imagen superior" className="logo" />
                        <span className="title">Corita</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="text-white me-auto">
                            <Nav.Link href="#formulario" className="subs"></Nav.Link>
                            <Nav.Link href="#v-m" className="text-white">
                                <strong>Visión & Misión</strong>
                            </Nav.Link>
                            <Nav.Link href="#servicios" className="text-white">
                                <strong>Servicios</strong>
                            </Nav.Link>
                            <Nav.Link href="#portafolio" className="text-white">
                                <strong>Portafolio</strong>
                            </Nav.Link>
                            <Nav.Link href="#faq" className="text-white">
                                <strong>Preguntas Frecuentes</strong>
                            </Nav.Link>
                            <Nav.Link href="#formulario" className="text-white">
                                <strong>Formulario</strong>
                            </Nav.Link>
                            <Nav.Link href="#cv" className="text-white">
                                <strong>Currículum</strong>
                            </Nav.Link>
                            <Nav.Link href="#contactanos" className="text-white">
                                <strong>Contáctanos</strong>
                            </Nav.Link>
                            <Nav.Link href="#developer" className="text-primary">
                                <strong>Modo Desarrollador</strong>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {developerMode ? <Fotos /> : <Cuerpo />}
        </div>
    );
}

export default App;
