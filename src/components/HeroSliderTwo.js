import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderTwo extends Component{
    render(){
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
            {bgImg: 'slider9.jpg', sliderTitle: 'Korszerű Baromfitelepek', sliderSubtitle: 'Komplett automatizált rendszerek világszínvonalú berendezésekkel', btnLink: 'contact-us'},
            {bgImg: 'slider7.jpg', sliderTitle: 'Tervezéstől a megvalósításig', sliderSubtitle: 'Komplett automatizált rendszerek világszínvonalú berendezésekkel', btnLink: 'contact-us'},
            {bgImg: 'slider8.jpg', sliderTitle: 'Kérdés esetén ', sliderSubtitle: 'Ügyfélszolgálatunk és szervizünk rendelkezésre áll', btnLink: 'contact-us'},
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
                                    <div className={'pt-slider'}>
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                    </div>
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