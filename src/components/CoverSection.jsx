import React from 'react'
import ButtonGroup from './ButtonGroup'
import Phone from './HomeComponents/Phone'
import './Cover.css'
import {CircularProgress} from '@material-ui/core'

import {AnimatePresence, motion} from 'framer-motion'

import Quiz from './QuizComponenets/Quiz'

function CoverSection(props) {
    return (
        <>
        <AnimatePresence exitBeforeEnter>
        
        { props.kaleo && 
            <motion.div key="home" className="covercard1 holds-the-iframe" initial={{ x: 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1700, opacity: 1 }}>
                <Phone/>
        </motion.div>
    }

    
    
    {props.homeBanner && <motion.div key="home" className="covercard" initial={{ x: 1000, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -1700, opacity: 1 }}>
        <Quiz/>
    </motion.div>}
    </AnimatePresence>
        </>
    )
}

export default CoverSection
