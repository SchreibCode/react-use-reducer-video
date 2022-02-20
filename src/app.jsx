import React from "react";
import { Counter } from "./components/counter";
import "./app.css";

export default function App() {
    return (
        <div className="h-screen bg-secondary">
            <Counter />
        </div>
    );
}
