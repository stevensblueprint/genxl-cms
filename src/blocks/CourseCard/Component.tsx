'use client'

import React, { useState } from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type Props = {
  title: string
  image?: MediaDoc | string | null
  gradientColor?: string | null
  buttonHref?: string | null
}

export const CourseCardBlock: React.FC<Props> = ({ title, image, buttonHref }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Gray by default, purple on hover
  const defaultColor = '#d1d5db'
  const hoverColor = '#7c83db'
  const color = isHovered ? hoverColor : defaultColor
  const textColor = isHovered ? 'black' : 'white'

  const CardContent = (
    <article
      className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-[1/1] w-full group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0 w-full h-full">
          {typeof image === 'object' ? (
            <Media
              resource={image as MediaDoc}
              imgClassName="w-full h-full object-cover"
              className="w-full h-full"
              fill
            />
          ) : (
            <img src={image} alt="" className="w-full h-full object-cover" />
          )}
        </div>
      )}

      {/* Color gradient overlay - purple at bottom, transparent at top */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `linear-gradient(to top, ${color} 0%, ${color}80 40%, transparent 80%)`,
        }}
      />

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3
          className={`text-3xl font-semibold tracking-tight text-right text-${textColor} drop-shadow-md`}
        >
          {title}
        </h3>
      </div>
    </article>
  )

  if (buttonHref) {
    return (
      <a href={buttonHref} className="block w-full">
        {CardContent}
      </a>
    )
  }

  return CardContent
}

export default CourseCardBlock
