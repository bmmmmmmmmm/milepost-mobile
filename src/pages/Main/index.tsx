import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from '../../routers/main/index'
import HomeRoute from '../../routers'
import Provider from '../../store/store'

const Main = (props: any) => (
  <Provider>
    <BrowserRouter>
      <HomeRoute routes={routes} />
    </BrowserRouter>
  </Provider>
)

export default Main
