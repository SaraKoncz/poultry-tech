import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGallery from './components/ServiceGallery';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

class ServicePlanning extends Component{
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
                                        <ServiceGallery serviceName={'planning'}/>
                                        <div className="content section-space--top--30">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2>Tervezés</h2>
                                                    <p>A baromfi tartási igényeit maximálisan kiszolgáló eszközrendszer összeállítása, tartástérben történő elhelyezésének és beépítésének megtervezése az állatjóléti követelmények és környezetvédelmi szempontok figyelembevételével.</p>
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?</p>*/}
                                                </div>
                                                {/*<div className="col-lg-6 col-12 section-space--top--30">*/}
                                                {/*    <h3>Project Analysis</h3>*/}
                                                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-lg-6 col-12 section-space--top--30">*/}
                                                {/*    <h3>Project Costing</h3>*/}
                                                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-lg-6 col-12 section-space--top--30">*/}
                                                {/*    <h3>Project Planning</h3>*/}
                                                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-lg-6 col-12 section-space--top--30">*/}
                                                {/*    <h3>Project Strategy</h3>*/}
                                                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>*/}
                                                {/*</div>*/}
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


export default ServicePlanning;