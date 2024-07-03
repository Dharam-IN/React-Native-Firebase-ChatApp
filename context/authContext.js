import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChange
        setTimeout(() => {
            setIsAuthenticated(false)
        },3000)
    }, [])

    const register = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const login = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const logout = () => {
        try {
            
        } catch (error) {
            
        }
    }


    return(
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value){
        throw new Error ("useAUth must be wraped inside AuthContextProvider");
    }

    return value

}