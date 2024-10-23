import React from 'react';
import ProjectList from './ProjectList';
import db from '../api/db.json';
import Sidebar from './sidebar/Sidebar';
import CreateForm from './CreateForm/CreateForm';
import { CSSTransition , TransitionGroup} from "react-transition-group";
import './ProjectPage.css'

function ProjectPage() {
  const [formClicked,setFormClicked] = React.useState(true)

  const saveProject = (project) => {
    console.log('Saving project: ', project)
  }
  return (
    <div className='main-page'>
        <div className='side'>
              {                        
                formClicked ? <Sidebar clicked={formClicked} setClick={setFormClicked}/> : <CreateForm clicked={formClicked} setClick={setFormClicked}/>
              }
        </div>
      <div className='main-body'>
        <h1>Projects</h1>
        <ProjectList 
          db={db}
          onSave={saveProject}  
          />
      </div>
      
    </div>
  )
}

export default ProjectPage