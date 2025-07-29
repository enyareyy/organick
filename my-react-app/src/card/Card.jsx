import React from 'react'
import './Card.css' 
import './Card.responsive.css'
import { Link, useNavigate } from 'react-router-dom'
import Star from '../assets/Star.png'
import { useTranslation } from 'react-i18next'


const Card = ({ product }) => {
 const {t}=useTranslation()

    return (
        <div className='cards'>
            <Link to={`/shop-single/${product.id}`}>
        <div className="card">
            <div className="cardType">
            <p>{t(product.type)}</p>
            </div>
            <img className='ProductImg' src={product.link} alt={product.title} />
            <h3>{t(product.title)}</h3>
            <hr style={{ backgroundColor: '#E0E0E0', height: '1px', border: 'none' }} />

            <div className="price">
                <div>
                <span className="original">{product.price}</span>
                <span className="discount">{product.discountPrice}</span>
            </div>
                <img className='imgStarCart' src={Star} alt="" />
            </div> 
        </div>
        </Link>
        </div>
)
}

export default Card
