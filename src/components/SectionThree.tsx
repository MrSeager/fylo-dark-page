import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
//Images
import ImgSP from '../images/illustration-stay-productive.png';
//Icons
import { MdArrowCircleRight } from "react-icons/md";

interface SectionThreeProps {
    head: string,
    par_1: string,
    par_2: string,
}

const SectionThree: FC<SectionThreeProps> = ({ head, par_1, par_2 }) => {
    return (
        <Container fluid className='cs-bg-darkblue-second px-5 py-5'>
            <Row className='px-lg-5 px-0 gap-lg-0 gap-5'>
                <Col lg={6} xs={12}>
                    <Image fluid src={ImgSP} alt='stay productive' className='pe-lg-4 pe-0' /> 
                </Col>
                <Col lg={6} xs={12} className='gap-2 ps-lg-4 ps-0 text-white d-flex flex-column justify-content-center align-items-start'>
                    <h2 className='h1 cs-fw-700 cs-font-raleway w-75'>{head}</h2>
                    <p>{par_1}<br /><br />{par_2}</p>
                    <Button className='bg-transparent cs-link-2 cs-fc-cyan px-0 py-1'>See how Fylo works <MdArrowCircleRight /></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionThree;