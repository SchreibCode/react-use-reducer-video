import React from "react";
import { Counter } from "./components/counter";
import "./app.css";
import { LoginPage } from "./components/login-page";

export default function App() {
    return (
        <div className="h-screen bg-secondary">
            <LoginPage />
        </div>
    );
}
