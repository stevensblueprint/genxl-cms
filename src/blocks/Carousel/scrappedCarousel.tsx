import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Carousel as CarouselType } from '@/payload-types'
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from './Carousel'

export async function CarouselComponent() {
  const carouselData: CarouselType = await getCachedGlobal('carousel', 1)()

  const reviews = carouselData?.reviews || []

  return (
    <div className="mx-auto px-16 w-4/5 pb-20 pt-10 h-1/3">
      <h2 className="text-4xl font-bold pt-10 text-center">{carouselData?.title}</h2>
      <Carousel
        className="w-full h-full mx-auto my-auto py-10"
        opts={{
          loop: true,
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
          watchDrag: true,
        }}
      >
        {reviews.map((review) => (
          <CarouselItem
            key={review.id}
            className="text-xl flex items-center justify-center min-h-32 basis-full pl-0 bg-blue-500 py-10 w-full"
          >
            <CarouselPrevious
              variant="ghost"
              size="lg"
              className="bg-transparent hover:bg-transparent border-none shadow-none -left-8 z-10 text-white hover:text-gray-700 [&_svg]:!w-16 [&_svg]:!h-16"
            />
            <CarouselContent className="max-w-6xl mx-auto">
              <div className="w-full max-w-3xl mx-auto px-4">
                <div>{`"${review.description}"`}</div>
                <br />
                <div>{` - ${review.name}`}</div>
              </div>
            </CarouselContent>
            <CarouselNext
              variant="ghost"
              size="lg"
              className="bg-transparent hover:bg-transparent border-none shadow-none -right-8 z-10 text-white hover:text-gray-700 [&_svg]:!w-16 [&_svg]:!h-16"
            />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}
