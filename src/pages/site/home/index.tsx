import { Card, Col, Row, Button, FloatButton, List, Tooltip } from 'antd';
import { FaMeetup } from 'react-icons/fa';
import { CardHomeData, PartnersData, TeamData } from '../../../utils/data';

export const SiteHomePage = () => {
    const meetupUrl = 'https://www.meetup.com/pt-BR/nodebr/';

    return (<>
        <div className="full-image-crop">
            <img src="/photos/people-community.jpg" alt="Your Image" className="full-image" />
            {/* <img src="/photos/banner-mobile.png" alt="Your Image" className="full-image mobile-image" /> */}
            <div className="text-overlay">
                <div className='text-overlay-content'>
                    <img alt="example" src="/photos/logo-white.png" height={75} className='animate__animated animate__zoomIn' />

                    {/* <div className="banner-title">NODEBR</div> */}
                    <div className="banner-subtitle">Comunidade brasileira para ​quem tem interesse em ​aprender e se aprofundar ​em NodeJS</div>
                    <Button id="banner" type="primary" className='button-base button-primary margin-top-medium animate__animated animate__infinite animate__pulse' href={meetupUrl} target='_blank'>Faça parte da comunidade no meetup</Button>
                </div>
            </div>
        </div>
        <div className="site-content margin-top-medium padding-bottom-large min-full-height">
            <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} sm={18}>
                    <Row gutter={[16, 16]} className='section-services'>
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
        <div className="full-image-crop bg-primary">
            <div className="text-overlay">
                <Row gutter={[16, 16]} justify={"center"}>
                    <Col xs={24} sm={18}>
                        <Row gutter={[16, 16]} className='section-services' justify={'center'}>
                            <Col span={24} className='services-title'>Empresas que ao longo desses anos já apoiaram a comunidade</Col>
                            {
                                PartnersData.map((item: any, index: number) => (<Col xs={8} lg={2} className='partner' key={index}>
                                    <Tooltip placement="top" title={item.link}>
                                        <img alt="example" src={item.img} />
                                    </Tooltip>
                                </Col>))
                            }
                        </Row>
                    </Col>
                </Row>
                <Button type="primary" className='button-base button-secondary margin-top-large' href={meetupUrl} target='_blank'>Nos apoie com sua empresa</Button>
            </div>
        </div>
        <div className="full-image-crop">
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
        <div className="site-content margin-top-medium padding-bottom-large min-full-height">
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
        <div className="full-image-crop bg-primary">
            <div className="text-overlay">
                <div className="banner-title">Outra section</div>
                <div className="banner-subtitle">Sobre subtitulo</div>
                <Button type="primary" className='bg-primary' href={meetupUrl} target='_blank'>BUTTON</Button>
            </div>
        </div>
        <FloatButton
            type="primary"
            href={meetupUrl} target='_blank'
            className='bg-primary'
            icon={<FaMeetup />} />
    </>)
}