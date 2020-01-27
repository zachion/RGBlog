import React from "react"
import { Link } from "gatsby"
import Footer from "./components/footer"
const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the about page.</p>
      <Link to="/contact">Contact</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
