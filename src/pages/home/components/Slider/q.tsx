import React, { FC, ReactElement, useEffect, useRef, useState } from 'react'
import photos from './photos';
import './index.scss'

const Slider: FC = (): ReactElement => {

  const showRef:any = useRef(null);
  const rotation:any = useRef(null);

  const start = (e: any)=>{
    console.log('start', showRef.current.style.left);
  }

  const move = (e: any)=>{
    console.log('move', showRef.current?showRef.current.style.left:0);
  }

  const end = (e: any)=>{
    console.log('end', showRef.current?showRef.current.style.left:0);
  }

  return (
    <div>
      <div id="slider-box">
        <div id="slider-show" ref={showRef} onTouchStart={start} onTouchMove={move} onTouchEnd={end}>
          {photos.map((item, index)=><img src={item} alt={index.toString()} key={Math.random()}/>)}
        </div>
      </div>
      {showRef.current?showRef.current.style.left:0}
    </div>
  )
}

export default Slider
