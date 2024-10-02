import React, { FC } from 'react';
//Components
import './FyloPage.css';
import PageNavBar from './PageNavBar.tsx';
import SectorOne from './SectionOne.tsx';
import SectorTwo from './SectionTwo.tsx';
import SectionThree from './SectionThree.tsx';
import SectionFour from './SectionFour.tsx';
import SectionFive from './SectionFive.tsx';
import SectionFooter from './SectionFooter.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const FyloPage: FC = () => {
    const lineProps = {
        head_1: 'All your files in one secure location, accessible anywhere.',
        par_1: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.',
        
        cardTitle_1: 'Access your files, anywhere',
        cardText_1: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
        cardTitle_2: 'Security you can trust',
        cardText_2: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
        cardTitle_3: 'Real-time collaboration',
        cardText_3: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
        cardTitle_4: 'Store any type of file',
        cardText_4: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        
        head_2: 'Stay productive, wherever you are',
        par_2_1: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.',
        par_2_2: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    
        par_3: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        head_3_1: 'Satish Patel',
        head_3_2: 'Bruce McKenzie',
        head_3_3: 'Iva Boyd',
        head_3: 'Founder & CEO, Huddle',

        head_4: 'Get early access today',
        par_4: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.',
        par_invalid: 'Please enter a valid email address',

        par_5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    }

    return(
        <Container fluid className='min-vh-100 cs-bg-darkblue-main pt-5 px-0'>
            <PageNavBar />
            <SectorOne 
                head={lineProps.head_1}
                par={lineProps.par_1} 
            />
            <SectorTwo 
                cardTitle_1={lineProps.cardTitle_1} 
                cardTitle_2={lineProps.cardTitle_2} 
                cardTitle_3={lineProps.cardTitle_3} 
                cardTitle_4={lineProps.cardTitle_4}
                cardText_1={lineProps.cardText_1}
                cardText_2={lineProps.cardText_2}
                cardText_3={lineProps.cardText_3}
                cardText_4={lineProps.cardText_4}
            />
            <SectionThree 
                head={lineProps.head_2}
                par_1={lineProps.par_2_1} 
                par_2={lineProps.par_2_2} 
            />
            <SectionFour 
                par={lineProps.par_3}
                head_1={lineProps.head_3_1}
                head_2={lineProps.head_3_2}
                head_3={lineProps.head_3_3}
                head={lineProps.head_3} 
            />
            <SectionFive 
                head={lineProps.head_4}
                par={lineProps.par_4}
                par_invalid={lineProps.par_invalid}
            />
            <SectionFooter 
                par={lineProps.par_5}
            />
        </Container>
    );
}

export default FyloPage;