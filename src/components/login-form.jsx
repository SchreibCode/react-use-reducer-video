import { useReducer } from "react";
import { login, logout } from "../utils/server-mock";

const loginFormReducer = (state, action) => {
    switch (action.type) {
        case "field":
            return { ...state, [action.field]: action.value };
        case "login-start":
            return { ...state, isLoading: true };
        case "login-success":
            return { ...state, isLoading: false, isLoggedIn: true };
        case "login-error":
            return { ...state, isLoading: false, error: action.value };
        case "logout-start":
            return { ...state, isLoading: true };
        case "logout-success":
            return { ...state, isLoading: false, isLoggedIn: false };
        case "logout-error":
            return { ...state, isLoading: false, error: action.value };

        default:
            return state;
    }
};

const initialState = {
    email: "",
    password: "",
    error: "",
    isLoading: false,
    isLoggedIn: false,
};

export function LoginForm() {
    const [state, dispatch] = useReducer(loginFormReducer, initialState);

    const { email, password, error, isLoading, isLoggedIn } = state;

    const sendLogin = async () => {
        try {
            dispatch({ type: "login-start" });
            const response = await login(email, password);
            dispatch({ type: "login-success" });
        } catch (e) {
            dispatch({ type: "login-error", value: e });
        }
    };

    const sendLogOut = async () => {
        try {
            dispatch({ type: "logout-start" });
            const response = await logout();
            dispatch({ type: "logout-success" });
        } catch (e) {
            dispatch({ type: "logout-error", value: e });
        }
    };

    return (
        <div className="flex flex-col w-80">
            {!isLoggedIn ? (
                <>
                    <h1 className="text-3xl text-white text-center p-6 font-bold">
                        Bitte Anmelden
                    </h1>
                    <input
                        className="p-2 px-3 mb-4 text-black"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            dispatch({
                                type: "field",
                                field: "email",
                                value: e.target.value,
                            })
                        }
                    />
                    <input
                        className="p-2 px-3 mb-4 text-black"
                        type="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) =>
                            dispatch({
                                type: "field",
                                field: "password",
                                value: e.target.value,
                            })
                        }
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
