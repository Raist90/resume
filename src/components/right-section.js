// import statements
import * as React from "react"
import {
    rightSection,
    rightSectionTextWrapper
} from "../components/css/right-section.module.css"
import {
    purple,
    uppercase
} from "../components/css/utilities.module.css"

const RightSection = () => {
  return (
    <section className={rightSection}>
        <div className={rightSectionTextWrapper}>
          <h2 className={purple}>Professional History</h2>
          <h4 className={`${purple} ${uppercase}`}>Web Developer</h4>
          <p><strong>I Sarti del Web | May 2018 - present</strong></p>
          <p>
            - I realized 50+ websites <br />
            - I built several marketing automations and campaigns with Infusionsoft Keap and Active Campaign
          </p>
          <h4 className={`${purple} ${uppercase}`}>Web Developer</h4>
          <p><strong>UpBrain | February 2016 - May 2018</strong></p>
          <p>
            - Designed, prototyped, and developed websites using HTML, CSS and JavaScript libraries <br />
            - Collaborated with back-end developers and UX designers
          </p>
          <h4 className={`${purple} ${uppercase}`}>Photographer & Videomaker</h4>
          <p><strong>Eurovideo | March 2015 - February 2016</strong></p>
          <p>- I wrote several short films and coordinated audiovisual projects</p>
          <h4 className={`${purple} ${uppercase}`}>Internship | Audiovisual Editor</h4>
          <p><strong>Radiocittà Fujiko | September 2014 - February 2015</strong></p>
          <p>- I interviewed emerging italian bands and managed the audiovisual editing of several YouTube videos and podcasts</p>
          <h2 className={purple}>Academic Background</h2>
          <h4 className={`${purple} ${uppercase}`}>Three-year Degree</h4>
          <p><strong>DAMS, Università di Bologna | 2015</strong></p>
          <p>
            - I studied Cinema, Film-making, Theater and Music <br />
            - Graduate thesis on the evolution of the caption from silent cinema to today
            </p>
          <h4 className={`${purple} ${uppercase}`}>Artistic diploma</h4>
          <p><strong>Artistic Highschool of Benevento | 2008</strong></p>
          <p>
            - Learned how to create immersive digital experiences through classes on illustration, web design, and animation <br />
            - Specialized in art history and music
          </p>
          <h2 className={purple}>Language</h2>
          <p>
            English - B1 <br />
            Español - A2 <br />
            Italiano - mother tongue
          </p>
          <h2 className={purple}>Passions & Hobbies</h2>
          <p>VIDEOGAMES, GUITAR, CINEMA</p>
        </div>
      </section>
  )
}

export default RightSection