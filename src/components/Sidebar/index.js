import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Logo.png'
import LogoSubtitle from '../../assets/images/Logosubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img src={LogoS} alt="Logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Manan"/>
        </Link>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" />
                <FontAwesomeIcon icon={faHome} size="2x" color="4d4d4e" />
            <NavLink/>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" />
                <FontAwesomeIcon icon={faUser} size="2x" color="4d4d4e" />
            <NavLink/>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" />
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="4d4d4e" />
            <NavLink/>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEeUv61qae3KAAAAY8MmYX48LfKQo6ZvL7S68JQ_ILqLEwSueTvftUA9mD1DqLzb5atv21dXwP4vfQ_B9yqx12iD6xh_pIe8BlzkAMm8Ah4EAunvZbVuoBLNseAzr-GRi6pbIc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanan-vyas-b13667252%2F"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/manan18vyas?igsh=NXB4ZzdxeGp0ZnZx"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
    </div>
)

export default Sidebar
