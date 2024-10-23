import React from 'react'
import './Row.css'

function Row({ children }) {
  return (
    <tr>
      {children}
    </tr>
  )
}

export default Row