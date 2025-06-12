import React from 'react'
import './PortfolioStandard.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import PortfolioStandardBc from '../assets/PortfolioStandardBc.png'
import lemon from '../assets/lemon.png'
import lemonFull from '../assets/lemonFull.png'
import carrot from '../assets/carrot.png'
import carrotFull from '../assets/carrotFull.png'
import leafOrg from '../assets/leafOrg.png'
import leafFull from '../assets/leafFull.png'
import tommato from '../assets/tommato.png'
import tommatoFull from '../assets/tommatoFull.png'
import raspberry from '../assets/raspberry.jpg'
import raspberryFull from '../assets/raspberryFull.png'
import honey from '../assets/honey.png'
import honeyFull from '../assets/honeyFull.png'
import Newsletter from '../newsletter/Newsletter'
import { useTranslation } from 'react-i18next'

const PortfolioStandard = () => {
  const {t}=useTranslation()
  const portfolioItems = [
    {
      id: 1,
      title: t("portfolioItems.lemon.title"),
      type: t("portfolioItems.lemon.type"),
      img: lemon,
      link: lemonFull,
      description: t("portfolioItems.lemon.description")
    },
    {
      id: 2,
      title: t("portfolioItems.carrot.title"),
      type: t("portfolioItems.carrot.type"),
      img: carrot,
      link: carrotFull,
      description: t("portfolioItems.carrot.description")
    },
    {
      id: 3,
      title: t("portfolioItems.leaf.title"),
      type: t("portfolioItems.leaf.type"),
      img: leafOrg,
      link: leafFull,
      description: t("portfolioItems.leaf.description")
    },
    {
      id: 4,
      title: t("portfolioItems.tomato.title"),
      type: t("portfolioItems.tomato.type"),
      img: tommato,
      link: tommatoFull,
      description: t("portfolioItems.tomato.description")
    },
    {
      id: 5,
      title: t("portfolioItems.raspberry.title"),
      type: t("portfolioItems.raspberry.type"),
      img: raspberry,
      link: raspberryFull,
      description: t("portfolioItems.raspberry.description")
    },
    {
      id: 6,
      title: t("portfolioItems.honey.title"),
      type: t("portfolioItems.honey.type"),
      img: honey,
      link: honeyFull,
      description: t("portfolioItems.honey.description")
    }
  ]
  

  return (
    <div>
      <div className='about-head' style={{
        backgroundImage: `url(${PortfolioStandardBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'
      }}>
        <div className="container">
          <h1>{t("Portfolio Standard")}</h1>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-items">
          {portfolioItems.map(item => (
            <Link
            key={item.id}
            to={`/portfolio-standard/${item.id}`}
            state={item}
            >
              <div className="portfolio-item">
                <div className="portfolio-hover">
                  <img src={item.img} alt={item.title} />
                  <div className="overlay">
                    <button className='btn-icon'>
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.type}</p>
              </div>
            </Link>
          ))}
        </div>
        <Newsletter/>
      </div>
    </div>
  )
}

export default PortfolioStandard
