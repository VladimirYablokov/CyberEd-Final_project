import React from 'react'
import Learn from '../Learn/Learn'
import s from './WhatWillYouLearn.module.sass'
import img from '../media/skillimg.png'

export default function WhatWillYouLearn({skills}) {
  return (
    <div className={s.main}>
        <h2>What Will You Learn?</h2>
        <div className={s.content}>
          <div className={s.learn}>
            {skills.map(skill=> <Learn key={skill.id} {...skill}/>)}
          </div>
          <img className={s.img} src={img} alt="Author" />
          <div className={s.borderbox}></div>

        </div>

    </div>
  )
}
