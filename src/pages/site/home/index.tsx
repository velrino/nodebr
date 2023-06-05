import { Card, Col, Row, Button, FloatButton, List } from 'antd';
import { FaMeetup } from 'react-icons/fa';

export const SiteHomePage = () => {
    const meetupUrl = 'https://www.meetup.com/pt-BR/nodebr/';
    const partners = [
        {
            img: "/photos/companies/google.png",
            link: "google",
        },
        {
            img: "/photos/companies/pagarme.png",
            link: "pagarme",
        },
        {
            img: "/photos/companies/lambda3.jpg",
            link: "lambda3",
        },
        {
            img: "/photos/companies/loft.jpg",
            link: "loft",
        },
        {
            img: "/photos/companies/pravaler.png",
            link: "pravaler",
        },
        {
            img: "/photos/companies/caelum.png",
            link: "caelum",
        }
    ];

    return (<>
        <div className="full-image-crop">
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
        <div className="site-content margin-top-medium padding-bottom-large">
            <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} sm={18}>
                    <Row gutter={[16, 16]} className='section-services'>
                        <Col span={24} className='services-title'>Somos uma comunidade de devs para devs</Col>
                        <Col xs={24} sm={8}>
                            <Card title="+4.000 MEMBROS ​NO MEETUP" className='bg-primary card-home' cover={<img alt="example" src="/photos/people.jpg" />}>
                                <p>
                                    Estamos sempre por lá divulgando eventos online e presencial
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card title="CURSO NODEJS ​PARA INCIANTES" className='bg-primary card-home' cover={<img alt="example" src="/photos/people-2.jpg" />}>
                                <p>
                                    Um dos maiores cursos online que já ajudou milhares de devs a entrarem no mercado
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card title="NODEJS DO BÁSICO ​AO AVANÇADO" className='bg-primary card-home' cover={<img alt="example" src="/photos/people-3.jpg" />}>
                                <p>
                                    Entregues de forma gratuita para a comunidade
                                </p>
                            </Card>
                        </Col>
                    </Row>
                    {/* {
                        [...new Array(200)].map((item: any, index: number) => <div>{index} - LINE</div>)
                    } */}
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
                                partners.map((item: any) => (<Col xs={8} sm={2} className='partner'>
                                    <img alt="example" src={item.img} />
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