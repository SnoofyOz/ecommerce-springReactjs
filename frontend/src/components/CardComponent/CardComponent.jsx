import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            styles={{ body: { padding: '10px' } }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span>
                    <span>4.9 </span>
                    <StarFilled style={{ color: '#FFC400', fontSize: '11px', verticalAlign: '-2px' }} />
                </span>
                <WrapperStyleTextSell style={{ marginLeft: '4px' }}>|  Đã bán 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight:' 8px'}}> 10.000.000đ</span>
                <WrapperDiscountText>
                    -10%
                </WrapperDiscountText>

            </WrapperPriceText>
        </WrapperCardStyle>
    )
}
export default CardComponent