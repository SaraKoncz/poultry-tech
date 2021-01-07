import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1
                },

                575:{
                    slidesPerView : 1
                }
            }

        };

        const {isEng = false} = this.props;
        const titleHun = 'Projektjeink közül';
        const titleEng = 'Some of our Projects';
        const readMoreHun = 'További részletek';
        const readMoreEng = 'See more';
        
        let dataHun = [
            {
                img: 'aviagen.jpg', 
                serviceTitle: 'Aviagen Nagyszülőpár Telepek', 
                serviceExcerpt: 'Társaságunk aktív szerepet játszik a régió baromfihús ellátásában az Aviagen nagyszülőpár integráció baromfitelepeinek eszközellátásával, a berendezések beszereléseinek...', 
                serviceUrl: 'project-details-aviagen'
            },
            {
                img: 'mcdonalds.jpg',
                serviceTitle: "McDondald's Flagship - Mintagazdaság Telepek",
                serviceExcerpt: 'Európában elsőként a hazai MasterGood csoport brojlerhús termelő telepei kapták meg a McDonald’s Mintagazdaság ( ”Flagship” ) minősítést ahol a baromfi komfort, a technológiai...', 
                serviceUrl: 'project-details-mcdonalds'
            },
            {
                img: 'tiszakecske.jpg',
                serviceTitle: 'Hungerit Zrt. Tiszakécske Kacsatelep',
                serviceExcerpt: 'A Hungerit Zrt. társaságunkat bízta meg végtermék kacsatartó kapacitásának növelésére a zöldmezős beruházás keretében épült 21 istállós telep tartástechnológiai...', 
                serviceUrl: 'project-details-hungerit'
            },
            {
                img: 'külpiac.jpg',
                serviceTitle: 'Poultry-Tech a Külpiacokon',
                serviceExcerpt: 'Társaságunk a keleti régióban is sikerrel szerepel nemzetközi tendereken baromfitartó eszközrendszereivel és szerviz szolgáltatásával. Ukrajnában számos brojler szülőpár nevelő telep...',
                serviceUrl: 'project-details-kulpiac'
            },
            {
                img: 'gyermely.jpg',
                serviceTitle: 'Termelői Kapacitások Bővítése Gyermelyen',
                serviceExcerpt: 'A Gyermelyi Tojás Kft. termelői kapacitásának bővítését összekötötte az uniós szabályok követésével új ketreces tartástechnológia beszerzésével 4 új tojóépület  számára...',
                serviceUrl: 'project-details-gyermelyi'
            }
        ];

        let dataEng = [
            {img: 'service1.jpg', serviceTitle: 'Land Minning', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', serviceTitle: 'Work Management', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', serviceTitle: 'Material Engineering', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', serviceTitle: 'Power and Energy', serviceExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = (isEng ? dataEng : dataHun).map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">{isEng ? readMoreEng : readMoreHun}</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div id={'projects'}>
                {/*====================  project grid slider area ====================*/}
                <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h2 className="section-title mb-0">{isEng ? titleEng : titleHun} </h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="service-grid-slider-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-slider">
                                <div className="service-slider__container service-slider__container--style2">
                                    <Swiper {...params}>
                                        {DataList}
                                    </Swiper>
                                </div>
                            </div>
                            <a className={'see-more-link'} 
                               style={{marginTop: '20px', fontSize: '18px'}}
                               href={`${process.env.PUBLIC_URL}/projects`} >{isEng ? 'Further projects...' : 'További projektek...'}</a>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================  End of project grid slider area  ====================*/}
                
            </div>
        )
    }
}


export default ServiceGridSlider;