import { useEffect, useState } from 'react';
import { Col, Drawer, Menu, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { MenuData } from '../../../utils/data';

export const SiteHeaderComponent = () => {
    const [visible, setVisible] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 821 });

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bannerDiv = document.getElementById('banner');
            if (bannerDiv) {
                const { bottom } = bannerDiv.getBoundingClientRect();
                setScrolled(bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToAnchor = (documentElementId: string) => {
        const targetElement = document.getElementById(documentElementId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            closeDrawer()
        }
    };


    const renderDesktopNavbar = () => {
        return (
            <Row justify="start" align="middle" className={`header-navbar-desktop header-desktop-navbar-menu ${scrolled ? ' header-scrolled' : ''}`}>
                <Col span={4} className='header-desktop-navbar-menu-logo'>
                    <div onClick={() => goToAnchor('section_home')}>
                        {scrolled && <img alt="example" src="/photos/logo-white.png" height={30} className='animate__animated animate__zoomIn clickable' />}
                    </div>
                </Col>
                <Col span={12}>
                    <div className='header-desktop-navbar-menu'>
                        {
                            MenuData.map((item: any, index: number) => (
                                <div key={index} className='header-desktop-navbar-menu-item' onClick={() => goToAnchor(item.link)}>
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        );
    };

    const renderMobileNavbar = () => {
        return (
            <div className={`header-navbar-responsive ${scrolled ? ' header-scrolled' : ''}`}>
                <div className="header-responsive-navbar-menu-logo">
                    <img alt="example" src="/photos/logo-white.png" height={30} onClick={() => goToAnchor('section_home')} className='animate__animated animate__zoomIn clickable' />
                </div>
                <div className="header-responsive-navbar-menu-bt" onClick={showDrawer}>
                    <MenuOutlined className='header-menu-icon' />
                </div>
                <Drawer
                    title={<>
                        <img alt="example" src="/photos/logo-white.png" height={25} />
                    </>}
                    placement="right"
                    onClose={closeDrawer}
                    open={visible}
                    width={300}
                    headerStyle={{ background: '#0e110e' }}
                    bodyStyle={{ padding: 0, background: '#0e110e' }}
                >
                    <Menu mode="inline" className='bg-secondary'>
                        {
                            MenuData.map((item: any, index: number) => (
                                <Menu.Item key={index} onClick={() => goToAnchor(item.link)}>{item.label}</Menu.Item>
                            ))
                        }
                    </Menu>
                </Drawer>
            </div>
        );
    };

    return (
        <div className='header-navbar'>
            {isDesktop ? renderDesktopNavbar() : renderMobileNavbar()}
        </div>
    );
};
