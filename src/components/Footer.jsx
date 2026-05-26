import { navLinks, contacts } from "../data/data"

export default function Footer({ scrollTo }) {
  return (
    <footer style={{ background: "#020617", borderTop: "1px solid #1e293b", padding: "3rem 1.5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32, marginBottom: 32,
        }}>

          {/* LOGO + DESC */}
          <div>
            <p style={{ fontSize: 22, fontWeight: 800, margin: "0 0 10px" }}>
              <span style={{ color: "#ef4444" }}>Fa</span>
              <span style={{ color: "#f1f5f9" }}>ndresena</span>
              <span style={{ color: "#64748b", fontSize: 16, fontWeight: 400 }}> NATOLOJANAHARY</span>
            </p>
            <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>
              Etudiant en Informatique passionne par le web, l'IA et les technologies cloud. Antananarivo, Madagascar.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {contacts.map(c => (
                <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer"
                  title={c.action}
                  style={{
                    background: "#1e293b", border: `1px solid ${c.color}44`,
                    borderRadius: 8, padding: "7px 11px",
                    fontSize: 16, textDecoration: "none",
                    color: c.color, display: "flex", alignItems: "center",
                  }}>
                  {c.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <p style={{ color: "#60a5fa", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>
              Navigation
            </p>
            {navLinks.map(l => (
              <p key={l.id} style={{ margin: "8px 0" }}>
                <button onClick={() => scrollTo(l.id)} style={{
                  background: "none", border: "none",
                  color: "#475569", fontSize: 14,
                  cursor: "pointer", padding: 0,
                }}>
                  → {l.label}
                </button>
              </p>
            ))}
          </div>

          {/* CONTACT DIRECT */}
          <div>
            <p style={{ color: "#60a5fa", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>
              Contact Direct
            </p>
            {contacts.map(c => (
              <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  color: "#475569", fontSize: 14,
                  textDecoration: "none", margin: "8px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = c.color}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                <span>{c.icon}</span>
                <span>{c.value}</span>
              </a>
            ))}
          </div>

        </div>

        <div style={{
          borderTop: "1px solid #1e293b", paddingTop: 20,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 10,
        }}>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>
            © 2026 <span style={{ color: "#ef4444" }}>Fa</span>ndresena. Tous droits reserves.
          </p>
          <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>
            Fait avec ❤️ React.js & JavaScript
          </p>
        </div>

      </div>
    </footer>
  )
}