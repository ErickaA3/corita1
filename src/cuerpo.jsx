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
import cv from './assets/cv-ericka.jpg'; 

function Cuerpo() {
  

  return (
    <div>
      
      <div id="banner" className='contenedor-banner'>
      <h1 className='banner'>Editamos <span className='spann'>pixel</span> a <span className='spann'>pixel</span></h1>
      <p className='bannerp'>En nuestra página, puedes subir tus fotos y nosotros nos encargamos de editarlas según tus preferencias. </p>
      <p className='bannerp'>Personalizamos cada imagen para que se ajuste a tu estilo y necesidades.</p>
      <Button id="v-m" href="#formulario" className='boton'>
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

<div id="servicios" className="text-section">
      <p>Algunos de nuestros servicios</p>
      <Container>
        <Row>
          <Col>
            <img src={img1} alt="Imagen superior izquierda" className="image" />
          </Col>
          <Col>
            <img src={img2} alt="Imagen superior derecha" className="image" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={img3} alt="Imagen inferior izquierda" className="image" />
          </Col>
          <Col>
            <img src={img4} alt="Imagen inferior derecha" className="image" />
          </Col>
        </Row>
      </Container>
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
    
    <div  className='contenedor3'>
    <h1 id="portafolio" className='h1-portafolio'>Portafolio</h1>
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
  </div >
 <h1 id="faq"className='h1-faq'>Preguntas Frecuentes</h1>
 
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
        El tiempo de edición puede variar según la complejidad de la solicitud y la cantidad de fotos. Por lo general, proporcionamos estimaciones basadas en la carga de trabajo actual, con un tiempo máximo de entrega de una semana.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cómo puedo enviar mis fotos para su edición?</Accordion.Header>
        <Accordion.Body>
        Puedes cargar tus fotos directamente en nuestro formulario. Asegúrate de llenar el formulario con tus datos correctos. Si presentas alguna dificultad contáctanos por nuestro correo.
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
        Los métodos de pago disponibles son mediante transacción bancaria, SINPE Móvil o PayPal. La cotización del servicio es bastante rápida, generalmente toma entre 1 y 5 horas.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <h1 id="formulario" className='h1-form'>Llena este formulario para empezar ya!</h1>
    <div className='conteiner-form'>
    <>
  {Formulario()}
    </>
    </div>
    <Container>
    
    
      
      <h1 id='cv' className="h1-cv">
      Mi currículum
      </h1>
    

      <Row className="mb-4">
        <Col md={6} className="d-flex justify-content-center align-items-stretch">
          <div className=" card-cv p-3 border rounded text-center w-75">
            <img src={cv} alt="Cv-ericka" className="cv img-fluid" />
          </div>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-stretch">
          <div className="  card-cv p-3 border rounded text-center w-75">
            <div className="inner">
            <p>
              Permíteme compartir contigo mi pasión y mi nueva aventura. Soy Ericka, una desarrolladora web apasionada y en mis tiempos libres, una fotógrafa entusiasta. Pero aquí está la chispa que ha encendido mi corazón: he decidido fusionar estas dos pasiones en un emprendimiento único.
            </p>
           
            <p>
              Mi misión es convertir tus fotos en recuerdos inolvidables. A través de la edición fotográfica, quiero realzar cada detalle y cada emoción capturada en una imagen. No se trata solo de ajustar brillos y contrastes; es sobre dar vida a tus visiones, transformando momentos en obras maestras.
            </p>
            <h2 className="text-center">¿Qué ofrezco?</h2>
            <p>➤ Calidad excepcional.</p>
            <p>➤ Comunicación cercana.</p>
            <p>➤ Experiencia fluida.</p>
            <p>➤ Creatividad personalizada.</p>
            
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
    <footer id="contactanos" className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/share/bTuKDouWQmEfmBod/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
          <span className='span-f'>Facebook</span>
        </a>
        <a href="mailto:corita.2024.1@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className='span-e'>Email</span>
        </a>
        <a href="https://wa.me/86197688" target="_blank" rel="noopener noreferrer">
        <span className='span-w'>WhatsApp</span>
        </a>
        <a href="https://www.instagram.com/corita.uno/" target="_blank" rel="noopener noreferrer">
          <span className='span-i'>Instagram</span>
        </a>
        
      </div>
      <p className="copyright">&copy; Corita 2024</p>
    </footer>


    </div>
    

  );
}

export default Cuerpo;
