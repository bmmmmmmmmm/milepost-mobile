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
  document.addEventListener('scroll',()=>{
    // 屏幕高
    const clientH = document.documentElement.clientHeight;
    // 距顶部距离
    const distancetop = bbg.current?.getBoundingClientRect().top
    // 距底部距离
    const distancebuttom = bbg.current?.getBoundingClientRect().top - clientH
    if(bbg.current)
      bbg.current.className = distancebuttom < 0 && distancetop > -0.35 * clientH ? 'departmentprofile-img-show' : 'departmentprofile-img'
  })
  return(
    <div className='departmentprofile'>
      <img src={righttop} alt="righttop" className="departmentprofile-righttop"/>
      <div className="departmentprofile-center">
        <img src={name} alt="name" className="departmentprofile-name"/>
        <p>123</p>
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
