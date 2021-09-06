import React, { FC, ReactElement } from 'react'
import { Slider, Topbar } from './components'
import './index.scss'

const Home: FC = (): ReactElement => {
  console.log('Home');
  
  return (
    <div>
      <div id="home-top">
        <Topbar/>
      </div>
      <div id="home-content">
        <Slider/>
      </div>
    </div>
  )
}
export default Home
