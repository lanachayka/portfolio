import React from 'react'
import st from './Footer.module.css'

export default function Footer() {
    return (
        <div className={st.wrapper}>
            <h5 className={st.title}>More here: <a href="https://github.com/lanachayka?tab=repositories" rel="noreferrer" target="_blank" className={st.link}>https://github.com/lanachayka</a></h5>
        </div>
    )
}
