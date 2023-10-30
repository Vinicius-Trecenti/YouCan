import { createContext } from "react"
import { User } from "../../types/User"

export type AuthContextType = {
    user: User | null,
    register: (username: string, email: string, dateBirth: Date, password: string) => Promise<boolean>,
    signIn: (email: string, password: string) => Promise<boolean>,
    signOut: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)