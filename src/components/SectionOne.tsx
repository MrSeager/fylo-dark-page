import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Button } from 'react-bootstrap';
//Images
import ImgIntro from '../images/illustration-intro.png';

interface SectorOneProps {
    head: string,
    par: string,
}

const SectorOne: FC<SectorOneProps> = ({ head, par }) => {
    return (
        <Container fluid data-aos="fade-up" className='overflow-hidden w-100 cs-bg-image-1 gap-3 text-center py-5 text-white d-flex flex-column align-items-center'>
            <Image fluid src={ImgIntro} alt='illustration intro' />
            <h1 className='cs-w-50 mt-5 cs-fw-700 cs-font-raleway'>{head}</h1>
            <p className='cs-w-40'>{par}</p>
            <Button className='cs-btn mb-5 cs-w-20 py-3 rounded-pill cs-font-raleway cs-fw-700 border-0'>Get Started</Button>
        </Container>
    );
}

export default SectorOne;