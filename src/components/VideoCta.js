import React, {Component} from 'react';

class VideoCta extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }

    render() {
        const {isEng = false} = this.props;
        const titleHun = 'Cégismertető';
        const titleEng = 'About Us';
        const intro1Hun = 'Cégünk 1995-töl  - korábban mint a Bábolna Részvénytársaság és Vállalatcsoport Eszközkereskedelmi Divíziója, majd később önálló privát társaságként - aktív szerepet játszik a térség baromfiiparának eszközellátásában.  Az elmúlt tíz év során a mai napig mintegy 3000 baromfi istálló – közel 3 millió m² - ( broiler végtermék, broiler szülőpár, pulyka, liba és kacsa hízlaló és szülőpár istállók ) rekonstrukciójának kivitelezésével piacvezető szerephez jutott a magyarországi mélyalmos baromfieszköz forgalmazásban.';
        const intro2Hun = 'Cégünk, komplett szolgáltatást – tervezés, konzultáció, értékesítés, szállítás és szervíz – biztosít patrnerei részére mellyel a baromfitartó eszközök legújabb fejlesztéseit teszi számukra elérhetővé.';
        const intro1Eng = 'Our company has been playing an active role since 1995 in selling and servicing equipment for the poultry industry of the region, earlier as the Equipment Trading Division of Babolna Corporation and Company Group and later as an independent private entity. During the past years through completion of reconstruction of more than 3000 poultry houses (broiler product, broiler parent stock, broiler GP stock, turkey, goose and duck growing facilities and parent stock houses, table egg production) . ';
        const intro2Eng = 'We are a full service company, our activities - design, consultation, sales and service - makes the latest development in poultry equipment available to our customers.';
        return (
            <div id={'about-us'}>
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--60 section-space--inner--top--120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="video-cta-content">
                                    <h4 className="section-title">{isEng ? titleEng : titleHun}</h4>
                                    <p className="video-cta-content__text">
                                        {isEng ? intro1Eng : intro1Hun}
                                    </p>
                                    <p className="video-cta-content__text">
                                        {isEng ? intro2Eng : intro2Hun}
                                    </p>
                                    <a href={`${process.env.PUBLIC_URL}/#contact-us`}
                                       className="ht-btn ht-btn--round">KAPCSOLAT</a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-6">
                                <div className="cta-video-image">
                                    <div className="video-popup">
                                        <div className="cta-video-image__image">
                                            <img src="assets/img/introduction/intro1.jpg" className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;