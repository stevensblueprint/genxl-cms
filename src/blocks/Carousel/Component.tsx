'use client'

import type { CarouselBlock as CarouselBlockType } from '@/payload-types'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './Carousel'
import React from 'react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & CarouselBlockType

export const CarouselBlock: React.FC<Props> = ({ title, description, reviews }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 text-center mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-blue-500 mb-4 sm:mb-7 text-center px-2">
        {description}
      </p>
      <Carousel
        className="w-full h-full mx-auto my-auto py-4 sm:py-6 md:py-8 lg:py-10 relative"
        opts={{
          loop: true,
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          watchDrag: true,
          align: 'center',
        }}
      >
        <CarouselContent className="!ml-0 md:!-ml-4 flex sm:gap-6 md:gap-12 lg:gap-20 w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh]">
          {/* Map through reviews to create multiple carousel items */}
          {reviews?.map((review, index) => (
            <CarouselItem key={index} className="min-w-0 shrink-0 basis-full !pl-0 md:!pl-4">
              {/* Desktop version with gradients */}
              <div className="hidden md:flex gap-10 w-full h-full">
                <div className="bg-gradient-to-l from-blue-500 to-transparent w-1/12 h-full rounded-r-lg flex-shrink-0"></div>
                <div className="flex flex-col items-center justify-center bg-blue-500 flex-1 h-full pt-3 pb-6 sm:pt-4 sm:pb-8 md:pt-4 md:pb-10 rounded-lg px-4 sm:px-6 md:px-8 min-w-0 overflow-hidden">
                  <div className="max-h-full w-full overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent">
                    <h2 className="text-sm sm:text-base md:text-2xl text-center leading-relaxed py-5">
                      {review?.description}
                    </h2>
                    {review?.name && (
                      <p className="text-xs sm:text-sm md:text-xl mt-2 sm:mt-3 text-center">
                        - {review?.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-transparent w-1/12 h-full rounded-l-lg flex-shrink-0"></div>
              </div>
              {/* Mobile version - full width card without gradients */}
              <div className="flex gap-0 md:hidden flex-col items-center text-white justify-center bg-blue-500 w-full h-full pt-3 pb-6 rounded-lg px-4 overflow-hidden">
                <div className="max-h-full w-full px-1">
                  <h2 className="text-lg text-center leading-relaxed p-6">{review?.description}</h2>
                  {review?.name && <p className="text-md mt-2 text-center">- {review?.name}</p>}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Buttons should be siblings of CarouselContent, not children */}
        <CarouselPrevious
          variant="ghost"
          size="lg"
          className="bg-transparent hover:bg-transparent border-none shadow-none -left-3 sm:-left-1 md:-left-2 z-10 text-white sm:text-blue-500 hover:text-white sm:hover:text-blue-700 [&_svg]:!w-8 [&_svg]:!h-8 sm:[&_svg]:!w-12 sm:[&_svg]:!h-12 md:[&_svg]:!w-16 md:[&_svg]:!h-16"
        />
        <CarouselNext
          variant="ghost"
          size="lg"
          className="bg-transparent hover:bg-transparent border-none shadow-none -right-3 sm:-right-1 md:-right-2 z-10 text-white sm:text-blue-500 hover:text-white sm:hover:text-blue-700 [&_svg]:!w-8 [&_svg]:!h-8 sm:[&_svg]:!w-12 sm:[&_svg]:!h-12 md:[&_svg]:!w-16 md:[&_svg]:!h-16"
        />
      </Carousel>
    </div>
  )
}
