import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "/src/auth/pages/LoginPage.jsx"
import { RegisterPage } from "/src/auth/pages/RegisterPage.jsx"

export const AuthRoute = () => {
  return (
    <Routes>
<Route path="login" element={<LoginPage/>}/>
<Route path="register" element={<RegisterPage/>}/>    

<Route path="/*" element={<Navigate to="/auth/login"/>}/>

    </Routes>
  )
}
