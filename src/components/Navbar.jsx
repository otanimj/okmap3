import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import OK from '../Assets/Gateway.png'


function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
      setClick(false);
      console.log('hi')
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <img src={OK} alt={"ok"} className='navbar-icon' />

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='https://ourkuleanahawaii.com/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a
                
                
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Pledge
              </a>
            </li>
            {button ? (
              <a className='btn-link'>
                <Button onClick={props.handleClick} buttonStyle='btn--outline'>PLEDGE</Button>
              </a>
            ) : (
              <a className='btn-link'>
                <Button
                  buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  onClick={closeMobileMenu}
                >
                </Button>
                </a>
            )}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
