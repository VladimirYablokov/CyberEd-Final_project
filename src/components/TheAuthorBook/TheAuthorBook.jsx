import React from 'react'
import Book from '../Book'
import Tittle from '../UI/Tittle/Tittle'
import s from './TheAuthorBook.module.sass'

export default function TheAuthorBook({books}) {
  return (
    <div className={s.main}>
        <Tittle>The Author's Book</Tittle>  
      <div className={s.books}>
        {books.map(book=><Book key={book.id} {...book}/>)}
      </div>
    </div>
  )
}
