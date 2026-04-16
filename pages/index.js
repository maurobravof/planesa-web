import React from "react";

const players = [
  { name: "Sergio Ramos", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Sergio_Ramos_2018.jpg", info: "Campeón del Mundo · 4 Champions League" },
  { name: "Gonzalo Higuaín", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Gonzalo_Higuain_2018.jpg", info: "Goleador élite · Títulos en Italia y España" },
  { name: "Pablo Aimar", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pablo_Aimar.jpg", info: "Leyenda del Valencia CF" },
  { name: "Roberto Carlos", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Roberto_Carlos_2012.jpg", info: "3 Champions · Campeón del Mundo" },
  { name: "Jonathan Viera", img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jonathan_Viera.jpg", info: "Jugador destacado en LaLiga" },
  { name: "Pedro León", img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Pedro_Leon.jpg", info: "Experiencia en Real Madrid y LaLiga" },
  { name: "Diego Capel", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Diego_Capel.jpg", info: "Internacional España · Campeón Sub21" },

  { name: "Carlos Cuéllar", img: "https://via.placeholder.com/300", info: "Premier League · Internacional" },
  { name: "Paqui Veza", img: "https://via.placeholder.com/300", info: "Trayectoria profesional en España" },
  { name: "Valdo", img: "https://via.placeholder.com/300", info: "LaLiga · Experiencia internacional" },
  { name: "Aldo Duscher", img: "https://via.placeholder.com/300", info: "Deportivo · Argentina" },
  { name: "Toño", img: "https://via.placeholder.com/300", info: "Portero profesional en España" },
  { name: "Ruffete", img: "https://via.placeholder.com/300", info: "Valencia CF · Dirección deportiva" },
  { name: "Perico Ojeda", img: "https://via.placeholder.com/300", info: "Histórico del fútbol español" },
  { name: "Sandoval", img: "https://via.placeholder.com/300", info: "Entrenador profesional" },
  { name: "Tito", img: "https://via.placeholder.com/300", info: "Experiencia en LaLiga" },
  { name: "Ricardo", img: "https://via.placeholder.com/300", info: "Carrera profesional consolidada" },
  { name: "Abel Aguilar", img: "https://via.placeholder.com/300", info: "Internacional Colombia · Mundial" },
  { name: "Ernesto Galán", img: "https://via.placeholder.com/300", info: "Defensa profesional" },
  { name: "Xisco", img: "https://via.placeholder.com/300", info: "Newcastle · LaLiga" },
  { name: "Mantovani", img: "https://via.placeholder.com/300", info: "Capitán Leganés · LaLiga" },
  { name: "Jonás Gutiérrez", img: "https://via.placeholder.com/300", info: "Premier League · Mundial" },
  { name: "Javi Lara", img: "https://via.placeholder.com/300", info: "Trayectoria en España" },
  { name: "Timor", img: "https://via.placeholder.com/300", info: "LaLiga · Experiencia profesional" },
  { name: "José Uribe", img: "https://via.placeholder.com/300", info: "Trayectoria profesional" }
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
        <div style={{ background: "rgba(0,0,0,0.8)", padding: "50px", borderRadius: "10px" }}>
          <img src="/aeaf.png" style={{ height: "60px", marginBottom: "20px" }} />
          <h1 style={{ fontSize: "50px" }}>CONSULTING PLANESA</h1>
          <p style={{ color: "#d4af37" }}>Elite Football Representation</p>
          <p>No representamos jugadores, construimos carreras</p>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "60px", background: "#111", textAlign: "center" }}>
        <img src="/pedro-bravo.jpg" style={{ width: "260px", borderRadius: "10px" }} />
        <h3>Pedro Bravo Jiménez</h3>
        <p>Presidente AEAF</p>
      </section>

      {/* PLAYERS */}
      <section style={{ padding: "60px" }}>
        <h2 style={{ textAlign: "center" }}>Jugadores Representados</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
          {players.map((p, i) => (
            <div key={i} style={{ width: "240px", background: "#111", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
              <img src={p.img} style={{ width: "100%", borderRadius: "8px" }} />
              <h4>{p.name}</h4>
              <p style={{ color: "#aaa", fontSize: "14px" }}>{p.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Contacto</h2>
        <p>pedrobravo@planesa.info</p>
      </section>

    </div>
  );
}
