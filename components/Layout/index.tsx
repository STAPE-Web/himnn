'use client'

import React, { FC } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
    children: any
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout