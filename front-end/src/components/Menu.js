import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';
import { Link } from "react-router-dom";


class NavbarPage extends Component {

  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
        <Navbar color="white" style={{margin: 'right', width: '50%', marginTop: '20px', marginBottom: '20px', lineHeight: '1.0', boxShadow: 'none'}} light>

          <Container>
            <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} style={{marginLeft: '150px'}}/>

            <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>

              <NavbarNav style={{paddingBottom: '20px'}} left>

                <NavItem className="menu-text" style={{opacity: '1'}} active>
                  <Link style={{color: 'rgb(255,64,153)', fontSize: '24px'}} to='/' onClick={this.toggleCollapse('navbarCollapse1')}>Home</Link>
                </NavItem>

                <NavItem>
                  <Link style={{color: 'rgb(255,64,153)', fontSize: '24px'}} to='/form' onClick={this.toggleCollapse('navbarCollapse1')}>Form</Link>
                </NavItem>

                <NavItem>
                  <Link style={{color: 'rgb(255,64,153)', fontSize: '24px'}} to='/results' onClick={this.toggleCollapse('navbarCollapse1')}>Results</Link>
                </NavItem>

              </NavbarNav>

            </Collapse>

          </Container>

        </Navbar>
    );
  }
}

export default NavbarPage;