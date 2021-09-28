import React, { FC, ReactElement, useRef } from 'react'
import {
  bg,
  source1,
  source2,
  source3,
  source4,
  source5,
  lefttop,
  rightbottom,
  name,
} from './sourse'
import './index.scss'
import '../index.scss'

const ProductOperation: FC = (): ReactElement =>  {
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
          <p>通过专业的商务市场营销能力、丰富的产品项目研发管理经验、数据分析能力，解决用户与技术之间的沟通问题，为用户解决了他们的需求，给产品创造社会价值。</p>
        </div>
      </div>
      <div className="departmentprofile-img" ref={bbg}>
        <img src={bg} alt="bg" className="departmentprofile-img-bg"/>
        <img src={source1} alt="source1" id="productoperation-img-source1"/>
        <img src={source2} alt="source2" id="productoperation-img-source2"/>
        <img src={source3} alt="source3" id="productoperation-img-source3"/>
        <img src={source4} alt="source4" id="productoperation-img-source4"/>
        <img src={source5} alt="source5" id="productoperation-img-source5"/>
      </div>
      <img src={rightbottom} alt="rightbottom" className="departmentprofile-rightbottom"/>
    </div>
  )
}

export default ProductOperation
