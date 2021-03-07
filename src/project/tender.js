import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class TenderComp extends Component{

    render(){
        

        const {isEng, onLanguageChange} = this.props;

        return(
            <div>
                {/* Navigation bar */}
                <NavBar isEng={isEng} onLanguageChange={onLanguageChange}/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>{isEng ? 'Tender Information' : 'Pályázati Információ'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project details page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                    {/*Projects section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 section-space--bottom--40">
                                    <div className="project-image"><img src="assets/img/tender.jpg" className="img-fluid" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects section end*/}

                </div>
                <Footer isEng={isEng}/>

                <MobileMenu isEng={isEng} onLanguageChange={onLanguageChange}/>

            </div>
        )
    }
}


export default TenderComp;