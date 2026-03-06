import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Reservar() {
  return (
    <div className="page">
      <Header />

      <main className="body body--reservar">
        <section className="reservar-hero">
          <h1>Reservar</h1>
          <p>Elige instalación, fecha y horario. Te confirmamos al instante.</p>
        </section>

        <section className="reservar-form-section">
          <div className="reservar-card">
            <h2>Nueva reserva</h2>

            <form className="reservar-form">
              <div className="form-group">
                <label htmlFor="instalacion">Instalación</label>
                <select id="instalacion" name="instalacion">
                  <option value="">Selecciona una opción</option>
                  <option value="natural">Cancha natural (principal)</option>
                  <option value="artificial-1">Cancha artificial 1</option>
                  <option value="artificial-2">Cancha artificial 2</option>
                  <option value="danza">Salón de danza</option>
                  <option value="vip">Palco VIP</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fecha">Fecha</label>
                  <input type="date" id="fecha" name="fecha" />
                </div>
                <div className="form-group">
                  <label htmlFor="hora">Hora</label>
                  <select id="hora" name="hora">
                    <option value="">Selecciona hora</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="duracion">Duración</label>
                <select id="duracion" name="duracion">
                  <option value="1">1 hora</option>
                  <option value="2">2 horas</option>
                  <option value="3">3 horas</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="contacto">Teléfono o correo</label>
                <input type="text" id="contacto" name="contacto" placeholder="Contacto" />
              </div>
              <div className="form-group">
                <label htmlFor="notas">Notas (opcional)</label>
                <textarea id="notas" name="notas" rows="3" placeholder="Comentarios o requisitos especiales" />
              </div>

              <button type="submit" className="btn-submit">Solicitar reserva</button>
            </form>
          </div>

          <div className="reservar-info">
            <h3>Horarios</h3>
            <p>Lunes a domingo, 8:00 – 20:00</p>
            <h3>Contacto</h3>
            <p>Complejo Educativo CIT – Belén</p>
          </div>
        </section>

        <div className="reservar-back">
          <Link to="/">← Volver al inicio</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Reservar;
