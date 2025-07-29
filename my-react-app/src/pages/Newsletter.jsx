import React from 'react'
import './Newsletter.css'
import './Newsletter.responsive.css'
import Background from '../assets/Background.png'
import { useTranslation } from 'react-i18next'
const Newsletter = () => {
  const {t}=useTranslation()
  return (
    <div>
      <div className="newletters">
        <div className="newletter">
        <div className="newletter-img">
          <img src={Background} alt="" />
        </div>
        <div className="newletter-content">
          <h1>{t("Subscribe to")}
            <br />   
            {t("our Newsletter")}
          </h1>
          <div className="newletter-login"> 
            <input type="text" placeholder='    Your Email Address'/>
            <button>{t("Subscribe")}</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Newsletter