import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'



const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', flexDirection: 'column', gap: '5px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ padding: '0px' }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return (
                    options.map((option) => {
                        return (
                            <span style={{}}>
                                <Rate style={{ padding: '0px', fontSize: '14px' }} disabled defaultValue={option} />
                                <span style={{ padding: '10px' }}>Từ {option} sao</span>
                            </span>
                        )

                    })
                )
            case 'price':
                return (
                    options.map((option) => {
                        return (
                            <WrapperTextPrice>{option}</WrapperTextPrice>
                        )

                    })
                )
        }
    }
    return (
        <div>
            <WrapperLabelText>Tat ca san pham</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'Dien Thoai'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent