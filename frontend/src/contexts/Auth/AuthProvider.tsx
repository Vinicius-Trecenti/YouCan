import { useEffect, useState } from "react"
import { User, UserData } from "../../types/User"
import { AuthContext } from "./AuthContext"
import { useApi } from "../../hooks/useApi"

export const AuthProvider = ({ children } : { children: JSX.Element }) => {
    const [ user, setUser ] = useState<User | null>(null)
    const  api = useApi()

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken')
    
            if (storageData) {
                const data = await api.validateToken(storageData)
                // const data: UserData = response.data
    
                console.log('dados: ', data.user)
                console.log('validando token')
                
                if (data.user) {
                    setUser(data.user)
                    console.log('token: ', user?.id)
                }
            }
        }

        validateToken()
    }, []) 

    

    const signIn = async (email: string, password: string) => {
        
        const data = await api.signIn(email, password)
        // const data: UserData = response.data

        if (data.user) {
            setUser(data.user)
            setToken(data.token)
            
            return true
        }

        return false
    }

    const signOut = async () => {
        // setUser(null);
        // setToken('');
        // await api.logout();
    }

    const setToken = (token: string)=> {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}