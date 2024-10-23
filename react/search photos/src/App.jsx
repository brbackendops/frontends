import { useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import make_rqst from './utils/requestCall';

function App() {
  const [images , setImages ] = useState([]);
  const [isEntered , setEntered] = useState(false);
  const [term , setTerm] = useState(false);

  async function onSubmit() {
    let res = await make_rqst(term)
    setImages(res.results)
  }

  useEffect(() => {
    if (term === '') setImages([])
  },[term])

  return (
    <div className='app'>
      <SearchBar setTerm={setTerm} onSubmit={onSubmit}/>
      {
        images.length > 0 ? <ImageList images={images}/> : ''
      }
    </div>
  )
}

export default App
