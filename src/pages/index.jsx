import React from "react"
import { Helmet } from "react-helmet"
import { DarkmodeToggle } from "../components/DarkmodeToggle"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import "../styles/common.css"

const Index = () => (
  <>
    <Helmet>
      <title>Ishtakar | EU Central - New World</title>
      <meta name="description" content={"Ishtakar server website of New world. Providing information, guides and in the future, company services."} />
    </Helmet>
    <Hero />
    <Footer />
    <DarkmodeToggle />
  </>
)
export default Index
