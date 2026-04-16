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
import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, backgroundColor: "#0a0a0a", color: "white" }}>
      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.75)", padding: "50px", borderRadius: "12px" }}>
          <h1 style={{ fontSize: "52px", marginBottom: "10px", letterSpacing: "2px" }}>
            CONSULTING PLANESA
          </h1>
          <p style={{ fontSize: "22px", color: "#d4af37" }}>
            Elite Football Representation
          </p>
          <p style={{ marginTop: "20px", maxWidth: "600px" }}>
            No representamos jugadores, construimos carreras
          </p>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{ padding: "40px", textAlign: "center", background: "#111" }}>
        <img src="/aeaf.png" style={{ height: "40px", margin: "0 20px" }} />
        <img src="/fifa.png" style={{ height: "40px", margin: "0 20px" }} />
        <img src="/rfea.png" style={{ height: "40px", margin: "0 20px" }} />
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Sobre Nosotros</h2>
        <p style={{ lineHeight: "1.6" }}>
          Más de 33 años de experiencia en representación de futbolistas. Cerca de 1000 jugadores han pasado por la agencia, construyendo una reputación basada en la confianza, discreción y resultados.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ padding: "80px 20px", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img src="/pedro-bravo.jpg" style={{ width: "200px", borderRadius: "12px", marginBottom: "20px" }} />
            <h3>Pedro Bravo Jiménez</h3>
            <p style={{ color: "#aaa" }}>Presidente AEAF</p>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            <img src="/mauro-bravo.jpg" style={{ width: "200px", borderRadius: "12px", marginBottom: "20px" }} />
            <h3>Mauro Bravo Fernández</h3>
            <p style={{ color: "#aaa" }}>Agente</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Servicios</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>Representación nacional e internacional</li>
          <li>Negociación de contratos</li>
          <li>Planificación de carrera</li>
          <li>Asesoramiento financiero</li>
          <li>Gestión de imagen</li>
        </ul>
      </section>

      {/* PLAYERS */}
      <section style={{ padding: "80px 20px", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2>Trayectoria</h2>
          <p style={{ color: "#ccc" }}>
            Jugadores históricos: Sergio Ramos, Higuaín, Pablo Aimar, Roberto Carlos, Jonathan Viera, Pedro León, Diego Capel, entre otros.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: "40px", textAlign: "center", borderTop: "1px solid #222" }}>
        <p>© Consulting Planesa S.L</p>
      </section>
    </div>
  );
}
