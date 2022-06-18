import React from 'react'
import img from '../media/authorbook1.png'
import s from './Book.module.sass'

export default function Book({name, price, comment, type, picture}) {
  return (
    <div className={s.main}>
        <img src={img} alt={picture}/>
        <div className={s.bookinfo}>
            <h3 className={s.name}>{name}</h3>
            <p className={s.price}>{price}</p>
            <p className={s.comment}>{comment}</p>
            <p className={s.type}>{type}</p>
        </div>
    </div>
  )
}
