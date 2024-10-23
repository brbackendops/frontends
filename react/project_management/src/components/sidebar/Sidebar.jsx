import React from 'react'
import Plus from '../../icons/Plus'
import { animated , useSpring } from '@react-spring/web'
import './Sidebar.css'

function Sidebar({ clicked , setClick }) {
  const [springs,api] = useSpring(() => ({
    from: { x: 0},
  }))
  const handleClick = () => {
    api.start({
      from: {
        x: 0
      },
      to: {
        x: 100,
      }
    })
    setClick(!clicked)
  }
  return (
    <animated.div className='sidebar-main' style={{ ...springs}}>
        <div className='btn-box' onClick={handleClick}>
            <Plus className='plus-icon'/>
        </div>
    </animated.div>
  )
}

export default Sidebar