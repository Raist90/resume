// import statements
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
    leftSection,
    me,
    leftSectionTextWrapper,
    skillsList
} from "../components/css/left-section.module.css"
import {
  purple,
  textCenter,
  yellow,
  rounded,
  fixMargin
} from "../components/css/utilities.module.css"
import Iconbox from "../components/icon-box"

const LeftSection = () => {
  return (
    <section className={leftSection}>
        <div className={me}>
          <StaticImage
          className={rounded}
          src="../images/me.jpg" 
          alt="A picture of me" />
        </div>
        <div className={leftSectionTextWrapper}>
          <h1 className={`${purple} ${textCenter}`}>Manuel De Toma</h1>
          <Iconbox />
          <h4 className={yellow}>Web Developer</h4>
          <p>born on 30/05/1990 in Benevento, Italy</p>
          <h2 className={purple}>Personal Profile</h2>
          <p>I am an experienced web developer interested in projects that require both creative and analytical thinking, and I prioritize user experience in my work.</p>
          <h2 className={purple}>Technical Skills</h2>
          <h4 className={`${yellow} ${fixMargin}`}>
            Coding
          </h4>
          <ul className={skillsList}>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              Javascript
            </li>
            <li> 
              React
            </li>
            <li> 
              SASS
            </li>
            <li> 
              WordPress
            </li>
            <li> 
              Git
            </li>
            <li> 
              Jamstack
            </li>
            <li> 
              Gatsby (static sites generator)
            </li>
            <li> 
              GraphQl
            </li>
            <li> 
              PHP
            </li>
            <li> 
              SQL
            </li>
            <li> 
              PDO
            </li>
            <li> 
              UI/UX Design
            </li> 
          </ul>
          <h2 className={purple}>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +39 333 3361932 <br />
            <strong>Mail:</strong> manuel.detoma@gmail.com <br />
            <strong>Address:</strong> Av. del Pintor Joaquin Sorolla 167, Malaga (ES)
          </p>
        </div>
      </section>
  )
}

export default LeftSection