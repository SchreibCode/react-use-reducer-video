import { useState } from "react";
import { login, logout } from "../utils/server-mock";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const sendLogin = async () => {
        setIsLoading(true);
        try {
            const response = await login(email, password);
            setEmail("");
            setPassword("");
            setError("");
            setIsLoggedIn(true);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    const sendLogOut = async () => {
        setIsLoading(true);
        try {
            const response = await logout();
            setError("");
            setIsLoggedIn(false);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-80">
            {!isLoggedIn ? (
                <>
                    <h1 className="text-4xl text-white text-center p-6 font-bold">
                        Anmeldung
                    </h1>
                    <input
                        className="p-2 mb-4 text-black"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="p-2 mb-4 text-black"
                        type="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </>
            ) : null}
            <button
                className="bg-blue font-bold p-2 mb-4 text-white"
                onClick={!isLoggedIn ? sendLogin : sendLogOut}
                disabled={isLoading}
            >
                {isLoading ? "Lade..." : isLoggedIn ? "Abmelden" : "Anmelden"}
            </button>
            <h2 className="text-red text-center font-bold">{error}</h2>
        </div>
    );
}
