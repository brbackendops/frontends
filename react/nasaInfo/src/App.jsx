import { useState } from 'react'
import Main from './components/main'
import Footer from './components/footer'
import SideBar from './components/sidebar'


function App() {
  const [ open , setOpen ] = useState(false)

  return (
    <div className='relative w-screen h-screen bg-black transition-all duration-300'>
      <Main/>
      <Footer setOpen={setOpen} open={open}/>
      { open ? <SideBar open={open}/> : null }
    </div>
  )
}

export default App
