import React, {useState} from 'react'
import './Cover.css'
import CoverSection from './CoverSection'
import Portals from './PortalComponents/Portals'

import bb from '/Users/matt/Desktop/okmap/okmap/src/Assets/kaleochallenge.png'

function Cover(props) {

    const [homeBanner, setHomeBanner] = useState(false)
    const [yesBanner, setYesBanner] = useState(false)
    const [noBanner, setNoBanner] = useState(false)
    const kaleo = props.kaleostate
    const [kaleocover, setKaleoCover ] = useState(true)
    const [bubble, setbubble] = useState(true)

    const handleCover = () => {
        setKaleoCover(!kaleocover)
        setbubble(false)
        setHomeBanner(!homeBanner)
    }


    const handleClickYes = () => {
        
            setHomeBanner(false)
            setYesBanner(true)
            

    }

    const handleClickNo = () => {
        
        setHomeBanner(false)
        setNoBanner(true)
        

}

    return (
        <div class="container background">
        <img class="backgroundimg">
        </img>
            <div className="portalscontainer">
                
            </div>
            

            <div className="banner"></div>
            
            <div className="covercardbox">
                
                <button className="coverbutton" onClick={handleCover}>
                <i className='fas fa-chevron-left fa-4x ci' />
                </button>
                    <CoverSection 
                    homeBanner={homeBanner} 
                    yesBanner={yesBanner}
                    noBanner={noBanner} 
                    kaleo={kaleocover}
                    handleClickYes={handleClickYes}
                    handleClickNo={handleClickNo}
                    />
                    <button className="coverbutton" onClick={handleCover}>
                    {bubble && <img onClick={handleCover} className="bubble" src={bb} alt="hi"></img>}
                    <i className='fas fa-chevron-right fa-4x ci' />
                </button>
            </div>
            
            
        </div>
    )
}

export default Cover
