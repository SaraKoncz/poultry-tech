import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
    }

    render(){


        return(
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo" style={{flexBasis: '0'}}>
                                        <Link to = {`${process.env.PUBLIC_URL}/`}>
                                            <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                        </Link>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                        <div className="header-info-single-item">
                                            <div className="header-info-single-item__icon">
                                                <i className="zmdi zmdi-email" />
                                            </div>
                                            <div className="header-info-single-item__content">
                                                <h6 className="header-info-single-item__title">E-mail</h6>
                                                <p className="header-info-single-item__subtitle">info@poultry-tech.com</p>
                                            </div>
                                        </div>
                                        <div className="header-info-single-item">
                                            <div className="header-info-single-item__icon">
                                            <i className="zmdi zmdi-smartphone-android" />
                                            </div>
                                            <div className="header-info-single-item__content">
                                            <h6 className="header-info-single-item__title">Telefon</h6>
                                            <p className="header-info-single-item__subtitle">+36 20 388 5550</p>
                                            </div>
                                        </div>
                                        <div className="header-info-single-item">
                                            <div className="header-info-single-item__icon">
                                            <i className="zmdi zmdi-home" />
                                            </div>
                                            <div className="header-info-single-item__content">
                                            <h6 className="header-info-single-item__title">Cím</h6>
                                            <p className="header-info-single-item__subtitle">9081 Győrújbarát, Vállalkozók útja 5/A</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger" onClick={this.activeMobileMenu}>
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        <div className="tamogatas" >
                            <Link to = {`${process.env.PUBLIC_URL}/tamogatas`}>
                                <img src="assets/img/logo/ginop.jpg" className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li><a href={`${process.env.PUBLIC_URL}/#home`}>KEZDŐLAP</a></li>
                                            <li><a href={`${process.env.PUBLIC_URL}/#about-us`}>CÉGISMERTETŐ</a></li>
                                            <li>
                                                {/* className="has-children has-children--multilevel-submenu">*/}
                                                <a href={`${process.env.PUBLIC_URL}/#services`}>SZOLGÁLTATÁSOK</a>
                                                {/*<ul className="submenu">*/}
                                                {/*<li><Link to={`${process.env.PUBLIC_URL}/planning`}>Tervezés</Link></li>*/}
                                                {/*<li><Link to={`${process.env.PUBLIC_URL}/sales`}>Eszköz kereskedelem</Link></li>*/}
                                                {/*<li><Link to={`${process.env.PUBLIC_URL}/support`}>Szaktanácsadás</Link></li>*/}
                                                {/*<li><Link to={`${process.env.PUBLIC_URL}/service`}>Szervíz</Link></li>*/}
                                                {/*</ul>*/}
                                            </li>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/#projects`} >PROJEKTJEINK</a>
                                            </li>
                                            <li><a href={`${process.env.PUBLIC_URL}/#contact-us`}>KAPCSOLAT</a> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
                
                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;