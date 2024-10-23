import { createSlice } from '@reduxjs/toolkit';


const initialState = {}

export const cellReducer = createSlice({
    name:'cell',
    initialState: initialState,
    reducers: {
        setValue: (state,action) => {
            const { cellId, value } = action.payload;
            if (!state.hasOwnProperty(cellId)) {
                state[cellId] = {
                    "value":  value,
                }
            } else {
                state[cellId]["value"] = value
            }
        }
    }
});

export const { setValue } = cellReducer.actions;
export default cellReducer.reducer;