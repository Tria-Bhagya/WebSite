import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/TRIA_WEB_PAGE_page-0003.jpg'
import img2 from './images/TRIA_WEB_PAGE_page-0006.jpg'
import img3 from './images/TRIA_WEB_PAGE_page-0008.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div className="carousel-container">
    <Carousel>
    <Carousel.Item>
      <img 
        className="d-block w-100 carousel-img"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Tria</h3>
        <p>part dress for the beech</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100 carousel-img"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Tria</h3>
        <p>Rainy season </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100 carousel-img"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
      <h3>Tria</h3>
        <p>Panda</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage