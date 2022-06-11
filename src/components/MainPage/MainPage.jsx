import React from 'react'
import ButtonOrder from '../UI/ButtonOrder/ButtonOrder'
import s from './MainPage.module.sass'
import mainImg from '../media/mainimg.png'

export default function MainPage() {
  return (
    <div className={s.main}>
        <div className={s.mainText}>
          <h4>Welcome To Pages!!!</h4>
          <h1>Your Books From The Best Writter.</h1>
          <p>We believe that reading books are essential to a healthy culture.</p>
          <p>They’re where authors can connect with readers.</p>
          <div className={s.mainBtns}>
            <ButtonOrder/>
            <div className={s.MainDemoBtn}>
              <p>Read Free Demo</p>
            </div>
          </div>
        </div>
        <img src={mainImg} alt="THE DARK LIGHT" />
    </div>
  )
}
