import React from 'react'
import Article from '../Article/Article'
import Tittle from '../UI/Tittle/Tittle'
import s from './ArticlesResources.module.sass'
// import articles1 from '../media/articles1.png'

export default function ArticlesResources({articles}) {
  return (
    <div className={s.main}>
        <Tittle>Articles & Resources</Tittle>
        <div className={s.articles}>
          {articles.map(article => <Article key={article.id} {...article}/>)}
        </div>
    </div>
  )
}
