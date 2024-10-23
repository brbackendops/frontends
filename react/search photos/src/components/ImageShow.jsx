import React from 'react'
import './ImageShow.css';

function ImageShow({ imageUrl , term }) {

  return (
    <div className='image-card'>
      <img src={ imageUrl } alt={term} loading='lazy'/>
    </div>
  )
}

export default ImageShow