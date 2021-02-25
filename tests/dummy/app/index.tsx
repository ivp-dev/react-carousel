import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel } from '../../../src'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Carousel>
      <Carousel.Item>
        <span>Test 1</span>
      </Carousel.Item>
      <Carousel.Item>
        Test 2
      </Carousel.Item>
    </Carousel>
  </React.StrictMode>,
  document.getElementById('root')
)
