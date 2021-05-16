import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderTwo from './components/HeroSliderTwo';
import VideoCta from './components/VideoCta';
import ProjectSliderTwo from './components/ProjectSliderTwo';
import ServiceTab from './components/ServiceTab';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Contact from "./pages/Contact";
import CookieConsent, { Cookies } from "react-cookie-consent";

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
                <CookieConsent 
                    buttonText={isEng ? 'I understand' : 'Elfogadom'}
                    buttonStyle={{
                        background: "#25337b",
                        color: "white"
                    }}    
                >
                    {isEng ? 'We use technical and analytics cookies to ensure that we give you the best experience on our website.' : 'Ez az oldal cookie-kat használ. Ha az oldalon böngészik, akkor elfogadja, hogy a személyre szabott, maradéktalan minőségű tartalom érdekében az oldal cookie-k segítségét vegye igénybe.'}
                </CookieConsent>
                

            </div>
        )
    }
}


export default HomeTwo;