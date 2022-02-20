import React, { useReducer } from "react";
import { useState } from "react";

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "increase":
            return { ...state, count: state.count + 1 };
        case "decrease":
            return { ...state, count: state.count - 1 };
    }
};

const initialState = { count: 0 };

export function Counter() {
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    const { count } = state;

    return (
        <div className="flex text-white text-6xl p-4 font-bold">
            <button
                className="flex items-center justify-center bg-blue px-6 pb-2 w-24 h-24 font-bold"
                onClick={() => dispatch({ type: "decrease" })}
            >
                -
            </button>
            <div className="w-28 h-24 p-4 text-center flex items-center justify-center bg-secondary-dark-400">
                {count}
            </div>
            <button
                className="flex items-center justify-center bg-blue px-6 w-24 h-24 font-bold"
                onClick={() => dispatch({ type: "increase" })}
            >
                +
            </button>
        </div>
    );
}
