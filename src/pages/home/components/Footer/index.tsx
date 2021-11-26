import React, { FC, ReactElement } from 'react'
import {
  logo
} from './source'
import './index.scss'

const Footer: FC = (): ReactElement => 
  <div id="home-footer">
    <img src={logo} alt="logo" id="home-footer-first"/>
    <p className="home-footer-content">地址：重庆邮电大学</p>
    <p className="home-footer-content">微信公众号：南山极客</p>
    <p className="home-footer-content">QQ运营号：3270144096</p>
    <p className="home-footer-content">邮箱：3270144096@qq.com</p>
    <div id="home-footer-cr">COPYRIGHT©极客&勤奋蜂工作室 渝ICP备19016836</div>
  </div>

export default Footer
