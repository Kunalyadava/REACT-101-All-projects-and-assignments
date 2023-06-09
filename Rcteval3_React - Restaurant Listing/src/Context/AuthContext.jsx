import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState(null)

    const loginUser = (token) => {
        setIsAuth(true)
        setToken(token)
    }

    const logoutUser = () => {
        setIsAuth(false)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, token }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

