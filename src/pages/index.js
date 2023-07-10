import React, {useState} from 'react'
import AboutSection from '../components/AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/AboutSection/data';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import TarievenSection from '../components/TarievenSection'

import { navLogo } from '../components/Navbar/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) 

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
<Sidebar isOpen={isOpen} toggle={toggle} />
<Navbar {...navLogo} toggle={toggle} />
<HeroSection />
<AboutSection {...homeObjOne}/>
<Services />
<TarievenSection />
<Footer />







        </>
    )
}

export default Home
