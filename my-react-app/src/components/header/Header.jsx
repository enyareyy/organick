import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import '../../styles/styles.css';
import './Header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/18in.js';

const Header = () => {
  const [value, setValue] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const updateTotalItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  };

  useEffect(() => {
    updateTotalItems();

    const handleStorageChange = () => updateTotalItems();
    window.addEventListener('storage', handleStorageChange);

    const handleCartUpdated = () => updateTotalItems();
    window.addEventListener('cart-updated', handleCartUpdated);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cart-updated', handleCartUpdated);
    };
  }, []);

  const handleSearch = () => {
    if (!value.trim()) return;
    navigate(`/search/${value.trim()}`);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav>
      <div className="container">
        <div className="header">
          <Link to="/">
            <div className="nav-logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="menu">
            <ul>
              <li><Link to="/">{t("Home")}</Link></li>
              <li><Link to="/about">{t("About")}</Link></li>
              <li className="dropdown-parent">
                <Link>{t("Pages")}</Link>
                <ul className="dropdown">
                  <br /> 
                  <li><Link to="/portfolio-standard">{t("Portfolio Standard")}</Link></li>
                  <br />
                  <li><Link to="/our-team">{t("Our Team")}</Link></li>
                  <br />
                  <li><Link to="/contact-us">{t("Contact Us")}</Link></li>
                </ul> 
              </li>
              <li><Link to="/shop">{t("Shop")}</Link></li>
              <li><Link to="/services">{t("Services")}</Link></li>
            </ul>
          </div>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch} className="search-button">
              <FiSearch size={18} color="#fff" />
            </button>
          </div>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "cart-button active" : "cart-button"
            }
          >
            <button className="cart-icon">
              <FiShoppingCart size={20} />
            </button>
            <span>{t("Cart")} ({totalItems})</span>
          </NavLink>

          <div className="trnslt">
            <h4 onClick={() => i18n.changeLanguage("en")}>EN</h4>
            <h4>―</h4>
            <h4 onClick={() => i18n.changeLanguage("ru")}>RU</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
