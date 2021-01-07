import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DemoIndex from './demo_page/Demo';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import About from './pages/About';
import Services from './service/Services';
import ServicePlanning from './service/planning';
import ServiceDetailsLeftSidebar from './service/ServiceDetailsLeftSidebar';
import ServiceDetailsRightSidebar from './service/ServiceDetailsRightSidebar';
import Projects from './project/Projects';
import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogRightSidebar from './blog/BlogRightSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from './blog/BlogDetailsRightSidebar';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ServiceSales from "./service/sales";
import ServiceSupport from "./service/support";
import ServiceService from "./service/service";
import Aviagen from "./project/Aviagen";
import Gyermelyi from "./project/Gyermelyi";
import Hungerit from "./project/Hungerit";
import Kulpiac from "./project/Kulpiac";
import McDonalds from "./project/McDonalds";

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Services}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`} component={ServiceDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/planning`} component={ServicePlanning}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/sales`} component={ServiceSales}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/support`} component={ServiceSupport}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={ServiceService}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-aviagen`} component={Aviagen}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-gyermelyi`} component={Gyermelyi}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-hungerit`} component={Hungerit}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-kulpiac`} component={Kulpiac}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-mcdonalds`} component={McDonalds}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                    <Route component={NoMAtch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();