import React , { useState } from 'react'
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectForm from '../ProjectForm';

function ProjectList({ db , onSave }) {

  const [beingEdited , setProjectBeingEdited] = useState({})

  const handleEdit = (project) => {
    setProjectBeingEdited(project)
  }

  const cancelEditing = () => {
    setProjectBeingEdited({})
  }

  return (
    <div className="row">
      {db.projects.map((project) => (
        <div className='cols-sm' key={project.id}>
          {
            project === beingEdited ? (
              <ProjectForm onCancel={cancelEditing} onSave={onSave}/>
            ): (
              <ProjectCard project={project} onEdit={handleEdit}/>
            )
          }
        </div>
      ))}
    </div>   
  )
}

ProjectList.propTypes = {
  db: PropTypes.objectOf(PropTypes.arrayOf(Object)).isRequired
};

export default ProjectList