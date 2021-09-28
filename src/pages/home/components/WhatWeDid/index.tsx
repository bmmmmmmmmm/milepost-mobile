import React, { FC, ReactElement, useRef } from 'react'
import ReactSwipe from 'react-swipe';
import {
  bgblue,
  doc,
  topline,
  whatwedid,
  introduce,
  nameup,
  namemiddle,
  ico,
  show,
  showico,
  lefbutton,
} from './sourse'
import './index.scss'

const WhatWeDid: FC = (): ReactElement =>{

  const reactSwipeEl = useRef<any>(null)

  return(
    <div id="whatwedid" >
      <img src={topline} alt="topline" id="whatwedid-top"/>
      <img src={whatwedid} alt="whatwedid" id="whatwedid-first"/>
      <img src={show} alt="show" id="whatwedid-show"/>
      {/* <div id="whatwedid-project">
        <div id="whatwedid-project-top">
          <div id="whatwedid-project-top-left">
            <img src={ico} alt="ico" />
            <p>项目名称</p>
          </div>
          <div id="whatwedid-project-top-right">
            <img src={doc} alt="doc" />
          </div>
        </div>
        <div id="whatwedid-project-content">
          <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
          <div id="whatwedid-project-content-right">
            <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
            <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" />
          </div>
        </div>
      </div> */}
      <ReactSwipe
        swipeOptions={{ 
          continuous: true,
          auto: 2500
        }}
        ref={ reactSwipeEl }
      >
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={ico} alt="ico" />
              <p>项目名称</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" />
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={ico} alt="ico" />
              <p>项目名称</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" />
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={ico} alt="ico" />
              <p>项目名称</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" />
            </div>
          </div>
        </div>
      </ReactSwipe>
      <img src={lefbutton} alt="lefbutton" id="whatwedid-lefbutton" />
    </div>
  )
}

export default WhatWeDid
