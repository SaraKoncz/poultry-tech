import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class Hungerit extends Component{

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
                        <div className="project-image"><img src="assets/img/service/tiszakecske.jpg" className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>Projekt Információ</h3>
                                <ul>
                                    <li><strong>Partner:</strong> <a href="project-details"> Hungerit Zrt.</a></li>
                                    <li><strong>Helyszín:</strong> Tiszakécske</li>
                                    <li><strong>Technológia:</strong> Kacsa hizlaló telep</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>Hungerit Zrt. Tiszakécske Kacsatelep</h2>
                                <p>A Hungerit Zrt. társaságunkat bízta meg végtermék kacsatartó kapacitásának növelésére a zöldmezős beruházás keretében épült 21 istállós telep tartástechnológiai berendezéseinek összeállítására és szállítására.</p>
                                <p>Az elő –és utónevelő tartásterekbe a légkorszerűbb kacsatartó berendezések kerültek beszerelésre mellyel tartás technológiai igényei a legmagasabb szinten elégíthető ki a nevelés és hizlalás eredményessége pedig biztosítható.
                                </p>
                                <p>A 21 tartástérben komputer vezérlésű, automatizált berendezések végzik az etetést és itatást, gondoskodnak az optimális világításról, fűtésről, szellőztetésről. A tartástér klimatizációja előre beállítható a napszak és a mindenkori évszaknak megfelelően. </p>
                                <p>A nagyméretű telepen az üzemeltetéshez elengedhetetlen teli kommunikációt ugyancsak társaságunk tervezte, szállította és irányította kiépítését. </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery projectName={'tiszakecske'}/>
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


export default Hungerit;