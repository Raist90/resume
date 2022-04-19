// import statements 
import * as React from "react"
import { 
    footer,
    copyrightText 
} from "../components/css/footer.module.css"

const Footer = () => {
  return (
    <div className={footer}>
        <p className={copyrightText}>
            Copyright 2022 © Manuel De Toma
        </p>
    </div>
  )
}

export default Footer