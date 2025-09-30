import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import logoLogin from '../../assets/images/Logo-Login.png'
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
  const { isShowPassword, setIsShowPassword } = useState(false)
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.53', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '10px', background: '#efefef', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Hello</h1>
          <p>Login or Register</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' />
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)'
              }}
            >
              {isShowPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled />
              )}
            </span>
            <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)'
              }}
            >
              {isShowPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled />
              )}
            </span>
            <InputForm placeholder="re-enter password" type={isShowPassword ? "text" : "re-enter password"} />
          </div>
          <ButtonComponent
            size={20}
            styleButton={{
              margin: '26px 0 10px',
              background: 'rgb(255, 57, 69)',
              width: '100%',
              height: '48px',
              border: 'none'
            }}
            textButton={'Đăng Kí'}
            styleTextButon={{ color: '#ffff', fontSize: '15px', fontWeight: '600' }}
          >
          </ButtonComponent>
          <p>Đã có tài khoản? <WrapperTextLight> Đăng Nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={logoLogin} preview={false} alt='Logo Login' height={203} width={203} />
          <h4 style={{ color: 'rgb(10, 104, 255)' }}>Mua sắm tại FleurShop</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage