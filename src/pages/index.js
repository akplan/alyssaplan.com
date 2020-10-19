import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
const Index = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Alyssa Plan Cserei</h1>
            <p><Link to="/about">Software developer, dream maker, garage sale poet.</Link> </p>
        </Layout>
    )
}

export default Index;