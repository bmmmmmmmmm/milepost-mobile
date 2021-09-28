import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import { MobileFilled, LockFilled } from '@ant-design/icons'
import { toBeFormData } from '../../../utils/tobeformdata'
import connect from '../../../store/connect/index'
import { LoginSuccess } from '../../../store/actions/loginActions'
import Logo from '../../../assets/geekLogo.png'
import LoginHeader from './header'

const LoginIndex: React.FC = (props: any) => {
  const [Username, setUsername] = useState<string>('')
  const [Password, setPassword] = useState<string>('')

  const onFinish = async (username: string, password: string) => {
    const formLogin = toBeFormData({ username, password }, 2)
    props.onLoginSuccess(formLogin, props.history)
  }

  const handleClick = () => {
    if (!Username) {
      swal('', '请输入用户名', 'warning', {
        buttons: [''],
      })
    } else if (!Password) {
      swal('', '请输入密码', 'warning', {
        buttons: [''],
      })
    } else {
      onFinish(Username, Password)
    }
  }

  return (
    <div className="login-wrap">
      <LoginHeader name={'登录'} />
      <div className="logo-wrap">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="input-container">
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="手机号/学号/用户名/姓名"
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
            placeholder="登录密码"
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
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/findpasswordcode">
          找回密码
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    login: state.login,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onLoginSuccess: (index: any, history: { history: any }) => dispatch(LoginSuccess(index, history)),
})

export default connect({ mapStateToProps, mapDispatchToProps })(LoginIndex)
