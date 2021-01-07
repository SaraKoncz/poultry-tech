import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class Aviagen extends Component{

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
                        <div className="project-image"><img src="assets/img/service/aviagen.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Projekt Információ</h3>
                                <ul>
                                    <li><strong>Partner:</strong> <a href="project-details"> Aviagen Kft.</a></li>
                                    <li><strong>Helyszín:</strong> Győrasszonyfa</li>
                                    <li><strong>Technológia:</strong> Brojler nagyszűlőpár telep</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Aviagen Nagyszülőpár Telepek</h2>
                                <p>Társaságunk aktív szerepet játszik a régió baromfihús ellátásában az Aviagen nagyszülőpár integráció baromfitelepeinek eszközellátásával, a berendezések beszereléseinek irányításával, szerviz útján pedig a termelés műszaki hátterének biztosításával.</p>
                                <p>A világszínvonalú berendezések magukban foglalják az automatizált etető rendszereket, a zárt higiénikus itató berendezéseket, automata tojófészeksorokat.
                                    A komputer vezérelte, napszak és évszak szerint előre programozható szellőztetéssel fűtéssel és hűtéssel a legoptimálisabb klíma teremthető meg a tartásterekben.
                                </p>
                                <p>A komplex tartási rendszer része a számítógépes telepi kommunikáció, a termelési adatok automatikus gyűjtése, azok tárolása és megjelenítése.   </p>
                                <p>Műszaki szolgáltatásainkkal biztos műszaki hátteret nyújtunk az integráció napos szülőpár állományainak előállításához, hazai és külföldi tenyésztelepek megbízható napos szülőpár ellátásához.   </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery projectName={'aviagen'}/>
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


export default Aviagen;