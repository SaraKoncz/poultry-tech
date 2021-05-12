import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import PhotoGallery from './components/PhotoGallery';

class ProjectComp extends Component{

    render(){

        let projectData = [
            {
                partner: 'Aviagen Kft.',
                location: 'Győrasszonyfa',
                technology: 'Brojler nagyszűlőpár telep',
                title: 'Aviagen Nagyszülőpár Telepek',
                text: ['Társaságunk aktív szerepet játszik a régió baromfihús ellátásában az Aviagen nagyszülőpár integráció baromfitelepeinek eszközellátásával, a berendezések beszereléseinek irányításával, szerviz útján pedig a termelés műszaki hátterének biztosításával.',
                'A világszínvonalú berendezések magukban foglalják az automatizált etető rendszereket, a zárt higiénikus itató berendezéseket, automata tojófészeksorokat. A komputer vezérelte, napszak és évszak szerint előre programozható szellőztetéssel fűtéssel és hűtéssel a legoptimálisabb klíma teremthető meg a tartásterekben.',
                'A komplex tartási rendszer része a számítógépes telepi kommunikáció, a termelési adatok automatikus gyűjtése, azok tárolása és megjelenítése.',
                'Műszaki szolgáltatásainkkal biztos műszaki hátteret nyújtunk az integráció napos szülőpár állományainak előállításához, hazai és külföldi tenyésztelepek megbízható napos szülőpár ellátásához.'],
                projectName: 'aviagen'
            },
            {
                partner: 'Gyermelyi Tojás Kft.',
                location: 'Gyermely',
                technology: 'Árutojás telep',
                title: 'Termelői Kapacitások Bővítése Gyermelyen',
                text: ['A Gyermelyi Tojás Kft. termelői kapacitásának bővítését összekötötte az uniós szabályok követésével új ketreces tartástechnológia beszerzésével 4 új tojóépület számára.',
                'A teljesen EU konform, felső kategóriás tojóketrec rendszerek szállítását, beszerelésének irányítását majd beüzemelését a Poultry-Tech Kft. végezte. Az épületenként 8 soros, soronként 6 emeletes komplett berendezések a tojótyúkok komfortját az előírások szerinti tágas ketrec kialakítás – az új épületekben növelt férőhelyű tojóketrecek  és úgynevezett állatjóléti ( kényelmi ) berendezések úgy mint madaranként ülőrúd, növelt vályú etetőfelület, max. 7° padozatlejtés, karomkoptatók, kaparó -és csipegető terek, kiegészítő etető vályúk és az árnyékolt tojófészkek révén biztosítják.',
                'A termelő kapacitás a zöldmezős beruházások keretében összesen 400’000 tojótyúk férőhely kapacitással bővült.'],
                projectName: 'gyermely'
            },
            {
                partner: 'Hungerit Zrt.',
                location: 'Tiszakécske',
                technology: 'Kacsa hizlaló telep',
                title: 'Hungerit Zrt. Tiszakécske Kacsatelep',
                text: ['A Hungerit Zrt. társaságunkat bízta meg végtermék kacsatartó kapacitásának növelésére a zöldmezős beruházás keretében épült 21 istállós telep tartástechnológiai berendezéseinek összeállítására és szállítására.',
                'Az elő –és utónevelő tartásterekbe a légkorszerűbb kacsatartó berendezések kerültek beszerelésre mellyel tartástechnológiai igényei a legmagasabb szinten elégíthető ki a nevelés és hizlalás eredményessége pedig biztosítható.',
                'A 21 tartástérben komputer vezérlésű, automatizált berendezések végzik az etetést és itatást, gondoskodnak az optimális világításról, fűtésről, szellőztetésről. A tartástér klimatizációja előre beállítható a napszak és a mindenkori évszaknak megfelelően.',
                'A nagyméretű telepen az üzemeltetéshez elengedhetetlen telepi kommunikációt ugyancsak társaságunk tervezte, szállította és irányította kiépítését.'],
                projectName: 'tiszakecske'
            },
            {
                partner: 'Mironovszky Hlebopruduct',
                location: 'Ukrajna',
                technology: 'Brojler szűlőpár telep',
                title: 'Poultry-Tech a Külpiacokon',
                text: ['Társaságunk a keleti régióban is sikerrel szerepel nemzetközi tendereken baromfitartó eszközrendszereivel és szerviz szolgáltatásával.',
                'Ukrajnában számos brojler szülőpár nevelő telep műszaki kialakításában vett részt az ország legnagyobb brojler integrációja a Mironovszky Hlebopruduct megbízásából.',
                'A világszínvonalú és legújabb tartástechnológiák alkalmazásával, úgy mint parciális nyomásra (vákuumra ) vezérelt szellőzető rendszereivel, automatizált fűtő és hűtő berendezéseivel, programozható szórva etető rendszerrel, zárt, higiénikus itató rendszerrel és baromfi komputereivel eredményesen járult hozzá az integráció és ezzel a kelet - európai térség baromfitenyésztése megújításának elindításához.'],
                projectName: 'külpiac'
            },
            {
                partner: 'Baromfi-Coop Kft.',
                location: 'Baktalórántháza',
                technology: 'Brojler telep',
                title: 'McDondald\'s Flagship - Mintagazdaság - Telepek',
                text: ['Európában elsőként a hazai MasterGood csoport brojlerhús termelő telepei kapták meg a McDonald’s Mintagazdaság ( ”Flagship” ) minősítést ahol a baromfi komfort, a technológiai fegyelem, higiénia, környezetvédelem, hatékonyság és eredményesség világszínvonalú.',
                'A világszínvonalú berendezések magukban foglalják az automatizált etető rendszereket, a zárt higiénikus itató berendezéseket. A komputer vezérelte, napszak és évszak szerint előre programozható szellőztetéssel fűtéssel és hűtéssel a legoptimálisabb klíma teremthető meg a tartásterekben. A világító rendszer a legkorszerűbb energiatakarékos, dimmelhető LED fényforrásokból épül fel, működtetésükben az állatjóléti követelményeket is kielégítő  "hajnal-alkony" funkciót is biztosítva.',
                'A legmagasabb szakmai igényeket és az EU baromfitartási követelményeit minden tekintetben kielégítő tartástechnológiai berendezéseket és a nélkülözhetetlen telepi kommunikációs rendszert társaságunk szállította és irányította beszerelésüket, beüzemelésüket a cégcsoport termelő telepei számára.'],
                projectName: 'mcdonalds'
            }
        ];

        let projectDataEng = [
            {
                partner: 'Aviagen Kft.',
                location: 'Győrasszonyfa',
                technology: 'Broiler grandparent farm',
                title: 'Aviagen Grandparent Farms',
                text: ['Our company plays an active role in the region’s poultry meat supply through supplying equipment to the Aviagen broiler grandparent breeding integration poultry farms, supervising their installation and ensuring the technical background for production through maintenance services.',
                'The world-class equipment include automated feeding systems, closed, hygienic drinking systems and automated nest rows.',
                'The computer-controlled ventilation, heating and cooling, pre-programmable according to time of day and season, can ensure optimal climate in the rearing and production areas.',
                'Computerised communication, automatic collection of production data, their storage and display form part of the complex system at the site.',
                'With our technical services, we provide a safe technical background to produce breeder hatching eggs to supply breeder farms in Hungary and abroad reliably.'],
                projectName: 'aviagen'
            },
            {
                partner: 'Gyermelyi Tojás Kft.',
                location: 'Gyermely',
                technology: 'Breeding Cage System',
                title: 'Increasing of Production Capacities at Gyermely',
                text: ['Gyermelyi Tojás Ltd. linked the expansion of its production capacity to meeting EU requirements through the procurement of a new cage technology for the 4 new layer buildings.', 
                'The fully EU-compliant, high-end  layer cage systems were delivered, their installation supervised and commissioned by Poultry-Tech Ltd. The equipment, housing breeder hens in 8 rows on 6 storeys in every building, in spacious cages to meet requirements – the new building house with increased hens capacity per cage – and are equipped with animal welfare (comfort) equipment such as  perches, increased feeding trough surface, a maximum of 7° of floor slope, scratching and picking areas, additional feeding troughs and shaded laying nests.',
                'The production facility, with the green field investments has been expanded with 400,000 additional layer hen capacity.'],
                projectName: 'gyermely'
            },
            {
                partner: 'Hungerit Zrt.',
                location: 'Tiszakécske',
                technology: 'Duck farm',
                title: 'Hungerit Poultry Integration, Duck Farm at Tiszakécske',
                text: ['Hungerit commissioned Poultry-Tech Ltd. with the delivery and assembly supervision of equipment for the green field investment of 21 duck growing houses, aimed at expanding its commercial duck growing capacity.',
                'Computerised and automated feeding and drinking systems take care of the flock in the rearing and fattening houses, high efficiency equipment ensuring optimal dimmable LED lighting. Heating and ventilation of the growing areas are adjustable to time of day and the current season controlled by poultry computers.',
                'Farm communication systems, indispensable for the operation of a large-scale farm, was likewise designed and delivered by Poultry-Tech Ltd.'],
                projectName: 'tiszakecske'
            },
            {
                partner: 'Mironovszky Hlebopruduct',
                location: 'Ukraine',
                technology: 'Broiler parent farm',
                title: 'Poultry-Tech on Foreign Markets',
                text: ['We have participated successfully at international tenders announced in the Eastern region of Europe with our poultry farming systems and accompanying services.',
                'In Ukraine, we have been involved in shipping poultry equipment to several broiler breeder rearing farms, on commission by Mironivsky Hliboproduct, the country’s largest broiler integration.',
                'By using the latest world-class rearing technologies, such as ventilation systems controlled by partial pressure (vacuum), automated heating and cooling systems, programmable spin feeding system, closed, hygienic drinking system and computer controlled growing, we have contributed successfully to integration and thereby the renewal of the region’s poultry farming.'],
                projectName: 'külpiac'
            },
            {
                partner: 'Baromfi-Coop Kft.',
                location: 'Baktalórántháza',
                technology: 'Broiler Farm',
                title: 'McDonald\'s Flagship Farm',
                text: ['The broiler farms of Hungary’s MasterGood Group were the first in Europe to be awarded the McDonald’s Flagship rating, where poultry comfort, technological discipline, hygiene, environment protection, efficiency are world-class.',
                'The complete equipment package includes the automated feeding systems, closed hygienic drinking lines, computer controlled ventilation, heating and cooling systems, programmed according to actual season and part of the day. Up to date and energy saving LED lighting system provides the maximal animal comfort by dimmable and "sunset-sunrise" function. Poultry houses and farms are connected to the headquarter of the integration by fast and reliable communication system supplied by Poultry-Tech. ',
                'The growing technological equipment, meeting the highest professional expectations and the EU’s provisions on animal welfare were supplied by Poultry-Tech Ltd. and the company also supervised their installation and commissioning for the production sites of the company group.'],
                projectName: 'mcdonalds'
            }
        ];
        
        const {projectName, isEng, onLanguageChange} = this.props;
        const currentProject = isEng 
            ? projectDataEng.find(project => project.projectName === projectName) 
            : projectData.find(project => project.projectName === projectName);
        
        return(
            <div>
                {/* Navigation bar */}
                <NavBar isEng={isEng} onLanguageChange={onLanguageChange}/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>{isEng ? 'Project Information' : 'Projekt Információ'}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  project details page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Projects section start*/}
                <div className="project-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 section-space--bottom--40">
                        <div className="project-image"><img src={`assets/img/service/${currentProject.projectName}.jpg`} className="img-fluid" alt="" /></div>
                        </div>
                        <div className="col-lg-4 col-12 section-space--bottom--30">
                            <div className="project-information">
                                <h3>{isEng ? 'Project Information' : 'Projekt Információ'}</h3>
                                <ul>
                                    <li><strong>Partner:</strong> <a href="project-details">{currentProject.partner}</a></li>
                                    <li><strong>{isEng ? 'Location' : 'Helyszín'}:</strong>{currentProject.location}</li>
                                    <li><strong>{isEng ? 'Technology' : 'Technológia'}:</strong>{currentProject.technology}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                            <div className="project-details">
                                <h2>{currentProject.title}</h2>
                                {currentProject.text.map((e, i) => <p key={i}>{e}</p>)}
                            </div>
                        </div>
                        <div className="col-12">
                            <PhotoGallery projectName={projectName}/>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Projects section end*/}

                </div>
                <Footer isEng={isEng}/>

                <MobileMenu isEng={isEng} onLanguageChange={onLanguageChange}/>

            </div>
        )
    }
}


export default ProjectComp;