import React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>Made with <span role="img" aria-label="magic">🔮</span> by Alyssa Plan © { currentYear } </p>
        </footer>
    )
}

export default Footer