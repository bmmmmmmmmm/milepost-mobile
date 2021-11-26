import React, { FC, ReactElement, useState } from 'react'
import { Photos } from '..'
import{
  bg,
  bulb,
  crown,
  joinus,
  finger,
  shadow,
  paragraph,
  we,
  sbg,
  letter,
  statistic,
} from './source'
import './index.scss'

const WhoAreWe: FC = (): ReactElement => {

  const clientH = document.documentElement.clientHeight;
  const clientW = document.documentElement.clientWidth;

  // // “我们是谁”
  // // 宽度
  // const [tittleWidth, settittleWidth] = useState(17);
  // // 距顶部的距离（不算top）
  // const [tittleTop, settittleTop] = useState(5);
  // // 介绍离“我们是谁”的距离
  // const [paragraphTop, setparagraphTop] = useState(50);


  // “我们是谁”
  // 宽度(灯泡)vw
  const [tittleWidth, settittleWidth] = useState(9);
  // 距顶部的距离（不算top）vh
  const [tittleTop, settittleTop] = useState(35);
  // 合照离“我们是谁”的距离vh
  const [paragraphTop, setparagraphTop] = useState(60);


  const handle=()=>{

    const scrollY = document.documentElement.scrollTop;

    /**
     * 屏幕高：clientH
     * 屏幕宽：clientW
     * 滚动高：scrollY
     * 背景高：clientW * 1.78
     * 轮播照片高：clientW * 0.75
     * TopBar高：clientH * 0.05
     */

    // 合照在最上方
    // 滚动距离小于0.75vw（合照还在视图中）（“我们是谁”仅缩小，位置不变）
    // if(scrollY < clientW * 0.75 && settittleWidth) {
    //   settittleWidth(17 - (7 * scrollY) / (clientW * 0.75))
    //   settittleTop(5 + scrollY * 100 / clientH)
    // } 
    // 
    // else if(((scrollY - clientW * 0.75) * 400 / clientH) < 40 && settittleWidth) {
    //   settittleTop(5 + clientW * 75 / clientH - (scrollY - clientW * 0.75) * 200 / clientH)
    //   setparagraphTop(50 - (scrollY - clientW * 0.75) * 400 / clientH)
    // }

    // 合照在中间
    if(scrollY < clientH * 0.38 && settittleWidth) {
      settittleWidth(9 + (7 * scrollY) / (clientH * 0.38))
    } 
    // 
    if((15 * scrollY / 38) < 60 && settittleWidth) {
      setparagraphTop(60 - 15 * scrollY / 38)
    }
  }

  document.addEventListener("scroll", handle)

  return(
    <div id="whoarewe" >
      <div id="whoarewe-tittle">
        <img id="whoarewe-tittle-bulb" src={bulb} alt="bulb" style={{width: `${tittleWidth}vw`, marginTop: `${tittleTop}vh`}}/>
        <img id="whoarewe-tittle-we" src={we} alt="we" style={{width: `${tittleWidth*3.54}vw`}}/>
      </div>
      <div style={{marginTop: `${paragraphTop}vh`}}>
        {/* <Photos /> */}
        {/* <div id="whoarewe-introduce">
          <img id="whoarewe-introduce-paragraph" src={paragraph} alt="paragraph" />
        </div> */}
        <img id="whoarewe-introduce" src={sbg} alt="paragraph" />
      </div>
      <button type='button' id="whoarewe-joinus">1</button>
      <img id="whoarewe-joinus-shadow" src={shadow} alt="shadow"/>
    </div>
  )
}

export default WhoAreWe
