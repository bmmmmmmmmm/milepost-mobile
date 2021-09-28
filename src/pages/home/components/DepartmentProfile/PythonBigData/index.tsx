import React, { FC, ReactElement, useRef } from 'react'
import {
  bg,
  source1,
  source2,
  source3,
  source4,
  source5,
  source6,
  lefttop,
  rightbottom,
  name,
} from './sourse'
import './index.scss'
import '../index.scss'

const PythonBigData: FC = (): ReactElement =>  {
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
      <img src={lefttop} alt="lefttop" className="departmentprofile-lefttop"/>
      <div className="departmentprofile-center">
        <img src={name} alt="name" className="departmentprofile-name"/>
        <div className="departmentprofile-p" ref={ppp}>
          <p>通过web开发、网络爬虫、机器学习等能力，解决web服务、数据挖掘与解析、计算机视觉等问题，为用户带来极致的web服务体验、大数据推广等成果。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="souese1" id="pythonbigdata-img-source1"/>
        <img src={source2} alt="souese2" id="pythonbigdata-img-source2"/>
        <img src={source3} alt="souese3" id="pythonbigdata-img-source3"/>
        <img src={source4} alt="souese4" id="pythonbigdata-img-source4"/>
        <img src={source5} alt="souese5" id="pythonbigdata-img-source5"/>
        <img src={source6} alt="souese6" id="pythonbigdata-img-source6"/>
      </div>
      <img src={rightbottom} alt="rightbottom" className="departmentprofile-rightbottom"/>
    </div>
  )
}

export default PythonBigData