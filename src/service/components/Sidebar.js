import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        const {isEng} = this.props;
        let data = [
            {sidebarListLink: "planning", sidebarListIcon: 'flaticon-024-statistics', sidebarListText: 'Tervezés', sidebarListTextEng: 'Project design'},
            {sidebarListLink: "sales", sidebarListIcon: 'flaticon-028-manufacturing-plant', sidebarListText: 'Eszköz kereskedelem', sidebarListTextEng: 'Equipment sales'},
            {sidebarListLink: "support", sidebarListIcon: 'flaticon-030-management', sidebarListText: 'Szaktanácsadás', sidebarListTextEng: 'Product support'},
            {sidebarListLink: "service", sidebarListIcon: 'flaticon-021-worker', sidebarListText: 'Szervíz', sidebarListTextEng: 'After Sales Service'},
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <li key={i}><a href={val.sidebarListLink}><i className={val.sidebarListIcon} />{isEng ? val.sidebarListTextEng : val.sidebarListText}</a></li>
            )
        });

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">{isEng ? 'Our Services' : 'Szolgáltatásaink'}</h3>
                        <ul className="sidebar-list">
                            {Datalist}
                        </ul>
                    </div>
                    {/*<div className="sidebar">*/}
                    {/*    <h3 className="sidebar-title">Download brochure</h3>*/}
                    {/*    <ul className="sidebar-list">*/}
                    {/*        <li><a href="/"><i className="fa fa-file-pdf-o" />Brochures.PDF</a></li>*/}
                    {/*        <li><a href="/"><i className="fa fa-file-word-o" />Brochures.DOC</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Sidebar;