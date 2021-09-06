import React, { FC, ReactElement, useState, useRef, useEffect, useCallback } from 'react'
import Sliders from './Sliders'
import { SliderOpts } from '../../Typings'
import './index.scss'

interface Iprops {
  opts: SliderOpts[]
}

const Slide: FC<Iprops> = ({
  opts
}): ReactElement => {

  const [baseWidth, setbaseWidth] = useState<number>(document.documentElement.clientWidth)
  // const [startX, setstartX] = useState<number>(0);
  // const [curX, setcurX] = useState<number>(0);
  // const [moveX, setmoveX] = useState<number>(0);
  // const [time, settime] = useState<number>(0);
  // const [distance, setdistance] = useState<number>(0);
  const [swiper, setswiper] = useState<number>(30);
  const [index, setindex] = useState<number>(0);
  const [length, setlength] = useState<number>(opts.length);
  const [continuous, setcontinuous] = useState<boolean>(true);
  const [autoSlide, setautoSlide] = useState<boolean>(true);
  const [slideSpeed, setslideSpeed] = useState<number>(2000);

  // const baseWidth = useRef<any>(document.documentElement.clientWidth).current
  let startX = useRef<any>(0).current
  let curX = useRef<any>(0).current
  let moveX = useRef<any>(0).current
  let time = useRef<any>(0).current
  const distance = useRef<any>(0)
  // const swiper = useRef<any>(30).current
  // const index = useRef<number>(0)
  // const length = useRef<any>(opts.length).current
  // const continuous = useRef<any>(true).current
  // const autoSlide = useRef<any>(true).current
  // const slideSpeed = useRef<any>(2000).current


  /**
   * baseWidth: 屏幕宽度
	 * startX: 点击时的X坐标
	 * curX: 滑动时的实时X坐标
	 * moveX: 滑动的距离 (curX - startX) (右为正)
	 * time: 
	 * distance: 整体移动距离 (右为正)
	 * swiper: 滑动滚动触发距离
	 * index: 图片序号
	 * length: 图片数量
	 * continuous: /是否循环滚动
	 * autoSlide: 
	 * slideSpeed: 
   */

  const SlideInter:any = useRef(null)

  const touchStart = (e:any)=>{
    // settime(0);
    time = 0
    // setstartX(e.touches[0].pageX)
    startX = e.touches[0].pageX
    console.log('@@@',e.touches[0].pageX);
  }

  const touchMove = (e:any)=>{
		// e.preventDefault()
    if(autoSlide) stopSlideFun()

    const ccurX = e.touches[0].pageX
		const mmoveX = ccurX - startX
		const ddistance = -(index * baseWidth - mmoveX)

    // setcurX(ccurX)
    curX = ccurX
    // setmoveX(mmoveX)
    moveX = mmoveX
    // settime(0)
    time = 0
    // setdistance(ddistance)
    distance.current = ddistance

    console.log('move');
    
  }

  const touchEnd = (e:any)=>{
    if(Math.abs(moveX) <= swiper) {
			slideFun('', 0.5)
		} else if(moveX > swiper) {
      slideFun('prev', 0.5)
    } else if(Math.abs(moveX) > swiper) {
      slideFun('next', 0.5)
    }
    // setmoveX(0)
    moveX = 0
    console.log(2);
    
  }

  const slideFun = (go:string, time_:number)=>{
    let indexx = index
    indexx = go==='prev' ? indexx-1 : go==='next' ? indexx+1 : indexx

    // 是否循环滚动
    if(continuous){
      if(indexx > length){
        scrollFun(indexx, time_)
        // 返回第一个
        indexx = 1
        setTimeout(() => {
          scrollFun(indexx, 0)
          autoSlideFun()
          setindex(indexx)
          // index.current = indexx
        }, 500);
      } else if(indexx < 1){
        scrollFun(indexx, time_)
        // 返回最后一个
        indexx = length
        setTimeout(() => {
          scrollFun(indexx, 0)
          autoSlideFun()
          setindex(indexx)
          // index.current = indexx
        }, 500)
      } else{
        scrollFun(indexx, time_)
        setindex(indexx)
        // index.current = indexx
      }
    } else{
      if(indexx >= length) {
        indexx = 0;
      } else if(indexx < 0) {
        indexx = length - 1;
      }
      scrollFun(indexx, time_)
      setindex(indexx)
      // index.current = indexx
    }
  }

  const scrollFun = (index_:number, time_:number)=>{
    // settime(time_)
    time = time_
    // setdistance(-(index_ * baseWidth))
    distance.current = -(index_ * baseWidth)
  }

  const autoSlideFun = ()=>{
    if(autoSlide) {
      stopSlideFun()
      SlideInter.current = setInterval(() => {
        slideFun('next', 0.5)
      }, slideSpeed)
    }
  }

  const stopSlideFun = ()=>{
		clearInterval(SlideInter.current)
	}

  useEffect(() => {
  // 循环滚动 index+1
    if(continuous) {
      const newIndex = index + 1
      setindex(newIndex)
      // index.current = newIndex
      // setdistance(-(newIndex * baseWidth))
      distance.current = -(newIndex * baseWidth)
    }
    autoSlideFun(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const slideStyle = {
    // width: (document.documentElement.clientWidth * (opts.length + 2)) + "px",
    // WebkitTransform: 'translate3d(' + distance + "px,0,0)",
    // transform: 'translate3d(' + distance + "px,0,0)",
    // WebkitTranstion: "all " + time + "s",
    // transition: "all " +  + "s"
    width: `${(document.documentElement.clientWidth * (opts.length + 2))}px`,
    WebkitTransform: `translate3d(${distance}px,0,0)`,
    transform: `translate3d(${distance}px,0,0)`,
    WebkitTranstion: `all${time}s`,
    transition: `all${time}s`
  }

  const sliders = opts.map((item) =><Sliders link={item.link} src={item.src} key={Math.random()} />)

  return(
    // <div onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
    //   {opts.map((item, index_)=>
    //     <img src={item.src} alt={index_.toString()} key={Math.random()} style={{width: '200vw'}}/>
    //   )}
    // </div>
    <div className="slide-wrap">
      <div className="slide-ul" style={slideStyle} onTouchStart={e=>touchStart(e)} onTouchMove={e=>touchMove(e)} onTouchEnd={e=>touchEnd(e)} onTransitionEnd={()=>autoSlideFun()}>
        {continuous ? <Sliders link={opts[opts.length-1].link} src={opts[opts.length-1].src} /> : ""}
        {sliders} 
        {continuous ? <Sliders link={opts[0].link} src={opts[0].src} /> : ""}
      </div>
      {/* <div className="dots-wrap">
        {dots}
      </div> */}
    </div>
  )
}

export default Slide
