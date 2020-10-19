import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
        <h1>Page not found!</h1>
        <p>Whoops! This page doesn't exist. Let's get you <Link to="/">back home.</Link></p>
        </Layout>
    )
}

export default NotFound