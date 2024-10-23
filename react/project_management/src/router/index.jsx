import App from '../App'
import AuthPage from "../pages/AuthPage"
export default [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/auth",
        element: <AuthPage/>
    }    
]