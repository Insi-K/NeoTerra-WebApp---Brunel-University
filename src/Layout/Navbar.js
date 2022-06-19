import React, { useState } from 'react';
import "../././Styles/Navbar.css"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
// import { withTheme } from '@material-ui/core';

function Navbar(pros) {
    

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

return (
  <div className='navbar-container'> 
    <div className="navbar-Logo">
     
      <Link to='/'>
        <img className="navbar-Logo" src='/images/Logo.png' alt='logo' />
    </Link>
    </div>

    {/* <div className="MidSection"></div> */}
    
    <ul className={click ? "nav-menubar active" : "nav-menubar"}>
      <li className='nav-item'>
        <Link to='/Quiz' className='nav-links'onClick={handleClick}>
          Quiz
     </Link>
      
      </li>
      <li className='nav-item' >
        <Link  to='/News' className='nav-links' onClick={handleClick}> 
          News
      </Link>
      </li>
      <li className='nav-item'>
        <Link to='/CarbonFootprint' className='nav-links' onClick={handleClick} > 
          CF Calculator
        </Link>
      </li>

      {/* Dropdown Button */}
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        {/* Main button */}
        <DropdownToggle caret  className='BlogDropDown' style={{backgroundColor: '#009e5d', fontWeight: 500, border: 'none'}}>
          Learn More Here!
        </DropdownToggle>

        {/* Dropdown Menu (Article Links) */}
        <DropdownMenu style={{backgroundColor: '#C8D3D5',}}>

          <DropdownItem header style={{backgroundColor: 'white',}}>
            Learn about Climate Change Below!
          </DropdownItem>

          {/* Main Links */}
          <DropdownItem  className='itemLink'>
           <Link to='/Learn'>Effects in <b>Nature</b> </Link> 
          </DropdownItem>
            
          <DropdownItem className='itemLink'>
         <Link to ='/LearnPageTwo'> Effects in <b>Society</b></Link>   
          </DropdownItem>
                
          <DropdownItem className='itemLink'>
         <Link to ='/LearnPageThree'> Ways to <b>Reduce</b> Climate Change</Link> 
          </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
    </ul>
  
    <div className="menu-closeicon" onClick={handleClick}>
      <i className={click ? "fas fa-times":"fas fa-bars"}></i>
    </div>
  </div>
);
}

export default Navbar


