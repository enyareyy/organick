import React from 'react'
import './Services.css'
import { FiArrowRight } from 'react-icons/fi'
import serviceBanner from '../assets/serviceBanner.png'
import milkBootle from '../assets/milkBootle.png'
import onlineStore from '../assets/onlineStore.png'
import delivery from '../assets/delivery.png'
import almod from '../assets/almod.png'
import natFood from '../assets/natFood.png'
import vegBag from '../assets/vegBag.png'
import radish from '../assets/radish.png'
import musicBtn from '../assets/musicBtn.jpg'
import VideoIcon from '../assets/VideoIcon.png'
import { useTranslation } from 'react-i18next'

const Services = () => {
    const {t}=useTranslation()
  return ( 
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${serviceBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
                <h1>{t("Services")}</h1>
        </div>
        <div className="container">
            <div className="service-grow">
                <div className="grow-head">
                    <span className='Yellowtail-green'>{t("What we Grow")}</span>
                    <h1 className='hero-two-content-h1'>{t("Better Agriculture for ")}<br /> {t("Better Future")}</h1>
                </div>
                <div className="grow-content">
                    <div className="grow-1-content">
                        <div className="grow-cart-1">
                            <img src={milkBootle} alt="" />
                            <h4 className='about-content-card-h4'>{t("Dairy Products")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                        <div className="grow-cart-1">
                            <img src={onlineStore} alt="" />
                            <h4 className='about-content-card-h4'>{t("Store Services")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                        <div className="grow-cart-1">
                            <img src={delivery} alt="" />
                            <h4 className='about-content-card-h4'>{t("Delivery Services")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                    </div>
                    <div className="grow-img">
                        <img src={almod} alt="" />
                    </div>
                    <div className="grow-2-content">
                        <div className="grow-cart-1">
                            <img src={natFood} alt="" />
                            <h4 className='about-content-card-h4'>{t("Agricultural Services")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                        <div className="grow-cart-1">
                            <img src={vegBag} alt="" />
                            <h4 className='about-content-card-h4'>{t("Organic Products")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                        <div className="grow-cart-1">
                            <img src={radish} alt="" />
                            <h4 className='about-content-card-h4'>{t("Fresh Vegetables")}</h4>
                            <p className='hero-two-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error")} 
                            <br /> {t("sit voluptat accusantium doloremqlaudantium. ")}
                            <br /> {t("Sed ut perspiciatis")}</p>
                        </div>
                    </div>
                </div>
                <div className="grow-btn">
                    <button className='news-content-button'>
                        {t("Explore More")}
                        <span className="icon-circle">
                            <FiArrowRight color="white" size={16} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div className='service-video-bc' style={{ 
        backgroundImage: `url(${musicBtn})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '150vh'}}>
            <div className="service-video-content">
                <span className='Yellowtail-green'>{t("Organic Only")}</span>
                <h1 className='hero-two-content-h1'>{t("Everyday Fresh & Clean")}</h1>
                <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem had ceased ")} <br /> {t("to been the industry's standard dummy text ever since the")} </p>
                <img src={VideoIcon} alt="" />
            </div>
        </div>
        
    </div>
)
}

export default Services