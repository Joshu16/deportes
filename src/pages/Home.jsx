import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import img1 from "../assets/imagenes/img.jpeg";
import img2 from "../assets/imagenes/img2.jpeg";

function Home() {
  return (
    <div className="page">
      <Header />

      <main className="body">
        <section className="hero-section" style={{ backgroundImage: `url(${img1})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Instalaciones deportivas en Belén</h1>
            <p>Canchas, salón de danza y palcos VIP.</p>
            <Link to="/reservar" className="btn-hero">Reservar</Link>
          </div>
        </section>

        <section className="section intro-section">
          <h2>Canchas de fútbol</h2>
          <p className="section-desc">
            Contamos con canchas de césped natural y artificial, ideales para torneos, entrenamientos y partidos amistosos.
          </p>
        </section>

        <section className="section category-section natural">
          <h2>Categoría natural</h2>
          <p className="section-desc">
            Cancha de césped natural, mantenimiento profesional y medidas reglamentarias.
          </p>
          <div className="service-card service-card--wide">
            <div className="service-card__image">
              <img src={img1} alt="Cancha natural" />
            </div>
            <div className="service-card__content">
              <h3>Cancha principal</h3>
              <p>Ideal para partidos oficiales y eventos. Iluminación y graderías disponibles.</p>
              <div className="vip-mini">
                <h4>Palcos VIP</h4>
                <p>Zona exclusiva con vista privilegiada, aire acondicionado y servicio de catering opcional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section category-section artificial">
          <h2>Categoría artificial</h2>
          <p className="section-desc">
            Dos canchas de césped sintético, listas para usar en cualquier clima.
          </p>
          <div className="services-grid two-fields">
            <div className="service-card">
              <div className="service-card__image">
                <img src={img2} alt="Cancha artificial 1" />
              </div>
              <div className="service-card__content">
                <h3>Cancha artificial 1</h3>
                <p>Uso intensivo, drenaje excelente. Perfecta para torneos y clases.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__image">
                <img src={img2} alt="Cancha artificial 2" />
              </div>
              <div className="service-card__content">
                <h3>Cancha artificial 2</h3>
                <p>Mismas condiciones que la cancha 1. Reserva doble para eventos grandes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section dance-section">
          <h2>Clases de danza</h2>
          <p className="section-desc">
            Salas acondicionadas para ballet, contemporáneo, folclore y más. Horarios flexibles.
          </p>
          <div className="service-card service-card--wide service-card--reverse">
            <div className="service-card__image service-card__image--placeholder" />
            <div className="service-card__content">
              <h3>Salón de danza</h3>
              <p>Espejos, barras y piso adecuado. Capacidad para grupos e instructores externos.</p>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <h2>¿Listo para reservar?</h2>
          <Link to="/reservar" className="btn-hero">Ir a reservas</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
