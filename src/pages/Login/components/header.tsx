import React, { FC } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'
import '../../Login/index.scss'

interface Props {
  name: string
}

const LoginHeader: FC<Props> = (props) => {
  return (
    <div className="login-header">
      <div className="header-left">{props.name}</div>
      <div className="header-right">
        <Link to="/home">
          <CloseCircleOutlined style={{ fontSize: 20, color: 'rgba(0, 121, 254, 1)' }} />
        </Link>
      </div>
    </div>
  )
}
export default LoginHeader
