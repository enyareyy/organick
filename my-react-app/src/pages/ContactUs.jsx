import React from 'react'
import './ContactUs.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import BackgroundContact from '../assets/BackgroundContact.jpg'
import bananaCont from '../assets/bananaCont.png'
import Iconmessege from '../assets/Iconmessege.png'
import IconCall from '../assets/IconCall.png'
import Farm from '../assets/Farm.png'
import Location from '../assets/Location.png'
import Newsletter from '../newsletter/Newsletter'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
  const {t}=useTranslation()
  return (
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${BackgroundContact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
                <h1>{t("Contact Us")}</h1>
            </div>
        </div> 
        <div className="container">
          <div className="contact-hero-1">
            <div className="contact-img">
              <img src={bananaCont} alt="" />
            </div>
            <div className="contact-content">
              <h1 className='hero-two-content-h1'>
              {t("We'd love to talk about how we")} <br /> {t("can work together.")}
              </h1>
              <br />
              <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem had ceased to")} <br />
              b{t("een the industry's standard dummy text ever since the 1500s, when an unknown")} <br />
              {t("printer took a galley.")}</p>
              <br />
              <div className="messege-block">
                <img src={Iconmessege} alt="" />
                <div className="messege-content">
                  <h4 className='about-content-card-h4'>{t("Message")}</h4>
                  <p className='hero-two-content-p'>support@organic.com</p>
                </div>
              </div>
              <div className="messege-block">
                <img src={IconCall} alt="" />
                <div className="messege-content">
                  <h4 className='about-content-card-h4'>{t("Contact Us")}</h4>
                  <p className='hero-two-content-p'>+01 123 456 789</p>
                </div>
              </div>
              <br />
              <div className="social-icons" style={{marginLeft:'15px'}}>
              <button><FaInstagram size={20} /></button>
              <button> <FaFacebookF size={20} /> </button>
              <button> <FaTwitter size={20} /> </button>
              <button> <FaPinterestP size={20} /> </button>
      </div>
            </div>
          </div>

          <div className="farm-block">
            <div className="farm-img">
              <img src={Farm} alt="" />
            </div>
            <div className="farm-content">
              <div className="farm-content-head">
                <p className='Yellowtail-green'>{t("Location")}</p>
                <h1 className='hero-two-content-h1'>{t("Our Farms")}</h1>
                <br />
                <p className='hero-two-content-p'>{t("Established fact that a reader will be distracted")} <br />
                {t("by the readable content of a page when looking")} <br />
                {t("a layout. The point of using.")}</p>
                <br />
              </div>
              <div className="farm-icon-block">
                <img src={Location} alt="" /> 
                <div className="messege-content">
                  <h4>{t("New York, USA")}:</h4>
                  <p className='hero-two-content-p'>{t("299 Park Avenue New York,")} <br />
                  {t("New York")} 10171</p>
                </div>
              </div>
              <div className="farm-icon-block">
                <img src={Location} alt="" /> 
                <div className="messege-content">
                  <h4>{t("London, UK")}:</h4>
                  <p className='hero-two-content-p'>{t("30 Stamford Street,")} <br />
                  {t("London SE1 9LQ")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-section">
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label>{t("Full Name")}*</label>
        <input type="text" placeholder="Your Email Address" />
      </div>
      <div className="form-group">
        <label>{t("Your Email")}*</label>
        <input type="email" placeholder="example@yourmail.com" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>{t("Company")}*</label>
        <input type="text" placeholder="yourcompany name here" />
      </div>
      <div className="form-group">
        <label>{t("Subject")}*</label>
        <input type="text" placeholder="how can we help" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group full-width">
        <label>{t("Message")}*</label>
        <textarea placeholder="hello there, i would like to talk about how to..."></textarea>
      </div>
    </div>
    <div className="form-button-wrap">
      <button type="submit" className="send-button">{t("Send Message")}</button>
    </div>
  </form>
</div>

<Newsletter/>

        </div>
    </div>
  )
}

export default ContactUs