import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth, db} from '../firebaseConfig'
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuthStateChange
        const unsub = onAuthStateChanged(auth, (user) => {
            console.log('got user', user)
            if(user){
                setIsAuthenticated(true)
                setUser(user)
            }else{
                setIsAuthenticated(false);
                setUser(null);
            }
        })

        return unsub;
    }, [])

    const register = async (email, password, username, profileUrl) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("response signup", response?.user);

            await setDoc(doc(db, "users", response?.user?.uid), {
                username,
                profileUrl,
                userId: response?.user?.uid
            });

            return {success: true, data: response?.user}

        } catch (error) {
            return {success: false, msg: error.message}
        }
    }

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {success: true}
        } catch (e) {
            let msg = e.message;
            return {success: false, msg}
        }
    }

    const logout = async() => {
        try {
            await signOut(auth);
            return {success: true}
        } catch (error) {
            return {success: true, msg: error.message, error: error}
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