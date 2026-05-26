import { langues, interets } from "../data/data"

export default function Langues() {
  return (
    <section id="langues" style={{ padding: "5rem 1.5rem", background: "#0a1628" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Communication
          </p>
          <h2 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "8px 0" }}>
            Langues & Interets
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}>

          {/* LANGUES */}
          <div>
            <h3 style={{
              color: "#60a5fa", fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: 16, borderBottom: "2px solid #2563eb", paddingBottom: 8,
            }}>Langues</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {langues.map(l => (
                <div key={l.lang} style={{
                  background: "#1e293b", borderRadius: 12,
                  padding: "16px 20px", border: "1px solid #334155",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>{l.lang}</span>
                    <span style={{ color: l.color, fontSize: 13, fontWeight: 600 }}>{l.level}</span>
                  </div>
                  <div style={{ background: "#0f172a", borderRadius: 99, height: 8 }}>
                    <div style={{ width: `${l.pct}%`, height: "100%", background: l.color, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERETS */}
          <div>
            <h3 style={{
              color: "#ef4444", fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: 16, borderBottom: "2px solid #ef4444", paddingBottom: 8,
            }}>Centres d'Interet</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {interets.map(({ label, icon }) => (
                <span key={label} style={{
                  background: "#1e293b", border: "1px solid #334155",
                  color: "#94a3b8", borderRadius: 24,
                  padding: "9px 16px", fontSize: 13,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  {icon} {label}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: 20, background: "#1e3a5f",
              borderRadius: 12, padding: "16px 20px",
              border: "1px solid #2563eb",
            }}>
              <p style={{ color: "#60a5fa", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
                Objectif Professionnel
              </p>
              <p style={{ color: "#bfdbfe", fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                Devenir un developpeur Full Stack specialise dans les technologies modernes, le cloud et l'IA, en contribuant a des solutions numeriques innovantes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}