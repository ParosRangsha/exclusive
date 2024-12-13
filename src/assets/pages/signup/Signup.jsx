import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './signup.css'
import signupthumb from '../../../img/signupthumb.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup">
      <Row>
        <Col lg={8}>
          <img src={signupthumb} alt="" />
        </Col>
        <Col lg={4}>
          <div className="box">
            <h3>Create an account</h3>
            <p>Enter your details below</p>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Your e-mail or phone number' />
            <input type="password" placeholder='Password' />
            <Link to='/createaccount' id='create'>Create Account</Link>
            <Link to='/withgoogle' id='logwithgoogle'><i className="fa-brands fa-google"></i> Sign up with Google</Link>
            <p className='alreadyaccount'>Already have account? <Link to='/login'>Log In</Link></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Signup