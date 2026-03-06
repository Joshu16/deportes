import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const initialForm = {
  nombre: "",
  telefono: "",
  servicio: "cancha-natural",
  fecha: "",
  hora: "",
  notas: "",
};

function Reservar() {
  const [form, setForm] = useState(initialForm);
  const [enviado, setEnviado] = useState(false);

  const resumen = useMemo(() => {
    const parts = [];
    if (form.servicio) parts.push(`Servicio: ${form.servicio}`);
    if (form.fecha) parts.push(`Fecha: ${form.fecha}`);
    if (form.hora) parts.push(`Hora: ${form.hora}`);
    return parts.join(" · ");
  }, [form.fecha, form.hora, form.servicio]);

  function onChange(e) {
    const { name, value } = e.target;
    setEnviado(false);
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="page">
      <Header />

      <main className="body">
        <section className="section intro-section">
          <h1>Reservas</h1>
          <p className="section-desc">
            Completa el formulario y te contactamos para confirmar disponibilidad.
          </p>
          <p className="section-desc">
            <Link to="/" className="header-link">Volver al inicio</Link>
          </p>
        </section>

        <section className="section">
          <form className="service-card service-card--wide" onSubmit={onSubmit}>
            <div className="service-card__content">
              <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                <label>
                  <span>Nombre</span>
                  <input name="nombre" value={form.nombre} onChange={onChange} required />
                </label>

                <label>
                  <span>Teléfono</span>
                  <input name="telefono" value={form.telefono} onChange={onChange} required />
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

              <label style={{ display: "block", marginTop: 12 }}>
                <span>Notas</span>
                <textarea name="notas" value={form.notas} onChange={onChange} rows={4} />
              </label>

              <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
                <button type="submit" className="btn-hero">Enviar solicitud</button>
                {resumen ? <span className="section-desc">{resumen}</span> : null}
              </div>

              {enviado ? (
                <p className="section-desc" style={{ marginTop: 12 }}>
                  Listo: recibimos tu solicitud. Si quieres, también puedes escribirnos por WhatsApp con estos datos.
                </p>
              ) : null}
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Reservar;
