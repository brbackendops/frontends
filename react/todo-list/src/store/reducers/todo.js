import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    text: null,
    toBeUpdated: false,
}

const todoSlice = createSlice({
    name:'todos',
    initialState: initialState,
    reducers: {
        addTodo(state,action){
            if (action.payload.text === ' ' || action.payload.text === null) return
            state.data.push({
                id: new Date().valueOf(),
                text: action.payload.text,
                completed: false,
            })
        },
        deleteTodo(state,action){
            state.data = state.data.filter((todo) => {
                console.log(todo.id , action.payload.id)
                return todo.id != action.payload.id
            });            
        },
        updateTodo(state,action) {
            const { id , text } = action.payload
            const todo = state.data.find((todo) => todo.id == id)
            if (todo) {
                todo.text = text
            }
        },
        setUpdateValue(state,action) {
            state.text = action.payload
        },
        ToUpdated(state,action) {            
            state.toBeUpdated = action.payload
        }
    }
})


export const {  addTodo, deleteTodo , updateTodo , setUpdateValue , ToUpdated } = todoSlice.actions;
export default todoSlice.reducer;