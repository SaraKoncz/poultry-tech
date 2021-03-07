import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class PageNotFound extends Component{
    render(){
        
        const {isEng, onLanguageChange} = this.props;
        return(
            <div>
                {/* Navigation bar */}
                <NavBar isEng={isEng} onLanguageChange={onLanguageChange}/>

                {/*====================  404 page content ====================*/}
                <div>
                    <div className="error-page-wrapper d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col-md-9 m-auto text-center">
                            <div className="error-content-centered d-flex align-items-center justfy-content-center">
                            <div className="error-page-content-wrap">
                                <h2>404</h2>
                                <h3>{isEng ? 'PAGE NOT FOUND' : 'A KERESETT OLDAL NEM TALÁLHATÓ'}</h3>
                                <p>{isEng ? 'Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.'
                                    : 'Sajnáljuk, de a keresett oldal nem létezik, eltávolításra került, a név megváltozott, vagy ideiglenesen nem érhető el.'}</p>
                                <a href="/" className="ht-btn ht-btn--default ht-btn--default--dark-hover">{isEng ? 'Back to Home Page' : 'Vissza a főoldalra'}</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/*====================  End of 404 page content  ====================*/}

                <Footer isEng={isEng}/>

                <MobileMenu isEng={isEng} onLanguageChange={onLanguageChange}/>
            </div>
        )
    }
}


export default PageNotFound;