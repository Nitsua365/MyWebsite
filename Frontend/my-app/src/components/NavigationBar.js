import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  ButtonGroup,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <div class='NavBar'>
        <div id='NavBar-title'>
          <h1>Austin Blanchard</h1>
        </div>

        <div id='NavBar-ButtonGroup'>
          <Link to= {{ pathname: '/' }}>
            <button>Home</button>
          </Link>
          <Link to={{ pathname : '/Projects' }}>
            <button>Projects</button>
          </Link>
          <Link to={{ pathname: '/ContactMe' }}>
            <button>Contact Me</button>
          </Link>
        </div>
      </div> */}

      <Navbar color="light" light expand="md" className='NavBar'>
        <NavbarBrand href="/" className='NavBrand'>Austin Blanchard</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Nav className='NavWidget' navbar>
            <NavItem className='HomeNav'>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className='ProjectsNav'>
              <NavLink href='/Projects'>Projects</NavLink>
            </NavItem>
            <NavItem className='ContactMeNav'>
              <NavLink href='/ContactMe'>Contact Me</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </>

    
    
  )
}

export default NavigationBar
