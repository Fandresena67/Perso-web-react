import { experiences } from "../data/data"

const formation = [
  {
    title: "Licence 2 en Informatique",
    school: "Universite — Antananarivo",
    period: "2024 – Present",
    matieres: ["Algorithmique", "Programmation", "Base de donnees", "Dev Web", "Reseaux", "Linux", "Genie Logiciel", "IA (bases)"],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem", background: "#0f172a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Mon parcours
          </p>
          <h2 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "8px 0" }}>
            Experience & Formation
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}>

          {/* EXPERIENCE */}
          <div>
            <h3 style={{
              color: "#60a5fa", fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: 20, borderBottom: "2px solid #2563eb", paddingBottom: 8,
            }}>
              Experience Professionnelle
            </h3>
            {experiences.map(e => (
              <div key={e.role} style={{
                position: "relative", paddingLeft: 24,
                borderLeft: "2px solid #2563eb", marginBottom: 24,
              }}>
                <div style={{
                  position: "absolute", left: -7, top: 4,
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#2563eb", border: "2px solid #0f172a",
                }} />
                <p style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16, margin: 0 }}>{e.role}</p>
                <p style={{ color: "#60a5fa", fontSize: 13, margin: "4px 0 2px" }}>{e.company}</p>
                <p style={{ color: "#475569", fontSize: 12, margin: "0 0 12px" }}>{e.period}</p>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  {e.items.map(i => (
                    <li key={i} style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FORMATION */}
          <div>
            <h3 style={{
              color: "#ef4444", fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: 20, borderBottom: "2px solid #ef4444", paddingBottom: 8,
            }}>
              Formation Academique
            </h3>
            {formation.map(f => (
              <div key={f.title} style={{
                position: "relative", paddingLeft: 24,
                borderLeft: "2px solid #ef4444", marginBottom: 24,
              }}>
                <div style={{
                  position: "absolute", left: -7, top: 4,
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#ef4444", border: "2px solid #0f172a",
                }} />
                <p style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16, margin: 0 }}>{f.title}</p>
                <p style={{ color: "#ef4444", fontSize: 13, margin: "4px 0 2px" }}>{f.school}</p>
                <p style={{ color: "#475569", fontSize: 12, margin: "0 0 14px" }}>{f.period}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {f.matieres.map(m => (
                    <span key={m} style={{
                      background: "#1e293b", color: "#94a3b8",
                      border: "1px solid #334155",
                      fontSize: 12, padding: "5px 12px", borderRadius: 20,
                    }}>{m}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* SOFT SKILLS */}
            <div style={{
              background: "#1e293b", borderRadius: 14,
              padding: 20, border: "1px solid #334155",
            }}>
              <h4 style={{
                color: "#60a5fa", fontSize: 12, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px",
              }}>
                Qualites Personnelles
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Curieux", "Autonome", "Creatif", "Organise", "Rapide", "Perseverant", "Motive", "Adaptable"].map(q => (
                  <span key={q} style={{
                    background: "#0f172a", color: "#60a5fa",
                    border: "1px solid #1e3a5f",
                    fontSize: 12, padding: "5px 12px", borderRadius: 20,
                  }}>{q}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}