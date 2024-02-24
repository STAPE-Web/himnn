"use client"

import AdminContent from "@/components/AdminContent"
import AdminLogin from "@/components/AdminLogin"
import { useEffect, useState } from "react";

const Admin = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isAuthData = localStorage.getItem('isAuth');
            setIsAuth(JSON.parse(isAuthData || 'false'));
        }
    }, []);

    return (
        <>
            {isAuth
                ? <AdminContent />
                : <AdminLogin />
            }
        </>
    )
}

export default Admin