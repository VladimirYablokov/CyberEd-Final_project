import React from 'react'
import Article from '../Article/Article'
import s from './ArticlesResources.module.sass'

export default function ArticlesResources({articles}) {
  return (
    <div className={s.main}>
        <h2>Articles & Resources</h2>
        <div className={s.articles}>
          {articles.map(article => <Article key={article.id} {...article}/>)}
        </div>
    </div>
  )
}
