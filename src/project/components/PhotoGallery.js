import React, { Component } from 'react';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class PhotoGallery extends Component{
    render(){
        /* project gallery image list */
        const aviagen = [
            "aviagen1.jpg",
            "aviagen2.jpg",
            "aviagen3.jpg",
            "aviagen4.jpg",
            "aviagen5.jpg",
            "aviagen6.jpg",
            "aviagen7.jpg",
            "aviagen8.jpg"
        ];

        const mcdonalds = [
            "mcdonalds1.jpg",
            "mcdonalds2.jpg",
            "mcdonalds3.jpg"
        ];

        const gyermely = [
            "gyermely1.jpg",
            "gyermely2.jpg",
            "gyermely4.jpg",
            "gyermely5.jpg",
            "gyermely6.jpg",
            "gyermely7.jpg"
        ];

        const kulpiac = [
            "kulpiac1.jpg",
            "kulpiac2.jpg",
            "kulpiac3.jpg",
            "kulpiac4.jpg",
            "kulpiac5.jpg",
            "kulpiac6.jpg",
            "kulpiac7.jpg",
            "kulpiac8.jpg",
            "kulpiac9.jpg",
            "kulpiac10.jpg",
            "kulpiac11.jpg",
            "kulpiac12.jpg",
        ];

        const tiszakecske = [
            "tiszakecske1.jpg",
            "tiszakecske2.jpg",
            "tiszakecske3.jpg",
            "tiszakecske4.jpg",
        ];

        const PhotoItem = ({ image, group }) => (
            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10">
                <LightgalleryItem group={group} src={`assets/img/projects/${image}`}>
                    <button className="gallery-item single-gallery-thumb">
                        <img src={`assets/img/projects/${image}`} className="img-fluid" alt="" /><span className="plus" />
                    </button>
                </LightgalleryItem>
            </div>
        );
        
        const projectName = this.props.projectName ? this.props.projectName : 'aviagen';
        
        const getProject = (projectName) => {
            let project;
            
            switch (projectName) {
                case 'mcdonalds':
                    project = mcdonalds;
                    break;
                case 'tiszakecske':
                    project = tiszakecske;
                    break;
                case 'kulpiac':
                    project = kulpiac;
                    break;
                case 'gyermely':
                    project = gyermely;
                    break;
                default:
                    project = aviagen;
                    break;
            }
            
            return project;
        };
        

        return(
            <div>
                <LightgalleryProvider>
                    <div className="row row-5">
                        {getProject(projectName).map((p, idx) => (
                            <PhotoItem key={idx} image={p} group="group1" />
                        ))}
                    </div>
                </LightgalleryProvider>
            </div>
        )
    }
}

export default PhotoGallery;