import React, { useState } from 'react'
import './Detail.css'
import { useGetPokemonByNameQuery } from '../../query'

function Detail({ name }) {
  const { data , isFetching , isLoading , isError  } = useGetPokemonByNameQuery(name)
  const [ IsImageLoading , setImageLoading ] = useState(true)

  if (isLoading || isFetching) {
    return <div style={{ textAlign:'center', }}>Loading ...</div>
  }

  if (isError) {
    return <div style={{ textAlign:'center', }}>Error In Fetching...</div>
  }
  
  const handleImageLoading = () => {
    setImageLoading(false)
  }

  return (
    <div className='detail-box'>
        {
          IsImageLoading ?? <h1>Loading....</h1> 
        }
        <img src={ data?.sprites?.front_default} onLoad={handleImageLoading} style={{ display: IsImageLoading ? 'none': 'block',}}/>
        <h1>{name}</h1>
    </div>
  )
}

export default Detail