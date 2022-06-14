import React from 'react'
import s from './ButtonNavPages.module.sass'
import facebooklogo from '../../media/facebooklogo.png'
import twitterlogo from '../../media/twitterlogo.png'
import linklogo from '../../media/linkidlogo.png'

export default function ButtonNavPages() {

  return (
    <div className={s.main}>
      <button className={s.btn}>
        <a href="/#"><img src={facebooklogo} alt="facebooklogo" /></a>
      </button>
      <button className={s.btn}>
        <a href="/#"><img src={twitterlogo} alt="twitterlogo" /></a>
      </button>
      <button className={s.btn}>
        <a href="/#"><img src={linklogo} alt="linklogo" /></a>
      </button>
    </div>

  )
}
