import React from "react"
import { Helmet } from "react-helmet"
import { DarkmodeToggle } from "../components/DarkmodeToggle"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import "../styles/common.css"

const Index = () => (
  <>
  <Helmet>
    <title>Ishtakar | EU Central</title>
  </Helmet>
    <Hero />
    <Footer />
    <DarkmodeToggle />
  </>
)
export default Index
