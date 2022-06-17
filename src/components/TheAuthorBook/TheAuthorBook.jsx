import React from 'react'
import Book from '../Book'
// import { getBooks } from '../requests'
import s from './TheAuthorBook.module.sass'

export default function TheAuthorBook({books}) {
  return (
    <div className={s.main}>
      <h2>The Author's Book</h2>
      <div>
        {books.map(book=><Book key={book.id} {...book}/>)}
      </div>
    </div>
  )
}
