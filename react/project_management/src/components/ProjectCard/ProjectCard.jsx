import React, { useEffect } from 'react'
import './ProjectCard.css';

function trimDesc(desc){
    return desc.substring(0,60) + '...'
}

function ProjectCard({ project , onEdit }) {
  const handleClick = (projectBeingEdited) => {
    console.log("edited!")
  };

  const handleEditClick = (currentProject) => {
    onEdit(currentProject);
  }

  useEffect(() => {
    console.log("saving")
  },[])

  return (
          <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{trimDesc(project.description)}</p>
              <p>Budget : {project.budget.toLocaleString()}</p>
              <button onClick={() => handleEditClick(project)}>
                <span className='icon-edit'></span>
                Edit
              </button>
            </section>
          </div>
  )
}

export default ProjectCard