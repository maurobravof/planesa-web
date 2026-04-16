import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: "40px", borderRadius: "10px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>CONSULTING PLANESA S.L</h1>
          <p style={{ fontSize: "20px" }}>No representamos jugadores, construimos carreras</p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Sobre Nosotros</h2>
        <p>
          Más de 33 años de experiencia en representación de futbolistas. Cerca de 1000 jugadores han confiado en nosotros a lo largo de nuestra trayectoria.
        </p>
        <p>
          Actualmente gestionamos un grupo exclusivo de 15 jugadores, ofreciendo un servicio personalizado y profesional.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ background: "#f5f5f5", padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Equipo</h2>
          <p><strong>Pedro Bravo Jiménez</strong> – Presidente AEAF y agente principal</p>
          <p><strong>Mauro Bravo Fernández</strong> – Agente</p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>Servicios</h2>
        <ul>
          <li>Representación nacional e internacional</li>
          <li>Negociación de contratos</li>
          <li>Planificación de carrera</li>
          <li>Asesoramiento financiero</li>
          <li>Apoyo integral al jugador</li>
        </ul>
      </section>

      {/* VALUES */}
      <section style={{ background: "black", color: "white", padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Valores</h2>
          <ul>
            <li>Confianza</li>
            <li>Discreción</li>
            <li>Experiencia</li>
            <li>Red internacional</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <p>© Consulting Planesa S.L</p>
      </section>
    </div>
  );
}
