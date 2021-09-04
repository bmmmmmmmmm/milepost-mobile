import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MailFilled, MobileFilled } from '@ant-design/icons'

const FindPasswordPhone: React.FC = (props: any) => {
  console.log('this is findpassword')

  const history = useHistory()
  const handleClick = () => {
    history.push('/login/editpassword')
  }

  return (
    <div className="password-wrap">
      <div className="password-top">
        <div className="now-step">1.验证身份信息</div>
        <div className="trangle" />
        <div className="other-step">2.设置新密码</div>
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <MobileFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请输入用户名" />
        </div>
        <div className="input-wrap">
          <MailFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请输入注册的手机号" />
        </div>
      </div>

      <button type="submit" className="password-button" onClick={handleClick}>
        下一步
      </button>

      <div className="function-wrap">
        <Link role="none" style={{ color: '#169bd5', textDecoration: 'none' }} to="/login/findpasswordcode">
          切换成手机验证码认证
        </Link>
      </div>
    </div>
  )
}

export default FindPasswordPhone
