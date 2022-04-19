// import statements
import * as React from "react"
import { 
    wrapper
} from "./css/layout.module.css"
import Footer from "../components/footer"

const Layout = ({pageTitle, children}) => {
  return (
    <div>
        <title>{pageTitle}</title>
        <main className={wrapper}>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout