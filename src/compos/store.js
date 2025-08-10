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
        },
        remove:(state,action) => {
            const rct = state.tasks.find((tm) => tm.id==action.payload)
            let index = state.tasks.indexOf(rct);
            state.tasks.splice(index,1)
        }
    }
})

export const {addtsk,clrs,remove} = tmslice.actions
export const tmworker = tmslice.reducer
