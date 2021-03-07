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
        
        const {isEng, onLanguageChange} = this.props;
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar onLanguageChange={onLanguageChange} isEng={isEng}/>
                
                {/* Hero slider */}
                <HeroSliderTwo isEng={isEng}/>
                
                {/* Video CTA */}
                <VideoCta isEng={isEng}/>

                {/* Service Tab */}
                <ServiceTab isEng={isEng}/>
                
                {/* Project Slider */}
                <ProjectSliderTwo isEng={isEng}/>
                
                <Contact isEng={isEng}/>
                
                {/* Footer */}
                <Footer isEng={isEng}/>

                {/* Mobile Menu */}
                <MobileMenu isEng={isEng}/>
                

            </div>
        )
    }
}


export default HomeTwo;