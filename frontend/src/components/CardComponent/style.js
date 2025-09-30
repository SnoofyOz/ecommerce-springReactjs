import { Card } from 'antd';
import styled from 'styled-components';


export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    margin: 0px;
    color: rgb(56,56,61)
` 
export const WrapperReportText = styled.div`
    font-size: 11px;
    display: flex;
    align-items: center;
    color: #808089;
    margin: 2px 0px 4px;
`
export const WrapperPriceText = styled.div`
    text-align: left;
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    color: red;
`
export const WrapperDiscountText = styled.span`
    color: var(--Alias-Primary---On-Theme, #27272a);
    font-size: 12px;
    background-color: #f5f5f5;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`