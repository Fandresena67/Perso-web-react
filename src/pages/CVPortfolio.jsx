import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import Experience from "../components/Experience"
import Langues from "../components/Langues"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function CVPortfolio() {
  const [active, setActive] = useState("accueil")

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActive(id)
  }

  return (
    <div style={{
      fontFamily: "'Segoe UI', Arial, sans-serif",
      background: "#0f172a",
      color: "#f1f5f9",
      minHeight: "100vh",
    }}>
      <Navbar active={active} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Competences />
      <Projets />
      <Experience />
      <Langues />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  )
}