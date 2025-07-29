import React from 'react'
import './PortfolioDetails.css'
import './PortfolioDetails.responsive.css'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import rabbitFarm from '../assets/rabbit-farm.png'
import Newsletter from './Newsletter'
import lemonFull from '../assets/lemonFull.png'
import carrotFull from '../assets/carrotFull.png'
import leafFull from '../assets/leafFull.png'
import tommatoFull from '../assets/tommatoFull.png'
import raspberryFull from '../assets/raspberryFull.png'
import honeyFull from '../assets/honeyFull.png'

const PortfolioDetails = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  const portfolioItems = [
    {
      id: 1,
      img: lemonFull,
      key: "lemon"
    },
    {
      id: 2,
      img: carrotFull,
      key: "carrot"
    },
    {
      id: 3,
      img: leafFull,
      key: "leaf"
    },
    {
      id: 4,
      img: tommatoFull,
      key: "tomato"
    },
    {
      id: 5,
      img: raspberryFull,
      key: "raspberry"
    },
    {
      id: 6,
      img: honeyFull,
      key: "honey"
    }
  ]

  const selectedItem = portfolioItems.find(item => item.id === Number(id))

  if (!selectedItem) {
    return <div className='productError'>{t("Item not found")}</div>
  }

  const title = t(`portfolioItems.${selectedItem.key}.title`)
  const type = t(`portfolioItems.${selectedItem.key}.type`)
  const description = t(`portfolioItems.${selectedItem.key}.description`)
  const img = selectedItem.img

  return (
    <div>
      <div className="portfolio-details-head-img">
        <div className='about-head' style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 'calc(100vh - 80px)',
          paddingTop: '100px'
        }}>
        </div>
      </div>

      <div className="container">
        <div className="portfolio-single-block">
          <div className='standart-info'>
            <h1 className='hero-two-content-h1'>{title}</h1>
            <br />
            <p className='hero-two-content-p'>{description}</p>
          </div>

          <div className="publick-block">
            <div className="publik-info">
              <div className="publick-punkt">
                <p><strong>{t("Date")}</strong></p><br />
                <p><strong>{t("Client")}</strong></p><br />
                <p><strong>{t("Category")}</strong></p><br />
                <p><strong>{t("Service")}</strong></p>
              </div>
              <div className="publick-trusts">
                <p><strong>:</strong></p><br />
                <p><strong>:</strong></p><br />
                <p><strong>:</strong></p><br />
                <p><strong>:</strong></p>
              </div>
              <div className="publick-items">
                <p>{t("December 4, 2022")}</p><br />
                <p>{t("Kevin Martin")}</p><br />
                <p>{t("Agriculture , Eco")}</p><br />
                <p>{t("Organic Products")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="farm-block">
          <div className="farm">
            <div className="farm-about">
              <h2>{t("About The Farm")}:</h2>
              <br /><br />
              <p className='hero-two-content-p'>
                {t("t is a long established fact that a reader will be distracted by the readable content of a page when looking at a")} <br /> {t("layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ")}<br /> {t( "using 'Content here, content here', making it look like readable English. " )}
                <br /><br />
                {t("Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,")}  <br />
                {t("and a number of web sites still in their infancy. Various versions have evolved over the years.")}
              </p>
              <br /><br />
            </div>

            <div className="farm-rabbit-img">
              <img src={rabbitFarm} alt="farm" />
              <br /><br />
              <p>{t("The Organic Products")}</p>
              <br /><br />
            </div>

            <div className="farm-how">
              <h2>{t("How To Farm:")}</h2>
              <br /><br />
              <p className='hero-two-content-p'>
                {t("t is a long established fact that a reader will be distracted by the readable content of a page when looking at a")} <br /> {t("layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ")}<br /> {t( "using 'Content here, content here', making it look like readable English. " )}
                <br /><br />
                {t("Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,")}  <br />
                {t("and a number of web sites still in their infancy. Various versions have evolved over the years.")}
              </p>
              <br /><br />
            </div>
 
            <div className="conclusion-farm">
              <h2>{t("Conclusion")}:</h2>
              <br /><br />
              <p className='hero-two-content-p'>
                {t("t is a long established fact that a reader will be distracted by the readable content of a page when looking at a")} <br /> {t("layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to ")}<br /> {t( "using 'Content here, content here', making it look like readable English. " )}
                <br /><br />
                {t("Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,")}  <br />
                {t("and a number of web sites still in their infancy. Various versions have evolved over the years.")}
              </p>
            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}

export default PortfolioDetails

