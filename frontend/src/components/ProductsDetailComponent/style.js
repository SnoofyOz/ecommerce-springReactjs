import styled from 'styled-components';
import { Col, Image, InputNumber } from 'antd';


export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset;
  display: flex;
`;
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight:300;
    line-height: 32px;
    word-break: break-word;
    margin-top: 10px;
`;
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`
export const WrapperPriceProduct = styled.div`
    border-radius: 0px;
    background: rgb(250, 250, 250);
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    margin: 2px 0px 4px;
    margin-top: 10px;
    padding: 10px;
`
export const WrapperAddressProduct = styled.div`
    span.address {
      text-decoration: underline;
      font-size: 15px;
      line-height: 24px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span.change-address {
      color: rgb(11, 116, 229);
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
`
export const WrapperQuantityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    border-radius: 4px;
    border: 1px solid #ccc;
    
`
export const WrapperBtnQuantityProduct = styled.div`

`
export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number {
    width: 60px;
    border-radius:0px;
    border-top: none;
    border-bottom: none;
  };
  .ant-input-number-handler-wrap {
    display: none;
  }
`
