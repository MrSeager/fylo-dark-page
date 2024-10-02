import React, { FC } from 'react';
//Components
import CustomCard from './CustomCard.tsx';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
//Images
import ImgIco_1 from '../images/icon-access-anywhere.svg';
import ImgIco_2 from '../images/icon-security.svg';
import ImgIco_3 from '../images/icon-collaboration.svg';
import ImgIco_4 from '../images/icon-any-file.svg';

interface SectorTwoProps {
    cardTitle_1: string,
    cardTitle_2: string,
    cardTitle_3: string,
    cardTitle_4: string,
    cardText_1: string,
    cardText_2: string,
    cardText_3: string,
    cardText_4: string,
}

const SectorTwo: FC<SectorTwoProps> = ({ cardTitle_1, cardTitle_2, cardTitle_3, cardTitle_4, cardText_1, cardText_2, cardText_3, cardText_4 }) => {
    const cardData = [
        { imgSrc: ImgIco_1, imgAlt: 'access anywhere', cardTitle: cardTitle_1, cardText: cardText_1 },
        { imgSrc: ImgIco_2, imgAlt: 'security', cardTitle: cardTitle_2, cardText: cardText_2 },
        { imgSrc: ImgIco_3, imgAlt: 'collaboration', cardTitle: cardTitle_3, cardText: cardText_3 },
        { imgSrc: ImgIco_4, imgAlt: 'any file', cardTitle: cardTitle_4, cardText: cardText_4 },
      ];
    
    return (
        <Container fluid className='cs-bg-darkblue-second px-5'>
            <Row className='mx-lg-5 mx-0 px-lg-5 px-0'>
                {cardData.map((card, index) => (
                <Col md={6} xs={12} className='p-5' key={index}>
                    <CustomCard
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                        cardTitle={card.cardTitle}
                        cardText={card.cardText}
                    />
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SectorTwo;