import { useState, useEffect } from "react"
import { navLinks } from "../data/data"

export default function Navbar({ active, scrollTo }) {
  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768)
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [])

  const handle = (id) => { scrollTo(id); setOpen(false) }

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 999,
      background: "rgba(15,23,42,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1e293b",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 60,
      }}>

        {/* LOGO */}
        <div onClick={() => handle("accueil")}
          style={{ fontSize: 22, fontWeight: 800, cursor: "pointer", userSelect: "none" }}>
          <span style={{ color: "#ef4444" }}>Fa</span>
          <span style={{ color: "#f1f5f9" }}>ndresena</span>
        </div>

        {/* DESKTOP */}
        {!mobile && (
          <div style={{ display: "flex", gap: 4 }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => handle(l.id)} style={{
                background: active === l.id ? "#1e293b" : "transparent",
                border: active === l.id ? "1px solid #334155" : "1px solid transparent",
                color: active === l.id ? "#60a5fa" : "#94a3b8",
                borderRadius: 8, padding: "6px 14px",
                fontSize: 14, cursor: "pointer",
                fontWeight: active === l.id ? 700 : 400,
                transition: "all 0.2s",
              }}>
                {l.label}
              </button>
            ))}
          </div>
        )}

        {/* MOBILE BURGER */}
        {mobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: "#1e293b", border: "1px solid #334155",
            color: "#f1f5f9", borderRadius: 8,
            padding: "7px 13px", fontSize: 18, cursor: "pointer",
          }}>
            {open ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {mobile && open && (
        <div style={{ background: "#0f172a", borderTop: "1px solid #1e293b" }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => handle(l.id)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: active === l.id ? "#1e293b" : "transparent",
              border: "none",
              color: active === l.id ? "#60a5fa" : "#94a3b8",
              padding: "14px 24px", fontSize: 15, cursor: "pointer",
              fontWeight: active === l.id ? 700 : 400,
              borderBottom: "1px solid #1e293b",
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}