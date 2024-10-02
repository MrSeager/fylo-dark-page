import React, { FC } from 'react';
//Bootstrap
import { Container, Image, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
//Icons
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
//Images
import ImgLogo from '../images/logo.svg';

interface SectionFooterProps {
    par: string,
}

const SectionFooter: FC<SectionFooterProps> = ({ par }) => {
    return(
        <Container fluid className='cs-bg-darkblue-footer p-5 text-white'>
            <Row className='gap-lg-0 gap-5'>
                <Col xs={12} className='mb-5'>
                    <Image src={ImgLogo} alt='log' className='h-75' />
                </Col>
                <Col lg={4} xs={12} className='d-flex flex-row gap-4'>
                    <h5><FaLocationDot /></h5>
                    <p>{par}</p>
                </Col>
                <Col lg={3} xs={12} className='d-flex flex-column align-items-start gap-0'>
                    <p><BiSolidPhoneCall className='me-3' /> +1-543-123-4567</p>
                    <p><IoIosMail className='me-3'/> example@fylo.com</p>
                </Col>
                <Col lg={1} xs={12} className='d-flex flex-column gap-3 align-items-start'>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>About Us</Button>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Jobs</Button>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Press</Button>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Blog</Button>
                </Col>
                <Col lg={1} xs={12} className='d-flex flex-column gap-3 align-items-start'>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Contact Us</Button>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Terms</Button>
                    <Button className='p-0 cs-link-3 border-0 bg-transparent'>Privacy</Button>
                </Col>
                <Col lg={3} xs={12} className='d-flex flex-row justify-content-center align-items-start'>
                    <ButtonGroup className='gap-2'>
                        <Button className='cs-btn-2 border-2 border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaFacebookF /></Button>
                        <Button className='cs-btn-2 border-2 border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaTwitter /></Button>
                        <Button className='cs-btn-2 border-2 border-white p-2 bg-transparent rounded-circle d-flex flex-column align-items-center justify-content-center'><FaInstagram /></Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionFooter;