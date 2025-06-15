import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const cursos = [
  {
    titulo: "Caporales",
    descripcion: "Danza energética originaria de La Paz, caracterizada por trajes coloridos, botas con cascabeles y movimientos vigorosos. Representa a los capataces negros durante la época colonial.",
    imagen: "https://elrinconboliviano.com/wp-content/uploads/2020/11/caporales-tradicional-de-bolivia_700x500.jpg",
    precio: "100 Bs por mes",
    duracion: "3 meses",
    horarios: "Lunes y Miércoles 18:00-20:00",
    requisitos: "Ropa cómoda y zapatos deportivos",
    beneficios: [
      "Mejora la coordinación y ritmo",
      "Quema hasta 500 calorías por clase",
      "Certificado al finalizar el curso"
    ]
  },
  {
    titulo: "Morenada",
    descripcion: "Elegante danza orureña que satiriza a los esclavos africanos en las minas coloniales. Se destaca por sus trajes plateados, máscaras de ébano y movimientos pausados y sincronizados.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8baIn983NApRJs17WZV8kcd_PDZg0hkCu9pKL53-NTLQOGtoku8oa4HaelOF-hY7m9BE&usqp=CAU",
    precio: "220 Bs por mes",
    duracion: "4 meses",
    horarios: "Martes y Jueves 17:00-19:00",
    requisitos: "Faldas amplias para mujeres (opcional)",
    beneficios: [
      "Desarrolla elegancia y postura",
      "Fortalece piernas y abdomen",
      "Participación en presentaciones culturales"
    ]
  },
  {
    titulo: "Tinku",
    descripcion: "Danza ritual de Potosí que simula combates ceremoniales. Con raíces en la cultura andina, combina movimientos agresivos con coreografías grupales. Los bailarines usan monteras y trajes típicos.",
    imagen: "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2025/2/11/tinkus_11.jpg?itok=h-Blq3ZN",
    precio: "200 Bs por mes",
    duracion: "3 meses",
    horarios: "Viernes 16:00-18:00 y Sábados 10:00-12:00",
    requisitos: "Protecciones para brazos y piernas (opcional)",
    beneficios: [
      "Excelente ejercicio cardiovascular",
      "Liberación de estrés",
      "Aprendizaje de cultura ancestral"
    ]
  },
  {
    titulo: "Saya Afroboliviana",
    descripcion: "Expresión cultural de la comunidad afrodescendiente en los Yungas. Combina ritmos africanos con influencias andinas en una danza llena de energía y color.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/saya-afroboliviana.jpg",
    precio: "180 Bs por mes",
    duracion: "2 meses",
    horarios: "Sábados 14:00-16:00",
    beneficios: [
      "Conocimiento de raíces africanas en Bolivia",
      "Desarrollo de coordinación rítmica",
      "Trabajo en equipo"
    ]
  }
];

function Cursos() {
  const [modalShow, setModalShow] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [imagenError, setImagenError] = useState({});

  const handleShow = (curso) => {
    setCursoSeleccionado(curso);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  const handleImageError = (index) => {
    setImagenError(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="bg-dark text-white p-4 min-vh-100">
      <div className="container">
        <h2 className="mb-4 text-center text-warning fw-bold">Nuestra Oferta de Cursos</h2>
        <p className="lead text-center mb-5">Aprende las danzas folklóricas más representativas de Bolivia con instructores certificados</p>
        
        <div className="row g-4">
          {cursos.map((curso, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <Card className="shadow h-100 border-0">
                {imagenError[index] ? (
                  <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                    <i className="fas fa-image fa-3x"></i>
                  </div>
                ) : (
                  <Card.Img 
                    variant="top" 
                    src={curso.imagen} 
                    alt={`Imagen de ${curso.titulo}`}
                    onError={() => handleImageError(index)}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center text-primary fw-bold">{curso.titulo}</Card.Title>
                  <Card.Text className="flex-grow-1">{curso.descripcion}</Card.Text>
                  <div className="d-grid">
                    <Button 
                      variant="outline-primary" 
                      onClick={() => handleShow(curso)}
                      className="mt-3"
                    >
                      Más información
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {cursoSeleccionado && (
          <Modal show={modalShow} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title className="fw-bold">{cursoSeleccionado.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={cursoSeleccionado.imagen} 
                    alt={cursoSeleccionado.titulo}
                    className="img-fluid rounded mb-3"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible'}
                  />
                  <p className="lead">{cursoSeleccionado.descripcion}</p>
                </div>
                <div className="col-md-6">
                  <h5 className="fw-bold text-primary">Detalles del curso:</h5>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Precio:</span>
                      <span className="badge bg-primary rounded-pill">{cursoSeleccionado.precio}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Duración:</span>
                      <span>{cursoSeleccionado.duracion}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Horarios:</span>
                      <span>{cursoSeleccionado.horarios}</span>
                    </li>
                    {cursoSeleccionado.requisitos && (
                      <li className="list-group-item">
                        <span>Requisitos:</span> {cursoSeleccionado.requisitos}
                      </li>
                    )}
                  </ul>
                  
                  <h5 className="fw-bold text-primary">Beneficios:</h5>
                  <ul className="list-group list-group-flush">
                    {cursoSeleccionado.beneficios.map((beneficio, i) => (
                      <li key={i} className="list-group-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary">
                <i className="fas fa-pencil-alt me-2"></i>Inscribirse
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Cursos;