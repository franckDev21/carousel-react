import { useState } from 'react'
import Image1 from './assets/image_1.jpg'
import Image2 from './assets/image_2.jpg'
import Image3 from './assets/image_3.jpg'
import Image4 from './assets/image_4.jpg'
import './App.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function App() {

  return (
    <div className="App">
      <Carousel interval={5000} 
        showStatus={false} 
        showIndicators={false} 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        className='carousel'>

        <div className='carousel__img'>
          <img src={Image1} alt="" />
        </div>
        <div className='carousel__img'>
          <img src={Image2} alt="" />
        </div>
        <div className='carousel__img'>
          <img src={Image3} alt="" />
        </div>
        <div className='carousel__img'>
          <img src={Image4} alt="" />
        </div>

      </Carousel>
    </div>
  )
}

export default App
