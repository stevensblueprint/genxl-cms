'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  heading?: string | null
  image?: MediaDoc | string | null
}

export const TwoColumnHeroBlock: React.FC<Props> = ({ heading = 'Volunteer', image }) => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        {image ? (
          typeof image === 'object' ? (
            <Media
              resource={image as MediaDoc}
              imgClassName="w-full h-[260px] md:h-[420px] object-cover"
            />
          ) : (
            <img
              src={image as string}
              className="w-full h-[260px] md:h-[420px] object-cover"
              alt={heading || 'Hero'}
            />
          )
        ) : (
          <div className="w-full h-[260px] md:h-[420px] bg-neutral-800" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            {heading && (
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                {heading}
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnHeroBlock
