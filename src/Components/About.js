import { Link } from "react-router-dom"
import SocialFollow from "./SocialFollow"

const About = () => {
  return (
    <div>
    <h3>I'm Okeyemi Tunde</h3>
    <SocialFollow />
    <Link to="/">Go Back</Link>
    </div>
  )
}

export default About