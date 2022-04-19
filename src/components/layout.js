// import statements
import * as React from "react"
import { 
    wrapper
} from "./css/layout.module.css"

const Layout = ({pageTitle, children}) => {
  return (
    <div>
        <title>{pageTitle}</title>
        <main className={wrapper}>
            {children}
        </main>
    </div>
  )
}

export default Layout