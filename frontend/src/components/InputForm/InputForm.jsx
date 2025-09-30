import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = ( props ) => {
    const {valueInput, setValueInput} = useState('')
    const { placeHolder = 'Nhập text',...rests} = props
  return (
    <WrapperInputStyle placeholder='{placeHolder}' valueInput = {valueInput} {...rests} />
  )
}

export default InputForm