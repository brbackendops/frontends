import React, { useState } from 'react'
import Input from '../../components/input'
import Update from '../../components/update'
import List from '../../components/list'
import './Home.css'
import { useSelector } from 'react-redux'

function Home() {
  const needUpdate = useSelector((store) => store.todos.toBeUpdated)
  return (
    <div className='home-main'>
      {
        needUpdate ? <Update/> : null
      }
      <Input/>
      <List/>
    </div>
  )
}

export default Home