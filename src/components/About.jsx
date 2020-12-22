import React from 'react'
import '../style.css'
import {Button} from './Button'
import img from '../Assets/CommunityFirst-9720-TNiimi-10.jpg'
import Portals from './PortalComponents/Portals'

function About() {

    return (
        <div className="about">
        <div className="aboutdesc">
                <div className="abouttitle">
                    <h1 style={{color:"#630D0C"}}>What is being mapped?</h1>
                </div>
                <div className="aboutdesccontainer">
                    <div className="descsec">
                        <i className='fas fa-medal fa-4x' />
                        <h1>Kaleo Challenges</h1>
                        <h3>fdasfdafasd</h3>
                    </div>
                    <div className="descsec">
                        <i className='fas fa-map-marker-alt fa-4x' />
                        <h1>Kuleana Partners</h1>
                        <h3>sdadsadasd</h3>
                    </div>
                    <div className="descsec">
                        <i className='fas fa-heartbeat fa-4x' />
                        <h1>Community Data</h1>
                        <h3>dfsadsadsa</h3>
                    </div>
                </div>
            </div>
            <div className="aboutimage">
            <div className="aboutimage2">
                <img src={img} alt="pic" width="100%" height="100%"/>
            </div>
            <div className="aboutimagedesc">
                <div className="aboutdescbox">
                    <h1 style={{color:"#630D0C"}}>Become a kuleana partner</h1>
                    <h2>Why?</h2>
                    <h3>As a business or organization that has the privilege of operating on Hawaiʻi island, we stand alongside the many in our community who have joined in support of the #OurKuleana campaign. As an official #OurKuleana Partner, we commit to fulfilling these kuleana:</h3>
                    <Button
                        buttonSize="btn--wide"
                        buttonColor="primary"
                        onClick={() => console.log("hi")}
                    >
                        {"Pledge"}
                    </Button>
                </div>
                
            </div>
            </div>
            <Portals/>
            
        </div>
    )
}

export default About;
