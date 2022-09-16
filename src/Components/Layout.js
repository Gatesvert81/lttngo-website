import React from 'react'
import Context from './Context'
import Footer from './Footer'
import Navigation from './Navigation'

function Layout({ children }) {
    return (
        <div>
            <Context>
                <Navigation />
                {children}
                <Footer />
            </Context>
        </div>
    )
}

export default Layout