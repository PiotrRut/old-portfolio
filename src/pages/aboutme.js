import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import picture from '../assets/images/qcCp9QNURpuz15jBSRoKSA_thumb_8f.jpg'

const AboutMe = (props) => (
    <Layout>
        <Helmet>
            <title>About me</title>
            <meta name="description" content="Page about me" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About me</h1>
                    </header>
                    <p>Hi, I'm Peter!</p>
                    <p>I am a 20 year old programmer and second year student at City, University of London, where I study BSc Computer Science. I was originally born in Poland, but for the majority of my life I've been living in Norway. In september 2018 I moved to London to study. Before I came to the UK, I graduated high school with a diploma in general studies, as well as electronical and electric engineering. </p>
                    <p>In my free time, apart from working on various programming projects, I dedicate a lot of time to photography. I've been taking pictures since I can remember, and the website you're currently on, doubles as my portfolio. Here you can browse the projects I've been working on, as well as some of the shots I've taken during the last months.</p>
                    <p>My passion from programming started a couple years ago, after accidentally finding a Python instruction course on YouTube. Ever since I have been trying to learn new languages, concepts, and technologies.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default AboutMe
