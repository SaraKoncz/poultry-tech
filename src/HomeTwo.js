import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderTwo from './components/HeroSliderTwo';
import VideoCta from './components/VideoCta';
import ProjectSliderTwo from './components/ProjectSliderTwo';
import ServiceTab from './components/ServiceTab';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Contact from "./pages/Contact";

class HomeTwo extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar isEng={false}/>
                
                {/* Hero slider */}
                <HeroSliderTwo isEng={false}/>
                
                {/* Video CTA */}
                <VideoCta isEng={false}/>

                {/* Service Tab */}
                <ServiceTab isEng={false}/>
                
                {/* Project Slider */}
                <ProjectSliderTwo isEng={false}/>
                
                <Contact/>
                
                {/* Footer */}
                <Footer isEng={false}/>

                {/* Mobile Menu */}
                <MobileMenu isEng={false}/>
                

            </div>
        )
    }
}


export default HomeTwo;