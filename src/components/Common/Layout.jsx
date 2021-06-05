import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => {
    const {children} = props
    return (
        <>
            <Header/>
            {children}
            <Navbar/>
        </>
    )
}

export default Layout