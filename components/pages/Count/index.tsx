import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountAction, decrement, increment, resetCount } from '../../../store/Count/slice'

const CountComponent: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value)

  const dispatch = useDispatch()

  const [amount, setAmount] = useState<number>(0)

  console.log(count)

  return (
    <div className="container">
      <h1>Count : {count}</h1>
      <div className="flex flex-column">
        <input
          className="ps-2"
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={()=>dispatch(amountAction(amount))} className="ms-2 btn btn-outline-success">add</button>
        <div className="my-3 flex justify-content-between">
          <button onClick={() => dispatch(increment())} className="btn btn-outline-primary">
            +
          </button>
          <button onClick={() => dispatch(decrement())} className="ms-3 btn btn-outline-danger">
            -
          </button>
          <button onClick={() => dispatch(resetCount())} className="ms-3 btn btn-outline-info">
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default CountComponent
