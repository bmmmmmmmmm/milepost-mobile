import React from 'react'
import Main from './pages/Main'
import { NotMobile } from './pages';

const isMobile = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = false;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

function App() {
  return isMobile() ? <Main /> : <NotMobile />
}

export default App
