import React, { useState , useEffect, useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import cell, { setValue } from '../../store/reducers/cell'
import './Cell.css'

function Cell({cellId}) {
    const [editMode,setEditMode] = useState(false)
    const inputRef = useRef(null)
    const cellState = useSelector((state) => state.cell)
    const dispatch = useDispatch()

    const closeOutsideInput = (e) => {
        if (e.target.dataset.cellId !== cellId) {
            setEditMode(false)
        }
    }

    const handleValue = (e) => {
        dispatch(setValue({cellId: cellId, value:e.target.value}))
    }

    useEffect(() => {

        document.addEventListener('click',closeOutsideInput)
        return () => {
            document.removeEventListener('click',closeOutsideInput)
        }

    },[])

    return editMode ? (
        <input className='cell-input' ref={inputRef} data-cell-id={cellId} value={cellState[cellId]?.value} onChange={handleValue}/>
    ):(
        <div className='cell-label' data-cell-id={cellId} onClick={() => setEditMode(true)}>{cellState[cellId]?.value}</div>
    )
}

export default Cell