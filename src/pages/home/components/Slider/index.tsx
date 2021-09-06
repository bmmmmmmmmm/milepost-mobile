import React, { FC, ReactElement } from 'react'
import { SliderOpts } from '../../Typings'
import Slide from '../Slide'
import photos from './photos'

const opts:SliderOpts[] = []
photos.map((item)=>{
  opts.push({
    src:item
  })
  return item
})

const Slider: FC = (): ReactElement => {
  console.log(opts);
  return(
    <div>
      <Slide opts={opts} />
    </div>
  )
}
export default Slider
