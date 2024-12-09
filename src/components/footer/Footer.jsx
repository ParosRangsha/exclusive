import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import playstore from '../../img/playstore.png'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <h3>Exclusive</h3>
        </Row>
        <Row>
          <Col lg={3} className='subscribe'>
            <ul>
              <li><h4>Subscribe</h4></li>
              <li>Get 10% off your first order</li>
              <li>
                <input type="text" placeholder='Enter your email'/>
                <i className="fa-solid fa-forward"></i>
              </li>
            </ul>
          </Col>
          <Col lg={2} className='Support'>
            <ul>
              <li><h4>Support</h4></li>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88017-1234-5678</li>
            </ul>
          </Col>
          <Col lg={2} className='account'>
            <ul>
              <li><h4>My Account</h4></li>
              <li>
                <Link to="/account">My Account</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>/
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} className='quicklink'>
            <ul>
              <li><h4>Quick Link</h4></li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/termsofuse">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li><h4>Download App</h4></li>
              <li><p>Save $3 with App New User Only</p></li>
              <li><img src={playstore} alt="playstore"/></li>
              <li className='socialicon'>
                <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to="/"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer