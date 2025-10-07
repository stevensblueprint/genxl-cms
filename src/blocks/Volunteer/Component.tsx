'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'

import type { Volunteer as VolunteerProps } from '@/payload-types'

type Props = VolunteerProps & {
  className?: string
  enableGutter?: boolean
  disableInnerContainer?: boolean
}

export const Volunteer: React.FC<Props> = (props) => {
  const { title, caption, cards, className, enableGutter = true, disableInnerContainer } = props

  if (!cards || cards.length === 0) return null

  return (
    <div className={cn('w-full py-16', className)}>
      <div className={cn('', { container: enableGutter })}>
        {/* Header */}
        <div className={cn('text-center mb-10', { container: !disableInnerContainer })}>
          {title && <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{title}</h2>}
          {caption && (
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">{caption}</p>
          )}
        </div>

        {/* Cards Grid */}
        <div
          className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[900px] mx-auto', {
            container: !disableInnerContainer,
          })}
        >
          {cards.map((card, i) => (
            <div key={i} className="relative">
              {/* Image */}
              {typeof card.image === 'object' && card.image && (
                <div className="relative rounded-2xl overflow-hidden max-w-[300px] mx-auto">
                  <Media
                    resource={card.image}
                    imgClassName="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              )}

              {/* Floating Card */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[70%] max-w-[280px] bg-white rounded-2xl border border-blue-500 shadow-sm">
                <div className="p-5 text-center">
                  {card.title && (
                    <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                  )}
                  {card.caption && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.caption}</p>
                  )}
                  {card.buttonText && (
                    <a
                      href={card.buttonLink || '#'}
                      className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-2 text-sm font-medium hover:bg-black/90 transition-colors"
                    >
                      {card.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
