import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShopSingleBc from '../assets/ShopSingle-bc.jpg'
import './ShopSingle.css'
import Star from '../assets/Star.png'
import { FiArrowRight } from 'react-icons/fi'
import Card from '../card/Card';
import Newsletter from '../newsletter/Newsletter';
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart';


const ShopSingle = () => {
    const { addItem } = useCart();
    const {t}=useTranslation()
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [shop, setShop] = useState([])
    const [quantity, setQuantity] = useState(1); // количество
const getSingleProduct =async () =>{
    const res =await axios.get(`https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food/${id}`)
    setProduct(res.data);
    console.log(res.data);
} 
useEffect(()=>{
    getSingleProduct();
}, [id])

const fetchProductsFour = async () => {
    const products = await axios.get('https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food')
    console.log(products.data);
    const eight = products.data.slice(0, 4)
    setShop(eight)
} 

useEffect(() => {
    fetchProductsFour()
}, []) 



const handleAddToCart = () => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) return alert("Введите корректное количество");
  
    const price = parseFloat(String(product.discountPrice).replace(/[^\d.-]/g, ''));
  
    const productToAdd = {
      ...product,
      discountPrice: price,
      quantity: qty
    };
  
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const index = existing.findIndex(item => item.id === productToAdd.id);
  
    if (index > -1) {
      existing[index].quantity += qty;
    } else {
      existing.push(productToAdd);
    }
  
    localStorage.setItem('cart', JSON.stringify(existing));
window.dispatchEvent(new Event('cart-updated')); // для Header
// alert("Товар добавлен в корзину");

  };
  


if (!product){
    return <h1 className='errorLoading'>{t("Loading")}...</h1>;
}
return (
    <div>
        <div className='about-head' style={{ 
        backgroundImage: `url(${ShopSingleBc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '49vh'}}>
            <div className="container">
                <h1>{t("Shop Single")}</h1>
            </div>
        </div>
        <div className="container">
            <div className="single-card">
                <div className="single-img">
                    <div className="card-Type">
                        <p>{t(product.type)}</p>
                    </div>
                    <div className="sinle-card-img">
                        <img src={product.link} alt="" />
                    </div>
                </div>
            
            <div className="single-content">
                <div className="single-text">
                    <h1>{t(product.title)}</h1>
                    <img src={Star} alt="" />
                    <br />
                    <div className="single-span">
                        <span className='single-original'>{product.price}</span>
                        <span className='single-discount'>{product.discountPrice}</span>
                    </div>
                    <br />
                    <p className='hero-two-content-p'>{t(product.info)}</p>
                </div>
                <div className="single-btn">
                    <h4>
                    {t("Quantity")}:
                    </h4>
                    <input type="text" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                                placeholder='Quantity...'
                    />
                    <button onClick={handleAddToCart} className="hero-two-content-btn">
                                {t("Add To Cart")}
                                <span className="icon-circle-two">
                                    <FiArrowRight color="##335B6B" size={16} />
                                </span>
                            </button>
                </div>
            </div>
        </div>

        <div className="about-two-content">
            <div className="about-two-head">
                <span className='about-two-1'>{t("Product Description")}</span>
                <span className='about-two-2'>{t("Additional Info")}</span>
            </div>
            <p className='hero-two-content-p'>{t("Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ")}<br />{t(" ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple ")}<br />{t(" sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.")}</p>
        </div>

        <div className="single-cards">
            <h1 className='hero-two-content-h1'>{t("Related Products")}</h1>

            <div className="product-grid">
            {shop.map(item => (
            <Card key={item.id} product={item} />
            ))}
        </div>
        </div>

        <Newsletter/>

        </div>
        

    </div>
)
}

export default ShopSingle


