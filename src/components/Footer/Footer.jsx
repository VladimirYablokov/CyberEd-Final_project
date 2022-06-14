import React from 'react'
import s from './Footer.module.sass'
import logo from '../media/nav_logo.png'
import ButtonFootPages from '../UI/ButtonFootPages'


export default function Footer() {
  return (
    <div className={s.main}>
      <div className={s.pages}>
        <div className={s.logobox}>
          <img src={logo} className={s.imgLogo} alt="logo" />
          <p className={s.text}>Pages</p>
        </div>
        <div className={s.btns}>
          <ButtonFootPages/>
        </div>
      </div>
      <div className={s.explore}>
        <h3>Explore</h3>
        <a href="/#">
          <p>Home</p>
        </a>
        <a href="/#">
          <p>About</p>
        </a>
        <a href="/#">
          <p>Articles</p>
        </a>
        <a href="/#">
          <p>Our Store</p>
        </a>
        <a href="/#">
          <p>Contact Us</p>
        </a>
      </div>
      <div className={s.utility}>
        <h3>Utility Pages</h3>
        <a href="/#">
          <p>Style Guide</p>
        </a>
        <a href="/#">
          <p>404 Not Found</p>
        </a>
        <a href="/#">
          <p>Password Protected</p>
        </a>
        <a href="/#">
          <p>Licenses</p>
        </a>
        <a href="/#">
          <p>Changelog</p>
        </a>
      </div>
      <div className={s.feedback}>
        <h3>Keep in Touch</h3>
        <div className={s.adress}>
          <div className={s.adressTitle}>Address :</div>
          <div>
            <p className={s.adressText}>24A Kingston St, Los Vegas</p>
            <p className={s.adressText}>NC 28202, USA.</p>
          </div>
          <div className={s.adressTitle}>Mail :</div>
          <a href='mailto:support@pages.com' className={s.adressText}>support@pages.com</a>
          <div className={s.adressTitle}>Phone :</div>
          <div href="tel:+221234567900" className={s.adressText}>(+22) 123 - 4567 - 900</div>
        </div>
      </div>
    </div>
  )
}
