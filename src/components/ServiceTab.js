import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ServiceTabExample extends Component{

    render(){

        const {isEng = false} = this.props;
        const titleHun = 'Szolgáltatásaink';
        const titleEng = 'Our Services';
        
        /* service tab menu */
        let serviceTabMenuData = [
            {iconName: 'flaticon-024-statistics', tabMenuName: 'Tervezés'},
            {iconName: 'flaticon-028-manufacturing-plant', tabMenuName: 'Eszköz kereskedelem'},
            {iconName: 'flaticon-030-management', tabMenuName: 'Szaktanácsadás'},
            {iconName: 'flaticon-021-worker', tabMenuName: 'Szervíz'},
        ];

        let serviceTabMenuDataEng = [
            {iconName: 'flaticon-024-statistics', tabMenuName: 'Project design'},
            {iconName: 'flaticon-028-manufacturing-plant', tabMenuName: 'Equipment sales'},
            {iconName: 'flaticon-030-management', tabMenuName: 'Product support'},
            {iconName: 'flaticon-021-worker', tabMenuName: 'After Sales Service'},
        ];

        let serviceTabMenuDatalist = (isEng ? serviceTabMenuDataEng : serviceTabMenuData).map((val, i)=>{
            return(
                <Tab key={i}>  
                    <span className="icon">
                        <i className={val.iconName} />
                    </span> 
                    <span className="text">{val.tabMenuName}</span></Tab>
            )
        });

        
        /* service tab content */
        
        let serviceTabContentData = [
            {
                bgUrl: "tervezes.jpg", 
                contentTitle: 'Tervezés', 
                contentDesc: 'A baromfi tartási igényeit maximálisan kiszolgáló eszközrendszer összeállítása, tartástérben történő elhelyezésének és beépítésének megtervezése az állatjóléti követelmények és környezetvédelmi szempontok figyelembevételével.', 
                serviceLink: 'planning'
            },
            {
                bgUrl: "kereskedelem.jpg", 
                contentTitle: 'Eszköz kereskedelem', 
                contentDesc: 'Társaságunk vezető európai, valamint tengerentúli gyártók világszínvonalú berendezéseinek forgalmazásával, lehetővé teszi a baromfitartók számára a legújabb és következő évtizedekre előremutató műszaki technológia alkalmazását. Ennek révén a termelés fajlagos mutatói javíthatók, a tartás közvetlen - takarmány, energia, munkaerő stb. - költségei radikálisan csökkenthetők továbbá maximálisan biztosíthatók a tartás állategészségügyi feltételei.', 
                serviceLink: 'sales'
            },
            {
                bgUrl: "szaktanacsadas.jpg", 
                contentTitle: 'Szaktanácsadás', 
                contentDesc: 'Több mint két évtizedes eszközforgalmazási, beszerelési és üzemeltetési tapasztalatunkat megbízóink szolgálatába állítva partnereink termelési eredményei és piaci versenyképessége emelhető.', 
                serviceLink: 'support'
            },
            {
                bgUrl: "szerviz.jpg", 
                contentTitle: 'Szervíz', 
                contentDesc: 'Raktárbázisunk és szakembereink a nap 24 órájában állnak rendelkezésre partnereink számára telefonon, e-mailben vagy személyes konzultáció keretében tartástechnológiai és üzemeltetési kérdésekben, szaktanácsadásban, oktatásban.', 
                serviceLink: 'service'
            },
        ];

        let serviceTabContentDataEng = [
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

        // const readMoreHun = 'További részletek';
        // const readMoreEng = 'See more';

        let serviceTabContentDatalist = (isEng ? serviceTabContentDataEng : serviceTabContentData).map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(assets/img/service/${val.bgUrl})` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                            {/*<a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">{isEng ? readMoreEng : readMoreHun}</a>*/}
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div id={'services'}>

                {/*====================  service tab area ====================*/}
                <div className="service-tab-area section-space--inner--60 section-space--inner--top--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">{isEng ? titleEng : titleHun}</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* service tab wrapper */}
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service tab area  ====================*/}
            </div>
        )
    }
}

export default ServiceTabExample;