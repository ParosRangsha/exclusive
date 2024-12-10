import React, { useEffect, useState } from 'react'
import './home.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homeban from '../../../img/homebanner.jpg'
import jbl from '../../../img/jbl.png'
import './count.js'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Home = () => {
  let [data, setData] = useState([])
  let [mandata, setManData] = useState([])
  let getData = ()=>{
    axios.get('https://dummyjson.com/products/category/laptops').then((response)=>{
      setData(response.data.products);      
    })
  }
  let getmanData = ()=>{
    axios.get('https://dummyjson.com/products/category/mens-shirts').then((resman)=>{
      setManData(resman.data.products);
    })
  }
  useEffect(()=>(
    getmanData()
  ))
  useEffect(()=>(
    getData()
  ),[])
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settingsTwo = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
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
          <Row className='subheading'>
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
          <Row>
            <Slider {...settings}>
              {data.map((items)=>(
                <Col lg={3} className='homeproducts'>
                  <div className="thumb">
                    <img src={items.images[0]} alt="products" />
                  </div>
                  <h4>{items.title}</h4>
                  <p>Price: <span className='productprice'>{items.price}</span>$</p>
                  <p>Rating: <span className='productrating'>{items.rating}</span> out of <span className='productrating'>5.00</span></p>
                </Col>
              ))}
            </Slider>
          </Row>
          <div className='viewmore'>
              <Link to="/products">View All Products</Link>
          </div>
        </Container>
      </div>
      <div className="cate">
        <Container>
          <Row className='subheading'>
            <h5>Categories</h5>
          </Row>
          <Row>
            <div className="cateHeading">
              <h2>Browse By Category</h2>
              <div className="cateBtn">
                <Link to="hanlepre"><i className="fa-solid fa-arrow-left-long"></i></Link>
                <Link to="hanlenext"><i className="fa-solid fa-arrow-right-long"></i></Link>
              </div>
            </div>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <p>Phones</p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-solid fa-computer-classic"></i>
                <p>Computers</p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-regular fa-watch"></i>
                <p>Smart Watches</p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-solid fa-camera"></i>
                <p>Cameras</p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-solid fa-headphones"></i>
                <p>Headphones</p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="cateItem">
                <i className="fa-duotone fa-regular fa-gamepad"></i>
                <p>Gamings</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="thismonth">
        <Container>
          <Row className='subheading'>
            <h5>This Month</h5>
          </Row>
          <Row>
            <div className="monthheading">
              <h2>Best Selling Products</h2>
              <div className="monthBtn">
                <Link to='/products'>View All</Link>
              </div>
            </div>
          </Row>
          <Row>
            <Slider {...settingsTwo}>
              {mandata.map((items)=>(
                  <Col lg={3}>
                    <div className="thumb">
                      <img src={items.images[0]} alt="" />
                      <h5>{items.title}</h5>
                      <h6>Price: <span className='pricerate'>{items.price}</span>$ <del>{Math.floor(items.price + 10)}$</del></h6>
                      <h6>Rating: <span>{items.rating}</span> out of <span>5.00</span></h6>
                    </div>
                  </Col>
                ))}
            </Slider>
          </Row>
          <Row className="bigthumb">
            <Col lg={5}>
              <div className="subheading">
                <h5>Categoris</h5>
              </div>
              <h2>Enhance Your Music Experience</h2>
              <div className="timer">
                <div className="box">
                  <p id='dayss'></p>
                  <p>Days</p>
                </div>
                <div className="box">
                  <p id='hourss'></p>
                  <p>Hours</p>
                </div>
                <div className="box">
                  <p id='minutess'></p>
                  <p>Minutes</p>
                </div>
                <div className="box">
                  <p id='secondss'></p>
                  <p>Seconds</p>
                </div>
              </div>
              <div className="bigBtn">
                <Link to='/buynow'>Buy Now</Link>
              </div>
            </Col>
            <Col lg={7}>
              <img src={jbl} alt="jbl" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home