import React, { FC, ReactElement, useRef } from 'react'
import {
  bg,
  source1,
  source2,
  source3,
  source4,
  source5,
  source6,
  source7,
  source8,
  lefttop,
  rightbottom,
  name,
} from './sourse'
import './index.scss'
import '../index.scss'

const WebFrontEnd: FC = (): ReactElement =>  {
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
          <p>通过html、css、js前端三剑客以及react、vue等框架，解决网页的交互和用户体验，深入网页和浏览器的研究，探究浏览器的原理及实现。同时制作精美的小程序，完善小程序的交互过程等问题，致力于用最精良的技术，为用户带来最良好易用的网页的体验。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="souese1" id="webfrontend-img-source1"/>
        <img src={source2} alt="souese2" id="webfrontend-img-source2"/>
        <img src={source3} alt="souese3" id="webfrontend-img-source3"/>
        <img src={source4} alt="souese4" id="webfrontend-img-source4"/>
        <img src={source5} alt="souese5" id="webfrontend-img-source5"/>
        <img src={source6} alt="souese6" id="webfrontend-img-source6"/>
        <img src={source7} alt="souese7" id="webfrontend-img-source7"/>
        <img src={source8} alt="souese8" id="webfrontend-img-source8"/>
      </div>
      <img src={rightbottom} alt="rightbottom" className="departmentprofile-rightbottom"/>
    </div>
  )
}

export default WebFrontEnd