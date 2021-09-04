import React from 'react'
import swal from 'sweetalert'
import { Link, withRouter, useHistory } from 'react-router-dom'
import { MobileFilled, MailFilled } from '@ant-design/icons'

const FindpasswordCode: React.FC = (props: any) => {
  console.log('this is signup')

  const history = useHistory()
  const handleClick = () => {
    swal({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'info',
    })
    history.push('/login/editpassword')
  }

  return (
    <div className="passwordcode-wrap">
      <div className="password-top">
        <div className="now-step">1.验证身份信息</div>
        <div className="trangle" />
        <div className="other-step">2.设置新密码</div>
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请输入手机号码" />
        </div>
        <div className="phone-code">
          <MailFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="password" className="input-detail" placeholder="&nbsp;&nbsp;请输入验证码" />
          <button type="submit" className="phonecode-button">
            获取验证码
          </button>
        </div>
      </div>

      <button type="submit" className="login-button" onClick={handleClick}>
        确认修改
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/findpasswordphone">
          切换成用户名手机认证
        </Link>
      </div>
    </div>
  )
}

export default withRouter(FindpasswordCode)
