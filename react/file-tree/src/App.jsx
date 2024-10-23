import { useState } from 'react'
import './App.css'


function Folder ({name , children}) {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <div>
      <i class="blue folder icon"></i>
      {isOpen ? <i class="caret down icon"></i>: <i class="caret right icon"></i>}
      <span onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer'}}>{name}</span>
      <div style={{ marginLeft: '18px'}}>
        { isOpen && children } 
      </div>
    </div>
  )
}

function File(props){
  const { name } = props;
  const get_name = name.split('.')[1]
  const options = {
    mp3: 'file audio outline ',
    mp4: 'file video outline',
    jpeg: 'file image outline',
    jpg: 'file image outline',
    png: 'file image outline',
    txt: 'file outline'
  }
  return (
    <div>
      <i className={ `${options[get_name]} icon` }></i>
      <span contentEditable>{props.name}</span>
    </div>
  )
}

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Musics">
          <File name="jai ho.mp3"/>
          <File name="marakuma nenjam.mp3"/>
        </Folder>
        <File name="cat.jpg"/>
        <File name="home.jpg"/>
        <File name="learn.txt"/>
      </Folder>
      <Folder name="My Home"></Folder>
    </div>
  )
}

export default App
