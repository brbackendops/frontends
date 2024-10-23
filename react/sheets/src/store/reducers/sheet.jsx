import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    width: 600,
    height: 600
}

export const sheetSlice = createSlice({
    name:'sheet',
    initialState: initialState,
    reducers: {

    }
})



export const {} = sheetSlice.actions;

export default sheetSlice.reducer;