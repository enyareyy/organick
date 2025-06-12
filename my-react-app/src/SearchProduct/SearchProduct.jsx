import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'
import axios from 'axios' 
import SearchBc from '../assets/SearchBc.png'
import './SearchProduct.css'
import { useTranslation } from 'react-i18next'
const SearchProduct = () => {
  const {t}=useTranslation()
  const { query } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food')
        const found = response.data.find(p => p.title.toLowerCase().includes(query.toLowerCase()))
        setProduct(found || null)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [query])

  if (!product) {
    return (
    <div>
    <div className='about-head' style={{ 
      backgroundImage: `url(${SearchBc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '49vh'}}>
          <div className="container">
          <h1 className='productError'>{t("Product not found for")} "{query}"</h1>
          </div>
          </div>
          </div>
          )
  }

    return( <div>
      <div className='about-head' style={{ 
        backgroundImage: `url(${SearchBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
            <h1 className='productError'>{t("Search results for ")}"{query}"</h1>
            </div>
        </div>
      <div className="search-block">
        <Card product={product}/>
      </div>
        
    </div>)
  }

export default SearchProduct