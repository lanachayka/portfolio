import React from 'react'
import st from './ProjectItem.module.css'

export default function ProjectItem({ project }) {
  const { name, url, photo, technologies, description } = project
  const photoUrl = require(`../../data/screenshots/${photo}`)
  return (
    <div className={st.wrapper}>
        <a className={st.link} rel="noreferrer" href={url} target="_blank">{name}</a>
        <img className={st.photo} src={photoUrl} alt={name} />
        <div className={st.technologies}>
            {technologies.map(techology => (
                <p key={techology}>{techology}</p>
            ))}
        </div>
        <p className={st.description}>{description}</p>
    </div>
  )
}
