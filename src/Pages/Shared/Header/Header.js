import React, { useState } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap-v5';
import LOGO from '../../Images/Logo/whole.png';
import { BsSearch } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import './Header.css';
import Registration from '../../User/Registration/Registration';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
        <Navbar className='desktop-menu'>
            <Container>
                <Navbar.Brand href="#home"><img src={LOGO} alt=''/></Navbar.Brand>
                <Navbar.Toggle />
                    <Form action="#" className='search'>
                        <input type="text" className='search_input' placeholder='Search for your favorite groups in ATG'/>
                        <button className='search_button'>
                        <BsSearch   className='search_icon'/>
                        </button>
                    </Form>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text  className='account-btn'>
                Create account.<button onClick={() => { setModalOpen(true); }} >It’s free!<BsFillCaretDownFill/></button>
                
                </Navbar.Text>
                </Navbar.Collapse>

                { modalOpen && <Registration setOpenModal={setModalOpen}/>}
                
            </Container>
        </Navbar>
        <div className='mobile-menu-area'>
            <Container>
                <div className='mobile-menu'>
                    <div>
                        <BsArrowLeft className='mobile-menu-icon'/>
                    </div>
                    <div>
                        <button onClick={() => { setModalOpen(true); }}>Join Group</button>
                    </div>
                </div>
                { modalOpen && <Registration setOpenModal={setModalOpen}/>}
            </Container>
        </div>
        </>
    );
};

export default Header;