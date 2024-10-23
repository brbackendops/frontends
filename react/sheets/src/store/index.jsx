import { configureStore } from '@reduxjs/toolkit';
import  cellReducer  from './reducers/cell';
import sheetReducer from './reducers/sheet'

export const store = configureStore({
    reducer: {
        cell: cellReducer,
        sheet: sheetReducer,
    },
})

