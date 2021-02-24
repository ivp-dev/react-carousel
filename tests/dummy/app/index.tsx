import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useCarousel } from '../../../src/index'

import './index.scss'


const Carousel = () => {
  const [carouselRef] = useCarousel<HTMLDivElement>()

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener('click', () => {
        console.log('test')
      })
    }
  }, [carouselRef.current])

  return <div ref={carouselRef} className="test">Test</div>
}

ReactDOM.render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
  document.getElementById('root')
)
