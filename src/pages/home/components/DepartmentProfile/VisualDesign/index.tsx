import React, { FC, ReactElement, useRef } from 'react'
import {
  bg,
  source1,
  source2,
  source3,
  source4,
  source5,
  righttop,
  leftbottom,
  name,
} from './sourse'
import './index.scss'
import '../index.scss'

const VisualDesign: FC = (): ReactElement =>  {
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
          <p>通过UI设计、视觉设计、品牌设计等能力，解决人机交互、操作逻辑、界面美观的整体设计等问题，为用户带来机智的美感体验。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="souese1" id="visualdesign-img-source1"/>
        <img src={source2} alt="souese2" id="visualdesign-img-source2"/>
        <img src={source3} alt="souese3" id="visualdesign-img-source3"/>
        <img src={source4} alt="souese4" id="visualdesign-img-source4"/>
        <img src={source5} alt="souese5" id="visualdesign-img-source5"/>
      </div>
      <img src={leftbottom} alt="leftbottom" className="departmentprofile-leftbottom"/>
    </div>
  )
}

export default VisualDesign
