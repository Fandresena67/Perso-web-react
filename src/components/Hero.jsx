import { useEffect, useState } from "react"
import { contacts } from "../data/data"

export default function Hero({ scrollTo }) {
  const [mobile, setMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768)
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [])

  return (
    <section id="accueil" style={{
      minHeight: "92vh",
      display: "flex", alignItems: "center",
      background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 55%,#0f172a 100%)",
      padding: mobile ? "3rem 1.2rem" : "4rem 2rem",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? "2.5rem" : "4rem",
        alignItems: "center",
      }}>

        {/* TEXTE */}
        <div style={{ order: mobile ? 2 : 1 }}>
          <p style={{
            color: "#60a5fa", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            marginBottom: 12,
          }}>
              Étudiant en Informatique | Passionné par le Développement Web | Intéressé par l'IA et les Technologies Cloud
          </p>

          <h1 style={{
            fontSize: mobile ? 38 : 58,
            fontWeight: 900, lineHeight: 1.1,
            margin: "0 0 14px",
          }}>
            <span style={{ color: "#ef4444" }}>Fa</span>
            <span style={{ color: "#f1f5f9" }}>ndresena</span>
            <br />
            <span style={{ color: "#94a3b8", fontSize: mobile ? 26 : 40 }}>NATOLOJANAHARY</span>
          </h1>

          <p style={{
            color: "#94a3b8", fontSize: mobile ? 15 : 17,
            lineHeight: 1.8, margin: "0 0 28px",
          }}>
                Étudiant en L2 Informatique, passionné par la programmation et les nouvelles technologies. J'apprends le développement web avec HTML, CSS, JavaScript, React, Node.js et PHP, ainsi que la gestion des bases de données avec MySQL et PostgreSQL. Je réalise des projets personnels pour renforcer mes compétences et développer mon expérience pratique.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <button onClick={() => scrollTo("projets")} style={{
              background: "#2563eb", color: "#fff",
              border: "none", borderRadius: 10,
              padding: "13px 26px", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>
              Voir mes projets →
            </button>
            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent", color: "#60a5fa",
              border: "2px solid #2563eb", borderRadius: 10,
              padding: "13px 26px", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>
              Me contacter
            </button>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {[["React.js","#61dafb"],["Node.js","#68a063"],["Linux","#fbbf24"],["Python","#3b82f6"],["MySQL","#f97316"]].map(([t,c]) => (
              <span key={t} style={{
                background: "#1e293b", color: c,
                border: `1px solid ${c}44`,
                borderRadius: 20, padding: "4px 12px",
                fontSize: 12, fontWeight: 700,
              }}>{t}</span>
            ))}
          </div>

          {/* CONTACTS DIRECTS */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {contacts.map(c => (
              <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer"
                title={c.action}
                style={{
                  background: "#1e293b", border: `1px solid ${c.color}44`,
                  borderRadius: 10, padding: "8px 14px",
                  fontSize: 13, color: c.color,
                  textDecoration: "none", fontWeight: 600,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                {c.icon} {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* PHOTO */}
        <div style={{
          order: mobile ? 1 : 2,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 16,
        }}>

          {/* CERCLE PHOTO */}
          <div style={{
            width: mobile ? 200 : 260,
            height: mobile ? 200 : 260,
            borderRadius: "50%",
            border: "4px solid #ef4444",
            background: "#1e293b",
            overflow: "hidden",
            boxShadow: "0 0 0 8px rgba(30,58,95,0.5)",
            flexShrink: 0,
          }}>
            <img
              src="/faaa.jpg"
              alt="Fandresena Natolo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* INFO CARTE */}
          <div style={{
            background: "#1e293b", border: "1px solid #334155",
            borderRadius: 12, padding: "14px 20px",
            textAlign: "center", width: "100%", maxWidth: 240,
          }}>
            <p style={{ color: "#60a5fa", fontSize: 13, margin: "0 0 4px", fontWeight: 600 }}>
              📍 Fianarantsoa, Madagascar
            </p>
            <p style={{ color: "#94a3b8", fontSize: 12, margin: "4px 0" }}>
              Licence 2 Informatique
            </p>
            <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>
              2024 – Present
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}