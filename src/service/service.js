import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class ServiceTypes extends Component{
    render(){
        const {isEng, serviceType, onLanguageChange} = this.props;

        const serviceTabContentData = [
            {
                bgUrl: "tervezes.jpg",
                contentTitle: 'Tervezés',
                contentDesc: 'A baromfi tartási igényeit maximálisan kiszolgáló eszközrendszer összeállítása, tartástérben történő elhelyezésének és beépítésének megtervezése az állatjóléti követelmények és környezetvédelmi szempontok figyelembevételével.',
                serviceLink: 'planning'
            },
            {
                bgUrl: "kereskedelem.jpg",
                contentTitle: 'Eszköz kereskedelem',
                contentDesc: 'Társaságunk vezető európai, valamint tengerentúli gyártók világszínvonalú berendezéseinek forgalmazásával, lehetővé teszi a baromfitartók számára a legújabb és következő évtizedekre előremutató műszaki technológia alkalmazását.' +
                    'Ennek révén a termelés fajlagos mutatói javíthatók, a tartás közvetlen - takarmány, energia, munkaerő stb. - költségei radikálisan csökkenthetők továbbá maximálisan biztosíthatók a tartás állategészségügyi feltételei.',
                serviceLink: 'sales'
            },
            {
                bgUrl: "szaktanacsadas.jpg",
                contentTitle: 'Szaktanácsadás',
                contentDesc: '24 éves eszközforgalmazási, beszerelési és üzemeltetési tapasztalatunkat megbízóink szolgálatába állítva partnereink termelési eredményei és piaci versenyképessége emelhető.',
                serviceLink: 'support'
            },
            {
                bgUrl: "szerviz.jpg",
                contentTitle: 'Szervíz',
                contentDesc: 'Raktárbázisunk és szakembereink a nap 24 órájában állnak rendelkezésre partnereink számára telefonon vagy személyes konzultáció keretében tartástechnológiai és üzemeltetési kérdésekben, szaktanácsadásban, oktatásban. ',
                serviceLink: 'service'
            },
        ];

        const serviceTabContentDataEng = [
            {
                bgUrl: "tervezes.jpg",
                contentTitle: 'Project design',
                contentDesc: 'Compilation of a tool system that maximally serves the housing needs of poultry. Placement and installation planning that complies animal welfare requirements and environmental protection aspects.',
                serviceLink: 'planning'
            },
            {
                bgUrl: "kereskedelem.jpg",
                contentTitle: 'Equipment Sales',
                contentDesc: 'Our company distributes world-class equipment from leading European and overseas manufacturers, enabling poultry farmers to apply the latest and forward-looking technical technology.' +
                    'This way, the specific indicators of production can be improved, the costs of feed, energy, labor, etc. can be radically reduced. In addition compliance with veterinary regulations can be ensured.',
                serviceLink: 'sales'
            },
            {
                bgUrl: "szaktanacsadas.jpg",
                contentTitle: 'Product support',
                contentDesc: 'Our 24 years of experience in equipment distribution, installation and operation at the service of our clients claiming that the production results and market competitiveness of our partners can be increased.',
                serviceLink: 'support'
            },
            {
                bgUrl: "szerviz.jpg",
                contentTitle: 'After Sales Service',
                contentDesc: 'Our warehouse base and specialists are available to our partners 24 hours a day by phone or in a personal consultation regarding technology and operation issues, for consultation and education.',
                serviceLink: 'service'
            },
        ];
        
        return(
            <div>
                <NavBar isEng={isEng} onLanguageChange={onLanguageChange}/>
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>{isEng ? 'Our Services In Details' : 'Szolgáltatásainkról Bővebben'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper section-space--inner--120">
                    <div className="service-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12 order-1 order-lg-2">
                                    <div className="service-details">
                                        <ServiceGallery serviceName={'service'}/>
                                        <div className="content section-space--top--30">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2>{isEng ? serviceTabContentDataEng.find(e => e.serviceLink === serviceType).contentTitle : serviceTabContentData.find(e => e.serviceLink === serviceType).contentTitle}</h2>
                                                    <p>{isEng ? serviceTabContentDataEng.find(e => e.serviceLink === serviceType).contentDesc : serviceTabContentData.find(e => e.serviceLink === serviceType).contentDesc }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 order-2 order-lg-1">
                                    <Sidebar isEng={isEng}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer isEng={isEng}/>

                <MobileMenu isEng={isEng} onLanguageChange={onLanguageChange}/>

            </div>
        )
    }
}


export default ServiceTypes;