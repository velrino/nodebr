import { Card, Col, Row, Button, FloatButton, List, Tooltip } from 'antd';
import { FiShare2 } from 'react-icons/fi';
import { CardHomeData, PartnersData, SocialData, TeamData } from '../../../utils/data';

export const SiteHomePage = () => {
    const meetupUrl = 'https://www.meetup.com/pt-BR/nodebr/';

    return (<>
        <div id="section_home" className="full-image-crop">
            <img src="/photos/people-community.jpg" alt="Your Image" className="full-image" />
            {/* <img src="/photos/banner-mobile.png" alt="Your Image" className="full-image mobile-image" /> */}
            <div className="text-overlay">
                <div className='text-overlay-content'>
                    <img alt="example" src="/photos/logo-white.png" height={75} className='animate__animated animate__zoomIn' id="banner" />
                    <div className="banner-subtitle">Comunidade brasileira para ​quem tem interesse em ​aprender e se aprofundar ​em NodeJS</div>
                    <Button type="primary" className='button-base button-primary margin-top-medium animate__animated animate__infinite animate__pulse' href={meetupUrl} target='_blank'>Faça parte da comunidade</Button>
                </div>
            </div>
        </div>
        <div id="section_about" className="site-content margin-top-medium padding-bottom-large min-full-height">
            <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} lg={18}>
                    <Row gutter={[16, 16]} className='section-services' justify={"center"}>
                        <Col span={24} className='services-title'>Somos uma comunidade de devs para devs</Col>
                        {
                            CardHomeData.map((item: any, index: number) => (<Col xs={24} md={12} lg={8} key={index}>
                                <Card title={
                                    <div className='card-home-title'>
                                        {item.title}
                                    </div>
                                } className='bg-primary card-home' cover={<img alt="example" src={item.img} />}>
                                    <div className='card-home-text'>
                                        {item.text}
                                    </div>
                                </Card>
                            </Col>))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
        <div id="section_support" className="full-image-crop bg-primary">
            <div className="text-overlay">
                <Row gutter={[16, 16]} justify={"center"}>
                    <Col xs={24} sm={18}>
                        <Row gutter={[16, 16]} className='section-services' justify={'center'}>
                            <Col span={24} className='services-title'>Empresas que ao longo desses anos já apoiaram a comunidade</Col>
                            {
                                PartnersData.map((item: any, index: number) => (<Col xs={8} lg={2} className='partner' key={index}>
                                    <Tooltip placement="top" title={item.link.charAt(0).toUpperCase() + item.link.slice(1)}>
                                        <img alt="example" src={item.img} />
                                    </Tooltip>
                                </Col>))
                            }
                        </Row>
                    </Col>
                </Row>
                <Button type="primary" className='button-base button-secondary margin-top-large' href={'https://forms.gle/qUbmeHVtsiZZbozx5'} target='_blank'>Nos apoie com sua empresa</Button>
            </div>
        </div>
        <div id="section_voluntary" className="full-image-crop">
            <img src="/photos/people-community-2.jpg" alt="Your Image" className="full-image" />
            <div className="text-overlay">
                <Row gutter={[16, 16]} justify={"center"}>
                    <Col xs={24} sm={18}>
                        <Row gutter={[16, 16]} className='section-services' justify={'center'}>
                            <Col span={24} className='services-title'>
                                <div className='center-content'>
                                    Venha fazer parte da comunidade&nbsp;&nbsp;<img alt="example" src="/photos/logo-white.png" height={40} />
                                </div>
                            </Col>
                            <Col span={24}>
                                <Button id="banner" type="primary" className='button-base button-primary margin-top-medium' href={'https://forms.gle/rnsX6BDVyohyn3vo6'} target='_blank'>Seja voluntário(a)</Button>
                            </Col>
                            <Col span={24}>
                                <Button id="banner" type="primary" className='button-base button-primary margin-top-medium' href={'https://forms.gle/qUbmeHVtsiZZbozx5'} target='_blank'>Parcerias</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <div id="section_team" className="site-content margin-top-medium padding-bottom-large min-full-height">
            <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} lg={18}>
                    <Row gutter={[16, 16]} className='section-services'>
                        <Col span={24} className='services-title'>Time</Col>
                        {
                            TeamData.map((item: any, index: number) => (<Col xs={24} md={8} lg={6} key={index}>
                                <Card title={
                                    <div className='card-team-title'>
                                        {item.name}
                                    </div>
                                } className='bg-primary card-team' cover={<img alt="example" src={item.img} />}>
                                    <Row justify={"center"} gutter={12}>
                                        {
                                            item.social.map((social: any, index: number) => (<Col>
                                                <a href={social.link} className='social-icon' target='_blank'>
                                                    {social.icon}
                                                </a>
                                            </Col>))
                                        }
                                    </Row>
                                </Card>
                            </Col>))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
        <div id="section_social" className="full-image-crop bg-primary">
            <div className="text-overlay">
                <Row gutter={[16, 16]} justify={"center"}>
                    <Col xs={24} sm={18}>
                        <Row gutter={[16, 16]} className='section-services' justify={'center'}>
                            <Col span={24} className='services-title'>
                                <div className='center-content'>
                                    redes sociais
                                </div>
                            </Col>
                            <Col span={24}>
                                <Row justify={"center"} gutter={[16, 16]} align={"middle"}>
                                    {
                                        SocialData.map((social: any, index: number) => (<Col className='margin-bottom-medium'>
                                            <Tooltip placement="top" title={social.label.charAt(0).toUpperCase() + social.label.slice(1)}>
                                                <a href={social.link} className='social-icon social-icon-large social-square' target='_blank'>
                                                    {social.icon}
                                                </a>
                                            </Tooltip>
                                        </Col>))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <FloatButton.Group
            trigger="hover"
            type="primary"
            icon={<FiShare2 />}
        >
            {
                SocialData.map((social: any, index: number) => (
                    <FloatButton icon={social.icon} href={social.link} target='_blank' tooltip={<div>{social.label.charAt(0).toUpperCase() + social.label.slice(1)}</div>} />
                ))
            }
        </FloatButton.Group>
    </>)
}