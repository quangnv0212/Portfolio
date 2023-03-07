import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '~/assets/img/project1.png';
import projImg2 from '~/assets/img/project2.png';
import projImg3 from '~/assets/img/project3.png';
import projImg4 from '~/assets/img/project4.png';
import projImg5 from '~/assets/img/project5.png';
import projImg6 from '~/assets/img/project6.png';
import colorSharp2 from '~/assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.scss';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            title: 'Portfolio',
            description: 'Portfolio giới thiệu bản thân ',
            imgUrl: projImg1,
            link: '',
        },
        {
            title: 'Ecommerce',
            description: 'Trang web bán đĩa than Online',
            imgUrl: projImg2,
            linkDemo: '',
        },
        {
            title: 'Simple Movie ',
            description: 'Trang web hiển thị thông tin phim',
            imgUrl: projImg3,
            linkDemo: '',
        },
        {
            title: 'Bake Store',
            description: 'Trang web cửa hàng bán bánh ngọt',
            imgUrl: projImg4,
            linkDemo: '',
        },
        {
            title: 'Gear Store',
            description: 'Clone của trang web Gearvn.com (updating)',
            imgUrl: projImg5,
            linkDemo: '',
        },
        {
            title: 'Project 3',
            description: 'Design & Development',
            imgUrl: projImg6,
            linkDemo: '',
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <h2>{t('projects')}</h2>
                                    <p>{t('title-project')}</p>
                                    <p>
                                        {t('title-sub-project')}{' '}
                                        <a href="https://github.com/quangnv0212" target="blank">
                                            GitHub
                                        </a>
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return <ProjectCard key={index} {...project} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
