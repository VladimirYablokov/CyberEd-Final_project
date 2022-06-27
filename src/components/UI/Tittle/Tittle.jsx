import React from 'react'
import s from './Tittle.module.sass'

export default function Tittle({children}) {
  return (
    <div className={s.main}>
        <h2>{children}</h2>  
    </div>
  )
}
