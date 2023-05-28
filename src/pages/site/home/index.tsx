import { Card, Col, Row, Button, FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

export const SiteHomePage = () => {
    return (<>
        <div className="full-image-crop">
            <img src="/photos/banner-desktop.png" alt="Your Image" className="full-image desktop-image" />
            <img src="/photos/banner-mobile.png" alt="Your Image" className="full-image mobile-image" />
            <div className="text-overlay">
                <div className="banner-title">BORA TREINAR</div>
                <div className="banner-subtitle">É hora de EVOLUIR!</div>
                <Button type="primary" className='bg-primary' href='https://wa.me/+5511942470818' target='_blank'>Agende uma aula</Button>
            </div>
        </div>
        <div className="site-content margin-top-medium padding-bottom-large">
            <Row gutter={[16, 16]} justify={"center"}>
                <Col xs={24} sm={18}>
                    <Row gutter={[16, 16]} className='section-services'>
                        <Col span={24} className='services-title'>Serviços</Col>
                        <Col xs={24} sm={8}>
                            <Card title="Treinamento Personalizado" className='bg-primary card-home' cover={<img alt="example" src="/photos/team.jpg" />}>
                                <p>
                                    Desenvolva comigo um programa de treinamento personalizado de acordo com as necessidades e metas individuais.
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card title="Avaliações físicas" className='bg-primary card-home' cover={<img alt="example" src="/photos/workout.jpg" />}>
                                <p>
                                    Realize avaliações físicas completas para identificar o nível atual de condicionamento físico dos clientes.
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Card title="Planejamento de Metas" className='bg-primary card-home' cover={<img alt="example" src="/photos/example.jpg" />}>
                                <p>
                                    Ajudo meus clientes a estabelecer metas realistas e mensuráveis, acompanhando e ajustando o plano de treinamento conforme necessário.
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
                <div className="banner-title">Sobre titulo</div>
                <div className="banner-subtitle">Sobre subtitulo</div>
                <Button type="primary" className='bg-primary' href='https://wa.me/+5511942470818' target='_blank'>BUTTON</Button>
            </div>
        </div>
        <div className="full-image-crop">
            <div className="text-overlay">
                <div className="banner-title">Outra section</div>
                <div className="banner-subtitle">Sobre subtitulo</div>
                <Button type="primary" className='bg-primary' href='https://wa.me/+5511942470818' target='_blank'>BUTTON</Button>
            </div>
        </div>
        <FloatButton
            type="primary"
            href='https://wa.me/+5511942470818' target='_blank'
            className='bg-primary'
            icon={<WhatsAppOutlined />} />
    </>)
}