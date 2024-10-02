import React, { FC } from 'react';
//Bootstrap
import { Container, Image, Row, Col } from 'react-bootstrap';

interface ReviewCardProps {
    imgSrc: string;
    imgAlt: string;
    par: string;
    head_1: string;
    head_2: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ imgSrc, imgAlt, par, head_1, head_2 }) => {
    return(
        <Container className='cs-bg-darkblue-main p-5 rounded d-flex flex-column align-items-center'>
            <p className='w-100'>{par}</p>
            <Row className='w-100'>
                <Col xs={1} className='p-0'>
                    <Image fluid src={imgSrc} roundedCircle alt={imgAlt} className='w-100' />
                </Col>
                <Col xs={11} className='d-flex flex-column justify-content-center'>
                    <h3 className='h6 m-0 cs-fw-700 cs-font-raleway'>{head_1}</h3>
                    <h4 className='cs-h7 m-0'>{head_2}</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default ReviewCard;