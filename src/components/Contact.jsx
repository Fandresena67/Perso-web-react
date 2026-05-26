import { contacts } from "../data/data"

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", background: "#0f172a" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ color: "#ef4444", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Parlons ensemble
          </p>
          <h2 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: "#f1f5f9", margin: "8px 0" }}>
            Contact
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, margin: 0 }}>
            Cliquez directement pour me contacter
          </p>
        </div>

        {/* CARTES CONTACT DIRECTES */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 14, marginBottom: 32,
        }}>
          {contacts.map(c => (
            <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.color
                e.currentTarget.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#334155"
                e.currentTarget.style.transform = "translateY(0)"
              }}
              style={{
                background: "#1e293b", borderRadius: 14,
                padding: "22px 18px", border: "1px solid #334155",
                textDecoration: "none", display: "block",
                transition: "all 0.2s",
              }}>
              <span style={{ fontSize: 32 }}>{c.icon}</span>
              <p style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "10px 0 4px" }}>
                {c.label}
              </p>
              <p style={{ color: "#f1f5f9", fontSize: 14, fontWeight: 700, margin: "0 0 6px", wordBreak: "break-word" }}>
                {c.value}
              </p>
              <p style={{ color: c.color, fontSize: 12, margin: 0, fontWeight: 600 }}>
                {c.action} →
              </p>
            </a>
          ))}
        </div>

        {/* FORMULAIRE DIRECT EMAIL */}
        <div style={{
          background: "#1e293b", borderRadius: 16,
          padding: "24px", border: "1px solid #334155",
        }}>
          <h3 style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>
            Envoyer un message direct
          </h3>
          <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 20px" }}>
            {/* Le message sera envoye directement sur fandresenanatolo@gmail.com */}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="text" placeholder="Votre nom complet"
              style={{
                background: "#0f172a", border: "1px solid #334155",
                borderRadius: 10, padding: "12px 16px",
                color: "#f1f5f9", fontSize: 14, outline: "none",
                width: "100%", boxSizing: "border-box",
              }} />
            <input type="email" placeholder="Votre adresse email"
              style={{
                background: "#0f172a", border: "1px solid #334155",
                borderRadius: 10, padding: "12px 16px",
                color: "#f1f5f9", fontSize: 14, outline: "none",
                width: "100%", boxSizing: "border-box",
              }} />
            <textarea rows={4} placeholder="Votre message..."
              style={{
                background: "#0f172a", border: "1px solid #334155",
                borderRadius: 10, padding: "12px 16px",
                color: "#f1f5f9", fontSize: 14, outline: "none",
                resize: "none", width: "100%",
                boxSizing: "border-box", fontFamily: "inherit",
              }} />
            <a href="mailto:fandresenanatolo@gmail.com"
              style={{
                background: "#2563eb", color: "#fff",
                borderRadius: 10, padding: "14px 24px",
                fontSize: 15, fontWeight: 700,
                textAlign: "center", textDecoration: "none",
                display: "block",
              }}>
              ✉️ Envoyer sur Gmail
            </a>
            <a href="https://wa.me/261342603832"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "#16a34a", color: "#fff",
                borderRadius: 10, padding: "14px 24px",
                fontSize: 15, fontWeight: 700,
                textAlign: "center", textDecoration: "none",
                display: "block",
              }}>
              📱 Contacter sur WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}