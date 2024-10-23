import Header from './components/header'
import List from './components/list'
import './App.css'
import Detail from './components/detail'
import { useState } from 'react'

function App() {
  const [ name , setName ] = useState('')
  return (
    <div className='App'>
      <Header/>
      <div className='app-list'>
        <List setName={setName}/>
        <Detail name={name}/>
      </div>
    </div>
  )
}

export default App
