import { Card, Col, Row, Button, FloatButton, List, Tooltip } from 'antd';
import { FaMeetup } from 'react-icons/fa';
import { CardHomeData, PartnersData } from '../../../utils/data';

export const SiteHomePage = () => {
    const meetupUrl = 'https://www.meetup.com/pt-BR/nodebr/';

    return (<>
        <div id="banner" className="full-image-crop">
            <img src="/photos/people-community.jpg" alt="Your Image" className="full-image" />
            {/* <img src="/photos/banner-mobile.png" alt="Your Image" className="full-image mobile-image" /> */}
            <div className="text-overlay">
                <div className='text-overlay-content'>
                    <img alt="example" src="/photos/logo-white.png" height={75} />

                    {/* <div className="banner-title">NODEBR</div> */}
                    <div className="banner-subtitle">Comunidade brasileira para ​quem tem interesse em ​aprender e se aprofundar ​em NodeJS</div>
                    <Button type="primary" className='button-primary margin-top-medium' href={meetupUrl} target='_blank'>Faça parte da comunidade no meetup</Button>
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
                <Button type="primary" className='button-secondary margin-top-large' href={meetupUrl} target='_blank'>Nos apoie com sua empresa</Button>
            </div>
        </div>
        <div className="full-image-crop">
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