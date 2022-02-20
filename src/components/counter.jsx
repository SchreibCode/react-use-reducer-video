import React from "react";
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <div className="text-3xl font-bold underline">{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
