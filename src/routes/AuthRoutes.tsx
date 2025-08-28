import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "@/pages/Login";

export const AuthRoutes = () => {
    const router = useNavigate();
    const local = useLocation();
    useEffect(() => {

        if(local.pathname != '/register')
        {
            router("/login");
        }

    }, [router]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}