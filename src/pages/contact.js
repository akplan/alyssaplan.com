import React from 'react'


import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>let's be friends!</p>
            <ul>
                <li>my <a href="mailto:alyssa@alyssaplan.com">email</a></li>
                <li><a href="https://keybase.io/akplan/" target="_blank" rel="noreferrer">akplan</a> on keybase</li>
                <li><a href="https://github.com/akplan">@akplan</a> on github</li>
                <li><a href="https://twitter.com/alyssaplan" target="_blank" rel="noreferrer">@alyssaplan</a> on twitter</li>
                <li><a href="https://instagram.com/akplan">@akplan</a> on instagram</li>
            </ul>
        </Layout>
    )
}

export default Contact;