import React, { FC, ReactElement } from 'react'
import {
  bottomline,
  littlebg,
  littlebottpmline,
  littlecircle,
  where,
  lefttop
} from './sourse'
import './index.scss'

const WhereWeGo: FC = (): ReactElement =>
  <div id="wherewego">
    <img src={lefttop} alt="lefttop" id="wherewego-lefttop"/>
    <img src={where} alt="where" id="wherewego-where"/>
    <div id="wherewego-list">
      <p><br />
        <ul>
          <li className="wherewego-grade">2018级</li><br />
          <li><span className="wherewego-name">邬仕艾</span><span className="wherewego-compony">字节跳动</span></li>
          <li><span className="wherewego-name">毛玲</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">蒋文龙</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">康勇</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">蒲宇</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">翁迪</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">周钰</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">喻鹏</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">白开帅</span><span className="wherewego-compony">字节跳动</span></li>
          <li><span className="wherewego-name">黄瑜</span><span className="wherewego-compony">美团</span></li>
        </ul><br /><br />
        <ul>
          <li className="wherewego-grade">2017级</li><br />
          <li><span className="wherewego-name">张万超</span><span className="wherewego-compony">腾讯、字节跳动</span></li>
          <li><span className="wherewego-name">李俊峰</span><span className="wherewego-compony">阿里腾讯美团cvte</span></li>
          <li><span className="wherewego-name">郑孟吉</span><span className="wherewego-compony">腾讯</span></li>
          <li><span className="wherewego-name">陈东南</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">李彬楷</span><span className="wherewego-compony">字节跳动</span></li>
          <li><span className="wherewego-name">滕鹏飞</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">王皓</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">潘洪杭</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">隆柔</span><span className="wherewego-compony">美团</span></li>
          <li><span className="wherewego-name">赵朋承</span><span className="wherewego-compony">阿里巴巴</span></li>
          <li><span className="wherewego-name">赵祖元</span><span className="wherewego-compony">快手</span></li>
          <li><span className="wherewego-name">张帆</span><span className="wherewego-compony">腾讯</span></li>
          <li><span className="wherewego-name">王川云</span><span className="wherewego-compony">阿里巴巴</span></li>
        </ul><br /><br />
        <ul>
          <li className="wherewego-grade">2016级</li><br />
          <li><span className="wherewego-name">彭和胜</span><span className="wherewego-compony">腾讯</span></li>
          <li><span className="wherewego-name">李雄杰</span><span className="wherewego-compony">美团</span></li>
          <li><span className="wherewego-name">黎磊</span><span className="wherewego-compony">阿里巴巴</span></li>
        </ul><br /><br />
        <ul>
          <li className="wherewego-grade">2015级</li><br />
          <li><span className="wherewego-name">徐清风</span><span className="wherewego-compony">阿里巴巴</span></li>
        </ul><br /><br />
      </p>
      <img src={littlebottpmline} alt="littlebottpmline" id="wherewego-littlebottpmline"/>
    </div>
    {/* <button type='button' id="wherewego-joinus">1</button> */}
    <img src={bottomline} alt="bottomline" id="wherewego-bottomline"/>
  </div>

export default WhereWeGo
