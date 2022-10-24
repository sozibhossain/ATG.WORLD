import React from 'react';
import { Container } from 'react-bootstrap-v5';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-area'>
            <Container>
                <div className='banner-text'>
                    <h2>Computer Engineering</h2>
                    <span>142,765 Computer Engineers follow this</span>
                </div>
            </Container>
        </div>
    );
};

export default Banner;