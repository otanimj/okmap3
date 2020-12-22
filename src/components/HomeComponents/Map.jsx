import React from 'react'
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, NavigationControl, Popup} from 'react-map-gl';
import * as data from '../../DATA/kuleanadata.json'
import * as tdata from '../../DATA/zipcode.json'
import OK from '../../Assets/Gateway.png'

import './Map.css'
import { AnimatePresence, motion } from 'framer-motion';
import 'mapbox-gl/dist/mapbox-gl.css'

import OKM from '../../Assets/CommunityFirst-9720-TNiimi-10.jpg'
import svg from '../../Assets/location-pin-svgrepo-com (1).svg'


function Map() {

    const [selectedPark, setSelectedPark] = useState("");
    const [selectedZip, setSelectedZip] = useState("")
    const [mapKuleana, setMapKuleana] = useState(true)
    const [mapZipcode, setMapZipcode] = useState(true)
    const [legend, setLegend] = useState(false)
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "500px",
        latitude: 19.741755,
        longitude: -155.6659,
        zoom: 8,
        offset: [0, -50/2]
    });

    return (
        <div className="mapbox">
        <AnimatePresence>
        { legend && 
            <motion.div key={`${selectedPark.properties.KULEANA_ID}`} className="maplegend" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="mapnav">
                <div className="icon1">
                    <img src={OK} alt={"ok"} className='navbar-icon' />
                </div>
            </div>
                <div className="mapdata">
                    <img src={OKM} className="mapimg"/>
                    <text className="texttitle">{selectedPark.properties.NAME}</text>
                    <text className="textrating">{selectedPark.properties.RATING}</text>
                    <text className="text">{selectedPark.properties.DESCRIPTIO}</text>
                    <text className="texttitle2">Kuleana Deals</text>
                    <text className="text">{selectedPark.properties.COUPONS}</text>
                </div>
            </motion.div>}
        </AnimatePresence>
        
            <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/otanisama/ckg51fmse147k19lf4znh058c"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={nextViewport => setViewport(nextViewport)}>
            <div style={{position: 'absolute', right: 0}}>
                <NavigationControl />
            </div>
            

            { 
                mapKuleana && data.features.map(park => (
                <Marker key={park.properties.PARK_ID} 
                latitude={park.geometry.coordinates[1]}    
                longitude={park.geometry.coordinates[0]}
                offsetLeft={-12}
                offsetTop={-24}
                >
                  <button className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    // set state to selected maped park
                    setSelectedPark(park);
                    setLegend(true)
                   
                  }}
                  >
                      <svg viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      fill="none" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      className="marker"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </button>
                </Marker>
              ))
            }

            {
                mapZipcode && tdata.features.map(tpark =>(
                    <Marker key={tpark.properties._ID}
                    latitude={tpark.geometry.coordinates[1]}
                    longitude={tpark.geometry.coordinates[0]}
                    offsetLeft={-12}
                    offsetTop={-24}
                    >
                        <button className="marker-btn"
                        onClick={(e) => {
                        e.preventDefault();
                        // set state to selected maped park
                        setSelectedPark(tpark);
                        setSelectedZip(tpark);
                        setLegend(false);
                            
                  }}>

                    <svg viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    className="marker"
                    fill="none"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>

                  </button>

                    </Marker>

                    

            
                    
                ))
            }
            {
            
            selectedZip ? (
                <Popup
                latitude={selectedZip.geometry.coordinates[1]}
                longitude={selectedZip.geometry.coordinates[0]}
                onClose={() => {
                    setSelectedZip(null)
                }}
                className="mainpop"
                >
                    <div className="popup">
                        <h1 className="black">{selectedZip.properties.ZIP}</h1>
                        <p className="black">Quizzes taken: {selectedZip.properties.SCORE}</p>
                        <p className="black">Average Score: {selectedZip.properties.SCORE}%</p>
                    </div>
                </Popup>
                ) : null}
            
            
            </ReactMapGL>
        </div>
    )
}

export default Map
