import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, linkDemo }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img style={{ width: '100%', height: '100%' }} src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-bottom">
                        <a href={linkDemo} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};
