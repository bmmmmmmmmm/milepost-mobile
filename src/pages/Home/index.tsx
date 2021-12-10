import React, { FC, ReactElement } from 'react'
import {
  Topbar,
  ToTop,
  Photos,
  WhoAreWe,
  WhatWeDid,
  ProductOperation,
  VisualDesign,
  WebFrontEnd,
  JavaService,
  PythonBigData,
  AndroidSmart,
  WhereWeGo,
  Footer
} from './components'
import './index.scss'


const Home: FC = (): ReactElement => {
  return (
    <div>
      <ToTop/>
      <div id="home-top">
        <Topbar/>
      </div>
      <div id="home-content">
        {/* <Photos/> */}
        <WhoAreWe/>
        <WhatWeDid/>
        <ProductOperation/>
        <VisualDesign/>
        <WebFrontEnd/>
        <JavaService/>
        <PythonBigData/>
        <AndroidSmart/>
        <WhereWeGo/>
        <Footer/>
      </div>
    </div>
  )
}
export default Home
