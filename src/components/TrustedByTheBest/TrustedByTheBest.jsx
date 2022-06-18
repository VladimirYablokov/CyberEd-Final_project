import React from 'react'
import Partners from '../Partners/Partners'
import s from './TrustedByTheBest.module.sass'

export default function TrustedByTheBest({partners}) {
  return (
    <div className={s.main}>
      <h2> Trusted By The Best</h2>
      <div className={s.partners}>
        {partners.map(partners => <Partners key={partners.id} {...partners}/>)}
      </div>
    </div>
  )
}
