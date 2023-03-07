import { useState, useEffect, useRef } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const Newsletter = ({ status, message, onValidated }) => {
    const { t } = useTranslation();
    const formInitialDetails = {
        email: '',
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

        emailjs.sendForm('service_1ooihlf', 'template_kum0dbb', form.current, 'r_zhVoi3PS6-2OVqY').then(
            (result) => {
                toast('Send email successfully !');
                setButtonText('Send');
                setFormDetails(formInitialDetails);
            },
            (error) => {
                toast.error('Something wrong, please try again!');
            },
        );
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>
                            {t('send-email')}
                            <br></br> & {t('send-sub-email')}
                        </h3>
                    </Col>
                    <Col md={6} xl={7}>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                    placeholder="Email Address"
                                    required
                                />
                                <button type="submit">
                                    <span>{buttonText}</span>
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
