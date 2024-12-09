import React from 'react'
import './header.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
          <div className="headnote">
            <Container>
                <Row>
                    <Col lg={12} className='txt'>
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <NavLink to="/">Shop Now</NavLink>
                        <select>
                            <option value="English">English</option>
                            <option value="Bangla">Bangla</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                        <NavLink to="/search" className='searchBtn'>Search</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className="shopBtn">
                    <input type="text" placeholder='What are you looking for?'/>
                    <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                    <Link to="/favorite"><i className="fa-regular fa-heart"></i></Link>
                    <Link to="/shop"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header