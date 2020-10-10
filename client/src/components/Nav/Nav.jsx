import React, { useState, useEffect  } from 'react';
import { connect } from "react-redux";
import { infoMovie } from "../../actions/index";

import {
   Collapse,
   Navbar, 
   NavbarToggler, 
   NavbarBrand, 
   Nav, 
   NavItem, 
   NavLink 
  } from 'reactstrap';

const Header = ({infoMovie, info_movie}) => {

  var apiKey =  '9ec47a8150e44e6385aae05be36f9e11';
  var ciudad = 'Rosario'

  global.key = apiKey;
  global.city = ciudad;

  useEffect(() => {
    infoMovie(apiKey, ciudad)     
    },[])

    const disparar = ()=>{
      infoMovie()
       
    }

    console.log('LA PELI STATE', info_movie)
   
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <button onClick={disparar} >PUSH</button>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">MarketTools</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  
return {
  infoMovie: (key, city) => dispatch(infoMovie(global.key, global.city))   
}
}

const mapStateToProps = state => {
  return {
      info_movie: state.info_movie
       
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

 