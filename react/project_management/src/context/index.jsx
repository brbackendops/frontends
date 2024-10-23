import { createContext , useContext , useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useLocalStorage("user",null)
    const navigate = useNavigate()

    const login = async(data) => {
        setUser(data)
        navigate("/")
    }

    const logout = async () => {
        setUser(null)
        navigate("/auth",{ replace: true})
    }

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        })
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export const userAuth = () => {
    return useContext(AuthContext)
}