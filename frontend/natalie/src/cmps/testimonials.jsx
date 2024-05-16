import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel'
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item'
import { testimonials } from '../constants/hompage-constants'
import { useState } from 'react'

export function Testimonials() {
  console.log('testimonials: ', testimonials)
  const slidesPerPage = 1


  return (
    <>

      <h2> לקוחות משתפים</h2>
      <SlCarousel
        dir="rtl"
        pagination
        navigation
        loop
        mouse-dragging
        slidesPerPage={slidesPerPage}
        slidesPerMove={1}

        className="carousel scroll-hint"
        style={{
          '--scroll-hint': '10%',
        }}
      >
        {testimonials.map((tes, idx) => {
          return (
            <SlCarouselItem key={idx} className='carousel-item'>
              <article className="carousel-item-container">
                <img
                  alt={tes.videoAltTest}
                  src={tes.videoUrl}
                />
                <h3>{`${tes.name}, ${tes.age}`} </h3>
              </article>
            </SlCarouselItem>
          )

        })}
      </SlCarousel >
    </>

  )
}
