// import statements
import * as React from "react"
import { Helmet } from "react-helmet"
import { 
    wrapper
} from "./css/layout.module.css"
import Footer from "../components/footer"

const Layout = ({pageTitle, children}) => {
  return (
    <div>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <main className={wrapper}>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout