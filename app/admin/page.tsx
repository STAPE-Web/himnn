"use client"

import AdminContent from "@/components/AdminContent"
import AdminLogin from "@/components/AdminLogin"

const Admin = () => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth') as string)

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