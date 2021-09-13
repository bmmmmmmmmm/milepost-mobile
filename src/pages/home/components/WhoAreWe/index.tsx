import React, { FC, ReactElement, useState } from 'react'
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

  const [tittleWidth, settittleWidth] = useState(17);
  const [tittleTop, settittleTop] = useState(5);
  const [paragraphTop, setparagraphTop] = useState(50);

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

    if(scrollY < clientW * 0.75 && settittleWidth) {
      settittleWidth(17 - (7 * scrollY) / (clientW * 0.75))
      settittleTop(5 + scrollY * 100 / clientH)
    } else if(((scrollY - clientW * 0.75) * 400 / clientH) < 40 && settittleWidth) {
      settittleTop(5 + clientW * 75 / clientH - (scrollY - clientW * 0.75) * 200 / clientH)
      setparagraphTop(50 - (scrollY - clientW * 0.75) * 400 / clientH)
    }
  }

  document.addEventListener("scroll", handle)

  return(
    <div id="whoarewe" >
      <div id="whoarewe-tittle">
        <img id="whoarewe-tittle-bulb" src={bulb} alt="bulb" style={{width: `${tittleWidth}vw`, marginTop: `${tittleTop}vh`}}/>
        <img id="whoarewe-tittle-we" src={we} alt="we" style={{width: `${tittleWidth*4}vw`}}/>
      </div>
      <div id="whoarewe-introduce" style={{marginTop: `${paragraphTop}vh`}}>
        <img id="whoarewe-introduce-paragraph" src={paragraph} alt="paragraph" />
      </div>
      <button type='button' id="whoarewe-joinus">1</button>
      <img id="whoarewe-joinus-shadow" src={shadow} alt="shadow"/>
    </div>
  )
}

export default WhoAreWe
