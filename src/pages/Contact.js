import React, {Component} from 'react';

class Contact extends Component{
    render(){
        const {isEng} = this.props;
        return(
            <div id={"contact-us"}>
                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Contact section start*/}
                <div className="conact-section">
                    <div className="container">
                    <div className="row section-space--bottom--50">
                        <div className="col-lg-12">
                            <div className="section-title-area text-center">
                                <h2 className="section-title section-space--bottom--50">{isEng ? 'Contact Us' : 'Kapcsolat'}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                        <div className="contact-information">
                            <h3>{isEng ? 'Contact Information' : 'Elérhetőségünk'}</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="ion-android-map" /></span>
                                    <span className="text"><span>9081 Győrújbarát</span><span>{isEng ? 'Vállalkozók Str. 5/A' : 'Vállalkozók útja 5/A'}</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:+36203885550">+36 20 388 5550</a><a href="tel:+3696526474">+36 96 526 474</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><span>e-mail:</span><a href="mailto:info@poultry-tech.com">info@poultry-tech.com</a></span>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="contact-map">
                                <iframe title="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.6287205415256!2d17.637692615452195!3d47.633347994123305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bc054f87fc3db%3A0xbd3b5ea33716a0ea!2sPoultry-Tech%20Kft.!5e0!3m2!1sen!2shu!4v1609153854539!5m2!1sen!2shu"
                                    allowFullScreen/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Contact section end*/}
                </div>
            </div>
        )
    }
}


export default Contact;