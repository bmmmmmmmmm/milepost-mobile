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
  logo
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
            <img src={logo} alt="ico" />
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
              <img src={logo} alt="ico" />
              <p>校园说</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" /> */}
              {/* <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>一个面向大学生的知识共享社交平台。平台包括各大院校硕博生、各大企业资深管理人员，汇聚各路精英人才。通过社交行为挖掘校园人才，沉淀人才数据，直面行业精英，与优秀企业合作助推直聘。通过此平台，增加了150%的精英人才数据，提升了120%的招聘转化率。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>校当网</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>一个面向校园的二手物品交易网站。立足区域化和同城化，主要服务于有二手交易倾向的学生群体，免费为用户提供二手物品交易信息平台。让用户更加方便的选购目标商品、卖出闲置物品，实现供需双方直接对接。此网站用户规模100万+，提升了50%的资源回收利用率。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>也去小程序</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>这是一款为校园提供拼车服务的微信小程序。小程序的核心主要是校园新生，通过地图定位功能以及云端应用模式，提供基础拼车与校园导航服务，简化用户路径去享受更便捷的服务。此小程序将用户的行程效率提升了150%，减少了50%的资源投入。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>仿真辅助系统</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>这是一个用于企业运营的模拟仿真实验系统。通过虚拟现实、虚拟情景互动等信息化手段，帮助学生模拟CEO，深入接触到企业运营，提供完整产品链，帮助高校教师提升教学效果，助力教育产业的升级。此系统100+虚拟仿真项目，落地多个模拟课堂，提高了50%的实操效率。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>经管实验教学系统</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>这是一个围绕实验教学活动的服务系统。因实验室教学、管理中的实际需求而产生，从专业课程建设的角度，为学生积累、共享和展示电子教学资源同时进行电子化的网络教学管理。此系统提高了实验室200%管理效率，助力高效完成经管课程要求。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>经管毕业论文管理系统</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>这是一个毕业生论文管理工作的服务系统。为保证毕业论文数据的完整性和准确性，通过此系统搭建完整数据库，完善数据管理。此系统操作简便、数据完整性好、维护方便，将数据的丢失、数据的翼余等致命的损失降低到0.1%，为毕业生论文管理做出了突出贡献。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>德勤石油设备网站</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>这是一个实时管理与历史存储德勤中石油数据的网站。该项目基于物联网技术，实现采油井相关数据的采集，建立中石油数据库，辅助用户进行中石油数据相关分析。此系统为用户搭建稳定可靠，性能卓越的数据查询平台，用户规模100万+。</p>
            </div>
          </div>
        </div>
        <div id="whatwedid-project">
          <div id="whatwedid-project-top">
            <div id="whatwedid-project-top-left">
              <img src={logo} alt="ico" />
              <p>智慧司法系统</p>
            </div>
            <div id="whatwedid-project-top-right">
              <img src={doc} alt="doc" />
            </div>
          </div>
          <div id="whatwedid-project-content">
            <img src={showico} alt="showico" id="whatwedid-project-content-showico" />
            <div id="whatwedid-project-content-right">
              {/* <img src={namemiddle} alt="namemiddle" id="whatwedid-project-content-right-namemiddle" />
              <img src={introduce} alt="introduce" id="whatwedid-project-content-right-introduce" /> */}
              <p>一个共享司法数据资源并实现复用的服务系统。系统依托现代人工智能，以高度信息化方式在现有应用系统建设司法资源库，服务于司法资源缺乏用户。此系统提供快速精准的数据汇聚服务，将工作人员工作效率提升50%，资源利用率提升80%。</p>
            </div>
          </div>
        </div>
      </ReactSwipe>
      <img src={lefbutton} alt="lefbutton" id="whatwedid-lefbutton" />
    </div>
  )
}

export default WhatWeDid
