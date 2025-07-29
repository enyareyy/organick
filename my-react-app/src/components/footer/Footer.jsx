import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/styles.css'
import './Footer.css'
import './Footer.responsive.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t}=useTranslation()
  return (
    <div>
    <div className='container'>
      <div className='footer'>

      <div className="contact">
        <Link to="/contact-us"><h2>{t("Contact Us")}</h2></Link>
        <br />
        <br />
        <h4>{t("Email")}</h4>
        <p>needhelp@Organia.com</p>
        <br />
        <h4>{t("Phone")}</h4>
        <p>666 888 888</p>
        <br />
        <h4>{t("Address")}</h4>
        <p>88 road, borklyn street, USA</p>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
        <br />
        <br /> 
        <p>{t("Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing")} </p>
        <br />
        <br />
        <div className="social-icons">
        <button><FaInstagram size={20} /></button>
        <button> <FaFacebookF size={20} /> </button>
        <button> <FaTwitter size={20} /> </button>
        <button> <FaPinterestP size={20} /> </button>
      </div>
      </div>  
      
      <div className="lost">
        <div>
          <h2>{t("Utility Pages")}</h2>
        <br />
        <br />
        <ul>
          <li><Link>{t("Style Guide")}</Link></li>
          <br />
          <li><Link>{t("404 Not Found")}</Link></li>
          <br />
          <li><Link>{t("Password Protected")}</Link></li>
          <br />
          <li><Link>{t("Licences")}</Link></li>
          <br />
          <li><Link>{t("Changelog")}</Link></li>
        </ul>
        </div>
      </div>
      </div>
    </div>
    <hr className='footer-hr'/>
    <div className="container">
      <p className='lost-p'>Copyright © <strong>Organick</strong> | Designed by <strong>VictorFlow</strong> Templates - Powered by <strong>Webflow</strong></p>
    </div>



    </div>
  )
}


export default Footer