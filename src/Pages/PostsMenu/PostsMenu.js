import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap-v5';
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsPersonPlusFill } from "react-icons/bs";
import './PostsMenu.css';

const PostsMenu = () => {
    return (
        <div>
            <Container className='posts-menu-area'>
                <div className='posts-menu'>
                    <h6 className='mt-2'>All Posts(32)</h6>
                    <button>Article</button>
                    <button>Event</button>
                    <button>Education</button>
                    <button>Job</button>
                </div>
                <div >
                    <button className='write-post'>Write a Post<BsFillCaretDownFill/></button>
                    <button className='join-group-btn'> <BsPersonPlusFill/> Join Group</button>
                </div>
            </Container>
            <Container className='mobile-posts-menu-area'>
                <div className='mobile-posts-area'>
                    <h6>Posts(368)</h6>
                </div>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Nav>
                                <NavDropdown title="Filter: All" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Article</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Event</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Job</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </Container>
        </div>
    );
};

export default PostsMenu;