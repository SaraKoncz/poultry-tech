import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderTwo extends Component{
    render(){
        const {isEng} = this.props;
        
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        };

        let data = [
            {
                bgImg: 'slider9.jpg', 
                sliderTitle: 'Korszerű Baromfitelepek', 
                sliderTitleEng: 'Modern Poultry Farms', 
                sliderSubtitle: 'Komplett automatizált rendszerek világszínvonalú berendezésekkel', 
                sliderSubtitleEng: 'Complete automated systems with top-quality equipment', 
                btnLink: 'projects'
            },
            {
                bgImg: 'slider7.jpg', 
                sliderTitle: 'Tervezéstől a megvalósításig', 
                sliderTitleEng: 'From design to implementation', 
                sliderSubtitle: 'Az eredményes baromfitartás műszaki háttere', 
                sliderSubtitleEng: 'Behind the success: technical background for effective poultry farming', 
                btnLink: 'services'
            },
            {
                bgImg: 'slider8.jpg', 
                sliderTitle: 'Kérdés esetén ', 
                sliderTitleEng: 'In case of question ', 
                sliderSubtitle: 'Ügyfélszolgálatunk és szervizünk rendelkezésre áll', 
                sliderSubtitleEng: 'Our customer service is at your disposal', 
                btnLink: 'contact-us'
            },
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}>
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content m-auto text-center">
                                    <a className={'pt-slider'} href={`${process.env.PUBLIC_URL}/#${val.btnLink}`}>
                                    <h2 className="hero-slider__title">{isEng ? val.sliderTitleEng : val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{isEng ? val.sliderSubtitleEng : val.sliderSubtitle}</p>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div id={"home"}>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderTwo;