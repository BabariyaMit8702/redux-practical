import { createSlice } from "@reduxjs/toolkit";
// new Date().toLocaleString
const initialState = {
    tasks : localStorage.getItem('mydata') == null ? [] : JSON.parse(localStorage.getItem('mydata')),
}

export const tmslice = createSlice({
    name:'any name',
    initialState,
    reducers:{
        addtsk:(state,action) => {
            state.tasks.push(action.payload)
        },
        clrs:(state) => {
            state.tasks = [];
        }
    }
})

export const {addtsk,clrs} = tmslice.actions
export const tmworker = tmslice.reducer
