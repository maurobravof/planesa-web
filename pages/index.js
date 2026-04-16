import React from "react";

const players = [
  { name: "Sergio Ramos", img: "/placeholder.jpg", info: "Campeón del Mundo · 4 Champions League" },
  { name: "Gonzalo Higuaín", img: "/placeholder.jpg", info: "Goleador élite internacional" },
  { name: "Pablo Aimar", img: "/placeholder.jpg", info: "Leyenda del Valencia CF" },
  { name: "Roberto Carlos", img: "/placeholder.jpg", info: "3 Champions · Campeón del Mundo" },
  { name: "Jonathan Viera", img: "/placeholder.jpg", info: "Jugador destacado en LaLiga" },
  { name: "Pedro León", img: "/placeholder.jpg", info: "Experiencia en Real Madrid" },
  { name: "Diego Capel", img: "/placeholder.jpg", info: "Internacional España" },

  { name: "Carlos Cuéllar", img: "/placeholder.jpg", info: "Premier League" },
  { name: "Paqui Veza", img: "/placeholder.jpg", info: "Trayectoria profesional" },
  { name: "Valdo", img: "/placeholder.jpg", info: "LaLiga" },
  { name: "Aldo Duscher", img: "/placeholder.jpg", info: "Deportivo" },
  { name: "Toño", img: "/placeholder.jpg", info: "Portero profesional" },
  { name: "Ruffete", img: "/placeholder.jpg", info: "Valencia CF" },
  { name: "Perico Ojeda", img: "/placeholder.jpg", info: "Histórico del fútbol español" },
  { name: "Sandoval", img: "/placeholder.jpg", info: "Entrenador" },
  { name: "Tito", img: "/placeholder.jpg", info: "LaLiga" },
  { name: "Ricardo", img: "/placeholder.jpg", info: "Carrera profesional" },
  { name: "Abel Aguilar", img: "/placeholder.jpg", info: "Internacional Colombia" },
  { name: "Ernesto Galán", img: "/placeholder.jpg", info: "Defensa profesional" },
  { name: "Xisco", img: "/placeholder.jpg", info: "Newcastle" },
  { name: "Mantovani", img: "/placeholder.jpg", info: "Leganés" },
  { name: "Jonás Gutiérrez", img: "/placeholder.jpg", info: "Premier League" },
  { name: "Javi Lara", img: "/placeholder.jpg", info: "España" },
  { name: "Timor", img: "/placeholder.jpg", info: "LaLiga" },
  { name: "José Uribe", img: "/placeholder.jpg", info: "Trayectoria profesional" }
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.8)", padding: "50px" }}>
          <img src="/aeaf.png" style={{ height: "60px" }} />
          <h1>CONSULTING PLANESA</h1>
          <p style={{ color: "#d4af37" }}>Elite Football Representation</p>
          <p>No representamos jugadores, construimos carreras</p>
        </div>
      </section>

      {/* EQUIPO */}
      <section style={{ padding: "60px", background: "#111" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
          
          <div style={{ textAlign: "center" }}>
            <img src="/pedro-bravo.jpg" style={{ width: "260px", borderRadius: "10px" }} />
            <h3>Pedro Bravo Jiménez</h3>
            <p>Presidente AEAF</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img src="/mauro-bravo.jpg" style={{ width: "180px", borderRadius: "10px" }} />
            <h3>Mauro Bravo Fernández</h3>
            <p>Agente</p>
          </div>

        </div>
      </section>

      {/* JUGADORES */}
      <section style={{ padding: "60px" }}>
        <h2 style={{ textAlign: "center" }}>
          Ejemplos de jugadores y entrenadores representados
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
          {players.map((p, i) => (
            <div key={i} style={{ width: "220px", background: "#111", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
              <img src={p.img} style={{ width: "100%", borderRadius: "8px" }} />
              <h4>{p.name}</h4>
              <p style={{ color: "#aaa", fontSize: "14px" }}>{p.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Contacto</h2>
        <p>pedrobravo@planesa.info</p>
      </section>

    </div>
  );
}
