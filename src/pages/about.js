import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the about page.</p>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default AboutPage
