import React from 'react'
import s from './ButtonFootPages.module.sass'
import facebook from '../../media/facebookwhite.png'
import twitter from '../../media/twitterwhite.png'
import linkid from '../../media/linkidwhite.png'
import instagram from '../../media/instawhite.png'

export default function ButtonFootPages() {
  return (
    <div className={s.main}>
      <button className={s.btn}>
        <img src={facebook} alt="facebook" />
      </button>
      <button className={s.btn}>
        <img src={twitter} alt="twitter" />
      </button>
      <button className={s.btn}>
        <img src={linkid} alt="linkid" />
      </button>
      <button className={s.btn}>
        <img src={instagram} alt="telegram" />
      </button>
    </div>
  )
}
