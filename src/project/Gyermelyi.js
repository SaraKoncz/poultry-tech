import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class Gyermelyi extends Component{

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
                        <div className="project-image"><img src="assets/img/service/gyermely.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Projekt Információ</h3>
                                <ul>
                                    <li><strong>Partner:</strong> <a href="project-details"> Gyermelyi Tojás Kft.</a></li>
                                    <li><strong>Helyszín:</strong> Gyermely</li>
                                    <li><strong>Technológia:</strong> Árutojás Telep</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Termelői Kapacitások Bővítése Gyermelyen</h2>
                                <p>A Gyermelyi Tojás Kft. termelői kapacitásának bővítését összekötötte az uniós szabályok követésével új ketreces tartástechnológia beszerzésével 4 új tojóépület  számára. </p>
                                <p>A teljesen EU konform, felső kategóriás Valli gyártmányú ”SPACE COLONY 56” típusú tojóketrec rendszerek szállítását, beszerelésének irányítását majd beüzemelését a Poultry-Tech Kft. végezte.  Az épületenként 8 soros, soronként 6 emeletes komplett berendezések a tojótyúkok komfortját az előírások szerinti tágas ketrec kialakítás –  az új épületekben 56 tojótyúk / ketrec – és úgynevezett állatjóléti ( kényelmi ) berendezések úgy mint madaranként 15 cm ülőrúd, 12 cm vályú etetőfelület, max. 7° padozatlejtés, karomkoptatók, kaparó -és csipegető terek, kiegészítő etető vályúk és az árnyékolt tojófészkek révén biztosítják.
                                </p>
                                <p>A termelő kapacitás a zöldmezős beruházások keretében összesen 400’000 tojótyúk férőhely kapacitással bővült.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery projectName={'gyermely'}/>
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


export default Gyermelyi;