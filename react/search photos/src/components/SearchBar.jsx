import React, { useEffect, useState } from 'react';
import make_rqst from '../utils/requestCall';
import './SearchBar.css'


function SearchBar( { onSubmit , setTerm } ) {

    const handleTerms = (e) => {
        e.preventDefault();
        setTerm(e.target.value);
    }

    const handleKeyword = (e) => {
        if( e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
    <div className='search-body'>
        <input type='text' placeholder='search images!' onChange={handleTerms} onKeyDown={handleKeyword}/>
    </div>
  )
}

export default SearchBar