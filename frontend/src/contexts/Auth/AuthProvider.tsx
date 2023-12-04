import { useEffect, useState } from "react"

import { User, UserData } from "../../types/User"
import { AuthContext } from "./AuthContext"
import { useApi } from "../../hooks/useApi"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null)
    const api = useApi()

    useEffect(() => {
        const validateToken = async () => {

            const storageData = localStorage.getItem('authToken')

            if (storageData) {
                const data = await api.validateToken(storageData)

                if (data) {
                    setUser(data)
                }
            }
        }

        validateToken()
    }, [])

    const register = async (username: string, email: string, dateBirth: Date, password: string) => {
        const data = await api.register(username, email, dateBirth, password)

        if (data) {
            await signIn(email, password)

            return true
        }

        return false
    }


    const signIn = async (email: string, password: string) => {
        const data: UserData = await api.signIn(email, password)

        if (data.user) {
            setUser(data.user)
            setToken(data.token)

            return true
        }

        return false
    }

    const signOut = async () => {
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, register, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}