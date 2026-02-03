'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type MeatballMenuItem = {
  icon?: MediaDoc | string | null
  caption?: string | null
  subcaption?: string | null
}

type Props = {
  title?: string | null
  subtitle?: string | null
  backgroundColor?: string | null
  items?: MeatballMenuItem[] | null
}

export const MeatballMenuBlock: React.FC<Props> = ({ title, subtitle, backgroundColor, items }) => {
  const bgStyle = backgroundColor ? { backgroundColor } : undefined

  return (
    <section className="!-mt-16 py-16" style={bgStyle}>
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        {title && (
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-black">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-center text-base md:text-lg mb-12 text-black">{subtitle}</p>
        )}

        {/* Three Column Feature Section */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon */}
                {item.icon && (
                  <div className="mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    {typeof item.icon === 'object' ? (
                      <Media
                        resource={item.icon as MediaDoc}
                        imgClassName="w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={item.icon as string}
                        alt={item.caption || ''}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                )}

                {/* Caption */}
                {item.caption && (
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-center text-black">
                    {item.caption}
                  </h3>
                )}

                {/* Subcaption */}
                {item.subcaption && (
                  <p className="text-sm md:text-base text-left w-full text-black">
                    {item.subcaption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MeatballMenuBlock
