import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class McDonalds extends Component{

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
                                    <div className="project-image"><img src="assets/img/service/mcdonalds.jpg" className="img-fluid" alt="" /></div>
                                </div>
                                <div className="col-lg-4 col-12 section-space--bottom--30">
                                    <div className="project-information">
                                        <h3>Projekt Információ</h3>
                                        <ul>
                                            <li><strong>Partner:</strong> <a href="project-details"> Baromfi-Coop Kft.</a></li>
                                            <li><strong>Helyszín:</strong> Baktalórántháza </li>
                                            <li><strong>Technológia:</strong> Brojler telep</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                                    <div className="project-details">
                                        <h2>McDondald's Flagship - Mintagazdaság - Telepek</h2>
                                        <p>Európában elsőként a hazai MasterGood csoport brojlerhús termelő telepei kapták meg a McDonald’s Mintagazdaság ( ”Flagship” ) minősítést ahol a baromfi komfort, a technológiai fegyelem, higiénia, környezetvédelem, hatékonyság és eredményesség világszínvonalú. </p>
                                        <p>A világszínvonalú berendezések magukban foglalják az automatizált etető rendszereket, a zárt higiénikus itató berendezéseket, automata tojófészeksorokat.
                                            A komputer vezérelte, napszak és évszak szerint előre programozható szellőztetéssel fűtéssel és hűtéssel a legoptimálisabb klíma teremthető meg a tartásterekben.
                                        </p>
                                        <p>A legmagasabb szakmai igényeket és az EU állatjóléti előírásait minden tekintetben kielégítő tartástechnológiai berendezéseket a Poultry-Tech Kft. szállította és irányította beszerelésüket, beüzemelésüket a cégcsoport termelő telepei számára.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <PhotoGallery projectName={'mcdonalds'}/>
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


export default McDonalds;