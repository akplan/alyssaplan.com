import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/global-styles.scss'
import layoutStyles from '../components/styles/layout.module.scss'

const Layout = (props) => {
    return (
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
            <Header />
            <div id="content">
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Layout