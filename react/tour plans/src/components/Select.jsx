import React, { useState } from 'react'
import { RiArrowDownCircleLine } from "react-icons/ri";
import './Select.css'

function Select({ optionsCount , setTotal }) {

  function generateElements(optionsCount){
    const listItems = [];
    for(let x=0; x <= optionsCount; x++){
      listItems.push(<option value={x} key={x}>{x}</option>)
    }

    return listItems
  }

  return (
    <>
        <div className="select">
            <span className="focus"> <RiArrowDownCircleLine/></span>
            <select id="selection" onChange={ (e) => setTotal(e.target.value)}>
                <option value="0">select</option>
                {
                  generateElements(optionsCount)
                }
            </select>
        </div>
    </>
  )
}

export default Select