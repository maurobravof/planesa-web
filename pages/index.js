import React from "react";

const players = [
  {
    name: "Sergio Ramos",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Sergio_Ramos_2019.jpg",
    info: "Campeón del Mundo · 4 Champions League"
  },
  {
    name: "Gonzalo Higuaín",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Gonzalo_Higuain_2018.jpg",
    info: "Máximo goleador Serie A"
  },
  {
    name: "Pablo Aimar",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pablo_Aimar.jpg",
    info: "Leyenda del Valencia CF"
  },
  {
    name: "Roberto Carlos",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Roberto_Carlos_2012.jpg",
    info: "3 Champions · Campeón del Mundo"
  },
  {
    name: "Jonathan Viera",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jonathan_Viera.jpg",
    info: "Figura en LaLiga"
  },
  {
    name: "Pedro León",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Pedro_Leon.jpg",
    info: "Real Madrid · LaLiga"
  },
  {
    name: "Diego Capel",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Diego_Capel.jpg",
    info: "Internacional España"
  },

  // resto con imagen fallback elegante
  { name: "Carlos Cuéllar", img: "https://via.placeholder.com/300", info: "Premier League" },
  { name: "Valdo", img: "https://via.placeholder.com/300", info: "LaLiga" },
  { name: "Aldo Duscher", img: "https://via.placeholder.com/300", info: "Deportivo" },
  { name: "Ruffete", img: "https://via.placeholder.com/300", info: "Valencia CF" },
  { name: "Abel Aguilar", img: "https://via.placeholder.com/300", info: "Internacional Colombia" },
  { name: "Jonás Gutiérrez", img: "https://via.placeholder.com/300", info: "Premier League" },
  { name: "Mantovani", img: "https://via.placeholder.com/300", info: "Leganés" }
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.75)", padding: "50px", textAlign: "center" }}>
          <img src="/aeaf.png" style={{ height: "70px", marginBottom: "20px" }} />
          <h1 style={{ fontSize: "55px", letterSpacing: "3px" }}>
            CONSULTING PLANESA
          </h1>
          <p style={{ color: "#d4af37", fontSize: "22px" }}>
            Elite Football Representation
          </p>
        </div>
      </section>

      {/* EQUIPO */}
      <section style={{ padding: "80px", background: "#111" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
          
          <div style={{ textAlign: "center" }}>
            <img src="/pedro-bravo.jpg" style={{ width: "280px", borderRadius: "12px" }} />
            <h3>Pedro Bravo Jiménez</h3>
            <p style={{ color: "#aaa" }}>Presidente AEAF</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src="/mauro-bravo.jpg" style={{ width: "200px", borderRadius: "12px" }} />
            <h3>Mauro Bravo Fernández</h3>
            <p style={{ color: "#aaa" }}>Agente</p>
          </div>

        </div>
      </section>
{/* CV PEDRO BRAVO */}
<section style={{ padding: "80px", maxWidth: "1000px", margin: "auto" }}>
  <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
    Pedro Bravo Jiménez
  </h2>

  <p style={{ textAlign: "center", color: "#aaa", marginBottom: "40px" }}>
    Presidente de la Asociación Española de Agentes de Futbolistas (AEAF)
  </p>

  <div style={{ lineHeight: "1.8" }}>
    <h3>Trayectoria Profesional</h3>
    <ul>
      <li>Más de 33 años de experiencia en representación de futbolistas</li>
      <li>Más de 1000 jugadores gestionados a lo largo de su carrera</li>
      <li>Presidente de la AEAF (Agentes de España)</li>
      <li>Amplia red de contactos en clubes nacionales e internacionales</li>
    </ul>

    <h3>Ponencias y Conferencias</h3>
    <ul>
      <li>Ponente en congresos de agentes FIFA</li>
      <li>Participación en mesas redondas sobre regulación del fútbol</li>
      <li>Colaborador en formación de nuevos agentes</li>
      <li>Intervenciones en medios deportivos especializados</li>
    </ul>

    <h3>Especialización</h3>
    <ul>
      <li>Negociación de contratos profesionales</li>
      <li>Gestión de carrera de futbolistas</li>
      <li>Asesoramiento estratégico y financiero</li>
      <li>Relaciones institucionales en el fútbol</li>
    </ul>
  </div>
</section>
      {/* JUGADORES */}
      <section style={{ padding: "80px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Ejemplos de jugadores y entrenadores representados
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px"
        }}>
          {players.map((p, i) => (
            <div key={i} style={{
              background: "#111",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "0.3s"
            }}>
              <img src={p.img} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h4>{p.name}</h4>
                <p style={{ color: "#aaa", fontSize: "14px" }}>{p.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Contacto</h2>
        <p style={{ fontSize: "18px" }}>pedrobravo@planesa.info</p>
      </section>

    </div>
  );
}
