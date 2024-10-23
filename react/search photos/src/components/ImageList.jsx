import React from 'react'
import ImageShow from './ImageShow';
import './ImageList.css'

function ImageList({ images }) {
  return (
    <div className='img-list'>
      {
        images.map((val,index) => {
          return <ImageShow imageUrl={val.urls.full} term={val.slug} key={val.slug}/>
        })
      }
    </div>
  )
}

export default ImageList