import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css';
import './Cart.responsive.css'
import { useTranslation } from 'react-i18next';

const Cart = () => { 
  const {t}=useTranslation() 
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
    }
    return 0;
  };

  const updateItemQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + parsePrice(item.discountPrice) * item.quantity,
    0
  );

  return (                                                                     
    <div className="container">
      <h1>{t("Cart")}</h1>
      {cart.length === 0 ? (
        <p>{t("Your cart is empty")}</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>{t("Item")}</th>
                <th>{t("Price")}</th>
                <th>{t("Qty")}</th>
                <th>{t("Total")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="cart-product">
                    <img src={item.link} alt={item.title} />
                    <h4>{item.title}</h4>
                  </td>
                  <td>${parsePrice(item.discountPrice).toFixed(2)}</td>
                  <td>
                    <div className="quantity-control">
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td className='TableTotal'>${(parsePrice(item.discountPrice) * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}>
                      <FaTrashAlt size={18} color="#274C5B" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p className="total-label">
              {t("Subtotal")}: <span className="total-amount"><strong>${subtotal.toFixed(2)}</strong></span>
            </p>
            <div className="checkout-box">
              <span className="total-label">{t("Total")}:</span>
              <span className="total-amount">${subtotal.toFixed(2)}</span>
              <button className="checkout-btn">{t("Checkout")}</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
