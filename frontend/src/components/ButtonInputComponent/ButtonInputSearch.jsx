import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ButtonInputSearch = (props) => {
  const {
    size, placeholder, textButton,
    bordered, backgroundColorInput = '#ffff',
    backgroundColorButton = 'rgb(13,92,182)',
    colorButton = '#ffff'
  } = props;
  return (
    <div style={{ display: 'flex'}}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        styleButton={{background: backgroundColorButton}}
        textButton={textButton}
        styleTextButon={{ color: colorButton}}
      />
    </div>
  )
}

export default ButtonInputSearch;