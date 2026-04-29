'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type MeatballMenuItem = {
  icon?: MediaDoc | string | null
  caption1?: string | null
  caption2?: string | null
  subcaption?: string | null
}

type Props = {
  title?: string | null
  subtitle?: string | null
  backgroundColor?: string | null
  items?: MeatballMenuItem[] | null
  fontColor?: string | null
  fontSize?: number | null
  fontWeight?: number | null
}

export const MeatballMenuBlock: React.FC<Props> = ({
  title,
  subtitle,
  backgroundColor,
  items,
  fontColor = '#000000',
  fontSize = 16,
  fontWeight = 400,
}) => {
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
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                {item.icon && (
                  <div className="mb-4 w-40 h-40 md:w-40 md:h-40 flex items-center justify-center text-center">
                    {typeof item.icon === 'object' ? (
                      <Media
                        resource={item.icon as MediaDoc}
                        imgClassName="w-full h-full object-contain"
                      />
                    ) : (
                      <img
                        src={item.icon as string}
                        alt={item.caption1 || ''}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                )}

                {/* Caption */}
                {item.caption1 && (
                  <h3
                    style={{
                      color: fontColor || '#000000',
                      fontWeight: Math.max(fontWeight || 400, 700),
                      fontSize: fontSize ? fontSize + 6 : 28,
                      padding: '4px',
                    }}
                    className="mb-1 text-center leading-none"
                  >
                    {item.caption1}
                  </h3>
                )}

                {/* Caption 2*/}
                {item.caption2 && (
                  <h3
                    style={{
                      color: fontColor || '#000000',
                      fontWeight: Math.max(fontWeight || 400, 700),
                      fontSize: fontSize ? fontSize + 6 : 28,
                      padding: '4px',
                    }}
                    className="mb-1 text-center leading-none"
                  >
                    {item.caption2}
                  </h3>
                )}

                {/* Subcaption */}
                {item.subcaption && (
                  <p
                    style={{
                      color: fontColor || '#000000',
                      fontWeight: 400,
                      fontSize: fontSize ? Math.max(fontSize - 1, 18) : 18,
                      paddingTop: '4px',
                    }}
                    className="text-center w-full max-w-[360px] mx-auto leading-tight"
                  >
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
