import { useState } from "react"
import { skills } from "../data/data"

const cats = ["Tous", "Frontend", "Backend", "IA", "Outils"]

export default function Competences() {
  const [filter, setFilter] = useState("Tous")
  const filtered = filter === "Tous" ? skills : skills.filter(s => s.cat === filter)

  return (
    <section id="competences" style={{ padding: "5rem 1.5rem", background: "#0f172a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Ce que je sais faire
          </p>
          <h2 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "8px 0 20px" }}>
            Competences Techniques
          </h2>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                background: filter === c ? "#2563eb" : "#1e293b",
                color: filter === c ? "#fff" : "#94a3b8",
                border: `1px solid ${filter === c ? "#2563eb" : "#334155"}`,
                borderRadius: 20, padding: "7px 18px",
                fontSize: 13, cursor: "pointer", fontWeight: 600,
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}>
          {filtered.map(s => (
            <div key={s.name} style={{
              background: "#1e293b", borderRadius: 12,
              padding: "16px 20px", border: "1px solid #334155",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#f1f5f9", fontSize: 14, fontWeight: 600 }}>{s.name}</span>
                <span style={{ color: "#60a5fa", fontSize: 14, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ background: "#0f172a", borderRadius: 99, height: 8, overflow: "hidden" }}>
                <div style={{
                  width: `${s.level}%`, height: "100%", borderRadius: 99,
                  background: s.level >= 80 ? "#22c55e" : s.level >= 65 ? "#60a5fa" : "#f59e0b",
                }} />
              </div>
              <span style={{
                background: "#0f172a", color: "#475569",
                fontSize: 11, padding: "2px 8px",
                borderRadius: 20, display: "inline-block", marginTop: 8,
              }}>{s.cat}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}