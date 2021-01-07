import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class ServiceService extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Szolgáltatásainkról Bővebben</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Kezdőlap</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Szolgáltatások</a></li>
                                        <li>Ismertető a szolgáltatásról</li>
                                    </ul>
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
                                                    <h2>Szervíz</h2>
                                                    <p>Raktárbázisunk és szakembereink a nap 24 órájában állnak rendelkezésre partnereink számára telefonon vagy személyes konzultáció keretében tartástechnológiai és üzemeltetési kérdésekben, szaktanácsadásban, oktatásban. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 order-2 order-lg-1">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

                <MobileMenu/>

            </div>
        )
    }
}


export default ServiceService;