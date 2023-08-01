import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-nfinal.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {' '}
      {/*will route to home page */}
      <img src={LogoS} alt="logo" />
      {/* <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> */}
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/nirmal-gaur-772634126/'>
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/NirmalGaur'>
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://medium.com/@nirmalgaur814/googles-dialogflow-chatbot-integration-with-node-js-554bf3100f23'>
          <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />
        </a>
      </li>
    </ul>

  </div>
)

export default Sidebar
