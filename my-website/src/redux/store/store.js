import { createSlice, configureStore } from "@reduxjs/toolkit";

const dimentionsSlice = createSlice({
    name:'dimentions',
    initialState:{
        headerHeight: 0,
        headerWidth:0,
    },
    reducers: {
        setHeight: (state, payload) => {
            state.headerHeight = payload.payload
        },
        setWidth: (state, payload) =>{
            state.headerWidth = payload.payload
        }
    }
})

export const { setHeight, setWidth } = dimentionsSlice.actions

const store = configureStore({
    reducer: dimentionsSlice.reducer
})

export default store;