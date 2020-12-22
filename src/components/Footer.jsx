import React from 'react'
import './Footer.css'
import OK from '../Assets/Gateway.png'

function Footer() {
    return (
        <>
            <footer className="footer">
                    <div className="icon"><img src={OK} alt={"ok"} className='navbar-icon' /></div>
                    <div className="socialmedia">
                        <a
                        className='social-icon-link facebook'
                        href='https://www.facebook.com/OurKuleanaHawaii/'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Facebook'
                        >
                        <i className='fab fa-facebook-f' />
                        </a>
                        <a
                        className='social-icon-link instagram'
                        href='https://www.instagram.com/ourkuleanahawaii/?hl=en'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Instagram'
                        >
                        <i className='fab fa-instagram' />
                        </a>
                        <a
                        className='social-icon-link youtube'
                        href='https://www.youtube.com/channel/UCm1RBdw0Mx9NOdZcjg_cXJQ/featured'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label='Youtube'
                        >
                        <i className='fab fa-youtube' />
                        </a>
                    </div>
                 
               
            </footer>
        </>
    )
}

export default Footer
