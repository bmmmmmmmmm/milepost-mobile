import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MobileFilled, LockFilled, MailFilled, UserOutlined, WechatFilled } from '@ant-design/icons'
import swal from 'sweetalert'
import Logo from '../../../assets/geekLogo.png'
import connect from '../../../store/connect'
import { toBeFormData } from '../../../utils/tobeformdata'
import { RegisteByCodeSuc } from '../../../store/actions/loginActions'
import LoginHeader from './header'

const RegisterCode: React.FC = (props: any) => {
  console.log(props)
  const [Username, setUsername] = useState<string>('')
  const [Password, setPassword] = useState<string>('')
  const [Name, setName] = useState<string>('')
  const [Weixin, setWeixin] = useState<string>('')
  const [Phone, setPhone] = useState<string>('')
  const [ActiveCode, setActiveCode] = useState<string>('')

  const onFinish = async (
    username: string,
    password: string,
    name: string,
    weixin: string,
    phone: string,
    activeCode: string,
  ) => {
    console.log('finish')
    const formRegisterCode = toBeFormData({ username, password, name, phone, weixin, activeCode }, 6)
    props.onRegisteByCodeSuc(formRegisterCode)
  }

  const handleClick = () => {
    // 表单验证
    if (!Username) {
      swal('', '请输入用户名', 'warning', {
        buttons: [''],
      })
    } else if (!Password) {
      swal('', '请输入密码', 'warning', {
        buttons: [''],
      })
    } else if (Password.length < 6 || Password.length > 20) {
      swal('', '密码长度需要为6-20位', 'warning', {
        buttons: [''],
      })
    } else if (!Name) {
      swal('', '请输入姓名', 'warning', {
        buttons: [''],
      })
    } else if (!Weixin) {
      swal('', '请输入微信号', 'warning', {
        buttons: [''],
      })
    } else if (!Phone) {
      swal('', '请输入手机号', 'warning', {
        buttons: [''],
      })
    } else if (!ActiveCode) {
      swal('', '请输入激活码', 'warning', {
        buttons: [''],
      })
    } else {
      onFinish(Username, Password, Name, Weixin, Phone, ActiveCode)
    }
  }

  return (
    <div className="register-wrap">
      <LoginHeader name={'注册'} />
      <div className="logo-wrap">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <UserOutlined style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="请输入用户名"
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
            placeholder="请设置6-20位登录密码"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        {/* <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="password"
            className="input-detail"
            placeholder="请再次确认登录密码"
            onChange={(e) => {
              setConfirm(e.target.value)
            }}
          />
        </div> */}
        <div className="input-wrap">
          <UserOutlined style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="请输入姓名"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="input-wrap">
          <WechatFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="请输入微信号"
            onChange={(e) => {
              setWeixin(e.target.value)
            }}
          />
        </div>
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="请输入手机号码"
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className="input-wrap">
          <MailFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input
            type="text"
            className="input-detail"
            placeholder="请输入激活码"
            onChange={(e) => {
              setActiveCode(e.target.value)
            }}
          />
        </div>
      </div>

      <button type="submit" className="login-button" onClick={handleClick}>
        注册
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login">
          返回登录
        </Link>
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/registerphone">
          切换成手机验证码注册
        </Link>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch: any) => ({
  onRegisteByCodeSuc: (index: FormData) => dispatch(RegisteByCodeSuc(index)),
})
export default connect({ mapStateToProps, mapDispatchToProps })(RegisterCode)
