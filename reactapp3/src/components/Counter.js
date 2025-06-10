import { useState } from "react";
import "./counter.css";
function Counter(){
    const[count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
     function decrement(){
        setCount(count - 1);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <button onClick={increment} class="in">Increment</button>
            <button onClick={decrement} class="de">Decrement </button>
        </div>
    );
}
export default Counter