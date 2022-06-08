// import React, { useState } from 'react'
import ButtonNavPages from '../UI/ButtonNavPages/ButtonNavPages'
import ButtonOrder from '../UI/ButtonOrder/ButtonOrder'
import s from './Navigation.module.sass'
import logo from '../media/nav_logo.png'
<<<<<<< HEAD
// import facebook from '../media/facebooklogo.png'
=======
import facebook from '../media/facebooklogo.png'
>>>>>>> b22bf7bd30fb16b1bb229e602a085be7e57203f1


export default function Navigation() {

  return (
    <nav className={s.nav}>
        <div className={s.btnBar}>
            <img src={logo} className={s.imgLogo} alt="logo" />
            <p className={s.text}>Pages</p>
<<<<<<< HEAD
            <ButtonNavPages/>
=======
            <ButtonNavPages><img src={facebook} alt="" /></ButtonNavPages>
>>>>>>> b22bf7bd30fb16b1bb229e602a085be7e57203f1
            <ButtonNavPages/>
            <ButtonNavPages/>
        </div>
        <a href="/#" className={s.link}>Home</a>
        <a href="/#" className={s.link}>About</a>
        <a href="/#" className={s.link}>Pages</a>
        <a href="/#" className={s.link}>Contact Us</a>
        <ButtonOrder/>
    </nav>
  )
}
