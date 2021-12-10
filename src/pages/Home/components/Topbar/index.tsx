import React, { FC, ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'

const Topbar: FC = (): ReactElement => {
  const history = useHistory()

  const login = () => {
    history.push('/login')
  }

  return (
    <div>
      <div id="topbar-left">首页</div>
      <div id="topbar-right">
        <button type="button" onClick={login}>
          登录
        </button>
      </div>
    </div>
  )
}
export default Topbar
