import React from 'react'
import s from './Learn.module.sass'

export default function Learn({number, text}) {
  return (
    <div className={s.main}>
        <div className={s.number}>{number}</div>
        <p className={s.text}>{text}</p>
    </div>
  )
}
