import React, { FC } from 'react';
//Bootstrap
import { Card, Image } from 'react-bootstrap';

interface CustomCardProps {
    imgSrc: string;
    imgAlt: string;
    cardTitle: string;
    cardText: string;
}

const CustomCard: FC<CustomCardProps> = ({ imgSrc, imgAlt, cardTitle, cardText }) => (
    <Card className='border-0 bg-transparent text-white align-items-center text-center'>
        <Card.Header>
            <Image fluid src={imgSrc} alt={imgAlt} className='cs-h' />
        </Card.Header>
        <Card.Body>
            <Card.Title className='cs-fw-700 cs-font-raleway'>{cardTitle}</Card.Title>
            <Card.Text>{cardText}</Card.Text>
        </Card.Body>
    </Card>
);

export default CustomCard;