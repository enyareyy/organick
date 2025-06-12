import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Shop.css'
import Card from '../card/Card'
import shopBc from '../assets/shop-bc.png'
import Newsletter from '../newsletter/Newsletter'
import { useTranslation } from 'react-i18next'
const Shop = () => {
    const [product, setProduct] = useState([])
    
    
      const fetchProducts = async () => {
          const product = await axios.get('https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food')
          console.log(product.data);
          setProduct(product.data)
      } 
    
      useEffect(() => {
        fetchProducts()
      }, []) 

    const {t}=useTranslation()
  return (
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${shopBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
                <h1>{t("Shop")}</h1>
            </div>
        </div>
        <div className="container">
            <div className="product-cards">
                <div className="product-grid">
                {product.map(item => (
                <Card key={item.id} product={item} />
                ))}
            </div>
            </div>
        <Newsletter/>
        </div>
        
    </div>
  )
}

export default Shop