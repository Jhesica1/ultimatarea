import React, { useState } from "react";

const danzas = [
  {
    nombre: "Caporales",
    region: "La Paz",
    descripcion: "Danza creada en los años 70 inspirada en los capataces negros. Se caracteriza por saltos acrobáticos, golpes de talón y el sonido de los cascabeles en las botas. Los trajes son de colores vivos con bordados elaborados.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/caporales.jpg"
  },
  {
    nombre: "Morenada",
    region: "Oruro",
    descripcion: "Originada en el Carnaval de Oruro, satiriza el sufrimiento de los esclavos africanos en las minas. Los bailarines llevan pesadas máscaras de ébano y trajes que representan la opulencia de los patrones coloniales.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/morenada.jpg"
  },
  {
    nombre: "Tinku",
    region: "Potosí",
    descripcion: "Ritual prehispánico que significa 'encuentro'. Combina danza y lucha ceremonial para honrar a la Pachamama. Los participantes usan monteras decoradas y protecciones en las manos.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/tinku.jpg"
  },
  {
    nombre: "Cueca",
    region: "Chuquisaca",
    descripcion: "Considerada el baile nacional de Bolivia. De influencia española, representa el cortejo entre el gallo (hombre) y la gallina (mujer). Se baila con pañuelos que simbolizan las plumas.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/cueca.jpg"
  },
  {
    nombre: "Taquirari",
    region: "Santa Cruz",
    descripcion: "Ritmo alegre y movido de origen amazónico. Se baila en parejas con movimientos coquetos y giros. Los trajes son ligeros y coloridos, adaptados al clima cálido.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/taquirari.jpg"
  },
  {
    nombre: "Diablada",
    region: "Oruro",
    descripcion: "Representa la lucha entre el bien y el mal, con máscaras diabólicas de gran tamaño. Es la danza principal del Carnaval de Oruro, declarado Patrimonio de la Humanidad por la UNESCO.",
    imagen: "https://www.boliviaentusmanos.com/imagenes/fotos/diablada.jpg"
  }
];

const styles = {
  accordion: {
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Montserrat', sans-serif",
  },
  item: {
    marginBottom: "15px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
  },
  header: {
    padding: "20px",
    backgroundColor: "#2c3e50",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
    color: "white",
  },
  headerHover: {
    backgroundColor: "#1a252f",
  },
  headerText: {
    margin: 0,
    fontWeight: "600",
    fontSize: "1.2rem",
  },
  icon: {
    transition: "transform 0.3s",
    fontSize: "1.2rem",
  },
  iconOpen: {
    transform: "rotate(180deg)",
  },
  body: {
    padding: "0 20px",
    backgroundColor: "#fff",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.4s ease-out, padding 0.4s ease",
  },
  bodyOpen: {
    maxHeight: "500px",
    padding: "20px",
  },
  content: {
    margin: 0,
    lineHeight: "1.8",
    color: "#555",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  }
};

function AccordionItem({ title, region, description, image, isOpen, onClick }) {
  return (
    <div style={styles.item}>
      <div 
        style={{ 
          ...styles.header,
          ...(isOpen ? styles.headerHover : {}),
        }}
        onClick={onClick}
      >
        <h3 style={styles.headerText}>{title} - {region}</h3>
        <span style={{ 
          ...styles.icon,
          ...(isOpen ? styles.iconOpen : {})
        }}>
          ▼
        </span>
      </div>
      <div style={{ 
        ...styles.body,
        ...(isOpen ? styles.bodyOpen : {})
      }}>
        <img 
          src={image} 
          alt={`Danza ${title}`} 
          style={styles.image}
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible'}
        />
        <div style={styles.content}>
          <p>{description}</p>
          <p className="text-muted">
            <strong>Características principales:</strong> {getCaracteristicas(title)}
          </p>
        </div>
      </div>
    </div>
  );
}

function getCaracteristicas(danza) {
  const caracteristicas = {
    "Caporales": "Botas con cascabeles, saltos acrobáticos, ritmo rápido",
    "Morenada": "Máscaras de ébano, trajes plateados, movimientos pausados",
    "Tinku": "Monteras decoradas, movimientos de combate, ritual a la Pachamama",
    "Cueca": "Pañuelos al viento, pasos cortos, carácter romántico",
    "Taquirari": "Movimientos alegres, giros rápidos, influencia amazónica",
    "Diablada": "Máscaras diabólicas, trajes pesados, significado religioso"
  };
  return caracteristicas[danza] || "Danza tradicional boliviana con características únicas";
}

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-dark bg-light p-4 rounded shadow">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Danzas Tradicionales de Bolivia</h2>
        <p className="lead">Explora la riqueza cultural de Bolivia a través de sus danzas folklóricas</p>
      </div>
      
      <div style={styles.accordion}>
        {danzas.map((danza, idx) => (
          <AccordionItem
            key={idx}
            title={danza.nombre}
            region={danza.region}
            description={danza.descripcion}
            image={danza.imagen}
            isOpen={openIndex === idx}
            onClick={() => toggleItem(idx)}
          />
        ))}
      </div>
      
      <div className="mt-5 p-4 bg-primary text-white rounded">
        <h4 className="text-center mb-3">¿Quieres aprender estas danzas?</h4>
        <p className="text-center mb-0">
          Visita nuestra sección de <a href="/cursos" className="text-warning fw-bold">cursos</a> para conocer 
          nuestras opciones de enseñanza con instructores certificados.
        </p>
      </div>
    </div>
  );
}

export default Home;