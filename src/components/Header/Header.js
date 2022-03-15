import React from 'react'
import st from './Header.module.css'
import photo from './avatar.jpg'

export default function Header() {
  return (
    <div className={st.wrapper}>
        <img className={st.photo} src={photo} alt="Ruslana Pidsadiuk"/>
        <h1 className={st.title}>Portfolio</h1>
        <div className={st.createdBy}>
            <p>Created by</p>
            <h3>Ruslana Pidsadiuk</h3>
        </div>
    </div>
  )
}
