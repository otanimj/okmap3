import React from 'react'
import SinglePortal from './SinglePortal'

import CD from '../../Assets/video/civil defense logo.jpeg'
import CH from '../../Assets/video/COH COVID.png'
import OK from '../../Assets/video/CommunityFirstt.png'
import RD from '../../Assets/video/rnd.png'
import VH from '../../Assets/video/VIBRANT.png'
import MK from '../../Assets/video/mhs logo.png'
import KH from '../../Assets/video/KH.png'
import BZ from '../../Assets/video/bzp.png'
import OA from '../../Assets/video/Officeofagingg.png'
import SD from '../../Assets/video/socialdistanceclubhi.jpg'


function Portals() {
    const OKLink = "https://ourkuleanahawaii.com/"
    const CDLink = "https://www.hawaiicounty.gov/departments/civil-defense"
    const CHLink = "https://coronavirus-response-county-of-hawaii-hawaiicountygis.hub.arcgis.com/"
    const RDLink = "https://www.rd.hawaiicounty.gov/economic-development/covid-19-business-resources-and-information"
    const VHLink = ""
    const MKLink = ""
    const KHLink = ""
    const BZLink = ""
    const OALink = ""
    const SDLink = ""
    

    return (
        <div>
            <SinglePortal 
            link={OKLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={OK}/>
            <SinglePortal 
            link={CDLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={CD}/> 
            <SinglePortal 
            link={CHLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={CH}/>
            <SinglePortal 
            link={RDLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={RD}/>
            <SinglePortal 
            link={VHLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={VH}/>
            <SinglePortal 
            link={MKLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={MK}/>
            <SinglePortal 
            link={KHLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={KH}/> 
            <SinglePortal 
            link={BZLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={BZ}/>
            <SinglePortal 
            link={OALink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={OA}/>
            <SinglePortal 
            link={SDLink} 
            onMouseOut={() => console.log("hi!")} 
            onMouseEnter={() => console.log("hi!")} 
            src={SD}/>


        </div>
    )
}

export default Portals
