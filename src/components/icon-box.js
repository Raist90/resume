// import statements
import * as React from "react"
import { AiFillGithub,
  AiFillLinkedin,
  AiFillMail
} from "react-icons/ai"
import { iconsWrapper,
    iconStyle 
} from "../components/css/icons.module.css"

const Iconbox = () => {
  return (
    <div className={iconsWrapper}>
      <AiFillGithub className={iconStyle} />
      <AiFillLinkedin className={iconStyle} />
      <AiFillMail className={iconStyle} />
    </div>
  )
}

export default Iconbox