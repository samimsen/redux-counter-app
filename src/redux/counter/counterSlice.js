import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incerement: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incerementByAmount: (state, action) => { state.value += Number(action.payload) },
        decrementByAmount: (state, action) => { state.value -= Number(action.payload) }
    }
})

export const { incerement, decrement, incerementByAmount, decrementByAmount } = counterSlice.actions
export default counterSlice.reducer