import React from 'react'
import { projects } from '../portfolio'
import ProjectCard from './ProjectCard'

export default function AllProjects() {

  const projectCards = projects.map((project, index) => (
    <div key={index}>
      <ProjectCard src={project.title.toLowerCase()} title={project.title} desc={project.description} cat={project.category} type={project.type} link={project.liveLink} />
    </div>
  ))
  return (
    <section id="projects">
      <h1>All Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-5'>{projectCards}</div>
    </section>
  )
}
