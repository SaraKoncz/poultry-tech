import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class Kulpiac extends Component{

    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Projekt Ismertető</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">kezdőlap</a></li>
                                        <li><a href="projects">Projektjeink közül</a></li>
                                        <li>Projekt Leírás</li>
                                    </ul>
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
                        <div className="project-image"><img src="assets/img/service/külpiac.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Projekt Információ</h3>
                                <ul>
                                    <li><strong>Partner:</strong> <a href="project-details"> Mironovszky Hlebopruduct </a></li>
                                    <li><strong>Helyszín:</strong> Ukrajna</li>
                                    <li><strong>Technológia:</strong> Brojler szűlőpár telep</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Poultry-Tech a Külpiacokon</h2>
                                <p>Társaságunk a keleti régióban is sikerrel szerepel nemzetközi tendereken baromfitartó eszközrendszereivel és szerviz szolgáltatásával.</p>
                                <p>Ukrajnában számos brojler szülőpár nevelő telep építésében vett részt az ország
                                    legnagyobb brojler integrációja a Mironovszky Hlebopruduct megbízásából.
                                </p>
                                <p>A világszínvonalú és legújabb tartástechnológiák alkalmazásával, úgy mint parciális nyomásra ( vákuumra ) vezérelt szellőzető rendszerével és programozható szórva etetéssel eredményesen járult hozzá az integráció és ezzel a térség baromfitenyésztése megújításának elindításához.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery  projectName={'kulpiac'}/>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Projects section end*/}

                </div>

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default Kulpiac;