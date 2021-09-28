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

const JavaService: FC = (): ReactElement =>  {
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
          <p>通过用JAVA语言数据库表结构设计、服务器配置，去实现软件中的逻辑并保证业务逻辑处理数据的严谨，保证数据吞吐的性能，为用户带来数据显示、控制用户输入等成果。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="souese1" id="javaservice-img-source1"/>
        <img src={source2} alt="souese2" id="javaservice-img-source2"/>
        <img src={source3} alt="souese3" id="javaservice-img-source3"/>
        <img src={source4} alt="souese4" id="javaservice-img-source4"/>
        <img src={source5} alt="souese5" id="javaservice-img-source5"/>
      </div>
      <img src={leftbottom} alt="leftbottom" className="departmentprofile-leftbottom"/>
    </div>
  )
}

export default JavaService