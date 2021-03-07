import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    };

    handleScroll() {
        if (this.mount) {
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

    componentWillUnmount() {
        this.mount = false;
    }

    render() {
        const {isEng} = this.props;

        return (
            <div>
                {/*====================  header area ====================*/}
                <div
                    className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                        {/*=======  header info area  =======*/}
                        <div className="header-info-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="header-info-wrapper align-items-center">
                                            {/* logo */}
                                            <div className="logo" style={{flexBasis: '0'}}>
                                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                                    <img src="assets/img/logo/logo.png" className="img-fluid"
                                                         alt="Logo"/>
                                                </Link>
                                            </div>
                                            {/* header contact info */}
                                            <div className="header-contact-info">
                                                <div className="header-info-single-item">
                                                    <div className="header-info-single-item__icon">
                                                        <i className="zmdi zmdi-email"/>
                                                    </div>
                                                    <div className="header-info-single-item__content">
                                                        <h6 className="header-info-single-item__title">E-mail</h6>
                                                        <p className="header-info-single-item__subtitle">info@poultry-tech.com</p>
                                                    </div>
                                                </div>
                                                <div className="header-info-single-item">
                                                    <div className="header-info-single-item__icon">
                                                        <i className="zmdi zmdi-smartphone-android"/>
                                                    </div>
                                                    <div className="header-info-single-item__content">
                                                        <h6 className="header-info-single-item__title">{isEng ? 'Phone' : 'Telefon'}</h6>
                                                        <p className="header-info-single-item__subtitle">+36 20 388
                                                            5550</p>
                                                    </div>
                                                </div>
                                                <div className="header-info-single-item">
                                                    <div className="header-info-single-item__icon">
                                                        <i className="zmdi zmdi-home"/>
                                                    </div>
                                                    <div className="header-info-single-item__content">
                                                        <h6 className="header-info-single-item__title">{isEng ? 'Address' : 'Cím'}</h6>
                                                        <p className="header-info-single-item__subtitle">{isEng ? 'Vállalkozók Street 5/A, 9081 Győrújbarát' : '9081 Győrújbarát, Vállalkozók útja 5/A'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* mobile menu */}
                                            <div className="mobile-navigation-icon" id="mobile-menu-trigger"
                                                 onClick={this.activeMobileMenu}>
                                                <i/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tamogatas">
                                <Link to={`${process.env.PUBLIC_URL}/tenders`}>
                                    <img src="assets/img/logo/ginop.jpg" className="img-fluid" alt="Logo"/>
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
                                        <div
                                            className="header-navigation header-navigation--header-default position-relative">
                                            <div className="header-navigation__nav position-static">
                                                <nav>
                                                    <ul>
                                                        <li><a
                                                            href={`${process.env.PUBLIC_URL}/#home`}>{isEng ? "HOME" : "KEZDŐLAP"}</a>
                                                        </li>
                                                        <li><a
                                                            href={`${process.env.PUBLIC_URL}/#about-us`}>{isEng ? "ABOUT US" : "CÉGISMERTETŐ"}</a>
                                                        </li>
                                                        <li>
                                                            <a href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? "SERVICES" : "SZOLGÁLTATÁSOK"}</a>
                                                        </li>
                                                        <li>
                                                            <a href={`${process.env.PUBLIC_URL}/#projects`}>{isEng ? "PROJECTS" : "PROJEKTJEINK"}</a>
                                                        </li>
                                                        <li><a
                                                            href={`${process.env.PUBLIC_URL}/#contact-us`}>{isEng ? "CONTACT" : "KAPCSOLAT"}</a>
                                                        </li>
                                                        <li onClick={this.props.onLanguageChange}><a
                                                            onClick={e => e.preventDefault()}
                                                            href="#">{this.props.isEng ? 'MAGYAR' : 'ENGLISH'}</a></li>
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
                <MobileMenu ref={this.mobileMenuElement} onLanguageChange={this.props.onLanguageChange}
                            isEng={this.props.isEng}/>

            </div>
        )
    }
}


export default NavBar;