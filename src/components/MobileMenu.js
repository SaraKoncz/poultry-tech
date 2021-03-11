import React, {Component} from 'react';

class MobileMenu extends Component {

    state = {
        active: false
    };

    toggleMobileMenu = () => {
        this.setState({
            active: !this.state.active
        })
    };

    componentDidMount() {
        var offCanvasNav = document.getElementById('offcanvas-navigation');
        var offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i/></span>");
        }

        var menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
        var numMenuExpand = menuExpand.length;

        function sideMenuExpand() {

            if (this.parentElement.classList.contains('active') === true) {
                this.parentElement.classList.remove('active');
            } else {
                for (let i = 0; i < numMenuExpand; i++) {
                    menuExpand[i].parentElement.classList.remove('active');
                }
                this.parentElement.classList.add('active');
            }
        }

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", sideMenuExpand);
        }
    }

    render() {
        const {isEng} = this.props;

        return (
            <div>
                {/*=======  offcanvas mobile menu  =======*/}
                <div className={`offcanvas-mobile-menu ${this.state.active ? 'active' : ''} `} id="mobile-menu-overlay">
                    <a href="#/" className="offcanvas-menu-close" id="mobile-menu-close-trigger"
                       onClick={this.toggleMobileMenu}>
                        <i className="ion-android-close"/>
                    </a>
                    <div className="offcanvas-wrapper">
                        <div className="offcanvas-inner-content">
                            <nav className="offcanvas-navigation" id="offcanvas-navigation">
                                <ul>
                                    {/*<li className="menu-item-has-children">*/}
                                    <li onClick={this.toggleMobileMenu}><a
                                        href={`${process.env.PUBLIC_URL}/#home`}>{isEng ? "HOME" : "KEZDŐLAP"}</a></li>
                                    <li onClick={this.toggleMobileMenu}><a
                                        href={`${process.env.PUBLIC_URL}/#about-us`}>{isEng ? "ABOUT US" : "CÉGISMERTETŐ"}</a>
                                    </li>
                                    <li onClick={this.toggleMobileMenu}><a
                                        href={`${process.env.PUBLIC_URL}/#services`}>{isEng ? "SERVICES" : "SZOLGÁLTATÁSOK"}</a>
                                    </li>
                                    <li onClick={this.toggleMobileMenu}><a
                                        href={`${process.env.PUBLIC_URL}/#projects`}>{isEng ? "PROJECTS" : "PROJEKTJEINK"}</a>
                                    </li>
                                    <li onClick={this.toggleMobileMenu}><a
                                        href={`${process.env.PUBLIC_URL}/#contact-us`}>{isEng ? "CONTACT" : "KAPCSOLAT"}</a>
                                    </li>
                                    <li onClick={this.props.onLanguageChange}><a onClick={e => e.preventDefault()}
                                                                                 href={`${process.env.PUBLIC_URL}/#home`}>{isEng ? 'MAGYAR' : 'ENGLISH'}</a>
                                    </li>
                                    {/*</li>*/}
                                </ul>
                            </nav>
                            <div className="offcanvas-widget-area">
                                <div className="off-canvas-contact-widget">
                                    <div className="header-contact-info">
                                        <ul className="header-contact-info__list">
                                            <li><i className="ion-android-phone-portrait"/> <a
                                                href="tel://+36 96 526 474">+36 96 526 474 </a></li>
                                            <li><i className="ion-android-mail"/> <a
                                                href="mailto:info@poultry-tech.com">info@poultry-tech.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of offcanvas mobile menu  =======*/}

            </div>
        )
    }
}

export default MobileMenu;