import React from 'react'
import './Sheet.css'
import Row from '../Row/Row'
import Column from '../Column/Column'
import Cell from '../Cell'
// import {} from '../../store/reducers/cell'
import { useSelector ,  } from 'react-redux'

function Sheet() {
  const cell = useSelector((state) => state.cell)
  const sheet = useSelector((state) => state.sheet)

  const noOfCols = sheet.width / 100;
  const noOfRows = sheet.height / 25;

  return (
    <table className='sheet'>
      <tbody>
        {[...Array(noOfRows)].map((row,rIndex) => (
          <Row key={rIndex}>
            {[...Array(noOfCols)].map((col,cIndex) => (
              <Column key={cIndex}>
                <Cell cellId={`${rIndex}-${cIndex}`}/>
              </Column>
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  )
}

export default Sheet