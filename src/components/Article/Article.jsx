import React from 'react'
import img from '../media/articles1.png'
import s from './Article.module.sass'

export default function Article({name, comment, date, picture}) {
  return (
    <div className={s.main}>
        <img src={img} alt={picture} />
        <p className={s.name}>{name}</p>
        <p className={s.comment}>{comment}</p>
        <p className={s.date}>{date}</p>   
    </div>
  )
}
