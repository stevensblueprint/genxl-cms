'use client'

import React, { useState } from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'

import type { Gallery as GalleryProps } from '@/payload-types'

type Props = GalleryProps & {
  className?: string
  enableGutter?: boolean
  disableInnerContainer?: boolean
}

export const Gallery: React.FC<Props> = (props) => {
  const { title, images, className, enableGutter = true, disableInnerContainer } = props

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null && images) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null && images) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  // Helper function to check if media is a video
  const isVideo = (media: any) => {
    return typeof media === 'object' && media?.mimeType?.includes('video')
  }

  return (
    <>
      <div
        className={cn(
          'py-16',
          {
            container: enableGutter,
          },
          className,
        )}
      >
        {/* Gallery Title */}
        {title && (
          <div
            className={cn('mb-12 text-center', {
              container: !disableInnerContainer,
            })}
          >
            <h2 className="text-4xl font-bold text-black">{title}</h2>
          </div>
        )}

        {/* Gallery Grid */}
        <div
          className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6', {
            container: !disableInnerContainer,
          })}
        >
          {images.map((item, index) => {
            if (typeof item.media === 'object' && item.media !== null) {
              const mediaIsVideo = isVideo(item.media)

              // Calculate position in grid (0-7 for first 8 items, then repeats pattern)
              const position = index % 8
              const row = Math.floor(position / 4)
              const col = position % 4

              // Define aspect ratios based on position
              // Row 1: rectangular → squareish → rectangular → squareish
              // Row 2: squareish → rectangular → squareish → rectangular
              let aspectRatioClass = ''
              let alignmentClass = ''
              if (row === 0) {
                // First row - no special alignment needed
                if (col === 0 || col === 2) {
                  aspectRatioClass = 'aspect-[16/9]' // rectangular (landscape) - wider
                } else {
                  aspectRatioClass = 'aspect-[4/3]' // more rectangular than square but not as wide as 16:9
                }
              } else {
                // Second row - align squares up so their bottom aligns with rectangle bottoms
                // Rectangles are 16:9 (height = 56.25% of width), squares are 4:3 (height = 75% of width)
                // To align bottoms: square needs to move up by (75% - 56.25%) = 18.75% of its width
                if (col === 0 || col === 2) {
                  aspectRatioClass = 'aspect-[4/3]' // more rectangular than square but not as wide as 16:9
                  alignmentClass = 'self-end -mt-[18.75%]' // Align to bottom and move up to match rectangle bottoms
                } else {
                  aspectRatioClass = 'aspect-[16/9]' // rectangular (landscape) - wider
                  alignmentClass = 'self-end' // Align to bottom
                }
              }

              return (
                <div
                  key={index}
                  className={cn(
                    'group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 transition-transform duration-300 hover:scale-105',
                    aspectRatioClass,
                    alignmentClass,
                  )}
                  onClick={() => openModal(index)}
                >
                  <div className="relative w-full h-full">
                    {mediaIsVideo ? (
                      // For videos, show a thumbnail/poster image with play button
                      <div className="relative w-full h-full">
                        <video
                          className="w-full h-full object-cover rounded-2xl"
                          muted
                          playsInline
                          preload="metadata"
                        >
                          <source
                            src={
                              typeof item.media === 'object' && item.media?.url
                                ? item.media.url
                                : ''
                            }
                          />
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      // For images, use the Media component as before
                      <>
                        <Media
                          resource={item.media}
                          imgClassName="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20 rounded-2xl" />
                      </>
                    )}
                  </div>
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl">
                      <p className="text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Content */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            {images && images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Media (Image or Video) */}
            <div className="relative">
              {typeof images[selectedImageIndex]?.media === 'object' &&
                images[selectedImageIndex]?.media !== null &&
                (isVideo(images[selectedImageIndex].media) ? (
                  // Video modal with controls
                  <video
                    className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source
                      src={
                        typeof images[selectedImageIndex]?.media === 'object' &&
                        images[selectedImageIndex]?.media?.url
                          ? images[selectedImageIndex].media.url
                          : ''
                      }
                    />
                  </video>
                ) : (
                  // Image modal
                  <Media
                    resource={images[selectedImageIndex].media}
                    imgClassName="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                ))}

              {/* Caption */}
              {images[selectedImageIndex]?.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <p className="text-center text-lg">{images[selectedImageIndex].caption}</p>
                </div>
              )}
            </div>

            {/* Image Counter */}
            {images && images.length > 1 && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
