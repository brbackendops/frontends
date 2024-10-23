import React, { useState } from 'react'

function useLocalStorage(keyName,defaultValue) {
    const [storedValue , setStoredValue] = useState(() => {
        try {
            user = window.localStorage.getItem(keyName)
            if ( user ){
                return JSON.parse(user)
            } else {
                window.localStorage.setItem(keyName,JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch (error) {
            console.log(error)
            return defaultValue
        }
    });

    const setValue = (value) => {
        try {
            window.localStorage.setItem(keyName,JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
        setStoredValue(value)
    };

    return [storedValue,setValue]
}

export default useLocalStorage