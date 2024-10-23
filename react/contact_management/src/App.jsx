import { useEffect, useState } from 'react'
import './App.css'
import CreateContact from './components/CreateContact'
import ListContact from './components/ListContact'
import db from './api/index'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(db.contacts)
  },[])

  return (
    <div className='App'>

      <div className='list'>
        <ListContact data={data} setData={setData}/>
      </div>
      <div className='form-contact'>
        <CreateContact setData={setData} data={data}/>
      </div>
    </div>
  )
}

export default App
