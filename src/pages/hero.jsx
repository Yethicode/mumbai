import React from 'react'
import NavBar1 from '../components/navbar-1'
import NavBar2 from '../components/navbar-2'
import Intro from '../sections/introPic'
import Content from '../sections/content'
import Links from '../sections/links'
import Counts from '../sections/counts'
import Carousel from '../sections/carousel'
import Map from '../sections/map'
import Contact from '../sections/contact'
import Telephone from '../components/telephone'

const Hero = () => {
    return (
        <main className='flex flex-col relative overflow-hidden'>
            <NavBar1 />
            <NavBar2 />
            <Intro />
            <Content />
            <Links />
            <Counts />
            <Carousel />
            <Map />
            <Contact />
            <Telephone />
        </main>
    )
}

export default Hero