import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '~/assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const form = useRef();

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm('service_1ooihlf', 'template_p5ifr3m', form.current, 'r_zhVoi3PS6-2OVqY').then(
            (result) => {
                toast('Send contact successfully !');
                setButtonText('Send');
                setFormDetails(formInitialDetails);
            },
            (error) => {
                toast.error('Something wrong, please try again!');
            },
        );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>{t('contact')}</h2>
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    value={formDetails.firstName}
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    required
                                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    value={formDetails.lastName}
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    required
                                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="email"
                                                    value={formDetails.email}
                                                    name="email"
                                                    placeholder="Email Address"
                                                    required
                                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    value={formDetails.phone}
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                    required
                                                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    value={formDetails.message}
                                                    name="message"
                                                    placeholder="Message"
                                                    required
                                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                                ></textarea>
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
