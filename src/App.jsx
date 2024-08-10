import React from 'react';
import Formulario from './components/form'; 
import Fotos from './components/Fotos'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [view, setView] = React.useState(window.location.hash.replace('#', '') || 'formulario');

  React.useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash.replace('#', '') || 'formulario');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    if (view === 'formulario') {
      return <Formulario />;
    }
    if (view === 'fotos') {
      return <Fotos />;
    }
    return <Formulario />; // Página por defecto
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#formulario">Corita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#formulario">Formulario</Nav.Link>
              <Nav.Link href="#fotos">Fotos</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
