import React from 'react';
import { Badge, Col } from 'antd';
import {
    WrapperHeader,
    WrapperTextHeader1,
    WrapperHeaderAccount,
    WrapperTextHeader2
} from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputComponent/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader1>FleurShop</WrapperTextHeader1>
                </Col>
                <Col span={13} style={{ marginRight: '20px' }} >
                    <ButtonInputSearch
                        size='large'
                        bordered={false}
                        textButton='Search'
                        placeholder='Search for products'
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeader2>Login/Register</WrapperTextHeader2>
                            <div>
                                <WrapperTextHeader2>Account</WrapperTextHeader2>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Badge count={4} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '35px', color: '#ffff' }} />
                        </Badge>
                        <WrapperTextHeader2>ShoppingCart</WrapperTextHeader2>
                    </div>
                </Col>
            </WrapperHeader>

        </div>

    )
}

export default HeaderComponent;