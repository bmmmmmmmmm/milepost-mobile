import React, { FC, ReactElement, useRef } from 'react'
import {
  bg,
  source1,
  source2,
  source3,
  source4,
  source5,
  source6,
  righttop,
  leftbottom,
  name,
} from './sourse'
import './index.scss'
import '../index.scss'

const AndroidSmart: FC = (): ReactElement =>  {
  const bbg = useRef<any>(null)
  const ppp = useRef<any>(null)
  document.addEventListener('scroll',()=>{
    // 屏幕高
    const clientH = document.documentElement.clientHeight;
    // 距顶部距离
    const distancetopBg = bbg.current?.getBoundingClientRect().top
    // 距底部距离
    const distancebuttomBg = bbg.current?.getBoundingClientRect().top - clientH

    const distancetopP = ppp.current?.getBoundingClientRect().top
    const distancebuttomP = ppp.current?.getBoundingClientRect().top - clientH

    if(bbg.current)
      bbg.current.className = distancebuttomBg < 0 && distancetopBg > -0.35 * clientH ? 'departmentprofile-img-show' : 'departmentprofile-img'
    if(ppp.current)
      ppp.current.className = distancebuttomP < 0 && distancetopP > -0.25 * clientH ? 'departmentprofile-p-show' : 'departmentprofile-p'
  })

  return(
    <div className='departmentprofile'>
      <img src={righttop} alt="righttop" className="departmentprofile-righttop"/>
      <div className="departmentprofile-center">
        <img src={name} alt="name" className="departmentprofile-name"/>
        <div className="departmentprofile-p" ref={ppp}>
          <p>通过在Android智能设备终端上利用java､ kotlin开发app等能力，解决了UI还原、逻辑交互、组件定制、性能优化等问题，复现加强人机交互场景，深挖操作系统与互联网技术，解决用户痛难点，为用户带去无处不在的贴心服务。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="souese1" id="androidsmart-img-source1"/>
        <img src={source2} alt="souese2" id="androidsmart-img-source2"/>
        <img src={source3} alt="souese3" id="androidsmart-img-source3"/>
        <img src={source4} alt="souese4" id="androidsmart-img-source4"/>
        <img src={source5} alt="souese5" id="androidsmart-img-source5"/>
        <img src={source6} alt="souese6" id="androidsmart-img-source6"/>
      </div>
      <img src={leftbottom} alt="leftbottom" className="departmentprofile-leftbottom"/>
    </div>
  )
}

export default AndroidSmart