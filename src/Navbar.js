import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withTheme } from '@material-ui/core';
function Navbar(pros) {
    

    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);

  return (
    
    <>
      <nav className='navbar'>

    <div className='navbar-container'> 
    <Link to ='/'> 
         <img className="navbar-Logo" src='/images/Logo.png' alt='logo' />
         </Link>
         </div>
            
         <ul className={ 'nav-menubar'}>
        <li className='nav-item'>
                  <Link to='/' className='nav-links' >
                 Home
                  </Link>
                  </li>
                  <li className='nav-item'>
              
              <Link to='/News' className='nav-links' >
              News
              </Link>
 
            </li>

            <li className='nav-item'>
              
              <Link to='/CarbonFootprint' className='nav-links' >
              Carbon Footprint
              </Link>
 
            </li>
                    
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret  className = 'BlogDropDown' style={{backgroundColor: '#7BE0AD'}} >
                  Learn More Here!
              </DropdownToggle>
              <DropdownMenu noRadius={true}style={{backgroundColor: '#C8D3D5',}}>
                <DropdownItem header style={{backgroundColor: 'white',}}>Learn about Climate Change Below!
                </DropdownItem>
                <DropdownItem  className='itemLink'><Link to='/Learn' >
                  Effects in <b>Nature</b>
                </Link>
                </DropdownItem>
                  
                <DropdownItem className='itemLink'>
                  <Link to ='/LearnPageTwo'>
                  Effects in <b>Society</b>
                  </Link>
                </DropdownItem>

                      
                <DropdownItem className='itemLink'>
                  <Link to ='/LearnPageThree'>
                  Ways to <b>Reduce</b> Climate Change
                  </Link>
                </DropdownItem>
                

              </DropdownMenu>
            </ButtonDropdown>
            </ul>

           
      </nav>

      
    </>
  );
}

export default Navbar
