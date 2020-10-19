import React from 'react'


import Layout from '../components/layout'
import Head from '../components/head'

import downloadFile from '../docs/AlyssaPlanResume-October2020.pdf'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>
                Hi! I'm <a href="mailto:hi@alyssaplan.com">Alyssa Plan Cserei</a>. I'm a full-stack developer, garage sale poet, and parent of one based in New Jersey. 
                I graduated from Rutgers University in 2016 with a <a href="https://cs.rutgers.edu" target="_blank" rel="noreferrer"> B.S. in Computer Science</a> and enough Creative Writing credits to somehow nab a <a href="https://english.rutgers.edu" target="_blank" rel="noreferrer">Minor in English</a>. I'm currently slinging code at <a href="https://www.reichandtang.com" target="_blank" rel="noreferrer">Reich & Tang</a>.
                &nbsp;You can find out more about me on <a href={downloadFile}>my resume</a>. 
            </p>
        </Layout>
    )
}

export default About