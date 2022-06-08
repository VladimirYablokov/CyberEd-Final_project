import React from 'react'
import ButtonOrder from '../UI/ButtonOrder/ButtonOrder'
import s from './MainPage.module.sass'

export default function MainPage() {
  return (
    <div className={s.main}>
        <div className={s.mainText}>
            <h4>Welcome To Pages!!!</h4>
            <h1>Your Books From The Best Writter.</h1>
            <p>We believe that reading books are essential to a healthy culture.</p>
            <p>They’re where authors can connect with readers.</p>
        </div>
        <div className={s.mainBtns}>
            <ButtonOrder/>
            <div className={s.MainDemoBtn}>Read Free Demo</div>
        </div>
    </div>
  )
}
