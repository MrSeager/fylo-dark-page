import React, { FC } from 'react';
//Bootstrap
import { Container, Nav, Navbar, Image, Offcanvas } from 'react-bootstrap';
//Images
import ImgLogo from '../images/logo.svg';

const PageNavBar: FC = () => {
    return (
        <Navbar fixed="top" expand="md" data-aos="fade-down" className='pt-5'>
            <Container fluid className='mx-lg-5 mx-3'>
                <Navbar.Brand><Image fluid src={ImgLogo} alt='logo' className='w-75' /></Navbar.Brand>
                <Navbar.Toggle className='shadow-none bg-white' />
                <Navbar.Offcanvas placement="end" className='cs-bg-darkblue-second text-white'>
                    <Offcanvas.Header closeButton className='cs-btn-3'>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-row justify-content-md-end'>
                        <Nav className='gap-md-5 gap-2 justify-content-md-between justify-content-start text-md-center text-start'>
                            <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Features</Nav.Link>
                            <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Team</Nav.Link>
                            <Nav.Link className='text-white cs-link px-0 my-0 py-1'>Sign In</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default PageNavBar;