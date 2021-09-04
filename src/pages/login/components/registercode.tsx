import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { MobileFilled, LockFilled, MailFilled, UserOutlined, WechatFilled } from '@ant-design/icons'
import Logo from '../../../assets/geekLogo.png'

const RegisterCode: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  console.log('this is register')
  return (
    <div className="register-wrap">
      <div className="logo-wrap">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <UserOutlined style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请输入用户名" />
        </div>
        <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请设置6-20位登录密码" />
        </div>
        <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请再次确认登录密码" />
        </div>
        <div className="input-wrap">
          <UserOutlined style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请输入姓名" />
        </div>
        <div className="input-wrap">
          <WechatFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请输入微信号" />
        </div>
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请输入手机号码" />
        </div>
        <div className="input-wrap">
          <MailFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请输入激活码" />
        </div>
      </div>

      <button type="submit" className="login-button">
        注册
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/registerphone">
          切换成手机验证码注册
        </Link>
      </div>
    </div>
  )
}

export default withRouter(RegisterCode)
