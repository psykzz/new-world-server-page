import React from "react"
import { Helmet } from "react-helmet"
import { DarkmodeToggle } from "../DarkmodeToggle"
import { Footer } from "../Footer"
import "./common.css"

import * as styles from "./layout.module.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Ishtakar | New World - EU Central</title>
      <meta name="description" content={"Ishtakar server website of New world. Providing information, guides and in the future, company services."} />
    </Helmet>
    <div className={styles.container}>
        {children}
    </div>
    <Footer />
    <DarkmodeToggle />
  </>
)
export default Layout;
