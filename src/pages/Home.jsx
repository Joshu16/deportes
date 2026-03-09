import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import img1 from "../assets/imagenes/img.jpeg";
import img2 from "../assets/imagenes/img2.jpeg";
import img3 from "../assets/imagenes/img3.jpeg";
import img4 from "../assets/imagenes/img4.jpeg";
import img5 from "../assets/imagenes/img5.jpeg";
import img6 from "../assets/imagenes/img6.jpeg";
import img7 from "../assets/imagenes/img7.jpeg";
import img8 from "../assets/imagenes/img8.jpeg";
import img9 from "../assets/imagenes/img9.jpeg";
import img10 from "../assets/imagenes/img10.jpeg";
import img11 from "../assets/imagenes/img11.jpeg";
import img12 from "../assets/imagenes/img12.jpeg";
import img13 from "../assets/imagenes/img13.jpeg";
import img14 from "../assets/imagenes/img14.jpeg";
import img15 from "../assets/imagenes/img15.jpeg";
import img16 from "../assets/imagenes/img16.jpeg";
import img17 from "../assets/imagenes/img17.jpeg";
import img18 from "../assets/imagenes/img18.jpeg";

function Home() {
  return (
    <div className="page">
      <Header />

      <main className="body">
        <section className="hero" style={{ backgroundImage: `url(${img1})` }}>
          <div className="overlay" />
          <div className="hero-caja">
            <h1>Mejores Instalaciones deportivas en Belén</h1>
            <p>Canchas, salón de baile y poll dance  y palcos VIP hasta para los pobres.</p>
            <Link to="/reservar" className="btn">Reservar</Link>
          </div>
        </section>

        <section className="sec intro">
          <h2>Canchas de fútbol</h2>
          <p className="desc">
            Contamos con las mejores canchas naturales y artificial, para realizar los mejores torneos en belen.
          </p>
        </section>

        <section className="sec natural">
          <h2>Categoría natural</h2>
          <p className="desc">
            Cancha natural, estas canchas tienen mantenimiento profesional por si pasa algo.
          </p>
          <div className="tarjeta tarjeta-wide">
            <div className="tarjeta-img">
              <img src={img7} alt="Cancha natural" />
            </div>
            <div className="tarjeta-txt">
              <h3>Cancha principal</h3>
              <p>Partidos serios y para jugar con tus amigosss.</p>
              <div className="vip">
                <h4>Palcos VIP</h4>
                <p>Zona exclusiva, servicio de soda armonia opcional.</p>
                <img src={img12} alt="Palcos VIP" className="vip-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="sec artificial">
          <h2>Categoría artificial</h2>
          <p className="desc">
            Dos canchas artificiales.
          </p>
          <div className="grid grid-2">
            <div className="tarjeta">
              <div className="tarjeta-img">
                <img src={img2} alt="Cancha artificial 1" />
              </div>
              <div className="tarjeta-txt">
                <h3>Cancha artificial 1</h3>
                <p>Perfecta para torneos y clases tiene gradería y todo.</p>
              </div>
            </div>
            <div className="tarjeta">
              <div className="tarjeta-img">
                <img src={img15} alt="Cancha artificial 2" />
              </div>
              <div className="tarjeta-txt">
                <h3>Cancha artificial 2</h3>
                <p>Mismas condiciones que la cancha 1.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec dance">
          <h2>Clases de danza</h2>
          <p className="desc">
            Telas para bailar
          </p>
          <div className="tarjeta tarjeta-wide tarjeta-rev">
            <div className="tarjeta-img">
              <img src={img18} alt="Salón de danza" />
            </div>
            <div className="tarjeta-txt">
              <h3>Salón de danza</h3>
              <p>Para que todos podamos bailar y hacer poll dance como Campe. Misma locacion de las canchas, contamos con areas de descanso que se ven en la seccion de inicio</p>
            </div>
          </div>
        </section>

        <section className="sec cta">
          <h2>¿Listo para reservar?</h2>
          <Link to="/reservar" className="btn">Ir a reservas</Link>
        </section>

        <section className="sec galeria">
          <h2>Galería</h2>
          <div className="fotos">
            <img src={img1} alt="Instalaciones" />
            <img src={img2} alt="Cancha artificial 1" />
            <img src={img3} alt="Instalaciones" />
            <img src={img4} alt="Instalaciones" />
            <img src={img5} alt="Instalaciones" />
            <img src={img6} alt="Instalaciones" />
            <img src={img7} alt="Cancha natural" />
            <img src={img8} alt="Instalaciones" />
            <img src={img9} alt="Instalaciones" />
            <img src={img10} alt="Instalaciones" />
            <img src={img11} alt="Instalaciones" />
            <img src={img12} alt="Palcos VIP" />
            <img src={img13} alt="Instalaciones" />
            <img src={img14} alt="Instalaciones" />
            <img src={img15} alt="Cancha artificial 2" />
            <img src={img16} alt="Instalaciones" />
            <img src={img17} alt="Instalaciones" />
            <img src={img18} alt="Salón de danza" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;