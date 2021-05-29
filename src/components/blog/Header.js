import React from 'react'
import { NavLink } from 'react-router-dom' 
import {Navbar, Nav, } from 'react-bootstrap'
import "./Header.css"

function Header() {
    return (
    <Navbar className="nav-bar" >
        <div className="Mcontainer">
        <NavLink className="navbar-brandy" to="/">YASH</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ml-auto nav-item">
                
                <NavLink className="nav-linky" exact to="/">Home</NavLink>

                <NavLink className="nav-linky" to="/animeList">Anime</NavLink>
                <NavLink className="nav-linky" to="/anime/add-anime">Add-anime</NavLink>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    )
}

export default Header
