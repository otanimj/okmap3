import React from 'react'
import {motion} from 'framer-motion'
import './Portals.css'


const svgVariants = {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, delay: 3}
    },
    hover: {
        scale: 1.25,
        
        
      },
    exit:{
        transition:{
            ease: 'easeInOut'
          },
        opacity: 0
    }
  }

function SinglePortal(props) {
    return (
        <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          variants={svgVariants}
          whileHover="hover"
          initial="hidden"
          onMouseOut={props.onMouseOut}
          onMouseEnter={props.onMouseEnter}
          animate="visible"
          className="gateway"
          src={props.src}
          alt="county seal"
        />
        {console.log(props.src)}
      </a>)
}

export default SinglePortal
