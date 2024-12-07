import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'

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
                <i class="fa-solid fa-forward"></i>
              </li>
            </ul>
          </Col>
          <Col lg={3} className='Support'>
            <ul>
              <li><h4>Support</h4></li>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88017-1234-5678</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer