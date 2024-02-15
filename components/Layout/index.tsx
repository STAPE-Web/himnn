'use client'

import React, { FC } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBox from '@/components/SearchBox'
import OrderCall from '../OrderCall'

interface Props {
    children: any
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <SearchBox />
            <OrderCall />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout