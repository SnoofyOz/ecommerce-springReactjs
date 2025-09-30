import { Col, Image, Row } from 'antd'
import imageProduct from '../../assets/images/Book1.webp'
import imageProductSmall from '../../assets/images/B1Small.webp'
import { PlusOutlined, MinusOutlined, StarFilled } from '@ant-design/icons'
import React from 'react'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ProductsDetailComponent = () => {
  const onChange = () => { }
  return (
    <Row style={{ padding: '16px', background: '#ffff' }}>
      <Col span={10} style={{borderRadius:'10px' ,border:'1px solid #e5e5e5', padding:'8px'}}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <div>
          <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt="image2" preview={false} style={{ height: '64px', width: '64px' }} />
            </WrapperStyleColImage>
          </Row>
        </div>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>Dark Nhan Tam</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ color: '#FFC400', fontSize: '11px', verticalAlign: '-2px' }} />
          <StarFilled style={{ color: '#FFC400', fontSize: '11px', verticalAlign: '-2px' }} />
          <StarFilled style={{ color: '#FFC400', fontSize: '11px', verticalAlign: '-2px' }} />
          <WrapperStyleTextSell>|  Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct style={{ padding: '10px' }} >1.000.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className='address'>Phước Kiểng, Nhà Bè, Tp. Hồ Chí Minh</span>
          <span> - </span>
          <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
          <div style={{marginBottom:'10px'}}>Số Lượng</div>
          <WrapperQuantityProduct>
            <button style={{ border: 'none', background: 'transparent' }}>
              <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
            <WrapperInputNumber defaultValue={1} onChange={onChange} size='small' />
            <button style={{ border: 'none', background: 'transparent' }}>
              <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
          </WrapperQuantityProduct>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <ButtonComponent
            size={20}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              width: '220px',
              height: '48px',
              border: 'none'
            }}
            textButton={'Mua ngay'}
            styleTextButon={{ color: '#ffff', fontSize:'15px', fontWeight: '600' }}
          >
          </ButtonComponent>
          <ButtonComponent
            size={20}
            styleButton={{
              background:'#fff',
              width: '220px',
              height: '48px',
              border: '1px solid rgb(13, 92, 182)'
            }}
            textButton={'Mua trước trả sau'}
            styleTextButon={{ color: 'rgb(13, 92, 182)', fontSize:'15px', fontWeight: '600' }}
          >
          </ButtonComponent>
        </div>
      </Col>
    </Row >
  )
}

export default ProductsDetailComponent