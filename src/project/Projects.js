import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Projects extends Component{
    render(){
        const {isEng, onLanguageChange} = this.props;

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

        let dataEng = [
            {
                img: 'aviagen.jpg',
                projectTitle: 'Aviagen Grandparent Farms',
                projectSubtitle: 'Our company plays an active role in the region’s poultry meat supply through supplying equipment to the Aviagen grandparent breeding pair integration poultry farms...',
                pageLink: 'project-details-aviagen'
            },
            {
                img: 'mcdonalds.jpg',
                projectTitle: "McDondald's Flagship Farms",
                projectSubtitle: 'The broiler meat farms of Hungary’s MasterGood Group were the first in Europe to be awarded the McDonald’s Flagship rating, where poultry comfort, technological discipline...',
                pageLink: 'project-details-mcdonalds'
            },
            {
                img: 'tiszakecske.jpg',
                projectTitle: 'Hungerit Zrt. Tiszakécske Duck Farm',
                projectSubtitle: 'Hungerit Zrt. commissioned our company with the assembly and delivery of its rearing technological equipment for its green field investment of 21 rearing houses, aimed at expanding...',
                pageLink: 'project-details-hungerit'
            },
            {
                img: 'külpiac.jpg',
                projectTitle: 'Poultry-Tech on Foreign Markets',
                projectSubtitle: 'We have participated successfully at international tenders announced in the eastern region with our poultry farming systems and accompanying services...',
                pageLink: 'project-details-kulpiac'
            },
            {
                img: 'gyermely.jpg',
                projectTitle: 'Expansion of Production Capacities at Gyermely',
                projectSubtitle: 'Gyermelyi Tojás Kft. linked the expansion of its production capacity to meeting EU requirements through the procurement of a new breeder cage technology for the 4 new hatchery...',
                pageLink: 'project-details-gyermelyi'
            }
        ];

        let Datalist = (isEng ? dataEng : data).map((val, i)=> {
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
                <NavBar isEng={isEng} onLanguageChange={onLanguageChange}/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>{isEng ? 'Some of Our Projects' : 'Projektjeink közül'}</h1>
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
                            </div>
                        </div>
                    </div>
                    {/*Projects section end*/}
                </div>

                {/*====================  End of project page content  ====================*/}

                <Footer isEng={isEng}/>

                <MobileMenu isEng={isEng} onLanguageChange={onLanguageChange}/>
            </div>
        )
    }
}


export default Projects;