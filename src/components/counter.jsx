import React from "react";
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="h-full flex items-center justify-center">
            <div className="flex text-white text-6xl p-4 font-bold">
                <button
                    className="flex items-center justify-center bg-blue px-6 pb-2 w-24 h-24 font-bold"
                    onClick={() => setCount((count) => count - 1)}
                >
                    -
                </button>
                <div className="w-28 h-24 p-4 text-center flex items-center justify-center bg-secondary-dark-400">
                    {count}
                </div>
                <button
                    className="flex items-center justify-center bg-blue px-6 w-24 h-24 font-bold"
                    onClick={() => setCount((count) => count + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
}
