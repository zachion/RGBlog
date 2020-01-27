import React from "react"
import { Link } from "gatsby"
import Header from "./components/header"
import Footer from "./Components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>This is the about page.</p>
      <Link to="/contact">Contact</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
