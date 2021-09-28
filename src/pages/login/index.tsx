import React from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import HomeRoute from '../../routers'
import routes from '../../routers/main'
import './index.scss'

const Login: React.FC = (props: any) => (
  <div>
    <HomeRoute routes={routes[0].children} />
  </div>
)

export default Login
