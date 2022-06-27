import React from 'react'
import s from './Partners.module.sass'


export default function Partners({logo, name, comment}) {
  return (
    <div className={s.main}>
      <img src={`../media/${logo}`} alt={logo} />
      <h3 className={s.name}>{name}</h3>
      <p className={s.comment}>{comment}</p>
    </div>
  )
}
