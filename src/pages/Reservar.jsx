import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Reservar() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "cancha-natural",
    fecha: "",
    hora: "",
    notas: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="page">
      <Header />

      <main className="body reservar">
        <section className="sec intro">
          <h1>Reservas</h1>
          <p className="desc">
            Completa el formulario y te contactamos para confirmar disponibilidad.
          </p>
          <p className="desc">
            <Link to="/" className="link">Volver al inicio</Link>
          </p>
        </section>

        <section className="sec">
          <form className="form" onSubmit={onSubmit}>
            <div className="form-grid">
              <label>
                <span>Nombre</span>
                <input name="nombre" value={form.nombre} onChange={onChange} required />
              </label>
              <label>
                <span>Teléfono</span>
                <input name="telefono" type="tel" value={form.telefono} onChange={onChange} required />
              </label>
              <label>
                <span>Servicio</span>
                <select name="servicio" value={form.servicio} onChange={onChange}>
                  <option value="cancha-natural">Cancha natural</option>
                  <option value="cancha-artificial-1">Cancha artificial 1</option>
                  <option value="cancha-artificial-2">Cancha artificial 2</option>
                  <option value="danza">Salón de danza</option>
                  <option value="palcos-vip">Palcos VIP</option>
                </select>
              </label>
              <label>
                <span>Fecha</span>
                <input type="date" name="fecha" value={form.fecha} onChange={onChange} required />
              </label>
              <label>
                <span>Hora</span>
                <input type="time" name="hora" value={form.hora} onChange={onChange} required />
              </label>
            </div>
            <label className="notas">
              <span>Notas</span>
              <textarea name="notas" value={form.notas} onChange={onChange} rows={4} />
            </label>
            <button type="submit" className="btn">Enviar solicitud</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Reservar;
