import React from 'react'
import './List.css'
import Card from '../Card'
import { usePokemonListQuery } from '../../query/index.jsx'

function List({ setName }) {
  const { data , isLoading , isError  } = usePokemonListQuery();
  
  if (isLoading) {
    return <div>Loading ...</div>
  }
  
  if (isError) {
    return <div>erro in fetching data</div>
  }
  
  return (
    <div className='list-box'>
      {
        data.results.map((info) => (
          <Card name={info.name} setName={setName} key={info.name}/>
        ))
      }
    </div>
  )
}

export default List