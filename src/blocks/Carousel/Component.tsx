'use client'

import type { CarouselBlock as CarouselBlockType } from '@/payload-types'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './Carousel'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & CarouselBlockType

export const CarouselBlock: React.FC<Props> = ({ title, description, reviews }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-blue-500">{title}</h2>
      <p className="text-lg text-blue-500 mb-7">{description}</p>
      <Carousel
        className="w-full h-full mx-auto my-auto py-10 relative"
        opts={{
          loop: true,
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          watchDrag: true,
        }}
      >
        <CarouselContent className="flex gap-20 w-full h-[60vh]">
          {/* Map through reviews to create multiple carousel items */}
          {reviews?.map((review, index) => (
            <CarouselItem key={index} className="flex gap-20 w-full h-full">
              <div className="bg-gradient-to-l from-blue-500 to-transparent w-1/12 ml-2 rounded-lg"></div>
              <div className="flex flex-col items-center justify-center bg-blue-500 w-full mx-auto h-full pt-4 pb-10 rounded-lg">
                <h2 className="text-md">{review?.description}</h2>
                {review?.name && <p className="text-sm mt-2">- {review.name}</p>}
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-transparent w-1/12 mr-2 rounded-lg"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Buttons should be siblings of CarouselContent, not children */}
        <CarouselPrevious
          variant="ghost"
          size="lg"
          className="bg-transparent hover:bg-transparent border-none shadow-none left-4 z-10 text-blue-500 hover:text-blue-700 [&_svg]:!w-16 [&_svg]:!h-16"
        />
        <CarouselNext
          variant="ghost"
          size="lg"
          className="bg-transparent hover:bg-transparent border-none shadow-none right-4 z-10 text-blue-500 hover:text-blue-700 [&_svg]:!w-16 [&_svg]:!h-16"
        />
      </Carousel>
    </div>
  )
}
