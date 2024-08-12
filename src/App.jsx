import React from 'react';
import Formulario from './components/form'; 
import Fotos from './components/Fotos'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg'; 
import img3 from './assets/img3.jpg'; 
import img4 from './assets/img4.jpg'; 
import img5 from './assets/img5.jpg'; 
import img6 from './assets/img6.png'; 
import img7 from './assets/img7.jpeg'; 
import img8 from './assets/img8.jpg'; 
import img9 from './assets/img9.jpg'; 
import img10 from './assets/img10.png'; 
import logo from './assets/logo-corita1.png'; 
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
      <Navbar expand="lg" className="glass sticky-top">
        <Container >
        <Navbar.Brand href="#formulario" className="d-flex align-items-center">
        <img src={logo} alt="Imagen superior" className="logo" />

        <span className="title">Corita</span>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="#formulario"className="subs">Formulario</Nav.Link>
              <Nav.Link href="#fotos"className="subs">Fotos</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='contenedor-banner'>
      <h1 className='banner'>Editamos <span className='spann'>pixel</span> a <span className='spann'>pixel</span></h1>
      <p className='bannerp'>En nuestra página, puedes subir tus fotos y nosotros nos encargamos de editarlas según tus preferencias. </p>
      <p className='bannerp'>Personalizamos cada imagen para que se ajuste a tu estilo y necesidades.</p>
      <Button className='boton'>
      Haz clic aquí para comenzar
        </Button>
      </div>
      <Container fluid className="contenedor2 d-flex justify-content-center align-items-center">
  <Row className="w-100">
    <Col md={6} className="d-flex justify-content-center align-items-stretch">
      <div className="minicontendor2 card1 p-3 border rounded text-center w-75 example-3">
        <div className="inner">
          <h2 className='text-center'>Misión </h2>
          <p>Nuestra misión es transformar momentos capturados en imágenes en recuerdos inolvidables. A través de nuestra plataforma de edición de fotos, nos comprometemos a ofrecer resultados excepcionales que reflejen las preferencias y visiones únicas de nuestros clientes. Queremos simplificar el proceso de edición, brindando una experiencia fluida y personalizada para que cada imagen cuente su propia historia.</p>
        </div>
      </div>
    </Col>
    <Col md={6} className="d-flex justify-content-center align-items-stretch">
      <div className="minicontendor2 card1 p-3 border rounded text-center w-75 example-3">
        <div className="inner">
          <h2 className='text-center'>Visión</h2>
          <p>Queremos ser reconocidos por nuestra calidad, creatividad y atención al detalle. Nuestra visión es establecer una comunidad donde los usuarios confíen en nosotros para realzar sus imágenes de manera profesional, manteniendo siempre una comunicación cercana y amigable. Aspiramos a ser la elección natural para aquellos que buscan transformar sus fotos en obras maestras.</p>
        </div>
      </div>
    </Col>
  </Row>
</Container>

<div className="text-section">
    <p>Transforma tus Imágenes</p>
    <div className="relative-container">
      <img src={img1} alt="Imagen superior" className="image image-top" />
      <img src={img2} alt="Imagen inferior derecha" className="image image-bottom" />
      <img src={img3} alt="Imagen superior" className="image image-top" />
      <img src={img4} alt="Imagen inferior derecha" className="image image-bottom" />

    </div>
  </div>
<div className="void" id="void">
      <div className="crop">
        <ul id="card-list" style={{ '--count': 6 }}>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Ajuste de nitidez</span>
                <span>Mejora la claridad y los detalles de la imagen, haciendo que las líneas y los bordes sean más definidos.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Efectos artísticos</span>
                <span>Aplica filtros y efectos que transforman la imagen en estilos artísticos, como pintura o boceto, para darle un toque creativo.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Corregir imperfecciones</span>
                <span>Elimina defectos visibles en la imagen, como manchas, arrugas o imperfecciones de la piel.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Mejora de la iluminación</span>
                <span>Ajusta el brillo y el contraste para mejorar la visibilidad y el impacto visual de la imagen.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Realzar colores</span>
                <span>Intensifica los colores para que sean más vivos y llamativos, mejorando la apariencia general.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Eliminar elementos</span>
                <span>Elimina objetos no deseados de la imagen, como personas, objetos o elementos distractores.</span>              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <a href="#">
                <span className="model-name">Cambiar fondo</span>
                <span>Sustituye el fondo original por uno nuevo, adaptando el entorno a las necesidades de la imagen.</span>              </a>
            </div>
          </li>
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      
      
    </div>
    <h1 className='h1-portafolio'>Portafolio</h1>
    <div className='contenedor3'>
      
        <div className="gallery">
      <div className="gallery-item">
        <img src={img5} alt="Imagen 1" className="image1 image-bottom1" />
      </div>
      <div className="gallery-item">
        <img src={img6} alt="Imagen 2" className="image1 image-bottom1" />
      </div>
      <div className="gallery-item">
        <img src={img7} alt="Imagen 3" className="image1 image-bottom1" />
      </div>
      <div className="gallery-item">
        <img src={img8} alt="Imagen 4" className="image1 image-bottom1" />
      </div>
      <div className="gallery-item">
        <img src={img9} alt="Imagen 5" className="image1 image-bottom1" />
      </div>
      <div className="gallery-item">
        <img src={img10} alt="Imagen 6" className="image1 image-bottom1" />
      </div>
  </div>

  <h1 className='h1-faq'>Preguntas Frecuentes</h1>
   </div>
    <div className='contenedor4'>
    <Accordion className='acordion' defaultActiveKey="0" flush>
      <Accordion.Item className='acordion-sub' eventKey="0">
        <Accordion.Header>¿Qué tipo de ajustes se pueden hacer en mis fotos?</Accordion.Header>
        <Accordion.Body>
        Ofrecemos una amplia gama de ajustes, desde correcciones básicas hasta cambios más creativos. Puedes solicitar corrección de color, eliminación de imperfecciones, ajuste de brillo, cambio de fondo, entre otros.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cuánto tiempo lleva el proceso de edición?</Accordion.Header>
        <Accordion.Body>
        El tiempo de edición puede variar según la complejidad de la solicitud y la cantidad de fotos. Por lo general, proporcionamos estimaciones basadas en la carga de trabajo actual.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cómo puedo enviar mis fotos para su edición?</Accordion.Header>
        <Accordion.Body>
        Puedes cargar tus fotos directamente en nuestra formulario. Asegúrate de seguir las instrucciones proporcionadas para garantizar una carga exitosa.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Cómo puedo comunicarme con el equipo de edición?</Accordion.Header>
        <Accordion.Body>
        Puedes contactarnos a través de nuestro correo o  por Whatsapp. Estamos ahí para responder tus preguntas y asegurarnos de que estés satisfecho con los resultados.        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>¿Cómo puedo seguir mis pedidos?</Accordion.Header>
        <Accordion.Body>
        Una vez que tu pedido sea enviado, recibirás un correo electrónico, donde se mantendra el seguimiento de tu pedido.
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="6">
        <Accordion.Header>¿Cuál es el método de pago?</Accordion.Header>
        <Accordion.Body>
        El método de pago se definirá en función de la edición solicitada. La cotización es bastante rápida y te proporcionaremos toda la información necesaria tan pronto como se complete.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

      <Container>
        {renderContent()}
      </Container>
    </div>
  );
}

export default App;
