import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Projects extends Component{
    render(){

        let data = [
            {
                img: 'aviagen.jpg',
                projectTitle: 'Aviagen Nagyszülőpár Telepek',
                projectSubtitle: 'Társaságunk aktív szerepet játszik a régió baromfihús ellátásában az Aviagen nagyszülőpár integráció baromfitelepeinek eszközellátásával, a berendezések beszereléseinek...',
                pageLink: 'project-details-aviagen'
            },
            {
                img: 'mcdonalds.jpg',
                projectTitle: "McDondald's Flagship - Mintagazdaság Telepek",
                projectSubtitle: 'Európában elsőként a hazai MasterGood csoport brojlerhús termelő telepei kapták meg a McDonald’s Mintagazdaság ( ”Flagship” ) minősítést ahol a baromfi komfort, a technológiai...',
                pageLink: 'project-details-mcdonalds'
            },
            {
                img: 'tiszakecske.jpg',
                projectTitle: 'Hungerit Zrt. Tiszakécske Kacsatelep',
                projectSubtitle: 'A Hungerit Zrt. társaságunkat bízta meg végtermék kacsatartó kapacitásának növelésére a zöldmezős beruházás keretében épült 21 istállós telep tartástechnológiai...',
                pageLink: 'project-details-hungerit'
            },
            {
                img: 'külpiac.jpg',
                projectTitle: 'Poultry-Tech a Külpiacokon',
                projectSubtitle: 'Társaságunk a keleti régióban is sikerrel szerepel nemzetközi tendereken baromfitartó eszközrendszereivel és szerviz szolgáltatásával. Ukrajnában számos brojler szülőpár nevelő telep...',
                pageLink: 'project-details-kulpiac'
            },
            {
                img: 'gyermely.jpg',
                projectTitle: 'Termelői Kapacitások Bővítése Gyermelyen',
                projectSubtitle: 'A Gyermelyi Tojás Kft. termelői kapacitásának bővítését összekötötte az uniós szabályok követésével új ketreces tartástechnológia beszerzésével 4 új tojóépület  számára...',
                pageLink: 'project-details-gyermelyi'
            }
        ];

        let Datalist = data.map((val, i)=> {
            return(
                <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.projectTitle}</a>
                        </h3>
                        <p className="subtitle">{val.projectSubtitle}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">További részletek...</a>
                    </div>
                    </div>
                </div>
            )
        });

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
                                    <h1>Projektjeink közül</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Kezdőlap</a></li>
                                        <li>Projektjeink közül</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                    {/*Projects section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-item-wrapper">
                                        <div className="row">
                                            {Datalist}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row section-space--top--60">
                                {/*<div className="col">*/}
                                {/*    <ul className="page-pagination">*/}
                                {/*        <li><a href="/"><i className="fa fa-angle-left" /> Prev</a></li>*/}
                                {/*        <li className="active"><a href="/">01</a></li>*/}
                                {/*        <li><a href="/">02</a></li>*/}
                                {/*        <li><a href="/">03</a></li>*/}
                                {/*        <li><a href="/"><i className="fa fa-angle-right" /> Next</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    {/*Projects section end*/}
                </div>

                {/*====================  End of project page content  ====================*/}

                
                {/* Brand logo */}
                {/*<BrandLogoSlider background = "grey-bg" />*/}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>
            </div>
        )
    }
}


export default Projects;