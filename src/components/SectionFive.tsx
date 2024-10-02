import React, { FC, useState } from 'react';
//Bootstrap
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

interface SectionFiveProps {
    head: string,
    par: string,
    par_invalid: string,
}

const SectionFive: FC<SectionFiveProps> = ({ head, par, par_invalid }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return(
        <Container fluid className='d-flex align-items-center p-5 cs-bg-gradient'>
            <Container fluid className='d-flex flex-column gap-3 p-5 cs-w-60 text-white text-center rounded shadow cs-bg-darkblue-main'>
                <h5 className='h2 cs-fw-700 cs-font-raleway'>{head}</h5>
                <p>{par}</p> 
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className='gap-lg-0 gap-5'>   
                        <Col lg={8} xs={12} className='cs-input'>
                            <Form.Control 
                                placeholder='email@example.com'
                                type='email'
                                className='shadow-none rounded-pill h-100 px-4 py-3'
                                required />
                            <Form.Control.Feedback type="invalid" className='cs-invalid text-start'>{par_invalid}</Form.Control.Feedback>
                        </Col>
                        <Col lg={4} xs={12}>
                            <Button type='submit' className='h-100 py-3 cs-btn border-0 rounded-pill w-100'>Get Started For Free</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
}

export default SectionFive;