import { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

export const SiteHeaderComponent = () => {
    const [visible, setVisible] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 768 });

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const renderDesktopNavbar = () => {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
            </Menu>
        );
    };

    const renderMobileNavbar = () => {
        return (
            <div className='header-navbar-responsive'>
                <div className="header-navbar-title">BRAND</div>
                <div className="header-menu-responsive" onClick={showDrawer}>
                    <MenuOutlined className='header-menu-icon' />
                </div>
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={closeDrawer}
                    open={visible}
                    width={300}
                    bodyStyle={{ padding: 0 }}
                >
                    <Menu mode="inline">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
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
