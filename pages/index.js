import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.7)", padding: "50px", borderRadius: "10px" }}>
          <h1 style={{ fontSize: "50px", letterSpacing: "2px" }}>
            CONSULTING PLANESA
          </h1>
          <p style={{ color: "#d4af37", fontSize: "20px" }}>
            Elite Football Representation
          </p>
          <p>No representamos jugadores, construimos carreras</p>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{ textAlign: "center", padding: "40px", background: "#111" }}>
        <img src="/aeaf.png" style={{ height: "40px", margin: "20px" }} />
        <img src="/fifa.png" style={{ height: "40px", margin: "20px" }} />
        <img src="/rfef.png" style={{ height: "40px", margin: "20px" }} />
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
        <h2>Sobre Nosotros</h2>
        <p>
          Más de 33 años de experiencia en representación de futbolistas.
          Cerca de 1000 jugadores han confiado en la agencia a lo largo de su trayectoria.
        </p>
        <p>
          Servicio exclusivo y personalizado para cada jugador,
          cubriendo tanto el ámbito deportivo como el financiero y personal.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ padding: "60px", background: "#111" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
          
          <div style={{ textAlign: "center" }}>
            <img src="/pedro-bravo.jpg" style={{ width: "200px", borderRadius: "10px" }} />
            <h3>Pedro Bravo Jiménez</h3>
            <p style={{ color: "#aaa" }}>Presidente AEAF</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src="/mauro-bravo.jpg" style={{ width: "200px", borderRadius: "10px" }} />
            <h3>Mauro Bravo Fernández</h3>
            <p style={{ color: "#aaa" }}>Agente</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
        <h2>Servicios</h2>
        <ul>
          <li>Representación nacional e internacional</li>
          <li>Negociación de contratos</li>
          <li>Planificación de carrera</li>
          <li>Asesoramiento financiero</li>
          <li>Gestión de imagen</li>
        </ul>
      </section>

      {/* PLAYERS */}
      <section style={{ padding: "60px", background: "#111" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Trayectoria</h2>
          <p>
            Han pasado por la agencia jugadores como Sergio Ramos, Higuaín,
            Pablo Aimar, Roberto Carlos, Jonathan Viera, Pedro León, Diego Capel,
            entre otros.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Contacto</h2>
        <p>Email: contacto@consultingplanesa.com</p>
        <p>Teléfono: +34 XXX XXX XXX</p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #222" }}>
        <p>© Consulting Planesa S.L</p>
      </footer>

    </div>
  );
}
