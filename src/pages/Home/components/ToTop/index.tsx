import React, { FC, ReactElement, useState } from 'react'
import './index.scss'

const ToTop: FC= (): ReactElement => {
  const [show, setshow] = useState(true)
  document.addEventListener('scroll',()=>{
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    const clientH = document.documentElement.clientHeight;
    setshow(scrollTop > 2/3*clientH)
  })
  return(
    <div id="totop" className={show ? 'totop-visible' : 'totop-hidden'} onClick={()=>document.body.scrollTop = document.documentElement.scrollTop = 0}>
      {/* <svg viewBox="0 0 1024 1024"><path d="M551.1168 192.9728h280.7808a32 32 0 1 0 0-64H195.1232a32 32 0 0 0 0 64h277.76L171.7248 494.08a32 32 0 0 0 45.2608 45.2608L480 276.48v622.4896a32 32 0 1 0 64 0V276.48l263.0144 262.9632a32 32 0 1 0 45.2608-45.2608z" fill="#ffffff"></path></svg> */}
      <svg viewBox="0 0 1024 1024"><path d="M862.464 161.536l-700.928 0c-30.976 0-56.096-25.12-56.096-56.096l0-28.064c0-30.944 25.12-56.064 56.096-56.064l700.896 0c30.976 0 56.096 25.12 56.096 56.064l0 28.032c0 31.008-25.12 56.096-56.096 56.096l0 0 0 0zM138.528 531.68c0 0 306.816-245.792 309.888-248.864 14.304-13.888 31.904-22.368 49.952-25.312 1.76-0.32 3.488-0.608 5.248-0.8 2.816-0.32 5.6-0.352 8.384-0.352 2.816-0.032 5.568 0.032 8.352 0.352 1.792 0.192 3.552 0.48 5.28 0.8 18.048 2.976 35.616 11.424 49.92 25.312 3.104 3.008 309.856 248.864 309.856 248.864 33.152 32.224 30.304 65.44-2.784 97.696s-77.376 3.04-110.496-29.216l-190.08-150.432 0 496.864c0 31.008-25.088 56.096-56.096 56.096l-28 0c-30.976 0-56.096-25.12-56.096-56.096l0-496.864-190.048 150.432c-33.088 32.288-77.408 61.536-110.496 29.216-33.056-32.256-35.872-65.44-2.816-97.696l0 0 0 0z" p-id="2615" fill="#ffffff"></path></svg>
    </div>
  )
}

export default ToTop
