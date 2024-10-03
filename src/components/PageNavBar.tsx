import React, { FC } from 'react';
//Bootstrap
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
//Images
import ImgLogo from '../images/logo.svg';

const PageNavBar: FC = () => {
    return (
        <Navbar fixed="top" data-aos="fade-down" className='pt-5'>
            <Container fluid className='mx-lg-5 mx-3'>
                <Navbar.Brand><Image fluid src={ImgLogo} alt='logo' className='w-75' /></Navbar.Brand>
                <Nav className='gap-5 justify-content-between text-center'>
                    <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Features</Nav.Link>
                    <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Team</Nav.Link>
                    <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default PageNavBar;