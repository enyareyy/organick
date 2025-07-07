import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeroBc from '../assets/hero-img.JPEG'
import { FiArrowRight } from 'react-icons/fi'
import banana from '../assets/banana-bc.png'
import fruit from '../assets/fruit-bc.png'
import HeroBcTwo from '../assets/hero-bcr.JPEG'
import icon3 from '../assets/Icon (3).png'
import icon4 from '../assets/Icon (4).png'
import ImageeBc from '../assets/Image.jpg'
import SaraTaylor from '../assets/SaraTaylor.png'
import Star from '../assets/Star.png'
import Navigation from '../assets/Navigation.png'
import Eco from '../assets/eco.png'
import OrganicJuice from '../assets/OrganicJuice.png'
import OrganicFood from '../assets/OrganicFood.png'
import NutsCookis from '../assets/NutsCookis.png'
import kapusta from '../assets/kapusta.png'
import tomato from '../assets/tomato.png'
import Vector from '../assets/Vector.png'
import './Home.css'
import Card from '../card/Card'
import axios from 'axios'
import Newsletter from '../newsletter/Newsletter'
import { useTranslation } from 'react-i18next'


const Home = () => {
  const [products, setProducts] = useState([])
const [vegetables, setVegetables] = useState([])


  const fetchProductsEight = async () => {
      const products = await axios.get('https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food')
      console.log(products.data);
      const eight = products.data.slice(0, 8)
      setProducts(eight)
  } 

  useEffect(() => {
    fetchProductsEight()
  }, []) 

const fetchProductsFrom13to16 = async () => {
  const vegetables = await axios.get('https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food');
  console.log(vegetables.data);
  const sliced = vegetables.data.slice(12, 16); 
  setVegetables(sliced);
}

useEffect(() => {
  fetchProductsFrom13to16();
}, []);
const {t} = useTranslation()
  return (
    <div>
      <div style={{ 
        backgroundImage: `url(${HeroBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '99vw',
        height: '100vh'
}}>
  <div className="container">
    <div className='hero-content'> 
    <span>{t("100% Natural Food")}</span>
    <h1>{t("Choose the best healthier way ")}        
      <br />
      {t("of life")}</h1>
    <br />
    <button className='hero-content-button'>{t("Explore Now")} 
      <span className="icon-circle">
        <FiArrowRight color="#EFD372" size={16} />
      </span>
    </button>
    </div>
  </div>
</div>
<div className="container">
<div className="img-block">
  <div className="banana-block">
    <div className="banana-img">
      <img src={banana} alt="" />
      <div className="banana-text">
        <span className='Yellowtail-white'>{t("Natural!!")}</span>
        <h4 className='to-white'>{t("Get Garden")} <br /> {t("Fresh Fruits")}</h4>
      </div>
    </div>
  </div>

  <div className="fruit-block">
    <div className="banana-img">
      <img src={fruit} alt="" />
      <div className="banana-text">
        <span className='Yellowtail-green'>{t("Offer")}!!</span>
        <h4 className='to-black'>{t("Get 10% off ")}<br /> {t("on Vegetables")}</h4>
      </div>
    </div>
  </div>
</div>
</div>

<div className='hero-two-bc' style={{ 
        backgroundImage: `url(${HeroBcTwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '99vw',
        height: '100vh'
}}>
  <div className="container">
    <div className='hero-two-content'> 
    <span className='Yellowtail-green'>{t("About Us")}</span>
    <h1 className='hero-two-content-h1'>{t("We Believe in Working")}
      <br />
    {t("Accredited Farmers")}</h1>
    <br />
    <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem had ceased to")} 
      <br />
    {t("been the industry's standard dummy text ever since the 1500s, when an unknown ")}
    <br />
    {t("printer took a galley.")}</p>
    <br />
    <div className="hero-two-icons">
      <div className="icon-one">
        <div className="icon-img">
          <img src={icon3} alt="" />
        </div>
        <div className="icon-text">
          <h3>{t("Organic Foods Only")}</h3>
          <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting ")}<br /> {t("industry. Lorem Ipsum")}</p> 
        </div>
      </div>
      <div className="icon-one">
        <div className="icon-img">
          <img src={icon4} alt="" />
        </div>
        <div className="icon-text">
          <h3>{t("Quality Standards")}</h3>
          <p className='hero-two-content-p'>{t("Simply dummy text of the printing and typesetting ")}<br /> {t("industry. Lorem Ipsum")}</p>
        </div>
      </div>
    </div>
    <div className="about-hero-btn">
      <Link to="/shop" className="hero-two-content-btn">
  {t("Shop Now")}
  <span className="icon-circle-two">
    <FiArrowRight color="##335B6B" size={16} />
  </span>
</Link>
    </div>
    

    </div>
  </div>
</div>
<div className="container">
  <div className="shop-block">
    <div className="shop-block-head">
      <span className='Yellowtail-green'>{t("Categories")}</span>
      <h1 className='hero-two-content-h1'>{t("Our Products")}</h1>
    </div>
    <div className="product-grid">
            {products.map(item => (
              <Card key={item.id} product={item} />
            ))}
          </div>
          <div className="shop-btn">
          
          <Link to="/shop" className="hero-two-content-btn">
          {t("Load More")}
          <span className="icon-circle-two">
          <FiArrowRight color="##335B6B" size={16} />
          </span>
          </Link>

    </div>
  </div>
</div>

<div style={{ 
        backgroundImage: `url(${ImageeBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '99vw',
        height: '150vh'
}}>
  <div className="container">
    <div className="Testimonial">
    <span className='Yellowtail-green'>{t("Testimonial")}</span>
    <h1 className='hero-two-content-h1'>{t("What Our Customer Saying?")}</h1>
    <img className='Sara-Taylor-Img' src={SaraTaylor} alt="" />
    <br />
    <img className='Star-img' src={Star} alt="" />
    <br />
    <p className='hero-Testimonial-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy ")}
      <br />
      {t("text of the printing and typesetting industry. Lorem Ipsum has been.")}</p>
    <h3 className='hero-Testimonial-h3'>{t("Sara Taylor")}</h3>
    <p className='hero-Testimonial-p2'>{t("Consumer")}</p>
    <img className='Navigation-Img' src={Navigation} alt="" />
    <hr style={{ backgroundColor: '#E0E0E0', height: '1px', border: 'none', width:'808px', margin:'0 auto', marginTop:'71px' }} />
  </div>
  <div className="counters">
    <div className="counter-card">
      <h1>100%</h1>
      <p>{t("Organic")}</p>
    </div>
    <div className="counter-card">
      <h1>285</h1>
      <p>{t("Active Product")}</p>
    </div>
    <div className="counter-card">
      <h1>350+</h1>
      <p>{t("Organic Orchads")}</p>
    </div>
    <div className="counter-card">
      <h1>25+</h1>
      <p>{t("Years of Farming")}</p>
    </div>
  </div>
  
  </div>
</div>
<div className="blue-bc">
  <div className="container">
    <div className="offer">
      <div className="offer-content">
      <div className="offer-text">
        <span className='Yellowtail-green'>{t("Offer")}</span>
        <h1>{t("We Offer Organic For You")}</h1>
      </div>
      <div className="offer-btn">
        <Link to="/shop" className="hero-content-button">
          {t("View All Product")}
          <span className="icon-circle-two">
          <FiArrowRight color="#EFD372" size={16} />
          </span>
          </Link>
      </div>
      </div>
      <div className="product-grid">
            {vegetables.map(item => (
              <Card key={item.id} product={item} />
            ))}
          </div>
    </div>
  </div>
</div>
<div className="eco-block">
  <div className="eco-img">
    <img src={Eco} alt="" />
  </div>
  <div className="eco-content-block">
    <span className='Yellowtail-green'>{t("Eco Friendly")}</span>
    <h1 className='eco-content-h1'>{t("Econis is a Friendly")}
      <br />
    {t("Organic Store")}</h1>
    <br />
    <h3 className='eco-content-h3'>{t("Start with Our Company First")}</h3>
    <p className='eco-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium ")}<br /> {t("doloremque laudantium. Sed ut perspiciatis.")}
    </p>
    <br />
    <h3 className='eco-content-h3'>{t("Learn How to Grow Yourself")}</h3>
    <p className='eco-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium ")}<br /> {t("doloremque laudantium. Sed ut perspiciatis.")}</p>
    <br />
    <h3 className='eco-content-h3'>{t("Farming Strategies of Today")}</h3>
    <p className='eco-content-p'>{t("Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium ")}<br /> {t("doloremque laudantium. Sed ut perspiciatis.")}</p>
  </div>
  <div className="tree-card-bc">
    <div className="tree-cards">
      <div className="tree-card">
        <img className='tree-card-img' src={OrganicJuice} alt="" />
        <p className='tree-card-p'>{t("Organic Juice")}</p>
      </div>
      <div className="tree-card">
        <img className='tree-card-img' src={OrganicFood} alt="" />
        <p className='tree-card-p'>{t("Organic Food")}</p>
      </div>
      <div className="tree-card">
        <img className='tree-card-img' src={NutsCookis} alt="" />
        <p className='tree-card-p'>{t("Nuts Cookis")}</p>
      </div>
    </div>
  </div>
  <div className="container">
  <div className="news">
  <div className="offer-content">
    <div className="news-text">
      <span className='Yellowtail-green'>{t("News")}</span>
      <h1>{t("Discover weekly content about ")}<br /> {t("organic food, & more")}</h1>
    </div>
    <div className="offer-btn">
      <button className='news-content-button'>
        {t("More News")}
        <span className="icon-circle">
          <FiArrowRight color="white" size={16} />
        </span>
      </button>
    </div>
  </div>
  
  <div className="news-cards">
    <div className="new-card">
      <img src={kapusta} alt="" />
      <p>25 <br /> {t("Nov")}</p>
    </div>
    <div className="new-card">
      <img src={tomato} alt="" />
      <p>25 <br /> {t("Nov")}</p>
    </div>
  </div>
  
  <div className="news-content">
    <div className="new-block">
      <div className="new-head">
        <img src={Vector} alt="" />
        <p>{t("By Rachi Card")}</p>
      </div>
      <div className="new-mean">
        <h4>{t("The Benefits of Vitamin D & How to Get I")}t</h4>
        <p className='eco-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem Ipsum")}</p>
      </div>
      <button className='news-mean-button'>
        {t("Read More")}
        <span className="icon-circle">
          <FiArrowRight color="#EFD372" size={14} />
        </span>
      </button>
    </div>
    
    <div className="new-block">
      <div className="new-head">
        <img src={Vector} alt="" />
        <p>{t("By Rachi Card")}</p>
      </div>
      <div className="new-mean">
        <h4>{t("Our Favourite Summertime Tommeto")}</h4>
        <p className='eco-content-p'>{t("Simply dummy text of the printing and typesetting industry. Lorem Ipsum")}</p>
      </div>
      <button className='news-mean-button'>
      {t("Read More")}
        <span className="icon-circle">
          <FiArrowRight color="#EFD372" size={14} />
        </span>
      </button>
    </div>
  </div>
</div>
<Newsletter/>
  </div>

</div>



    </div>
  )
}

export default Home