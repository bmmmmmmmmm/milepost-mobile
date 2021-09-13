import React from 'react'
import { Link } from 'react-router-dom'
import { LockFilled } from '@ant-design/icons'

const EditPassword: React.FC = (props: any) => {
  console.log('this is findpassword')
  return (
    <div className="editpassword-wrap">
      <div className="password-top">
        <div className="left-step">1.验证身份信息</div>
        <div className="trangle" />
        <div className="right-step">2.设置新密码</div>
      </div>

      <div className="input-container">
        <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请输入新密码" />
        </div>
        <div className="input-wrap">
          <LockFilled style={{ fontSize: '20px', color: 'rgb(190, 190, 190)' }} />
          <input type="text" className="input-detail" placeholder="&nbsp;&nbsp;请再次输入密码" />
        </div>
      </div>

      <button type="submit" className="password-button">
        确认修改
      </button>
    </div>
  )
}

export default EditPassword
