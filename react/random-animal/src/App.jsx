import React , { useState } from 'react';
import AnimalShow from './AnimalShow';
import "./App.css"

function getRandomAnimal(){
  let arr = ['bird','cat','cow','gator','horse'];
  return arr[Math.floor(Math.random() * arr.length)]
}


function App() {
  const [ animals , setAnimal ] = useState([])
  const handleClick = () => {
    setAnimal([...animals,getRandomAnimal()])
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Add Animal</button>
      <div style={{ display: 'flex', gap: '8px' , alignItems:'center', flexWrap:'wrap' }}>
        {
          animals.map((animal,index) => (
            <AnimalShow type={animal} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default App