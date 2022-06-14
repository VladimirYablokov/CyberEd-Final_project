import React from 'react'
import s from './AboutTheAuthor.module.sass'
import authorImg from '../media/aboutauthor.png'
import qr from '../media/authorqr.png'

export default function AboutTheAuthor() {
  return (
    <div className={s.main}>
        <img className={s.authorImg} src={authorImg} alt="Author" />
        <div className={s.borderbox}></div>
        <div className={s.AboutTheAuthor}>
            <p className={s.AboutTheAuthorTitle}>About The Author</p>
            <p className={s.AboutTheAuthorText}>
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
            </p>
            <div className={s.AuthorCounts}>
                <div className={s.AuthorCountBox}>
                    <div className={s.forAfter}>
                        <p className={s.count}>02</p>
                        <p className={s.text}>Books Published</p>
                    </div>
                </div>
                <div className={s.AuthorCountBox}>
                    <div className={s.forAfter}>
                        <p className={s.count}>4.5</p>
                        <p className={s.text}>User Reviews</p></div>
                    </div>
                <div className={s.AuthorCountBox}>
                    <div>
                        <p className={s.count}>04</p>
                        <p className={s.text}>Best Seller Awards</p>
                    </div>
                </div>
            </div>
            <div className={s.businessCard}>
                <img src={qr} alt="" />
                <div className={s.authorContacts}>
                    <p className={s.authorName}>John Abraham , Ph.d</p>
                    <p className={s.authorMail}>Mail:  johnabraham@gmail.com</p>
                    <p className={s.authorPhone}>Phone:  (+2) 123 545 9000</p>
                </div>
            </div>
        </div>
    </div>
  )
}
