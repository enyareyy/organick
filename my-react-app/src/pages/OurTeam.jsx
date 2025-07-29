import React from 'react'
import './OurTeam.css'
import './OurTeam.responsive.css'
import ourTeamBc from '../assets/ourTeamBc.png'
import Newsletter from '../pages/Newsletter'
import teamBio from '../teamData/teamData'
import { useTranslation } from 'react-i18next'


const OurTeam = () => {
const {t}=useTranslation()
  return (
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${ourTeamBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
                <h1>{t("Our Team")}</h1>
            </div>
        </div> 

        <div className="container">
            <div className="teamy">
                <div className="teamy-head">
                    <span className='Yellowtail-green'>{t("Team")}</span>
                    <h1 className='hero-two-content-h1'>{t("Our Organic Experts")}</h1>
                    <br />
                    <p className='hero-two-content-p'>
                    {t("Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's")} <br />
                    {t("standard dummy text ever since the 1500s, when an unknown printer took a galley.")}
                    </p>
                </div>
                <div className="team-card">
                    {teamBio.map(item =>(
                        <div className="our-team-card">
                        <div className="our-team-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="our-team-card-content">
                        <h4>{t(item.name)}</h4>
                        
                        <div className="our-team-content-2">
                            <div className="our-team-cont-span">
                            <span>{t(item.titul)}</span>
                            </div>
                        <div className="our-team-cont-icon">
                            {item.socMedia.map((icon, index) => (
                            <img src={icon} alt="icon" key={index} style={{marginRight:'10px', width:'20px'}} />
                            ))}
                        </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Newsletter/>
        </div>
    </div>
  )
}
export default OurTeam