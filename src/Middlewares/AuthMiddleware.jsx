import react from "react"
import { Navigate, Outlet } from "react-router"

export default function AuthMiddleware() {
    const authToken = localStorage.getItem("authToken")
    /* 
    Obtengo el token de auth
    Si existe sigue su ruta normal
    Sino redirecciona a login
    */

    if(authToken) {
        return <Outlet/>
    }
    else {
        return <Navigate to="/login" />
    }
}