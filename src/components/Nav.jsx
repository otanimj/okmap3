import React from 'react'
import './Nav.css'
import OK from '../Assets/Gateway.png'
import './Footer.css'

function Nav() {
    return (
        <div>
        <nav class=" nav">
            <ul class="main-nav">
                <li><a href=""><img src={OK} alt={"ok"} className='navbar-icon' /></a></li>
                
                <li class="push"><a href="">Contact</a><a href='https://ourkuleanahawaii.com/' className='nav-links' onClick={""}>
                Home
              </a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav
