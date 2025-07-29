import React from 'react'
import { FiArrowRight, FiCircle  } from 'react-icons/fi'
import './About.css'
import './About.responsive.css'
import AboutBck from '../assets/about-bck.png'
import abputSalat from '../assets/aboutSalat.png'
import traktor from '../assets/trakrot.png'
import zavod from '../assets/zavod.png'
import chooseImg from '../assets/chooseImg.png'
import karzina from '../assets/karzina.png'
import listok from '../assets/listok.png'
import jasy from '../assets/jasy.png'
import carta from '../assets/carta.png'
import Spicy from '../assets/Spicy.png'
import Nuts from '../assets/Nuts.png'
import Fruits from '../assets/Fruits.png'
import Vegetable from '../assets/Vegetable.png'
import Newsletter from '../pages/Newsletter'
import { useTranslation } from 'react-i18next'
import teamBio from '../teamData/teamData'

const About = () => {
    const {t}=useTranslation()
  return (
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${AboutBck})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
                <h1>{t("About Us")}</h1>
            </div>
        </div> 

        <div className="aboutHero">
            <div className="about-hero-img">
                <img src={abputSalat} alt="" />
            </div>
            <div className="about-hero-content">
            <span className='Yellowtail-green'>{t("About Us")}</span>
            <h1 className='hero-two-content-h1'>{t("We do Creative ")}
                <br />
            {t("Things for Success")}</h1>
            
            <br />
            <br />
            <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem had ceased ")}<br />
            {t("to been the industry's standard dummy text ever since the 1500s, when an ")}<br />
            {t("unknown printer took a galley.")}
            <br /> 
            <br />
            {t("Simply dummy text of the printing and typesetting industry. Lorem had ceased ")}<br />
            {t("to been the industry's standard dummy text ever since the 1500s, when an ")}<br />
            {t("unknown printer took a galley.")}
            </p>

            <div className="about-content-hero-card">
                <div className="about-content-card-one">
                    <img className="about-content-card-one-img" src={traktor} alt="" />
                    <h4 className='about-content-card-h4'>{t("Modern Agriculture ")}<br /> {t("Equipment")} </h4>
                </div>
                <div className="about-content-card-one">
                    <img className="about-content-card-one-img" src={zavod} alt="" />
                    <h4 className='about-content-card-h4'> {t("No growth ")}<br /> {t("hormones are used")}</h4>
                </div>
            </div>
            <button className='hero-two-content-btn'>{t("Explore More")}
                <span className="icon-circle-two">
                <FiArrowRight color="##335B6B" size={16} />
                </span>
            </button> 
            </div>
        </div>


        <div className="about-bc-color">
            <div className="container">
                <div className="choose-block">
                    <div className="choose-block-content">
                <div className="choose-block-head">
                    <span className='Yellowtail-green'>{t("Why Choose us?")}</span>
                    <h1 className='hero-two-content-h1'>{t("We do not buy from the")} <br />
                    {t("open market & traders.")}</h1>
                    <br />
                    <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem had ceased ")} <br /> {t("to been the industry's standard  the 1500s, when an unknown")}</p>
                    <br /><br />
                </div>
                <div className="choose-circe-block">
                    <div className="circle-one">
                    <FiCircle size={18} style={{ strokeWidth: 5 }} color="#7EB693" />
                    <p>100% {t("Natural Product")} </p>
                    </div>
                    <div className="circle-content">
                        <br />
                        <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting")}<br /> {t("industry Lorem Ipsum")}</p>
                        <br />
                    </div>
                    <div className="circle-one">
                    <FiCircle size={18} style={{ strokeWidth: 5 }} color="#7EB693" />
                    <p> {t("Increases resistance")}</p>
                    </div>
                    <div className="circle-content"> 
                        <br />
                        <p className='hero-two-content-p'>{t("Filling, and temptingly healthy, our Biona Organic ")}<br /> {t("Granola with Wild Berries is just the thing")}</p>
                    </div>
                </div>
            </div>
            <div className="chooseImg">
                <img src={chooseImg} alt="" />
            </div>
                </div>
                <div className="choose-cards">
                    <div className="choose-card">
                        <img src={karzina} alt="" />
                        <h4 className='about-content-card-h4'>
                        {t("Return Policy")}
                        </h4>
                        <p className='hero-two-content-p'>{t("Simply dummy text of")} <br /> {t("the printintypesetting")} <br /> {t("industry")}.</p>
                    </div>
                    <div className="choose-card">
                        <img src={listok} alt="" />
                        <h4 className='about-content-card-h4'>
                        100% {t("Fresh")}
                        </h4>
                        <p className='hero-two-content-p'>{t("Simply dummy text of")} <br /> {t("the printintypesetting")} <br /> {t("industry")}.</p>
                    </div>
                    <div className="choose-card">
                        <img src={jasy} alt="" />
                    <h4 className='about-content-card-h4'>
                        {t("Support")} 24/7
                        </h4>
                        <p className='hero-two-content-p'>{t("Simply dummy text of")} <br /> {t("the printintypesetting")} <br /> {t("industry")}.</p>
                    </div>
                    <div className="choose-card">
                        <img src={carta} alt="" />
                        <h4 className='about-content-card-h4'>
                        {t("Secured Payment")}
                        </h4>
                        <p className='hero-two-content-p'>{t("Simply dummy text of")} <br /> {t("the printintypesetting")} <br /> {t("industry")}.</p>

                    </div>
                </div>
                
            </div>
        </div>


<div className="container">
    <div className="our-team">
            <div className="our-team-head">
            <span className='Yellowtail-green'>{t("Team")}</span>
            <br />
            <h1 className='hero-two-content-h1'>{t("Our Organic Experts")}</h1>
            <br />
            <p className='hero-two-content-p'>
            {t("Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's")}<br /> {t("standard dummy text ever since the 1500s, when an unknown printer took a galley.")}
            </p>
            </div>
            <div className="our-team-cards">
  {teamBio.filter(item => item.id <= 3).map(item => (
    <div className="our-team-card" key={item.id}>
      <div className="our-team-img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="our-team-card-content">
      <h4>{t(item.name)}</h4>
        <div className="our-team-content-2">
          <div className="our-team-cont-span">
          <span>{t(item.titul)}</span>
          </div> 
          <div className="our-team-cont-icon">
            {item.socMedia.map((icon, index) => (
              <img
                src={icon}
                alt="icon"
                key={index}
                style={{ marginRight: '10px', width: '20px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
</div>
    


    <div className="about-blue-bc">
        <div className="container">
            <div className="about-blue-head">
                <span className='Yellowtail-green'>{t("About Us")}</span>
            <h1> {t("What We Offer for You")}</h1>
            </div>
            <div className="about-blue-cards">
                <div className="about-blue-card">
                    <img src={Spicy} alt="" />
                    <h3>{t("Spicy")}</h3>
                </div>
                <div className="about-blue-card">
                    <img src={Nuts} alt="" />
                    <h3>{t("Nuts & Feesd")}</h3>
                </div>
                <div className="about-blue-card">
                    <img src={Fruits} alt="" />
                    <h3>{t("Fruits")}</h3>
                </div>
                <div className="about-blue-card">
                    <img src={Vegetable} alt="" />
                    <h3>{t("Vegetable")}</h3>
                </div>
            </div> 
                
        </div>
            
    </div>
    <div className="container">
        <Newsletter/>
    </div>
   
    </div>
    

  )
}

export default About