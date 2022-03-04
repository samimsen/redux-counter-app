import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incerement, decrement, incerementByAmount, decrementByAmount } from "../redux/counter/counterSlice"


function Counter() {

    const [amount, SetAmount] = useState(3)
    const countValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incerement())}>Increment</button>
            <br />
            <br />
            <input type="number" value={amount} onChange={e => SetAmount(e.target.value)} />
            <br />
            <br />
            <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement by Amount</button>
            <button onClick={() => dispatch(incerementByAmount(amount))}>Increment by Amount</button>

        </div>

    )
}

export default Counter