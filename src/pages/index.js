import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const Index = () => {
    return (
        <Layout>
            <h1>Alyssa Plan</h1>
            <p><Link to="/about">For your consideration.</Link> </p>
        </Layout>
    )
}

export default Index;