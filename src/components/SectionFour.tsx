import React, { FC } from 'react';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//Components
import ReviewCard from './ReviewCard.tsx';
//Images
import ImgAva_1 from '../images/profile-1.jpg';
import ImgAva_2 from '../images/profile-2.jpg';
import ImgAva_3 from '../images/profile-3.jpg';

interface SectionFourProps {
    par: string,
    head_1: string,
    head_2: string,
    head_3: string,
    head: string,
}

const SectionFour: FC<SectionFourProps> = ({ par, head_1, head_2, head_3, head }) => {
    const reviewData = [
        { imgSrc: ImgAva_1, imgAlt: 'avatar 1', par: par, head_1: head_1, head_2: head },
        { imgSrc: ImgAva_2, imgAlt: 'avatar 2', par: par, head_1: head_2, head_2: head },
        { imgSrc: ImgAva_3, imgAlt: 'avatar 3', par: par, head_1: head_3, head_2: head },
      ];
    
    return(
        <Container fluid className='cs-bg-darkblue-second cs-bg-image-2 text-white p-lg-5 px-2'>
            <Row>
            {reviewData.map((review, index) => (
                <Col lg={4} xs={12} className='p-3' key={index}>
                    <ReviewCard 
                        imgSrc={review.imgSrc}
                        imgAlt={review.imgAlt}
                        par={review.par}
                        head_1={review.head_1}
                        head_2={review.head_2}
                    />
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default SectionFour;