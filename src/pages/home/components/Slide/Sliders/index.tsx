import React, { FC, ReactElement } from 'react'
import { SliderOpts } from '../../../Typings'
import './index.scss'


const Sliders: FC<SliderOpts> = ({
  link,
  src
}): ReactElement => {

  const aStyles = {
    width: `${document.documentElement.clientWidth}px`
  }
  const picStyles = {
    // backgroundImage: "url(" + src + ")"
    backgroundImage: `url(${src})`
  }

  return(
    <a href={link} className="slide-a" style={aStyles}>
      <div className="slide-li" style={picStyles} />
    </a>
  )
}

export default Sliders
