import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo'


export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
});

export const rootState = store.getState()