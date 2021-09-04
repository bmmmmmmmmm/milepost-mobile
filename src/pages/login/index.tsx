import React from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import HomeRoute from '../../routers'
import routes from '../../routers/main'
import './index.scss'

const Login: React.FC = (props: any) => (
  <BrowserRouter>
    <div>
      <HomeRoute routes={routes[0].children} />
    </div>
  </BrowserRouter>
)

export default withRouter(Login)
