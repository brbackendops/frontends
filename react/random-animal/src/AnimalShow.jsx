import React, { useState } from 'react';
import './AnimalShow.css';

import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';


const animalsPhotos = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}

function AnimalShow({type}) {

  const [click , setClick] = useState(0);
  function handleClicks(){
    setClick(click + 1);
  };

  return (
    <div onClick={handleClicks} className='animal-card'>
      <img src={animalsPhotos[type]} alt={type} style={{ width: '100px'}}/>
      <img src={heart} alt='like' style={{ width: 10 + 5 + click}} className='heart'/>
    </div>
  )
}

export default AnimalShow