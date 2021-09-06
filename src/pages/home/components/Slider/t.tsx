import React, { FC, ReactElement, useEffect, useRef, useState } from 'react'
import photos from './photos';
import './index.scss'

const Slider: FC = (): ReactElement => {

  const showRef:any = useRef(null);
  const rotation:any = useRef(null)

  // const [left, setleft] = useState(0)
  // if(left===-700) setleft(-100)
  // else if(left===0) setleft(-600)

  const run = ()=>{
    t-=100;
    if(t===-700) t=-100
    else if(t===0) t=-600
    showRef.current.style.left = `${t}vw`
    console.log(t);
    
    // setleft(t)
    // console.log(t); 
  }
  // useEffect(() => {
  let t = 0
  rotation.current = setInterval(run, 2000)
  // });

  let showLeft:number
  let newLeft:number
  let startX:number
  let moveX:number
  let newX:number

  /**
   * showLeft: show的Left值（点击时）
   * newLeft: 滑动之后show的left值
   * startX: 点击屏幕时的X轴坐标（相对屏幕）
   * moveX: 滑动时的坐标（相对屏幕）
   * newX: 滑动的距离
   */

  const start = (e: any)=>{
    showLeft = Number.parseInt(showRef.current.style.left,10)
    startX = e.changedTouches[0].clientX
    clearInterval(rotation.current)
    // console.log('@@@',startX);
  }

  const move = (e: any)=>{
    moveX = e.changedTouches[0].clientX
    newX = moveX - startX
    // console.log('@@@',newX);
    newLeft = showLeft + newX
    console.log('@@@',newLeft);
    // showRef.current.style.left = `${newLeft}vw`
  }

  const end = (e: any)=>{
    // console.log('@@@',Math.round(newLeft/100));
    // console.log('@@@',newLeft/100);
    // console.log(
    //   'showLeft:',showLeft,
    //   'newLeft:',newLeft,
    //   'startX:',startX,
    //   'moveX:',moveX,
    //   'newX:',newX
    // );

    // t = newLeft.
    rotation.current = setInterval(run, 2000)
    // if(newX<0){
    //   t-=100
    //   showRef.current.style.left = `${t}vw`
    // }else if(newX>0){
    //   t+=100
    //   showRef.current.style.left = `${t}vw`
    // }

    // setleft(-200)
    // console.log('end');
    
  }

  return (
    <div>
      <div id="slider-box">
        <div id="slider-show" ref={showRef} onTouchStart={start} onTouchMove={move} onTouchEnd={end}>
          {photos.map((item, index)=><img src={item} alt={index.toString()} key={Math.random()}/>)}
        </div>
      </div>
      {/* {showRef.current.style.left} */}
    </div>
  )
}

export default Slider
