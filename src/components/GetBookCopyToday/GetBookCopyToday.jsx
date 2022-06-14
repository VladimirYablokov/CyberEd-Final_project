import React from 'react'
import s from './GetBookCopyToday.module.sass'
import bookimg from '../media/getbookimg.png'

export default function GetBookCopyToday() {
  return (
    <div className={s.main}>
        <div className={s.text}>
            <h2>Get Book Copy Today!</h2>
            <p>
                We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.
            </p>
        </div>
        <img src={bookimg} alt="Bookimage" />
    </div>
  )
}
