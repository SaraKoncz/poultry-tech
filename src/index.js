import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HomeTwo from './HomeTwo';
import Projects from './project/Projects';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ServiceTypes from "./service/service";
import ProjectComp from "./project/project";
import TenderComp from "./project/tender";

class Root extends Component{
   
    render(){
        const {isEng, onLanguageChange} = this.props;
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} 
                           render={() => (
                        <HomeTwo isEng={isEng} onLanguageChange={onLanguageChange}/>
                    )}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/planning`} render={() => (<ServiceTypes isEng={isEng} serviceType="planning" onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/sales`} render={() => (<ServiceTypes isEng={isEng} serviceType="sales" onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/support`} render={() => (<ServiceTypes isEng={isEng} serviceType="support" onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} render={() => (<ServiceTypes isEng={isEng} serviceType="service" onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} render={() => (<Projects isEng={isEng}/>)} onLanguageChange={onLanguageChange}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/tenders`} render={() => (<TenderComp isEng={isEng}/>)} onLanguageChange={onLanguageChange}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-aviagen`} render={() => (<ProjectComp projectName="aviagen" isEng={isEng} onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-gyermelyi`} render={() => (<ProjectComp projectName="gyermely" isEng={isEng} onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-hungerit`} render={() => (<ProjectComp projectName="tiszakecske" isEng={isEng} onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-kulpiac`} render={() => (<ProjectComp projectName="kulpiac" isEng={isEng} onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details-mcdonalds`} render={() => (<ProjectComp projectName="mcdonalds" isEng={isEng} onLanguageChange={onLanguageChange}/>)}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} render={() => (<PageNotFound isEng={isEng}/>)}/>
                    <Route component={NoMAtch} />
                </Switch>
            </BrowserRouter>
        )
    }
}

class App extends Component{
    state = {
        isEng : false
    };
    
    componentDidMount() {
        const isEnglish = localStorage.getItem('Language') && localStorage.getItem('Language') === 'ENG';
        if (this.state.isEng !== isEnglish)
            this.setState({isEng: isEnglish});
    }

    changeLanguage = () => {
        const lang = this.state.isEng ? 'HUN' : 'ENG';
        localStorage.setItem("Language", lang);
        this.setState({isEng: lang === 'ENG'});
    };

    render(){
        const {isEng} = this.state;
        console.log(isEng);
        return(
            <div><Root isEng={isEng} onLanguageChange={this.changeLanguage}/></div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();