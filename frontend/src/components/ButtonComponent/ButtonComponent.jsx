import { Button } from "antd";
//import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const ButtonComponent = ({ size, styleButton, styleTextButon, textButton, ...rest }) => {
    return (
        <Button
            size={size}
            style={{ borderRadius: 0, ...styleButton }}
            {...rest}
        // icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        >
            <span style={styleTextButon}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent;