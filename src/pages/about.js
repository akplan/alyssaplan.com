import React from 'react'
import {Link} from 'gatsby'


import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>
                Hi! I'm Alyssa Plan <em>[plɛən]</em><i className="far fa-microphone"></i>. I'm a full-stack developer, garage sale poet, and mother of one based in New Jersey. 
                I graduated from Rutgers University in 2016 with a <a href="https://cs.rutgers.edu" target="_blank" rel="noreferrer"> B.S. in Computer Science</a> and enough Creative Writing credits to somehow nab a <a href="https://english.rutgers.edu" target="_blank" rel="noreferrer">Minor in English</a>. I'm currently slinging code at <a href="https://www.reichandtang.com" target="_blank" rel="noreferrer">Reich & Tang</a>.
                &nbsp;You can find out more about me on <a href="/docs/AlyssaPlanResume-September2020.pdf">my resume</a>. 
            </p>
        </Layout>
    )
}

export default About