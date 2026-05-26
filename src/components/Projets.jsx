import { projects } from "../data/data"

export default function Projets() {
  return (
    <section id="projets" style={{ padding: "5rem 1.5rem", background: "#0a1628" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Ce que j'ai construit
          </p>
          <h2 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "8px 0" }}>
            Projets Realises
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}>
          {projects.map(p => (
            <div key={p.title}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              style={{
                background: "#1e293b", borderRadius: 16,
                overflow: "hidden", border: "1px solid #334155",
                transition: "transform 0.25s",
              }}>
              <div style={{ height: 6, background: p.color }} />
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", margin: 0 }}>{p.title}</h3>
                  <span style={{
                    background: "#0f172a", color: "#60a5fa",
                    fontSize: 11, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap",
                  }}>{p.year}</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      background: "#0f172a", color: "#60a5fa",
                      border: "1px solid #1e3a5f",
                      fontSize: 11, padding: "3px 10px", borderRadius: 20,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}