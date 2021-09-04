import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import { MobileFilled, LockFilled } from '@ant-design/icons'
import Logo from '../../../assets/geekLogo.png'

const LoginIndex: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleClick = () => {
    if (!username) {
      swal('注意', '请输入用户名', 'warning', {
        buttons: [''],
      })
    }
    if (!password) {
      swal('注意', '请输入密码', 'warning', {
        buttons: [''],
      })
    }
  }

  useEffect(() => {
    console.log(username)
  }, [username])
  return (
    <div className="login-wrap">
      <div className="logo-wrap">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="&nbsp;&nbsp;手机号/学号/用户名/姓名"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="password"
            className="input-detail"
            placeholder="&nbsp;&nbsp;登录密码"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
      </div>

      <button type="submit" className="login-button" onClick={handleClick}>
        登录
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/registercode">
          注册新用户
        </Link>
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/findpasswordphone">
          找回密码
        </Link>
      </div>
    </div>
  )
}

export default withRouter(LoginIndex)
