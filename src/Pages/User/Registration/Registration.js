import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap-v5';
import LoginImg from '../../Images/loginImg/login.png';
import { BsFacebook } from "react-icons/bs";
import { BsGoogle} from "react-icons/bs";
import './Registration.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

const Registration = ({ setOpenModal }) => {
    

    return (
        <>
        <div className="modalBackground">
            <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                            setOpenModal(false);
                            }}
                        >
                            x
                        </button>
                    </div>
                    <div className="title">
                        <span>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</span>
                    </div>
                    <div className="body">
                        <div className='Create-Account-sign-in'>
                            <div>
                                <h5>Create Account</h5>
                            </div>
                            <div>
                            <span> Already have an account? <NavLink to={'/signIn'}><button>Sign In</button></NavLink></span>
                            </div>
                        </div>
                        <div>
                            <Container>
                                <Row>
                                    <Col xs={12} lg= {6} md={12}>
                                        <Form>
                                            <div className='d-flex'>
                                                <Form.Group className="" controlId="formBasicEmail">
                                                    <Form.Control type="name" placeholder="First Name" />
                                                </Form.Group>
                                                <Form.Group className="" controlId="formBasicEmail">
                                                    <Form.Control type="name" placeholder="Last Name" />
                                                </Form.Group>
                                            </div>
                                            <Form.Group className="" controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group className="" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className="" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Confirm Password" />
                                            </Form.Group>
                                            <button className='submit-btn' type="submit">
                                            Create Account
                                            </button>
                                            <button className='social-media-login-icon'> <BsFacebook/>Sign up with Facebook</button>
                                            <button className='social-media-login-icon mt-2'> <BsGoogle/>Sign up with Google</button>
                                        </Form>
                                    </Col>
                                    <Col xs={12} lg= {6} md={12} className='login-area'>
                                        <img src={LoginImg} alt='' className='login-img'/>
                                        <span className='login-img-text'>By signing up, you agree to our Terms & conditions, Privacy policy</span>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
            </div>
        </div>
        <div>
        <Routes>
          
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
        </div>
        </>
    );
};

export default Registration;