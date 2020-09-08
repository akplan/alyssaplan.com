import React from 'react'
import { Link } from 'gatsby'
import DisplayModeToggle from './displayModeToggle'
import useDarkMode from 'use-dark-mode'


import HeaderStyles from "../components/styles/header.module.scss"
const Header = () =>
{

    const darkMode = useDarkMode();
    return (
        <header>
            <h1><div id="title"><Link className={`${HeaderStyles.title} ${darkMode.value ? HeaderStyles.darkMode: HeaderStyles.lightMode}`} to="/" >Alyssa Plan</Link></div></h1>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <li><Link className={`${HeaderStyles.navItem} ${darkMode.value ? HeaderStyles.darkMode: HeaderStyles.lightMode}`} to="/">home</Link></li>
                    <li><Link className={`${HeaderStyles.navItem} ${darkMode.value ? HeaderStyles.darkMode: HeaderStyles.lightMode}`} to="/about">about</Link></li>
                    <li><Link className={`${HeaderStyles.navItem} ${darkMode.value ? HeaderStyles.darkMode: HeaderStyles.lightMode}`} to="/blog">blog</Link></li>
                    <li><Link className={`${HeaderStyles.navItem} ${darkMode.value ? HeaderStyles.darkMode: HeaderStyles.lightMode}`} to="/contact">contact</Link></li>
                </ul>
            </nav>
            <DisplayModeToggle />
        </header>
    );
}

export default Header