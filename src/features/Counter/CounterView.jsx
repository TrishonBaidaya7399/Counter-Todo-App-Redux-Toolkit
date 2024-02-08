import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./CounterSlice";

const CounterView = () => {
    const count = useSelector(state=> state.counter.count)
    const dispatch  = useDispatch()
    return (
        <div>
            <h2>Count: {count}</h2>
            <div style={{display: "flex", gap:"10px", justifyContent:"center"}}>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(5))}>Increment By 5</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default CounterView;