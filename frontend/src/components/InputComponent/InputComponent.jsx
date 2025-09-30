import { Input } from "antd";
import React from "react";

const InputComponent = ({ size, placeholder, bordered, style }) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={{ borderRadius: 0, ...style }}
    />
  );
};

export default InputComponent;