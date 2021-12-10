import React, { useState } from 'react'
import swal from 'sweetalert'
import { Link, withRouter, useHistory } from 'react-router-dom'
import { MobileFilled, MailFilled, LoadingOutlined, LockFilled } from '@ant-design/icons'
import connect from '../../../store/connect'
import { ResetPasByNum, ResetPasGetCode } from '../../../store/actions/loginActions'
import LoginHeader from './header'

const FindpasswordCode: React.FC = (props: any) => {
  const [phone, setPhone] = useState<string>('')
  const [ActiveCode, setActiveCode] = useState<string>('')
  const [Password, setPassword] = useState<string>('')
  const [confirm, setConfirm] = useState<string>('')
  const [isLoading, setIsloading] = useState(false)
  const [isIn, setIsin] = useState(false)
  const [timer, setTimer] = useState('获取验证码')

  const handleClick = () => {
    if (!phone) {
      swal('', '请输入手机号', 'warning', { buttons: [''] })
    } else if (!ActiveCode) {
      swal('', '请输入验证码', 'warning', { buttons: [''] })
    } else {
      setIsin(true)
    }
  }

  const handleEdit = () => {
    if (Password !== confirm) {
      swal('', '两次密码输入不一致', 'warning', { buttons: [''] })
    } else if (!Password) {
      swal('', '请输入新密码', 'warning', { buttons: [''] })
    } else if (!confirm) {
      swal('', '请再次输入密码', 'warning', { buttons: [''] })
    } else {
      onFinish(phone, ActiveCode, Password, confirm)
    }
  }

  const rez = /^(13\d|14[014-9]|15[0-35-9]|16[25-7]|17[0-8]|18\d|19[0-35-9])\d{8}$/

  const getCode = () => {
    console.log({ phone })
    if (rez.test(phone)) {
      props.onResetPasGetCode({ phone })
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
      swal('', '请输入正确手机号', 'error')
    }
  }

  // eslint-disable-next-line no-shadow
  const onFinish = async (phone: string, verificationCode: string, password: string, surePassword: string) => {
    console.log('Success:', { phone, verificationCode, password, surePassword })
    props.onResetPasByNum(phone, verificationCode, password, surePassword)
  }

  return (
    <div>
      <LoginHeader name={'找回密码'} />
      <div className="passwordcode-wrap" style={isIn ? { display: 'none' } : {}}>
        <div className="password-top">
          <div className="now-step">1.验证身份信息</div>
          <div className="trangle" />
          <div className="other-step">2.设置新密码</div>
        </div>

        <div className="input-container">
          <div className="input-wrap">
            <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
            <input
              type="text"
              className="input-detail"
              placeholder="请输入手机号码"
              onChange={(e: any) => {
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
                onChange={(e: any) => setActiveCode(e.target.value)}
              />
            </div>

            <button type="submit" className="phonecode-button" onClick={getCode}>
              {isLoading ? <LoadingOutlined /> : ''}&nbsp;
              {timer}
            </button>
          </div>
        </div>
        <div className="function-wrap">
          <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login">
            返回登录
          </Link>
        </div>
        <button type="submit" className="login-button" onClick={handleClick}>
          下一步
        </button>

        {/* <div className="function-wrap">
          <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/findpasswordphone">
            切换成用户名手机认证
          </Link>
        </div> */}
      </div>

      <div className="editpassword-wrap" style={!isIn ? { display: 'none' } : {}}>
        <div className="password-top">
          <div className="left-step">1.验证身份信息</div>
          <div className="trangle" />
          <div className="right-step">2.设置新密码</div>
        </div>

        <div className="input-container">
          <div className="input-wrap">
            <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
            <input
              type="password"
              className="input-detail"
              placeholder="请输入新密码"
              onChange={(e: any) => setConfirm(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
            <input
              type="password"
              className="input-detail"
              placeholder="请再次输入密码"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="function-wrap">
          <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login">
            返回登录
          </Link>
        </div>
        <button type="submit" className="password-button" onClick={handleEdit}>
          确认修改
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch: any) => ({
  onResetPasGetCode: (phone: string) => dispatch(ResetPasGetCode(phone)),
  onResetPasByNum: (phone: string, verificationCode: string, password: string, surePassword: string) =>
    dispatch(ResetPasByNum(phone, verificationCode, password, surePassword)),
})
export default connect({ mapStateToProps, mapDispatchToProps })(FindpasswordCode)
