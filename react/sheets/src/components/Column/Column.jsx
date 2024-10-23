import React from 'react'
import './Column.css'

function Column({ children }) {
  return (
    <td className='col'>
      {children}
    </td>
  )
}

export default Column