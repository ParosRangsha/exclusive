import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <div className="locate">
            <Link to='/'>Home</Link>/<Link to='/contact'>Contact</Link>
          </div>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="phone">
              <div className="heading">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h4>Call To Us</h4>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div className="mail">
              <div className="heading">
                <div className="icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h4>Write To US</h4>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="box">
              <div className="nep">
                <input type="text" placeholder='Your Name*' />
                <input type="mail" placeholder='Your Email*' />
                <input type="phone" placeholder='Your Phone*' />
              </div>
              <textarea name="message" id="message" placeholder='Your Message'></textarea>
              <div className="messageBtn">
                <Link to="/sendsms">Send Message</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact