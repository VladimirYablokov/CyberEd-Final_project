import React from 'react'
import Partners from '../Partners/Partners'
import Tittle from '../UI/Tittle/Tittle'
import s from './TrustedByTheBest.module.sass'

export default function TrustedByTheBest({partners}) {
  return (
    <div className={s.main}>
      <Tittle>Trusted By The Best</Tittle>
      <div className={s.partners}>
        {partners.map(partners => <Partners key={partners.id} {...partners}/>)}
      </div>
    </div>
  )
}
