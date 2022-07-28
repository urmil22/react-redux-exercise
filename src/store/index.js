import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) { 
            state.counter ++;
        },
        decrement (state, action) {
            state.counter -- ;
         },
        addBy(start, action) { 
            start.counter += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

const store= configureStore({
    reducer: counterSlice.reducer
})

export default store;