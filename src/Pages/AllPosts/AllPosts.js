import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap-v5';
import posts1 from '../Images/postsImg/Rectangle 1.png';
import posts2 from '../Images/postsImg/Rectangle 2.png';
import posts3 from '../Images/postsImg/Rectangle 3.png';
import { BsThreeDots } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BsBrightnessLow } from "react-icons/bs";
import User1 from '../Images/userImg/user1.png';
import User2 from '../Images/userImg/user2.png';
import User3 from '../Images/userImg/user3.png';
import User4 from '../Images/userImg/user4.png';
import './AllPosts.css';

const AllPosts = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                <div className='posts'>
                    <img src={posts1} className='posts-img'/>
                    <Container>
                    <div>
                        <div>
                            <h5>✍️ Article</h5>
                        </div>
                        <div className='posts-text-menu'>
                            <Card.Text>
                            What if famous brands had regular fonts? Meet RegulaBrands!
                            </Card.Text>
                            <button><BsThreeDots/></button>
                        </div>
                        <div>
                        <span>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span>
                        </div>
                        <div className='posts-text-share'>
                            <div>
                                <img src={User1} alt=''/>
                                <span>Sarthak Kamra</span>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <BsEyeFill/> 
                                    <span>1.4k views</span>
                                </div>
                                <div>
                                    <button><BsShareFill/></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </Container>
                </div>

                <div className='posts'>
                    <img variant="top" src={posts2} className='posts-img'/>
                    <Container>
                    <div>
                        <div>
                        <h5>🔬️ Education</h5>
                        </div>
                        <div className='posts-text-menu'>
                            <div>
                            <h5>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                            </div>
                            <button><BsThreeDots/></button>
                        </div>
                        <div>
                        <h5></h5>
                        </div>
                        <div className='posts-text-share'>
                            <div>
                                <img src={User2} alt=''/>
                                <span>Sarthak Kamra</span>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <BsEyeFill/> 
                                    <span>1.4k views</span>
                                </div>
                                <div>
                                    <button><BsShareFill/></button>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                    </Container>
                    
                </div>
                <div className='posts'>
                    <img variant="top" src={posts3} className='posts-img'/>
                    <Container>
                    <div>
                        <div>
                        <h5>🗓️ Meetup</h5>
                        </div>
                        <div className='posts-text-menu'>
                            <div>
                            <h5>Finance & Investment Elite Social Mixer @Lujiazui</h5>
                            </div>
                            <button><BsThreeDots/></button>
                        </div>

                        <div className='d-flex'>
                            <div className='date-job-icon'>
                                <BsFillCalendarDayFill/>
                                <span>Fri, 12 Oct, 2018</span>
                            </div>
                            <div>
                                <BsFillGeoAltFill/>
                            <span>Ahmedabad, India</span>
                            </div>
                        </div>
                        <div>
                            <button className='visit-btn'>Visit Website</button>
                        </div>

                        <div className='posts-text-share'>
                            <div>
                                <img src={User3} alt=''/>
                                <span>Sarthak Kamra</span>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <BsEyeFill/> 
                                    <span>1.4k views</span>
                                </div>
                                <div>
                                    <button><BsShareFill/></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </Container>
                </div>
                <div className='posts'>
                    <Container>
                    <div>
                        <div>
                        <h5>💼️ Job</h5>
                        </div>
                        <div className='posts-text-menu'>
                            <div>
                            <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            </div>
                            <button><BsThreeDots/></button>
                        </div>
                        <div className='d-flex'>
                            <div className='date-job-icon'>
                                <BsBag/>
                                <span>Innovaccer Analytics Private Ltd.</span>
                            </div>
                            <div>
                                <BsFillGeoAltFill/>
                                <span>Noida, India</span>
                            </div>
                        </div>
                        <div>
                            <button className='job-apply-btn'>Apply on Timesjobs</button>
                        </div>
                        <div className='posts-text-share'>
                            <div>
                                <img src={User4} alt=''/>
                                <span>Sarthak Kamra</span>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <BsEyeFill/> 
                                    <span>1.4k views</span>
                                </div>
                                <div>

                                    <button><BsShareFill/></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </Container>
                 </div>
                </Col>
                
                <Col sm={4}>
                    <div className='edit-location'>
                        <div>
                            <BsFillGeoAltFill/>
                            <span>Noida, India</span>
                        </div>
                        <div>
                            <BsFillPencilFill/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <BsBrightnessLow/>
                        <span className='edit-location-help-text'>Your location will help us serve better <br/> and extend a personalised experience.</span>
                    </div>
                </Col>
            </Row>
    </Container>
    );
};

export default AllPosts;