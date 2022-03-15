import React from 'react'
import { projects } from '../../data/projects'
import ProjectItem from '../ProjectItem/ProjectItem'
import st from './ProjectsList.module.css'

export default function ProjectsList() {
    return (
        <ul className={st.wrapper}>
            {projects.map(project => (
                <li key={project.id}><ProjectItem project={project} /></li>
            ))}
        </ul>
    )
}
