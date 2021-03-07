import React, {Component} from 'react';
import {animateScroll as scroll } from 'react-scroll';
class Footer extends Component{

    
    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }

    scrollToTop (){
        scroll.scrollToTop();
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.getElementById("scroll-top").classList.add("show") :
        document.getElementById("scroll-top").classList.remove("show") ;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){
        const {isEng} = this.props;
        return(
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area dark-bg">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content-wrapper section-space--inner--100">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12">
                                {/* footer intro wrapper */}
                                <div className="footer-intro-wrapper">
                                    <div className="footer-logo">
                                    <a href={`${process.env.PUBLIC_URL}/#home`}>
                                        <img src="assets/img/logo/logo.png" className="img-fluid" alt="" />
                                    </a>
                                    </div>
                                    <div className="footer-desc">{isEng ? 'Our company provides a complete service to its partners, making the latest developments in poultry equipment available to them.' 
                                        : 'Cégünk, komplett szolgáltatást biztosít patrnerei részére mellyel a baromfitartó eszközök legújabb fejlesztéseit teszi számukra elérhetővé.'}
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">{isEng ? 'NAVIGATION' : 'NAVIGÁCIÓ'}</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/#home`}>{isEng ? 'Home' : 'Kezdőlap'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#about-us`}>{isEng ? 'About Us' : 'Cégismertető'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#projects`}>{isEng ? 'Projects' : 'Projektek'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/tenders`}>{isEng ? 'Tender' : 'Pályázat'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#contact-us`}>{isEng ? 'Contact us' : 'Kapcsolat'}</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">{isEng ? 'SERVICES' : 'SZOLGÁLTATÁSOK'}</h4>
                                    <ul className="footer-widget__navigation">
                                    <li><a href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? 'Project design' : 'Tervezés'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? 'Equipment Sales' : 'Kereskedelem'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? 'Product Support' : 'Eszköz tanácsadás'}</a></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? 'After Sales Service' : 'Szervíz'}</a></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget mb-0">
                                    <h4 className="footer-widget__title">{isEng ? 'CONTACT US' : 'KAPCSOLAT'}</h4>
                                    <div className="footer-widget__content">
                                    <p className="address">{isEng ? 'Vállalkozók Str 5/A, 9081 Győrújbarát' : '9081 Győrújbarát, Vállalkozók útja 5/A'}</p>
                                    <ul className="contact-details">
                                        <li>+36 20 388 5550</li>
                                        <li>+36 96 526 474</li>
                                        <li>info@poultry-tech.com</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <button className="scroll-top" id="scroll-top" onClick={this.scrollToTop}>
                    <i className="ion-android-arrow-up" />
                </button>
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;