import React from 'react'
import { render , screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import Home from './Home'

const mockStore = configureStore([]);

describe("Testing Home Page",() => {
    let store;

    beforeEach(() => {
        store = mockStore({
            todos: {
                toBeUpdated: false
            }
        })
    })

    it("load the component",() => {
        render(<Home/>)
    })
})