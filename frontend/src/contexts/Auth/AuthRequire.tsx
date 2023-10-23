import { useContext } from "react"
import { AuthContext } from "./AuthContext"

import Login from "../../screens/Login/Login"

export const AuthRequire = ({ children } : { children: JSX.Element }) => {
    const auth = useContext(AuthContext)

    if (!auth.user) return <Login />
    

    return children
}