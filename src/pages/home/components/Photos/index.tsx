import React, { FC, ReactElement, useRef } from 'react'
import ReactSwipe from 'react-swipe';
// import photos from './photo';
import './index.scss'

/**
 * npm install react swipe-js-iso react-swipe --save
 * npm i --save-dev @types/react-swipe
 */

const Photos: FC = (): ReactElement => {

  // let reactSwipeEl;
  const reactSwipeEl = useRef<any>(null)

  return (
    <div id='photo-box'>
      <ReactSwipe
        id='photo-swiper'
        swipeOptions={{ 
          continuous: true,
          auto: 2500
        }}
        ref={ reactSwipeEl }
      >
        {/* {photos.map(item=>
          <img className='photo-single' src={item} alt='1' key={Math.random()} />
        )} */}
        <div className='photo-single'>合照1</div>
        <div className='photo-single'>合照2</div>
        <div className='photo-single'>合照3</div>
        <div className='photo-single'>合照4</div>
        <div className='photo-single'>合照5</div>
      </ReactSwipe>
    </div>
  )
}

export default Photos
