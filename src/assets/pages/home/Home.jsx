import React, { useEffect, useState } from 'react'
import './home.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './count.js'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import homeban from '../../../img/homebanner.jpg'
import jbl from '../../../img/jbl.png'
import featureOne from '../../../img/feature1.png'
import featureTwo from '../../../img/feature2.png'
import featureThree from '../../../img/feature3.png'
import featureFour from '../../../img/feature4.png'
import iconOne from '../../../img/icondelivery.png'
import iconTwo from '../../../img/iconhelpline.png'
import iconThree from '../../../img/iconguarantee.png'



const Home = () => {
  let [data, setData] = useState([])
  let [mandata, setManData] = useState([])
  let [prodata, setproData] = useState([])
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
  let getproData = ()=>{
    axios.get('https://dummyjson.com/products/category/womens-shoes').then((respro)=>{
      setproData(respro.data.products)
    })
  }
  useEffect(()=>(
    getproData()
  ),[])
  useEffect(()=>(
    getmanData()
  ),[])
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
  var settingsThree = {
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
            <div className="Heading">
              <h2>Browse By Category</h2>
              <div className="Btn">
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
      <div className="products">
        <Container>
          <Row className='subheading'>
            <h5>Our Products</h5>
          </Row>
          <Row>
            <div className="Heading">
              <h2>Explore Our Products</h2>
              <div className="Btn">
                <Link to="hanlepre"><i className="fa-solid fa-arrow-left-long"></i></Link>
                <Link to="hanlenext"><i className="fa-solid fa-arrow-right-long"></i></Link>
              </div>
            </div>
          </Row>
          <Row>
            <Slider {...settingsThree}>
              {
                prodata.map((items)=>(
                  <Col lg={3}>
                    <div className="thumb">
                      <img src={items.images[0]} alt="" />
                    </div>
                    <h5 style={{textAlign:'center'}}>{items.title}</h5>
                    <h6 style={{textAlign:'center'}}>Price: ${items.price}</h6>
                  </Col>
                ))
              }
            </Slider>
          </Row>
          <Row>
            <div className="BtnView">
              <Link to="/products">View All Products</Link>
            </div>
          </Row>
        </Container>
      </div>
      <div className="featured">
        <Container>
          <Row className='subheading'>
            <h5>Featured</h5>
          </Row>
          <Row>
            <div className="Heading">
              <h2>New Arrival</h2>
              <div className="Btn">
                <Link to="hanlepre"><i className="fa-solid fa-arrow-left-long"></i></Link>
                <Link to="hanlenext"><i className="fa-solid fa-arrow-right-long"></i></Link>
              </div>
            </div>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="thumb">
                <img src={featureOne} alt="feature" />
                <div className="overflow">
                  <Col lg={6}>
                    <h3>PlayStation 5</h3>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <Link to='/shop'>Shop Now</Link>
                  </Col>
                </div>
              </div>
            </Col>
            <Col lg={6} className='secondpart'>
              <Row>
                <Col lg={12}>
                  <div className="thumb">
                    <img src={featureTwo} alt="feature" />
                    <div className="overflow">
                      <Col lg={6}>
                        <h3>Women’s Collections</h3>
                        <p>Featured woman collections that give you another vibe.</p>
                        <Link to='/shop'>Shop Now</Link>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="thumb">
                    <img src={featureThree} alt="feature" />
                    <div className="overflow">
                      <Col lg={6}>
                        <h3>Speakers</h3>
                        <p>Amazon wireless speakers</p>
                        <Link to='/shop'>Shop Now</Link>
                      </Col>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="thumb">
                    <img src={featureFour} alt="feature" />
                    <div className="overflow">
                      <Col lg={6}>
                        <h3>Perfume</h3>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <Link to='/shop'>Shop Now</Link>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="box">
                <div className="thumb">
                  <img src={iconOne} alt="" />
                </div>
                <h4>FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box">
                <div className="thumb">
                  <img src={iconTwo} alt="" />
                </div>
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box">
                <div className="thumb">
                  <img src={iconThree} alt="" />
                </div>
                <h4>MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home