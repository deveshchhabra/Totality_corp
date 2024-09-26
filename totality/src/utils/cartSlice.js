import { createSlice } from "@reduxjs/toolkit"
const appSlice=createSlice({
    name:"app",
    initialState:{
        items:[],

    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItems,removeItems,clearCart}=appSlice.actions;
export default appSlice.reducer;