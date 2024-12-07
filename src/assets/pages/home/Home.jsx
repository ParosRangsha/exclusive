import React from 'react'
import './home.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homeban from '../../../img/homebanner.jpg'
import './count.js'

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <Container>
          <Row>
            <Col lg={3} className='itemList'>
              <ul>
                <li><Link to="/">Woman’s Fashion</Link></li>
                <li><Link to="/">Men’s Fashion</Link></li>
                <li><Link to="/">Electronics</Link></li>
                <li><Link to="/">Home & Lifestyle</Link></li>
                <li><Link to="/">Medicine</Link></li>
                <li><Link to="/">Sports & Outdoor</Link></li>
                <li><Link to="/">Baby’s & Toys</Link></li>
                <li><Link to="/">Groceries & Pets</Link></li>
                <li><Link to="/">Health & Beauty</Link></li>
              </ul>
            </Col>
            <Col lg={9} className='homebanner'>
              <img src={homeban} alt="home banner" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="todays">
        <Container>
          <Row className='subhead'>
            <h5>Today's Collections</h5>
          </Row>
          <Row>
            <Col lg={3}>
              <h2>Flash Sales</h2>
            </Col>
            <Col lg={3} className='timer'>
              <div className="days">
                <h4>Days</h4>
                <h3 id='days'></h3>
              </div>
              <div className="hours">
                <h4>Hours</h4>
                <h3 id='hours'></h3>
              </div>
              <div className="minutes">
                <h4>Minutes</h4>
                <h3 id='minutes'></h3>
              </div>
              <div className="seconds">
                <h4>Seconds</h4>
                <h3 id='seconds'></h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home