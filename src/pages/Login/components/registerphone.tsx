import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { MobileFilled, LockFilled, MailFilled, UserOutlined, WechatFilled, LoadingOutlined } from '@ant-design/icons'
import swal from 'sweetalert'
import Logo from '../../../assets/geekLogo.png'
import connect from '../../../store/connect'
import { toBeFormData } from '../../../utils/tobeformdata'
import { RegisteGetCode, RegisteByNumberSuc } from '../../../store/actions/loginActions'

const RegisterPhone: React.FC = (props: any) => {
  const [Username, setUsername] = useState<string>('')
  const [Password, setPassword] = useState<string>('')
  const [Name, setName] = useState<string>('')
  const [Weixin, setWeixin] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [ActiveCode, setActiveCode] = useState<string>('')
  const [timer, setTimer] = useState('获取验证码')
  const [isLoading, setIsloading] = useState(false)

  const onFinish = async (
    username: string,
    password: string,
    name: string,
    weixin: string,
    // eslint-disable-next-line no-shadow
    phone: string,
    verificationCode: string,
  ) => {
    console.log('finish')
    const formRegisterPhone = toBeFormData({ username, password, name, weixin, phone, verificationCode }, 6)
    props.onRegisteByNumberSuc(formRegisterPhone)
  }

  const rez = /^(13\d|14[014-9]|15[0-35-9]|16[25-7]|17[0-8]|18\d|19[0-35-9])\d{8}$/

  const getCode = () => {
    if (!phone) {
      swal('', '请输入手机号', 'warning', { buttons: [''] })
    } else if (rez.test(phone)) {
      props.onRegisteGetCode({ phone })
      setIsloading(true)
      let index = 60
      const timerresult = setInterval(() => {
        index--
        setTimer(`${index}s重新发送`)
        if (index === 0) {
          clearInterval(timerresult)
          index = 60
          setIsloading(false)
          setTimer('获取验证码')
        }
      }, 1000)
    } else {
      swal('', '请输入正确手机号', 'warning', { buttons: [''] })
    }
  }

  const handleClick = () => {
    // 表单验证
    if (!Username) {
      swal('', '请输入用户名', 'warning', {
        buttons: [''],
      })
    }
    if (!Password) {
      swal('', '请输入密码', 'warning', {
        buttons: [''],
      })
    }
    if (Password.length < 6 || Password.length > 20) {
      swal('', '密码长度需要为6-20位', 'warning', {
        buttons: [''],
      })
    }
    if (!Name) {
      swal('', '请输入姓名', 'warning', {
        buttons: [''],
      })
    }
    if (!Weixin) {
      swal('', '请输入微信号', 'warning', {
        buttons: [''],
      })
    }
    if (!phone) {
      swal('', '请输入手机号', 'warning', {
        buttons: [''],
      })
    }
    if (!ActiveCode) {
      swal('', '请输入验证码', 'warning', {
        buttons: [''],
      })
    } else {
      onFinish(Username, Password, Name, Weixin, phone, ActiveCode)
    }
  }

  return (
    <div className="register-wrap">
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
          <input type="password" className="input-detail" placeholder="请再次确认登录密码" />
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
        <div className="phone-code">
          <div className="input-wrap">
            <MailFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
            <input
              type="text"
              className="input-detail"
              placeholder="请输入验证码"
              onChange={(e) => {
                setActiveCode(e.target.value)
              }}
            />
          </div>

          <button
            type="submit"
            className="phonecode-button"
            onClick={() => {
              console.log('click')
              getCode()
            }}
          >
            {isLoading ? <LoadingOutlined /> : ''}&nbsp;
            {timer}
          </button>
        </div>
      </div>

      <button type="submit" className="login-button" onClick={handleClick}>
        注册
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login">
          返回登录
        </Link>
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/registercode">
          切换成激活码注册
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
  onRegisteGetCode: (phone: string) => dispatch(RegisteGetCode(phone)),
  onRegisteByNumberSuc: (index: FormData) => dispatch(RegisteByNumberSuc(index)),
})
export default connect({ mapStateToProps, mapDispatchToProps })(RegisterPhone)
