import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './styles/footer.module.scss'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>Made with <span role="img" aria-label="magic">🔮</span> by {data.site.siteMetadata.author} © { currentYear } </p>
        </footer>
    )
}

export default Footer