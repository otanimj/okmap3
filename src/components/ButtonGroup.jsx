import React from 'react'
import SVG from './SVG'
import {Button} from './Button'
import './ButtonGroup.css'

function ButtonGroup(props) {
    return (
        <div className="shaka">
                  <Button
                    buttonSize="btn--wide"
                    buttonColor="primary"
                    onClick={props.handleClick}
                  >
                    {props.button1}
                  </Button>
                  <SVG />
                  <Button
                    buttonSize="btn--wide"
                    buttonColor="primary"
                    onClick={props.handleClick2}
                  >
                    {props.button2}
                  </Button>
                </div>
    )
}

export default ButtonGroup
