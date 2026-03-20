import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import { supabase } from "../lib/supabaseClient.js";
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
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMensaje("");
    setError("");

    const payload = { 
      nombre: form.nombre.trim(),
      telefono: form.telefono.trim(),
      servicio: form.servicio,
      fecha: form.fecha,
      hora: form.hora,
      notas: form.notas.trim() || null,
    };

    const { error: insertError } = await supabase.from("reservas").insert([payload]);

    if (insertError) {
      setError(`No se pudo guardar la reserva: ${insertError.message}`);
      setLoading(false);
      return;
    }

    setMensaje("Reserva enviada con éxito. Te contactaremos para confirmar. Yupiiii");
    setForm({
      nombre: "",
      telefono: "",
      servicio: "cancha-natural",
      fecha: "",
      hora: "",
      notas: "",
    });
    setLoading(false);
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
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Enviando..." : "Enviar solicitud"}
              {mensaje && <p className="desc">{mensaje}</p>}
              {error && <p className="desc">{error}</p>}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Reservar;
